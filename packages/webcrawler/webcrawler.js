// Write your package code here!
if (Meteor.isServer) {
    Meteor.methods({
        WS_Lazada_getProductByUrl: function (url, hasSock) {
            try {
                check(url, String);
                var hasSock = hasSock || true;
                this.unblock();
                var URL = Npm.require('url');
                var rs = Async.runSync(function (done) {
                    var options = URL.parse(url);
                    if (hasSock) {
                        options.socksPort = 9050;
                    }
                    var req = shttp.get(options, function (res) {
                        if (res.statusCode === 200) {
                            var res_data = '';
                            res.on('data', function (chunk) {
                                res_data += chunk;
                            });

                            res.on('end', function () {
                                var spider = cheerio.load(res_data);

                                var adobeData = s(spider('body').find('script').first().text()).strLeftBack(';').strRightBack('=').value().trim(),
                                    adobeData = JSON.parse(adobeData);
                                var categories = _.map(adobeData.page.categories, function (c) {
                                    return c.categoryName
                                });
                                var RootURL = process.env.CLUSTER_BALANCER_URL || process.env.ROOT_URL,
                                    priceDisplay = Math.floor((adobeData.pdt_price / 100) * 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ' + adobeData.pdt_currency;
                                var product = {
                                    branch: adobeData.pdt_brand || adobeData.branch || '',
                                    categories: adobeData.category || adobeData.pdt_category || categories,
                                    productId: adobeData.pdt_sku || adobeData.pdt_simplesku,
                                    title: adobeData.pdt_name,
                                    thumbnail: adobeData.pdt_photo,
                                    price: adobeData.pdt_price,
                                    priceDisplay: priceDisplay,
                                    currency: adobeData.pdt_currency,
                                    url: adobeData.pdt_url,
                                    hostname: adobeData.hostname,
                                    fromServer: RootURL
                                }
                                done(null, product);
                            })
                        }
                    });

                    req.on('error', function (err) {
                        done(err, null);
                    });

                    req.end();
                });

                return rs.result;
            } catch (ex) {
                console.error('Error WS_Lazada_getProductByUrl', ex);
            }
        },
        TestMyIp: function () {
            var rs = Async.runSync(function (done) {
                var URL = Npm.require('url'),
                    options = URL.parse('https://www.google.com'),
                    headers = {
                        "User-Agent" : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36'
                    }
                options.socksPort = 9050;
                options.headers = headers;
                options.rejectUnauthorized = true;
                var req = shttps.get(options, function (res) {
                    console.log(res.statusCode);
                    res.setEncoding('utf8');
                    //if(res.statusCode !== 200) done(null, JSON.stringify(res));
                    var res_data = '';

                    res.on('readable', function() {
                        console.log(res.read()); // Log response to console.
                    });

                    res.on('data', function (chunk) {
                        res_data += chunk;
                    });

                    res.on('end', function () {
                        var spider = cheerio.load(res_data);
                        console.log(res_data);
                        done(null, spider('body').find('table').html())
                    })
                });

                //console.log(req)
                req.on('error', function (err) {
                    console.log(err);
                    done(err, null);
                });

                req.once('socket', function(socket) {
                    socket.once('connect', function() {
                        console.log('request start time:', new Date());
                    });
                });
                req.end();

                req.end();
            })
            return rs.result;
        },

        TestHttps : function(url){
            try{
                this.unblock();
                var constants = Npm.require('constants');
                var Agent = new socks.Agent({
                    socksHost: 'localhost',
                    socksPort: 9050
                });
                var options = {
                    url : url,
                    headers : {
                        "User-Agent" : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36'
                    },
                    strictSSL: false, // allow us to use our self-signed cert for testing
                    rejectUnauthorized: false,
                    agentClass: Agent.getClass,
                    agentOptions: {
                        socksHost: Agent.socksHost,
                        socksPort: Agent.socksPort,
                        keepAlive : true
                    },
                    secureProtocol: 'SSLv3_method'
                }

                request(options, function(err, res){
                    if(err) console.log(err);
                    console.log(res);
                })

            }catch(ex){
                console.log(ex)
            }
        }
    })

    Meteor.startup(function () {
        /*Cue.maxTasksAtOnce = 10;
         Cue.maxTaskTries = 3;
         Cue.maxTime = 1000 * 60 * 30;
         var jobOptions = {
         retryOnError: true,
         maxMs: 1000 * 60 * 10
         }
         Cue.dropTasks();

         Cue.addJob('updateProductPrice', jobOptions, function (task, done) {
         var product = task.data.product,
         oldPrice = PricesHistory.findOne({pId : product._id }, {sort : {updatedAt : -1}});
         console.log('doing ' + task.jobName + ' of product: '+product.title);
         var newPrice = Meteor.call('WS_Lazada_getProductByUrl', product.url);
         var updatedAt = new Date,
         priceDisplay = Math.floor((newPrice.price/100)*100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' '+newPrice.currency;
         var id = PricesHistory.insert({
         pId : product._id,
         currency: newPrice.currency,
         price : newPrice.price,
         priceDisplay: priceDisplay,
         diff : oldPrice.price - newPrice.price,
         updatedAt : updatedAt
         });
         console.log(updatedAt, id);
         done();
         });
         var RootURL = process.env.CLUSTER_BALANCER_URL ||  process.env.ROOT_URL;
         var _products = Products.find({}).fetch({fromServer : RootURL});
         _.each(_products, function(p){
         Cue.addTask('updateProductPrice', {isAsync:true, unique:false}, {product : p})
         });*/

        //Cue.start();
    })

}

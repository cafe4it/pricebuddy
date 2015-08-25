// Write your package code here!
if (Meteor.isServer) {
    Meteor.methods({
        WS_Lazada_getProductByUrl: function (url) {
            try {
                check(url, String);
                this.unblock();
                var URL = Npm.require('url');
                var rs = Async.runSync(function (done) {
                    var options = URL.parse(url);
                    options.socksPort = 9050;

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
                                var product = {
                                    branch: adobeData.pdt_brand || adobeData.branch || '',
                                    categories: adobeData.category || adobeData.pdt_category || categories,
                                    productId: adobeData.pdt_sku || adobeData.pdt_simplesku,
                                    title: adobeData.pdt_name,
                                    thumbnail: adobeData.pdt_photo,
                                    price: adobeData.pdt_price,
                                    price_past: adobeData.pdt_amount,
                                    currency: adobeData.pdt_currency,
                                    url: adobeData.pdt_url,
                                    hostname: adobeData.hostname
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
        }
    })

    Meteor.startup(function () {
        Cue.maxTasksAtOnce = 10;
        Cue.maxTaskTries = 3;
        Cue.maxTime = 1000 * 60 * 30;
        var jobOptions = {
            retryOnError: true,
            maxMs: 1000 * 60 * 10
        }
        Cue.dropTasks();

        Cue.addJob('updateProductPrice', jobOptions, function (task, done) {
            var product = task.data.product;
            console.log('doing ' + task.jobName + ' of product: '+product.title);
            var product = Meteor.call('WS_Lazada_getProductByUrl', product.url);
            console.log(new Date, product);
            done();
        });

        var _products = Products.find({}).fetch();
        _.each(_products, function(p){
            Cue.addTask('updateProductPrice', {isAsync:true, unique:false}, {product : p})
        });

        Cue.start();
    })

}

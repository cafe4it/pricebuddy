// Write your package code here!
if(Meteor.isServer){
    Meteor.methods({
        Lazada_getProductByURL : function(url){
            try{
                check(url, String);
                var uri = new URI(url);
                if(!uri.is('url')){
                    return false;
                }
                url = uri.search('').toString();
                var rs = Async.runSync(function(done){
                    var data = undefined;
                    osmosis
                        .get(url)
                        .set({
                            productId : '#selectedSku@value',
                            title : 'title',
                            thumbnail : '//*[@id="productImageBox"]/span/@data-image',
                            price : '#product_price',
                            price_display : '#special_price_box',
                            currency : '#product-price-box > div.hidden > span > meta:nth-child(3)@content'
                        })
                        .data(function(obj){
                            done(null, _.extend(obj, {url : url}));
                        })
                });
                return rs.result;
            }catch(ex){
                console.error(ex)
            }
        }
    })
}
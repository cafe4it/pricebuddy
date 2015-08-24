if (Meteor.isServer) {
    Meteor.methods({
        addProductFromUrl: function (url, clientId) {
            try {
                var clientId = clientId || Meteor.cookie.get('Pb_ClientId') || this.userId;

                check(clientId, String);
                check(url, String);

                var uri = new URI(url),
                    url = uri.search('').toString();

                var product = Meteor.call('Lazada_getProductByURL', url);

                if(!product) return false;


                var isExists = Products.findOne({productId : product.productId});
                var updatedAt = new Date;
                if(isExists){
                    FollowProducts.upsert({pId : isExists._id, clientId : clientId},{
                        pId : isExists._id,
                        clientId : clientId,
                        updatedAt : updatedAt
                    })
                }else{

                    var pid = Products.insert({
                        productId:  product.productId,
                        title : product.title,
                        url : product.url,
                        thumbnail : product.thumbnail,
                        updatedAt : updatedAt
                    });

                    PricesHistory.insert({
                        pId : pid,
                        currency : product.currency,
                        price : product.price,
                        priceDisplay : product.price_display,
                        updatedAt : updatedAt
                    });

                    FollowProducts.insert({
                        pId : pid,
                        clientId : clientId,
                        isFollow : false,
                        updatedAt : new Date
                    });

                    return true;
                }
            } catch (ex) {
                console.error('addProductFromUrl',ex)
            }
        }
    })
}
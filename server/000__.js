if(Meteor.isServer){
    Meteor.startup(function(){
        FlowRouter.setDeferScriptLoading(true);
        Products._ensureIndex({"url": 1, "productId" : 1, "title" : 1});
    })

    Meteor.publish('getProductByIds',function(params){
        return Products.find(params);
    });

    Meteor.publish('getFollowProducts', function(clientId){
        return FollowProducts.find({clientId : clientId});
    });

    Meteor.publish('getPriceByProducts', function(params){
        return PricesHistory.find(params);
    })
}
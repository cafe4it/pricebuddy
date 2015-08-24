Products = new Meteor.Collection('Products');

FollowProducts = new Meteor.Collection('FollowProducts');

PricesHistory = new Meteor.Collection('PricesHistory');

Products.helpers({
    latestPrice : function(){
        var price = PricesHistory.findOne({pId : this._id} , {sort : {updatedAt: -1}});
        return price;
    }
});

FollowProducts.helpers({
    getProduct : function(){
        return Products.findOne({_id : this.pId});
    }
})
if(Meteor.isServer){
    Meteor.methods({
        getProductByUrl : function(url){
            try{
                var rs = Async.runSync(function(done){
                    var data = undefined;
                    osmosis
                        .get(url)
                        .set({
                            title : 'title',
                            thumbnail : 'span[id^="prd-singleImg-productDetail"]:first@data-image-initial'
                        })
                        .done(function(){
                            done(null, data);
                        })
                        .data(function(res){
                            data = res;
                        })
                });
                return rs.result;
            }catch(ex){
                check(url, String);
            }
        }
    })
}
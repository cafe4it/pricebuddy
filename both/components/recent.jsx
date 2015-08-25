RecentProducts = React.createClass({
    displayName: 'RecentProducts',
    mixins: [ReactMeteorData],
    getMeteorData() {
        var subsRecent = Meteor.subscribe('getFollowProducts', clientId);
        var productsRecent = FollowProducts.find({clientId: clientId},{sort : {updatedAt : -1}}).fetch(),
            productIds = _.map(productsRecent, function (p) {
                return p.pId;
            }),
            subsProducts = Meteor.subscribe('getProductByIds',{_id : {$in : productIds}}),
            subsPrices = Meteor.subscribe('getPriceByProducts', {pId : {$in : productIds}});
        return {
            isLoading : (!subsRecent.ready() || !subsProducts.ready() || !subsPrices.ready()),
            products : productsRecent,
        }
    },
    getProductList(){
        var products = this.data.products,
            msgCount = (!products) ? 0 : _.size(products),
            msgDisplay = <p>Hiện tại bạn đang theo dõi giá của <b>{msgCount}</b> sản phẩm.</p>
        var productList = '';
        if(msgCount > 0){
            productList = products.map(function(p){
                var product = p.getProduct();
                return <RecentProductItem key={product._id} data={product}/>
            })
        }
        return <div className="col s12">
            {msgDisplay}
            <div className="divider"></div>
            {productList}
        </div>
    },
    render(){
        return (
            <div className="row">
                {(this.data.isLoading) ? <div className="col s12"><p><span>Đang tải dữ liệu...</span></p></div> : this.getProductList()}
            </div>
        )

    }
})

RecentProductItem = React.createClass({
    displayName : 'ProductItem',
    mixins: [ReactMeteorData],
    getMeteorData(){
        var product = this.props.data,
            price = product.latestPrice();
        //var subsPrice = Meteor.subscribe('getPriceByProduct', product._id);
        return {
            //isLoading : !subsProduct.ready(),
            price : price,
            product : product
        }
    },
    render(){
        var product = this.data.product,
            price = this.data.price;
        return (
            <div className="row">
                <div className="col s2">
                    <div className="center-align">
                        <a href={product.url} target="_blank"><img className='responsive-img' src={product.thumbnail} alt={product.title} width='80px'/></a>
                    </div>
                </div>
                <div className="col s7">
                    <span className='title'><a href={product.url} target="_blank">{product.title}</a></span>
                    <p className="priceDisplay">{price.priceDisplay}</p>
                    <p>

                    </p>
                </div>
                <div className="col s3 right-align">
                    <a href={product.url} target="_blank" className="waves-effect waves-light orange darken-1 btn">Mua ngay</a>
                </div>
                <div className="col s12">
                    <div className="divider"></div>
                </div>
            </div>
        )
    }
})
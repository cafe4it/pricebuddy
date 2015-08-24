SearchBox = React.createClass({
    displayName : 'SearchBox',
    getInitialState : function(){
        return {txtLink : '', isLoading : false}
    },
    getProduct : function(){

    },
    handlePressEnter : function(e){
        e.preventDefault();
        if(e.keyCode === 13){
            var txtLink = this.state.txtLink;
            if(txtLink !== '' && !_.isEmpty(txtLink)){
                var self = this;
                self.setState({isLoading : true});
                var clientId = Meteor.cookie.get('Pb_ClientId');
                Meteor.call('addProductFromUrl',self.state.txtLink, clientId, function(err,rs){
                    if(err) console.error(err);
                    self.setState({isLoading : false});
                    React.findDOMNode(self.refs.txtLink).value = '';
                    console.info(rs);
                })
            }
        }
    },
    handleChange : function(e){
        e.preventDefault();
        this.setState({txtLink: event.target.value});
    },
    render(){
        var loading =(this.state.isLoading)? <div className="col s12"><Loading/></div> : undefined;
        return (
            <div className="row">
                <div className="col s12 center-align">
                    <p>Nhập liên kết sản phẩm bạn muốn theo dõi giá xuống dưới đây</p>
                </div>
                <div className="input-field col s12">
                    <input onKeyUp={this.handlePressEnter} onChange={this.handleChange} id="txtLink" ref="txtLink" type="url" className="validate" placeholder="Ví dụ : http://www.lazada.vn/bo-san-pham-ngan-ngua-mun-va-se-khit-lo-chan-long-vichy-normaderm-226857.html và nhấn ENTER"/>
                    <label htmlFor="txtLink">Link sản phẩm</label>
                </div>
                {loading}
            </div>
        )
    }
})
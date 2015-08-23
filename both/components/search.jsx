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
                console.info(txtLink);
                this.setState({isLoading : true});
            }
        }
    },
    handleChange : function(e){
        e.preventDefault();
        this.setState({txtLink: event.target.value});
    },
    handleClick : function (e) {
        e.preventDefault();

    },
    render(){
        var loading =(this.state.isLoading)? <div className="col s12"><Loading/></div> : undefined;
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input onKeyUp={this.handlePressEnter} onChange={this.handleChange} id="txtLink" type="url" className="validate" placeholder="Ví dụ : http://www.lazada.vn/bo-san-pham-ngan-ngua-mun-va-se-khit-lo-chan-long-vichy-normaderm-226857.html và nhấn ENTER"/>
                    <label htmlFor="txtLink">Link sản phẩm</label>
                </div>
                {loading}
            </div>
        )
    }
})
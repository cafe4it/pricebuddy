Home = React.createClass({
    displayName : 'Home',
    render(){
        return (
            <div className="row">
                <div className="sixteen wide column">
                    <div className="ui small fluid action input">
                        <input id="txtLink" type="text" placeholder="Nhập liên kết sản phẩm, ví dụ http://www.lazada.vn/nuoc-hoa-nam-davidoff-cool-water-125ml-980234.html... và nhấn ENTER"/>
                        <button id="btnGetLink" className="ui icon button">
                            <i className="green inverted search icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
})
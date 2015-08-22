TopMenuDesktop = React.createClass({
    displayName: 'TopMenuDesktop',
    render(){
        return <div className="ui fixed menu">
                    <div className="ui container">
                        <div href="#" className="header item">
                            <img className="logo" src="logo.jpg"/>
                        </div>
                            <HeaderNavItem href='/about' name='Về Chúng Tôi' />
                            <HeaderNavItem href='/' name='Bảng tin' />
                            <HeaderNavItem href='/how-it-works' name='Làm thế nào?' />
                        <div className="right menu item">
                            <div className="ui green buttons">
                                <div className="ui button">Đăng nhập</div>
                                <div className="ui floating dropdown icon button">
                                    <i className="dropdown icon"></i>
                                    <div className="menu">
                                        <div className="item"><i className="google plus square icon"></i> Đăng nhập bằng Google</div>
                                        <div className="item"><i className="facebook square icon"></i> Đăng nhập bằng Facebook</div>
                                        <div className="item"><i className="add user icon"></i> Đăng ký tài khoản</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
    }
})

TopMenuMobile = React.createClass({
    displayName: 'TopMenuMobile',
    render(){
        return (
            <div className="mobile only row">
                <div className="ui stackable menu">
                    <div className="item">
                        <img src="/logo.jpg"/>
                        </div>
                        <HeaderNavItem href='/about' name='Về Chúng Tôi' />
                        <HeaderNavItem href='/' name='Bảng tin' />
                        <HeaderNavItem href='/how-it-works' name='Làm thế nào?' />
                    </div>
            </div>

        )
    }
})

var HeaderNavItem = React.createClass({
    isActive() {
        return FlowRouter.current().path === this.props.href;
    },

    render() {
        return <a href={this.props.href} className={this.isActive() ? 'active item' : 'item'}>
            {this.props.name}</a>
    }
});
TopMenu = React.createClass({
    displayName: 'TopMenu',
    render(){
        return(
            <div className='navbar-fixed'>
                <nav className='green lighten-1'>
                    <div className='container'>
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo"><img width="64px" src="/logo.png" alt="pricebuddy logo"/></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <HeaderNavItem href="/about" name="Về chúng tôi"/>
                                <HeaderNavItem href="/" name="Bảng tin"/>
                                <HeaderNavItem href="/how-it-works" name="Làm thế nào?"/>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
})

var HeaderNavItem = React.createClass({
    isActive() {
        return FlowRouter.current().path === this.props.href;
    },

    render() {
        return(
                <li className={this.isActive() ? 'active' : ''}>
                    <a href={this.props.href}>
                        {this.props.name}
                    </a>
                </li>
            )
    }
});
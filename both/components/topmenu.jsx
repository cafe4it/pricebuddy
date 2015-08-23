TopMenu = React.createClass({
    displayName: 'TopMenu',
    render(){
        return(
            <nav>
                <div className="nav-wrapper green lighten-1">
                    <a href="#" className="brand-logo"><img width="64px" src="/logo.jpg" alt="pricebuddy logo"/></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><HeaderNavItem href="/about" name="Về chúng tôi"/></li>
                        <li><HeaderNavItem href="/" name="Bảng tin"/></li>
                        <li><HeaderNavItem href="/how-it-works" name="Làm thế nào?"/></li>
                    </ul>
                </div>
            </nav>
        )
    }
})

var HeaderNavItem = React.createClass({
    isActive() {
        return FlowRouter.current().path === this.props.href;
    },

    render() {
        return(
                <li className={this.isActive() && 'active'}>
                    <a href={this.props.href}>
                        {this.props.name}
                    </a>
                </li>
            )
    }
});
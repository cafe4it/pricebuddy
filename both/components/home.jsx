Home = React.createClass({
    displayName : 'Home',
    render(){
        return (
            <div className="home">
                <SearchBox/>
                <RecentProducts/>
            </div>
        )
    }
})
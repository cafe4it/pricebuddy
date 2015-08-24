Loading = React.createClass({
    displayName: 'loading',
    render(){
        return (
            <div className="progress grey">
                <div className="indeterminate green"></div>
            </div>
        )
    }
})
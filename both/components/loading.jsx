Loading = React.createClass({
    displayName: 'loading',
    render(){
        return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        )
    }
})
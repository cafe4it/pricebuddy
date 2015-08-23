MainLayout = React.createClass({
    render() {
        return (
            <div className="container">
                <TopMenu/>
                {this.props.content}
            </div>
        );
    }
});

BlogList = React.createClass({
    render() {
        return (
            <div>
                This is the blog list:
                <ul>
                    <li><a href="/blog/hello-post">Hello Post</a></li>
                </ul>
            </div>
        );
    }
});

BlogPost = React.createClass({
    render() {
        return (
            <div>
                <p><a href="/">Back</a></p>
                This is the blog post
            </div>
        );
    }
});
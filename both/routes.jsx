FlowRouter.route("/", {
    name : 'home',
    action: function() {
        ReactLayout.render(MainLayout, {
            content: <Home />
        });
    }
});

Reaktor.init(
    <Router>
        <Route path="/" layout={MainLayout} content={BlogList} />
        <Route path="/blog/:postId" layout={MainLayout} content={BlogPost} />
    </Router>
);

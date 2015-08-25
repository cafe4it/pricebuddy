FlowRouter.route("/", {
    name : 'home',
    action: function() {
        ReactLayout.render(MainLayout, {
            content: <Home />
        });
    }
});


FlowRouter.route('/about',{
    name : 'about',
    action : function(){
        ReactLayout.render(MainLayout,{
            content : <Aboutus/>
        })
    }
})

FlowRouter.route('/how-it-works',{
    name : 'howitworks',
    action : function(){
        ReactLayout.render(MainLayout,{
            content : <HowItWorks/>
        })
    }
});

FlowRouter.route('/privacy-policy',{
    name : 'privacypolicy',
    action : function(){
        ReactLayout.render(MainLayout,{
            content : <PrivacyPolicy/>
        })
    }
});

/*

Reaktor.init(
    <Router>
        <Route path="/" layout={MainLayout} content={BlogList} />
        <Route path="/blog/:postId" layout={MainLayout} content={BlogPost} />
    </Router>
);
*/

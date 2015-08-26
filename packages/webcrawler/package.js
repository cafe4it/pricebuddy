Package.describe({
    name: 'pricebuddy:webcrawler',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');
    api.use('pricebuddy:cheerio',['server']);
    api.use('pricebuddy:socks5',['server']);
    api.use('pricebuddy:socks5-http-client',['server']);
    api.use('pricebuddy:socks5-https-client',['server']);
    api.use('meteorhacks:async',['server']);
    api.use('wt:uri-js',['server']);
    api.use('danimal:cue',['server']);
    api.use('http',['server']);
    api.use('underscore',['server']);
    api.use('underscorestring:underscore.string',['server']);

    api.addFiles('webcrawler.js', ['server']);
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('pricebuddy:webcrawler');
    api.addFiles('webcrawler-tests.js');
});

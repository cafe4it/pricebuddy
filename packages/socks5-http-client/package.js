Package.describe({
    name: 'pricebuddy:socks5-http-client',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'SOCKS v5 HTTP client implementation in JavaScript for Node.js.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/mattcg/socks5-http-client',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Npm.depends({"socks5-http-client" : "1.0.1"});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');

    api.addFiles('socks5-http-client.js', ['server']);

    api.export('shttp',['server']);
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('pricebuddy:socks5-http-client');
    api.addFiles('socks5-http-client-tests.js');
});

Package.describe({
    name: 'pricebuddy:socks5-https-client',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});
Npm.depends({"socks5-https-client" : "1.1.1"});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');
    api.addFiles('socks5-https-client.js', ['server']);

    api.export('shttps', ['server']);
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('socks5-https-client');
    api.addFiles('socks5-https-client-tests.js');
});

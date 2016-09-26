QUnit.test( "domain extracting from full domain", function( assert ) {

    assert.equal(getDomainInTwoLevels("www.asahi.com"), "asahi.com");
    assert.equal(getDomainInTwoLevels("asahi.com"), "asahi.com");
    assert.equal(getDomainInTwoLevels("jp.sputniknews.com"), "sputniknews.com");
    assert.equal(getDomainInTwoLevels("sputniknews.com"), "sputniknews.com");

    assert.equal(getDomainInThreeLevels("www.asahi.com"), "www.asahi.com");
    assert.equal(getDomainInThreeLevels("asahi.com"), "asahi.com");
    assert.equal(getDomainInThreeLevels("jp.sputniknews.com"), "jp.sputniknews.com");
    assert.equal(getDomainInThreeLevels("sputniknews.com"), "sputniknews.com");
});

QUnit.test( "isInList() test with array of domains", function( assert ) {
    var testDomains = [
        'cybozu.co.jp',
        'akimoto.jp',
        'asiajin.com',
    ];

    assert.ok(isInList(testDomains, "akimoto.jp"));
    assert.ok(isInList(testDomains, "cybozu.co.jp"));
    assert.ok(isInList(testDomains, "asiajin.com"));
    assert.notOk(isInList(testDomains, "nonexisting.com"));
    assert.notOk(isInList(testDomains, "hogeakimoto.jp"));
    assert.notOk(isInList(testDomains, "akimoto.jp.com"));
    assert.notOk(isInList(testDomains, "co.jp"));

});

QUnit.test( "isFakeNewsDomain() test with real site domains", function( assert ) {
    assert.ok(isFakeNewsDomain(domains, "theonion.com"));
    assert.ok(isFakeNewsDomain(domains, "www.theonion.com"));
    assert.notOk(isFakeNewsDomain(domains, "faketheonion.com"));
    assert.notOk(isFakeNewsDomain(domains, "theonion.com.co"));

    assert.ok(isFakeNewsDomain(domains, "thepoke.co.uk"));
    assert.notOk(isFakeNewsDomain(domains, "co.uk"));

    assert.notOk(isFakeNewsDomain(domains, "google.com"));
    assert.notOk(isFakeNewsDomain(domains, "www.google.com"));
});

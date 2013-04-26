if (window.location.search === "?test") {
  document.write(
    '<div id="qunit"></div>' +
    '<div id="qunit-fixture"></div>' +
    '<div id="ember-testing-container">' +
    '  <div id="ember-testing"></div>' +
    '</div>' +
    '<link rel="stylesheet" href="css/ember-testing.css">' +
    '<link rel="stylesheet" href="tests/libs/qunit-1.11.0.css">' +
    '<script src="tests/libs/qunit-1.11.0.js"></script>' +
    '<script src="tests/tests.js"></script>'
  )
}
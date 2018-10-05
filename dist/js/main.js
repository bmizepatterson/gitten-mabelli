"use strict";

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    init();
  }
};

function init() {
  // Set the "active" class on the current page in the nav bar
  // Grab the links in the nav bar
  var navItems = document.getElementById('navlinks').children;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = navItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.children[0].href === document.location.href) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
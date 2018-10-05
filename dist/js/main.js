"use strict";

var apiRequest = null;
var menuOutput = null;
var errorOutput = null;

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
    } // Menu page

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

  if (document.location.pathname == '/menu.html') {
    menuOutput = document.getElementById('menu-output');
    errorOutput = document.getElementById('error-output');
    apiRequest = new XMLHttpRequest();
    loadMenu();
  }
}

function loadMenu() {
  // Form URL. We want 8 menu items.
  var url = 'https://entree-f18.herokuapp.com/v1/menu/8'; // Fetch from the URL

  apiRequest.onload = onSuccess;
  apiRequest.onerror = onError;
  apiRequest.open('get', url, true);
  apiRequest.send();
}

function onError() {
  // Display a generic error.
  errorOutput.innerHTML = "An error has occurred. Please try again later."; // Turn "off" output

  menuOutput.style.display = 'none'; // Turn "on" error

  errorOutput.style.display = 'block';
}

function onSuccess() {
  if (apiRequest.status == "200") {
    var response = JSON.parse(apiRequest.response);
    console.log(response); // Dish titles

    var titles = ['The Little Brother', 'Not the Chicken', 'Surfer and Turferer', 'Over the Border and Through the Woods', '\'Which You Were Here', 'Mabelli Special', 'Gitten Hot', 'Chef Portrait']; // Iterate through each menu item and print

    for (var i = 0; i < response.menu_items.length; i++) {
      // Create dish title
      var titleText = document.createTextNode(titles[i]);
      var title = document.createElement('h2');
      title.appendChild(titleText); // Create dish description

      var descText = document.createTextNode(response.menu_items[i].description);
      var desc = document.createElement('p');
      desc.appendChild(descText); // Add to the page

      menuOutput.appendChild(title);
      menuOutput.appendChild(desc);
    } // Turn "off" output


    menuOutput.style.display = 'block'; // Turn "on" error

    errorOutput.style.display = 'none';
  } else {
    onError();
  }
}
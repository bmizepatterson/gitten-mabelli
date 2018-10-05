// API Request object
let apiRequest = null;
// div tag where API response data will go
let menuOutput = null;
// div tag where error messages will go
let errorOutput = null;

document.onreadystatechange = function() {
    if (document.readyState == "interactive") {
        init();
    }
}

function init() {
    // Set the "active" class on the current page in the nav bar
    // Grab the links in the nav bar
    let navItems = document.getElementById('navlinks').children
    for (let item of navItems) {
        if (item.children[0].href === document.location.href) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    }

    // Menu page
    if (document.location.pathname == '/menu.html') {
        menuOutput = document.getElementById('menu-output');
        errorOutput = document.getElementById('error-output');
        apiRequest = new XMLHttpRequest();
        loadMenu();
    }
}

function loadMenu() {
    // Form URL. We want 8 menu items.
    let url = 'https://entree-f18.herokuapp.com/v1/menu/8';

    // Fetch from the URL
    apiRequest.onload = onSuccess;
    apiRequest.onerror = onError;
    apiRequest.open('get', url, true);
    apiRequest.send();
}

function onError() {
    // Display a generic error.
    errorOutput.innerHTML = "An error has occurred. Please try again later.";
    // Turn "off" output
    menuOutput.style.display = 'none';
    // Turn "on" error
    errorOutput.style.display = 'block';
}

function onSuccess() {

    if (apiRequest.status == "200") {
        let response = JSON.parse(apiRequest.response);
        console.log(response);
        // Dish titles
        let titles = [
            'The Little Brother',
            'Not the Chicken',
            'Surfer and Turferer',
            'Over the Border and Through the Woods',
            '\'Which You Were Here',
            'Mabelli Special',
            'Gitten Hot',
            'Chef Portrait'
        ];
        // Iterate through each menu item and print
        for (let i = 0; i < response.menu_items.length; i++) {
            // Create dish title
            let titleText = document.createTextNode(titles[i]);
            let title = document.createElement('h2');
            title.appendChild(titleText);

            // Create dish description
            let descText = document.createTextNode(response.menu_items[i].description);
            let desc = document.createElement('p');
            desc.appendChild(descText);

            // Add to the page
            menuOutput.appendChild(title);
            menuOutput.appendChild(desc);
        }

        // Turn "off" output
        menuOutput.style.display = 'block';
        // Turn "on" error
        errorOutput.style.display = 'none';
    } else {
        onError();
    }
}


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
}

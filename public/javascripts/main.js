function copyServerIP(serverIP, element) {
    navigator.clipboard.writeText(serverIP);

    element.parentElement.classList.add('copyhint-inactive');
    element.parentElement.classList.remove('copyhint-active');
}

function toggleDropdown(element) {
    if (element.classList.contains('header-dropdown-active')) {
        element.classList.remove('header-dropdown-active');
    } else {
        element.classList.add('header-dropdown-active');
    }
}

function closeDropdown(element) {
    if (element.classList.contains('header-dropdown-active')) {
        element.classList.remove('header-dropdown-active');
    }
}

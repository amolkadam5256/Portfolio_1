function toggleChange(event) {
    const menuIcon = document.getElementById("menu-icon");
    const menuContent = document.getElementById("manu-content");

    // Toggle 'change' class on menu-icon
    menuIcon.classList.toggle("change");

    // Toggle visibility of menu-content
    menuContent.classList.toggle("hidden");

    // Stop propagation to prevent closing the menu if the menu icon is clicked
    event.stopPropagation();
}

// Close the menu if clicked outside of it
document.addEventListener("click", function (event) {
    const menuContent = document.getElementById("manu-content");
    const menuIcon = document.getElementById("menu-icon");
    const navigation = document.getElementById("navigation");

    // If the click is outside the menu or the menu icon, hide the menu
    if (!menuIcon.contains(event.target) && !menuContent.contains(event.target) && !navigation.contains(event.target)) {
        menuContent.classList.add("hidden");
        menuIcon.classList.remove("change");
    }
});
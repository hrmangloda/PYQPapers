document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".sidebar ul li");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove("active"));

            // Add active class to the clicked item
            this.classList.add("active");
        });
    });
});

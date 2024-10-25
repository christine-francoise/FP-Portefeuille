/* 
Gurango, Christine Francoise O.
CS-201
*/

let isSidebarVisible = false;

function toggleSidebar() {
    if (isSidebarVisible) {
        hideSidebar();
    } else {
        showSidebar();
    }
    isSidebarVisible = !isSidebarVisible;
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menu = document.querySelector('.menu-icon img');

    sidebar.style.display = 'flex';
    menu.src = "figma/close.png";
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menu = document.querySelector('.menu-icon img');

    sidebar.style.display = 'none';
    menu.src = "figma/menu.png";
}
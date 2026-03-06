async function loadComponent(id, file) {
    const response = await fetch(file);
    const text = await response.text();
    document.getElementById(id).innerHTML = text;
}

loadComponent("header-placeholder", "header.html");
loadComponent("footer-placeholder", "footer.html");
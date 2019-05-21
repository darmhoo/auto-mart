function classToggle() {
    const nav = document.querySelector('.dashboard');
    if (nav.style.display === "none"){
        nav.style.display = "block"
    }else{
        nav.style.display = "none";
    }

}
const toggleButton = document.querySelector('.navbar-toggle');
toggleButton.addEventListener('click', classToggle);
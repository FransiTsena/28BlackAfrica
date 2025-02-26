const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }
}

const closeMenu = (navId) => {
    const nav = document.getElementById(navId);
    document.addEventListener('click', (e) => {
        if ((!nav.contains(e.target) || e.target.classList.contains("close-btn")) && !document.getElementById('nav-toggle').contains(e.target)) {
            nav.classList.remove('show');
        }
    });
};

showMenu('nav-toggle', 'nav-menu');
closeMenu('nav-menu');
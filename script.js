/* mobile nav bar*/

(function() {
    const menuToggle = document.getElementsByClassName('btn-menu')[0];
    const nav = document.getElementsByClassName('links-container')[0];

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () =>{
            nav.classList.toggle('active1');
        });
    }

})();

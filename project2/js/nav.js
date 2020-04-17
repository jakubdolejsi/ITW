function show_nav() {
    let menu = document.getElementById('menuLinks');
    if(menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


function activeNav(active_id) {
    let previous = document.querySelectorAll('.active');
    let next_active = document.querySelectorAll(active_id)[0];
    next_active.className = 'active';
    next_active.childNodes[0].className = 'activeText';
    try {
        previous[0].className = '';
        previous[0].childNodes[0].className = ''
    } catch (e) {

    }
}
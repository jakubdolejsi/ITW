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
    // if(document.getElementById('bars').style.display === 'flex') {
    //     document.getElementById('menuLinks').style.display = 'none';
    // }
    try {
        previous[0].className = '';
        previous[0].childNodes[0].className = ''
    } catch (e) {
    }
}

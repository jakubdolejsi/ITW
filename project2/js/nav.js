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
    if(document.getElementById('bars').style.display === 'flex') {
        document.getElementById('menuLinks').style.display = 'none';
    }
    try {
        previous[0].className = '';
        previous[0].childNodes[0].className = ''
    } catch (e) {
    }
}

window.onscroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    let previous = document.getElementsByClassName('active');
    console.log(previous[0]);
    try {
        previous[0].className = '';
    } catch (e) {
    }
    // previous[0].className = '';
    if (scrolled < 20) {
        document.getElementById('li_1').className = 'active';
    } else if(scrolled > 20 && scrolled < 45) {
        document.getElementById('li_2').className = 'active';
    } else if(scrolled > 40 && scrolled < 65) {
        document.getElementById('li_3').className = 'active';
    } else if(scrolled > 65 && scrolled < 85) {
        document.getElementById('li_4').className = 'active';
    } else {
        document.getElementById('li_5').className = 'active';
    }

    document.getElementById("id_bar").style.height = scrolled + "%";
};

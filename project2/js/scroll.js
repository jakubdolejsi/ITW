// Cache selectors
let topMenu = $("#menuLinks"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        const item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    const fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    let cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    const id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
})
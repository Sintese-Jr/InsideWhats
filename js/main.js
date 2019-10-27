document.querySelector('.menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
};


document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".head").addClass("scrolled");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".head").removeClass("scrolled");
        }
    });
});
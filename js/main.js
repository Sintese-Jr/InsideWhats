/*document.querySelector('.menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.menu-fechar').onclick = fecharMenu

function fecharMenu(){
    document.documentElement.classList.remove('menu-ativo');
}

$(".menu-principal a").on('click', fecharMenu);*/

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});

// $(function() {
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() > 40) {
//             $(".head").addClass("scrolled");
//         } else {
//             //remove the background property so it comes transparent again (defined in your css)
//            $(".head").removeClass("scrolled");
//         }
//     });
// });
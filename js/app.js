// Create maginify function
function magnify() {
                        // Takes 300 milliseconds to complete
    $(this).find("i").animate({fontSize: "50px"}, 300);
    
    if ($("i").closest("div").hasClass("checked"))
    {
        $(this).find(".checked").addClass("rotater");
    }
}
// Create minify function 
function minify() {
                        // Takes 350 milliseconds to complete
    $(this).find("i").animate({fontSize: "30px"}, 350);
    
    if ($("i").closest("div").hasClass("checked"))
    {
        $(this).find(".checked").removeClass("rotater");
    }
}
// Once the DOM has been loaded, we will listen for the DOM "I'm ready" event.
$(document).ready(function() {
    $(".well").on("mouseenter", magnify);
    $(".well").on("mouseleave", minify);
});
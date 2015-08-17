// Create maginify function
function magnify()
{
    $(this).find("i").animate({fontSize: "50px"}, 300); // Takes 300 milliseconds to complete
    
    if ($("i").closest("div").hasClass("checked"))
    {
        $(this).find(".checked").addClass("rotater");
    }
}

// Create minify function 
function minify()
{
    $(this).find("i").animate({fontSize: "30px"}, 350); // Takes 350 milliseconds to complete
    
    if ($("i").closest("div").hasClass("checked"))
    {
        $(this).find(".checked").removeClass("rotater"); // Once the users removes the mouse remove the rotater class so that it can be repeated upon user request.
    }
}

// Create nameInterval functions
function nameInterval1()
{
    var inserter = document.getElementById("name");
    var messagePart1 = "Hi";
    
    var count = 0;

    var print = setInterval(function(){
          if(count === messagePart1.length-1)// if conditional statement MUST MUST MUST come before += operator, if not, we encounter a bug. 
        {
            clearInterval(print);   
        }
        inserter.innerHTML += messagePart1[count];
        count++;
        
    }, 200);
}

function nameInterval2()
{
    
    var inserter = document.getElementById("name");
    var messagePart2 = ", my name is Gabriel.";
    
    var count = 0;
    
    var print = setInterval(function(){
          if(count === messagePart2.length-1)// if conditional statement MUST MUST MUST come before += operator, if not, we encounter a bug. 
        {
            clearInterval(print);   
        }
        inserter.innerHTML += messagePart2[count];
        count++;
        
    }, 150);
}

// Once the DOM has been loaded, we will listen for the DOM "I'm ready" event and the processes below will be executed.
$(document).ready(function() {
    $(".well").on("mouseenter", magnify);
    $(".well").on("mouseleave", minify);
    
    setTimeout(nameInterval1, 1500); // the number of milliseconds to wait before executing the function in first argument
    setTimeout(nameInterval2, 3000); // the number of milliseconds to wait before executing the function in first argument
    
    // add the invisible class to both greeting and linkedin portion of greeting (this will make the opacity of both start at 0)
    $("#greeting").addClass("invisible");
    $("#linkedin").addClass("invisible");
    
    setTimeout(function() {
        $("#greeting").removeClass("invisible").addClass("easeIn"); // Remove the invisible class and add easeIn class (increment opacity from 0 to 1 )
        $("#linkedin").removeClass("invisible").addClass("easeIn");
    }, 6500); // the number of milliseconds to wait before executing the code 
});



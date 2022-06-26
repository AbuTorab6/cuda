$(document).ready(function(){
    
    
    //STICKY MENU
    
    $('.js-services-section').waypoint
    (
        function(direction)
        {
            if(direction=="down")
                {
                    $('nav').addClass("sticky");
                }
            else
            {
                $('nav').removeClass("sticky");
            }
        }
    );
    
    
    
    
    
    
    //MIX IT UP
    var mixer=mixitup('.container');
    
});







//**********MOBILE MENU**************

function openNav()
{
    document.getElementById("myNav").style.width="40%";
}



function closeNav()
{
    document.getElementById("myNav").style.width="0%";
}


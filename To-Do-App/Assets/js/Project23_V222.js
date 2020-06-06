// Page Refresh -- initial conditions
$("#addtodo").val(null);
$("#addSign").toggleClass("addsigncolortoggleshow");


//Adding Strike Through Effects
    // $('li').click(function(){
    //     $(this).toggleClass('canceltodo');   
    // });
    $('ol').on("click", "li", function(){//if we did $(li).on ... it will apply only to existing lis and not new ones
        $(this).toggleClass('canceltodo');   
    });


//Delete Button
    // $("span").click(function(event){
$("ol").on( "click", "span", function(event){
    event.stopPropagation();//the thing what happens is that X is inside a span which is inside the li
    //due to this -- bubbling effect occurs -- dtwhich even the li gets selected and canceltodo is toggled
    //stoppropogation stops the event from bubbling up further to its parents
    $(this).parent().css("border", "none");
    $(this).parent().fadeOut(1000, function(){//gives the adjacent parent to this
        $(this).remove();//deletes the to-do completely
    });
});


//Taking input from user for new new todo
$("input[type = 'text']").keypress(function(event){
   if(event.which === 13){//ascii value of enter key 
        //saving the new todo entered by the user        
        var newtodo =  $(this).val();
        $(this).val(null);//clears the textbox
        //create a new li and add to ul -- Append        
        $("ol").append("<li> <span> <i class='fas fa-trash'></i>  </span><span id='todospacing'>&nbsp;&nbsp;&nbsp;</span> " + newtodo + "</li>");//corresponds to the html element
        //the thing what happens is that since we use click(), the newtodo don't get the functional properties
        //DTWhich we use the on(), so that it applies to the new additions -- dynamic reasons
   }
});


// Configuring the '+' sign
$("#addSign").on("click", function(){
    $("#addtodo").slideToggle(1500);
    // $(this).css("color", "white");
    $(this).toggleClass("addsigncolortoggleshow");
    $(this).toggleClass("addsigncolortogglehide");
});
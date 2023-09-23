

$(document).ready(function(){

    //function addItemToList()

    function addItemToList()

    {

        //taking text entered from textbox

        var text=$("#txtTextbox").val();

        //append item to the list

        $("ul").append("<li>"+text+"</li>");

    }

    //function to change style of the textbox

    function changeStyle()

    {

        $("#txtTextbox").css("border","1px dashed blue").css("background-color","aqua");

    }

    //attaching click event to the add item button

    $("#btnAddItem").click(function(){

        //function call

        addItemToList();

    });

    //attaching click event to the change style

    $("#btnchangeStyle").click(function(){

        //function call

        changeStyle();

    });

});  

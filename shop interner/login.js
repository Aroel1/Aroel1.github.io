$(document).ready(function(){
 
/*анализ полей на наполненность - 
нужно для запоминалки поролей*/
 
if($("#siteLogin").val()!='')
{
    $("#siteLogin").prev().text('');
    $("#sitePass").prev().text('');
}
 
 
/*связь события и получение полем фокуса*/
 
$("div > input").focus(
function(e)
{
    var clicked = $(e.target),
    clickedId = clicked.attr("id");
 
    /* удаление текста из label при получении
 фокуса для поля логина*/
 
    if(clickedId=="siteLogin")
    {
         clicked.prev().text('');
    }
 
    /*тоже самое для пароля*/
 
    else if(clickedId=="sitePass")
    {
         clicked.prev().text('');
     }
 
});
 
/*потеря фокуса полем*/
 
$("div > input").blur(
function(e)
{
    var clicked = $(e.target),
    clickedId = clicked.attr("id");
 
    if(clickedId=="siteLogin")
    {
        if(clicked.val()=='') clicked.prev().text('логин');
    }
 
    else if(clickedId=="sitePass")
    {
        if(clicked.val()=='') clicked.prev().text('пароль');
    }
 
});
 
});




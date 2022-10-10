$('a').hover(function (){
    $(this).fadeTo(1000,0.7);
    },
    function ()
    {
        $(this).fadeTo(1000,1);
    });
//$('img').width($('.mainstr').width() -700);
//$('img').height($('.mainstr').height() -100);
let flajok = false;
$('.blogik').hide();
function f1()
{
    if(flajok === false)
    {
        $('#pokaz').attr('value', 'Скрыть блоги');
        $('.blogik').show(3000);
        flajok = true;
    }
    else
    {
       $('#pokaz').attr('value', 'Посмотреть блоги');
        $('.blogik').hide(3000);
        flajok = false;
    }
}
function f2()
{

}
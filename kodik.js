
let flajok = false;

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
function vxod()
{
    $('#b1').hide();
    $('#b2').hide();
    $('#b3').hide();
}
module.exports = vxod();
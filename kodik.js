let flajok = false;
let flajok2 = false;
$(".blogik").hide();
$(".blogik2").hide();
function f1()
{
    if(flajok2)
    {
        $('.blogik2').hide();
        $(".blogik").show(3000);
        flajok = true;
    }
    else
    {
        $(".blogik").show(3000);
        flajok = true;
    }
}
function f2()
{
if(flajok)
{
    $('.blogik').hide();
    $(".blogik2").show(3000);
    flajok2 = true;
}
else
{
    $(".blogik2").show(3000);
    flajok2 = true;
}
}
//let TimeupdateDate = setInterval("updateDate()",2000); 
window.onload = function updateDate()
{
//let fileContent = fs.readFileSync("blog.json", "utf8");
//var blogs = JSON.parse(fileContent);
//console.log(blogs);S

let files = file.files[0];
console.log(files);
//let text = blogii.keys('text');
//let photo = "./picture/" + blogii.keys('photo'); //./picture/photo0.jpg
//$(".blogik2").prepend("<div class='card' style='width: 18rem;'><img id='cartinka1' src='' class='card-img-top'> <div class='card-body'><p class='card-text'></p></div></div>");
//$("#cartinka1").attr('src', photo);
$(".blogik2").prepend("<div class='card' style='width: 18rem;'><img id='cartinka1' src='./picture/photo0.jpg' class='card-img-top'> <div class='card-body'><p class='card-text'>Одвоыфдвлофвжфдллйщцзк</p></div></div>");
}
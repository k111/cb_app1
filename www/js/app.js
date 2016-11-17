// This is a JavaScript file

var $btn = $('#btn');
var $reset = $('#reset');
var num = $('li').length;
var ary = [1,2,3,4];


$btn.on('click',function(){
    shuffle(ary);
    $('li span').each(function (index) {
        $(this).html(ary[index]);
    });
    $('body').addClass('done');        
});

$reset.on('click',function(){
    $('li span').text('');
    $('body').removeClass('done');
});



function shuffle(array) {
  var n = array.length, t, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }
  return array;
}

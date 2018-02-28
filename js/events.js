function getIt(){
$('p').click(function(){
    alert('Hey!');
});
}

function frameIt(){
  $('img').addClass('tasty');

}

function pressIt(){
  $('#typing').on('keydown',function(letter){
     if (letter.keyCode == 71){
     alert('g has been pressed');
   }
 });
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  });
}

$(document).ready(function(){
frameIt();
pressIt();
getIt();
submitIt();
});


function getIt(){
$('p').click(function(){
    alert('Hey!');
});
}

function frameIt(){
  $('img').addClass('tasty');

}

function pressIt(){
  $('document').on('keydown',function(){
   if (event.which == 71){
     alert('g has been pressed')
   }
 });
}

function submitIt(){
  $('input:submit').on('click', function(){
    alert('Your form is going to be submitted now.')
  });
}

$(document).ready(function(){
frameIt();
pressIt();
getIt();
submitIt();
});

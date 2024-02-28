/*
const hint = document.querySelector('.hint');
const message = document.querySelectorAll('.message')

function time(){
    
        idea.style.display = 'none'
    
   
}
*/

/*$(function () {
        $('[data-toggle="popover"]').popover()
      }) */

const button = document.getElementsByClassName('question-choices')
const idea = document.getElementsByClassName('hint-text')
function hide(){
if(button.onclick()){
      button.style.display = 'none'
}
}


var count = 0;

function limit(){

    if(count <= 5){
       
       
        count++;
    }else{
            document.getElementById('button').disabled = true
    }
}






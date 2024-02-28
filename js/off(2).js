const finalscore = document.querySelector('.score')
const previousScore = localStorage.getItem('previousScore')
let button1 = document.getElementById('button')
let button2 = document.getElementById('button1')
let button3 = document.getElementById('button2')
let button4 = document.getElementById('button3')
let button5 = document.getElementById('button4')
let button6 = document.getElementById('button5')
let suggestion1 = document.getElementById ('suggestion1')
let suggestion2 = document.getElementById ('suggestion2')
let suggestion3 = document.getElementById ('suggestion3')


finalscore.innerText = previousScore


var score = parseInt(previousScore)



//score.push(finalscore)

function its(){
    showbtn()
    Show();
}


 function Show(){
    if(score == 1){
      
        suggestion1.style.display = 'block'
        
        return button1.style.display = 'block'
    
    }else if(score == 2) {
        suggestion1.style.display = 'block'
        return button1.style.display = 'block'

    }else if(score == 3){
        suggestion1.style.display = 'block'
        return button1.style.display = 'block'

    }else if(score == 4){
        suggestion1.style.display = 'block'
        return button1.style.display = 'block'
    }else if(score == 5){
        suggestion1.style.display = 'block'
        return button1.style.display = 'block'

    }else if(score == 6){
        suggestion2.style.display = 'block'
        return button4.style.display = 'block'

    }else if(score == 7){
        suggestion2.style.display = 'block'
        return button4.style.display = 'block'
    }else if(score == 8){
        suggestion3.style.display = 'block'
        return button5.style.display = 'block',
        button6.style.display = 'block'
        
    }else if(score == 9){
        suggestion3.style.display = 'block'
        return button5.style.display = 'block',
        button6.style.display = 'block'
    

    }else if(score == 10){
        suggestion3.style.display = 'block'
        return button5.style.display = 'block',
        button6.style.display = 'block'

    }
}

 function showbtn(){
    if(Show === 4){
        button1.style.display = 'block'
    }
 }

its();

/*
 if(score <= low){
      
    alert('No changes')

}else if{
    suggestion.style.display = 'block'
}
*/
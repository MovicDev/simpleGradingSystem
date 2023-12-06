var songFail ="Audio/dsh.mp3";
var songPass ="Audio/ifd.mp3"
var songAverage ="Audio/Story.mp3"
var songCredit ="Audio/vivid.mp3"
var songGood ="Audio/dont.mp3"
var songExcellent ="Audio/dont.mp3"
var songToPlayFail = new Audio(songFail)
var songToPlayPass = new Audio(songPass)
var songToPlayAverage = new Audio(songAverage)
var songToPlayCredit = new Audio(songCredit)
var songToPlayGood = new Audio(songGood)
var songToPlayExcellent = new Audio(songExcellent)


function scoreGrading(){
    if(num.value == ""){
        showResult.value ="Not Valid"    
    }
      else if (num.value >= 0 && num.value < 40 ) {
        showResult.value ="F -"+"  Fail 😂" 
        showResult.style.color = "red"
        songToPlayFail.play()
    } else if(num.value >= 40 && num.value < 45 ){
        showResult.value ="E -"+"  Pass 😪" 
        showResult.style.color = "red"
        songToPlayPass.play()
    } else if(num.value >= 45 && num.value < 49){
        showResult.value ="D -"+"  Average 🤦‍♀️" 
        showResult.style.color = "orange"
        songToPlayAverage.play()
    } else if(num.value >= 49 && num.value < 59){
        showResult.value ="C -"+" Credit ✌" 
        showResult.style.color = "chartreuse"
        songToPlayCredit.play()
    } else if(num.value >= 59 && num.value < 70){
        showResult.value ="B -"+"  Good 👍" 
        showResult.style.color = "green"
        songToPlayGood.play() 
    } else if(num.value >= 70 && num.value <= 100){
        showResult.value ="A -"+" Excellent 😀👏" 
        showResult.style.color = "green"
        songToPlayExcellent.play()
    }  else{
        showResult.value = "This is over the score"
        showResult.style.color = "black"
       
    }
}
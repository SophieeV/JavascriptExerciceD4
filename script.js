let Question1 = prompt('what is your name ?');
let Lancelot = 'Sir Lancelot the Brave'
let Robin = 'Sir Robin'
let Galahad = 'Sir Galahad the Chaste'
let Arthur = 'King Arthur'
let Answer2 = 'to seek the Holy Grail'
let AnswerLancelot = 'blue'
let AnswerGalahad = "Blue ... no yellow"
let AnswerKingArthur = "African or European ?"
let OtherAnswer = "aaaaaaargh"



 if(Question1 == Lancelot){
   prompt('what is your quest?');
   if (Answer2){
     prompt('what is your favorite color ?');
     /*else if(réponse /= answer2){
      alert(OtherAnswer);
    }*/
   } if (AnswerLancelot){
     alert ('right. Of you go');
   } /*else if(réponse /= answerLancelot){
     alert(OtherAnswer)
   }*/
 }
 else if(Question1 == Robin){
   prompt('what is your quest?');
   if (Answer2){
     prompt('what is the capital of Assyria ?');
   } alert (OtherAnswer);
 }

 else if(Question1 == Galahad){
   prompt('what is your quest?');
   if (Answer2){
     prompt('what is your favorite color ?');
     if (AnswerGalahad){
       alert (OtherAnswer);
   }
 }
}
 else if(Question1 == Arthur){
   prompt('what is your quest?');
   if (Answer2){
     prompt('What is the airspeed velocity of an unladen swallow? ?');
     if (AnswerKingArthur){
       alert("I don't know that.... aaaaaaargh");
       alert('the bridge is clear')
   }
 }
else if (Question1 != Lancelot, Robin, Galahad, Arthur){
  alert(OtherAnswer);
}
}

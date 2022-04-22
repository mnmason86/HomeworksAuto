// console.log('Hello World from the JS file!');

// let userName = 'Mandy';
// console.log (userName);

function askUserName() {
   let userName = prompt('Please Enter Your Name!')

   console.log (userName);
   //              'Welcome ' + 'Mandy'
   if (userName == 'Mandy'){
       document.write('Welcome Master ' + userName)
      }   else {
   document.write("Welcome " + userName)
      }
}

function bookNow() {
   confirm ("Do you really want to book?");
}

function changeColor() {
   let color = document.getElementById('colorInputText').value;
   document.body.style.backgroundColor = color;
}

function guessNumber () {
   let userAnswer = prompt('Enter a number 1-10');
   let correctAnswer = 7; 
   let attempts = 5;

   for (let i = 1; i < attempts; i++){
      while(userAnswer <1 || userAnswer >10){
         userAnswer = prompt('Please Try Again! A number 1-10!')
      }
   if (userAnswer == correctAnswer) {
      alert ('CORRECT! Proceed.');
      break;
   } else if (userAnswer > correctAnswer) {
      userAnswer = prompt('Too High. Please Try Again! A number 1-10!');
   } else if (userAnswer < correctAnswer) {
         userAnswer = prompt('Too Low. Please Try Again! A number 1-10!');
      }
      if(i == 4){
         alert('The Correct Answer Was 7.')
      }
   }
}

function starImage(){
   let userRating = prompt('Please Rate Our Service 1-5');
   let rating = value(userRating);

   while(userRating < 1 || userRating > 5){
      userRating = prompt('1-5 Only!');
   }
   for (rating = 1; rating <= 5; rating = rating +1);
}

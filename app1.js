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

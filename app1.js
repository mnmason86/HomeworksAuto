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

askUserName ();
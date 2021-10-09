console.log('hello world');

var testnum = 1;

// var numlist = function(num){
  // if(num < 6){
    // num++;
    // console.log(num);
    // numlist(num);
  // } else {
    // console.log("You have reached", num, ".")
  // }
// }


function numlist(num) {
  if(num < 6){
    num++;
    console.log(num);
    numlist(num);
  } else {
    console.log("You have reached", num, ".")
  }
}


numlist(testnum);










































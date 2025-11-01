const { day } = require("./week");

    function marksGrade(marks){
    switch(true){
       case marks >= 90 && marks<=100:
           console.log("GRADE A");
           break;
       case marks >= 80 && marks<=89 :
           console.log("GRADE B");
           break;
       case marks >= 70 && marks<=79:
           console.log("GRADE C");
           break;
       case marks >= 60 && marks<=69:
           console.log("GRADE D");
           break;
       default:
           console.log("GRADE F");
    }
}
console.log(marksGrade(54));
let greeting = (day === 1) ? '' : ;


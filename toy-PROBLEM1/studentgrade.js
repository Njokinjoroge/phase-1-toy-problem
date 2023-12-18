// prompt user to enter marks
let studentMarks= prompt('Enter mark score');
// convert marks into intergers
var marks = parseInt(studentMarks);
// limit the user to enter numbers only
if (isNaN(marks)){
    alert("Invalid input")
    //a grade marks
}if (marks>0&&marks<100){
    if (marks>79){
        console.log("Grade: A");


    }else if(marks>=60&&marks<=79){
        console.log("Grade:B")

    }else if(marks>=49&&marks<=59){
        console.log("Grade:C")

    }else if(marks>=40&&marks<49){
        console.log("Grade: D")        
    }else{
        console.log ("Grade: E")
    }
}else{
    console.log("Enter marks between o and 100")
}
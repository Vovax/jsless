// var greetings = 'Hello World!';

// alert(greetings);

// console.log(greetings);

// document.write(greetings);

// var userName = prompt("Your name");

// var greetings = "Helo" + " " + userName;

// document.write(greetings);

// var userAge = Number(prompt ("Your age?"));

// var textAge = userAge + 1;

// var nextAge = ("You will be" + nextAge);


// function sum (a,b) {
//     var result = a + b;
//     return result;
// }


// var num1 = Number(prompt ("Num1?"))

// var num2 = Number(prompt ("Num2?"))

// var calc = sum(num1, num2);

// document.write(calc);


// function telAge (age) {
//     if (age <= 18) {
//         return 'Kid'
//     }
//     else {
//         return 'Adult'
//     }
// }
   
// var age = Number(prompt("Your Age?"));
// document.write(telAge(age));


// var result = Math.sqrt(16);
// document.write(result);

// квадратне рівняння
//  ax^{2}+bx+c=0
// 8x2 + 4x + 2 = 0
// a,b,c;

// var a = prompt('Text "a"?');
// var b = prompt('Text "b"?');
// var c = prompt('Text "c"?');


var res1;
var res2;

var mathSq = function(a, b, c) {

    if (a != 0) {
        
        var d = Math.sqrt((Math.pow(b, 2)) -4 * a * c);
        
        var x1 = (-b + Math.sqrt((Math.pow(b, 2)) -4 * a * c)) / (2 * a);
        var x2 = (-b - Math.sqrt((Math.pow(b, 2)) -4 * a * c)) / (2 * a);
        
        var result1 = a*(Math.pow(x1, 2)) + b*x1 + c == 0;
        var result2 = a*(Math.pow(x2, 2)) + b*x2 + c == 0;
    
        res1 = result1;
        res2 = result2;
        
        return res1, res2;
    } else {
        return document.write(' Must be "a != 0" ');
    }
}

// mathSq();

mathSq(1, 3, -4);
// document.write(result1, " = ", x1, "<br>", result2, " = ", x2);
document.write('Passed with ' + res1, ' and ', res2);





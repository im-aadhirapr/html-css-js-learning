/*WAP a program that prints the number from 1 to 100. But for multiples
of 3 print fizz instead of the number and for multiples of 5 print buzz. For the
numbers which are both multiples of 3 and 5 then print fizzbuzz*/

var output = [];
var count = 1;

function fizzbuzz (){
    output.push(count);
    count++;
    
    if (count%3===0 && count%5===0){
        output.push("fizzbuzz")
    }
    else if (count%3===0)
    {
        output.push("fizz")
    }
    else if (count%5===0){
        output.push("buzz")
    }
    else{
        output.push(count)
    }

    console.log(output);
}
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
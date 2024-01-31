
for(i = 1; i <= 100; i++){
    // logs fizzbuzz if divisible by BOTH 3 and 5
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    // then logs fizz if divisible by 3
    } else if(i % 3 == 0){
        console.log("Fizz")
    // then logs buzz if divisible by 5
    } else if(i % 5 == 0){
        console.log("Buzz");
    } else{
        console.log(i);
    }
}
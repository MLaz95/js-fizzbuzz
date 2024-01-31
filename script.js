const containerElement = document.querySelector(".container")

// counts to 100 starting from 1
for(i = 1; i <= 100; i++){
    // creates the html element that will contain our info
    const newElement = document.createElement("div");

    // logs fizzbuzz if divisible by BOTH 3 and 5
    // and changes the value of newElement with the same info
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
        newElement.innerHTML = "FizzBuzz";
    // then logs fizz if divisible by 3
    } else if(i % 3 == 0){
        console.log("Fizz")
        newElement.innerHTML = "Fizz";
    // then logs buzz if divisible by 5
    } else if(i % 5 == 0){
        console.log("Buzz");
        newElement.innerHTML = "Buzz";
    } else{
        console.log(i);
        newElement.innerHTML = i;
    }

    // then takes newElement and adds it to its container in our html file
    containerElement.append(newElement);
}
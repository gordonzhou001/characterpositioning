function countLetters(input){
    //remove spaces between words
    var newinput = input.split(" ");
    newinput = newinput.join("")
    // do the loop
    var Output ={};
    var array = [];
    for (i = 0; i < newinput.length; i++){
        if (Output[newinput[i]])
        Output[newinput[i]].push(i);
        else {
            Output[newinput[i]] = [i];
        }
        // Output[newinput[i]] = array.push(i);
        // console.log(Output)
        // }
        console.log(Output)
    }
}
countLetters ("Lighthouse in the house");

// {
//     l:[0],
//     i:[1]
// }
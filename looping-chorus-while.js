// tinker file for while loops

// sing chorus x times
const chorus = "Let's dance!";
let repeat = 0;
while (repeat <10) {
    if (repeat === 5 ) { // check for key change
        console.log("*key change*");
    }
    console.log(chorus);
    repeat++
}
console.log("Until the Sun comes up!");

/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */



// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE

// Set vars for all sizes
const sW = 18;
const sL = 28;
const sV = 8.13;
const mW = 20;
const mL = 29;
const mV = 8.38;
const lW = 22;
const lL = 30;
const lV = 8.63;
const xlW = 24;
const xlL = 31;
const xlV = 8.88;
const xl2 = 26;
const xl2S = 33;
const xl2V = 9.63;
const xl3W = 28;
const xl3S = 33;
const xl3V = 10.13;
let size = "NA";

if ((shirtWidth >= sW && shirtWidth < mW) && (shirtLength >= sL && shirtLength < mL) && (shirtSleeve >= sV && shirtSleeve < mV)) {
	size = "S";
} else if ((shirtWidth >= mW && shirtWidth < lW) && (shirtLength >= mL && shirtLength < lL) && (shirtSleeve >= mV && shirtSleeve < lV)) {
	size = "M";
} else if ((shirtWidth >= lW && shirtWidth < xlW) && (shirtLength >= lL && shirtLength < xlL) && (shirtSleeve >= lV && shirtSleeve < xlV)) {
	size = "L";
} else if ((shirtWidth >= xlW && shirtWidth < xl2W) && (shirtLength >= xlL && shirtLength < xl2L) && (shirtSleeve >= xlV && shirtSleeve < xl2V)) {
	size = "XL";
} else if ((shirtWidth >= xl2W && shirtWidth < xl3W) && (shirtLength >= xl2L && shirtLength < xl3L) && (shirtSleeve >= xl2V && shirtSleeve < xl3V)) {
	size = "2XL";
} else if ((shirtWidth >= xl2W)  && (shirtLength >= xl2L) && (shirtSleeve >= xl2V)) {
	size = "3XL";
}

console.log(size);


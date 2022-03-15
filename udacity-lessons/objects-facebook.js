/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP -
// In an array,
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
const facebookProfile = {
  // object data
  name: "me",
  friends: 3,
  messages: ["well", "well!", "well!!"],

  // object functions
  postMessage: function(message) {
    this.messages.push(message);
    console.log(this.messages); // print updates
  },
  deleteMessage: function(index) {
    this.messages.splice(index,1);
    console.log(this.messages);
  },
  addFriend: function() {
    this.friends ++;
    console.log(this.friends);
  },
  removeFriend: function() {
    if (this.friends > 0) {
      this.friends --;
    }
    console.log(this.friends);
  }
}

facebookProfile.postMessage("we meet again");
facebookProfile.deleteMessage(1);
facebookProfile.addFriend();
facebookProfile.addFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
const umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
    if (umbrella.isOpen) {
      return "The umbrella is already open!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  close: function() {
    if (!umbrella.isOpen) {
      return "The umbrella is already closed."
    } else {
      umbrella.isOpen = false;
      return "The umbrella is now closed."
    }
  }
}

console.log(umbrella.open());
console.log(umbrella.close());

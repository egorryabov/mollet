let div = document.getElementById('myDiv');

// An event listener can be a function.
function eventFunction() {
  // Do something.
}

// Add event listener.
div.addEventListener('click', eventFunction);

// Remove event listener.
div.removeEventListener('click', eventFunction);

// An event listener can be an object.
let listenerObject = {
  handleEvent: function(e) {
    // Do something.
  }
};

// Add event listener.
div.addEventListener('click', listenerObject);

// Remove event listener.
div.removeEventListener('click', listenerObject);

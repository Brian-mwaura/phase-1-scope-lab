// Write your solution in this file!
var customerName; // Declaring a variable in global scope

function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase(); // Accessing and modifying the global variable
  }
}

function setBestCustomer() {
  bestCustomer = 'not bob'; // Declaring a global variable from inside a function
}

function overwriteBestCustomer() {
  bestCustomer = 'someone else'; // Modifying the global variable
}

const leastFavoriteCustomer = 'initial value'; // Declaring a constant in global scope

function changeLeastFavoriteCustomer() {
  // Attempting to change the constant - this will result in an error
  leastFavoriteCustomer = 'new value';
}
// Task 1: Declare global variable customerName
var customerName = 'bob';

// Task 2: Write upperCaseCustomerName function
function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

// Task 3: Write setBestCustomer function
function setBestCustomer() {
    var bestCustomer = 'not bob';
    console.log(bestCustomer);  // Log the value of bestCustomer
}

// Task 4: Write overwriteBestCustomer function
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    console.log(bestCustomer);  // Log the value of bestCustomer after modification
}

// Task 5: Declare constant leastFavoriteCustomer
const leastFavoriteCustomer = 'John';

// Task 6: Try to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    try {
        leastFavoriteCustomer = 'Alice';  // This will throw an error
    } catch (error) {
        console.log('Error:', error.message);  // Log the error message
    }
}

// Call the functions and log their results
console.log(upperCaseCustomerName());  // Output of upperCaseCustomerName
setBestCustomer();  // This will log inside the function
overwriteBestCustomer();  // This will log inside the function
changeLeastFavoriteCustomer();  // This will log the error message


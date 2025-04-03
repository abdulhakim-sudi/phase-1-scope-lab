// Task 1: Declare global variable customerName
var customerName = 'bob';

// Task 2: Write upperCaseCustomerName function
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();  // Modify the global customerName variable
    return customerName;  // Return the modified variable
}

// Task 3: Write setBestCustomer function
function setBestCustomer() {
    bestCustomer = 'not bob';  // Declare in the global scope directly
    return bestCustomer;  // Return bestCustomer to match the test
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
        throw error; // Rethrow the error so the test can catch it
    }
}

// Call the functions and log their results
console.log(upperCaseCustomerName());  // Output of upperCaseCustomerName
setBestCustomer();  // This will log inside the function
overwriteBestCustomer();  // This will log inside the function
changeLeastFavoriteCustomer();  // This will log the error message

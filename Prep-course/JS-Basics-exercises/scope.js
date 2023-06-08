// 1. Hello world! - var gets hoisted in global scope X

// 2. Nothing - let isn't hoisted so variable is not declared at the log statement

// 3. Reference error - variable is scoped to the if block and not avaialble outside

// 4. 1 - if will always run, and it will have access to the variable in its outer scope

// 5. Reference error - trying to access variable in block scope before initialisation

// 6. false - b is reinitialised in the if block and the log statement only has access to the global scoped b

// 7. 1 - function has access to the global scoped variable

// 8. 2 - variable in argument has no relation to the named variable, and will log the value passed in

// 9. Assignment to constant variable - a is declared with const and can't be changed

// 10. {firstName: Jane, lastName: Doe} - funciton has access to globally scoped variable, and objects declared with const can still have properties changed

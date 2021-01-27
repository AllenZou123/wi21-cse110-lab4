# Part 1 responses
1. The value of i gets printed to the console (which is 3). This is because i is defined using var in the for loop, which means variable i is defined in the scope of the discountPrices funciton itself (var ignores blocks, which is why the variable i is used in the scope of the function).  
2. Similarly to i in the previous question, discountedPrice gets printed out in the console (150) because it's defined in the scope of the discountPrices using var.    
3. Same as above, except this time finalPrice isn't defined using var. It prints out 150 because even without the var because the variable finalPrice will still ignore the block it's in (the for loop), which allows it to be used in the scope of the discountPrices function.  
4. The function returns the list [ 50, 100, 150 ]. We know that all the variables in the discountPrices exist in the scope of the function itself. What happens is that the function will loop through all variables in the prices list and change them to their discounted value based on the discount value (stored in a new list called discounted that gets returned at the end of the fucntion call). The value of the discounted price is also rounded to two decimal places.  
5. An error gets printed out. Unlike var, let only allows the variable i to live in the scope of the for loop. Line 11 in the image is outside of the for loop, so we can't use i.    
6. Same thing will happen here. discountedPrice is defined using let inside the scope of the for loop, which means an error will be printed when we try to access the variable outside the loop.  
7. Similar to the result in question 3, the value of finalPrice should get printed to the console (150). This is because we didn't define the variable using let nor var, but JavaScript treats this case like var, allowing the variable to be used in the scope of the discountPrices function instead of only the for loop.  
8. This function won't end up returning anything because it will reach an error at line 11. This is because in question 5, we discussed that i is defined using let, which makes it so i can't be used outside the scope of the for loop.  
9. The same thing will happen as in question 5. Unlike var, let only allows the variable i to live in the scope of the for loop. Line 11 in the image is outside of the for loop, so we can't use i.   
10. In terms of scope, the const declaration behaves like let. const still won't allow discountedPrice to be used outside the scope of the for loop, so this line will cause an error.  
11. finalPrice is defined outside the for loop, so it can be used in the scope of the discountPrices function. Because line 13 is also in the scope of the function, finalPrice should also be printed out without an error.  
12. Calling this function will once again cause an error, but this time the error occurs at line 7 because the first illegal access occurs there. The error isn't caused by out of scope access because finalPrice is defined in the scope of the function. Rather, the error is caused by trying to modify the constant finalPrice.  
13A. student.name
13B. student['Grad Year']
13C. student.greeting();
13D. student['Favorite Teacher'].name
13E. student.courseLoad[0]
14A. '32' is printed out because the + is used as a concatenation due to the using the string '3'
14B. 1 is printed out because - is a mathematical operation that will cause '3' to be converted to a 3
14C. 3 is printed out because null converts to a 0 for its numeric value
14D. '3null' is printed out because + seems to be treated as concatenation here again because the string '3' is used
14E. 4 is printed out because true converts to a 1 for its numeric value
14F. 0 is printed out because no strings are used this time, meaning that + is treated as the normal mathematical operator. false and null both get converted to 0s
14G. '3undefined' is printed out because this is another case of using + as the concatenation operator due to "3" being a string
14H. NaN is printed out because undefined converts to NaN in a mathematical operation
15A. This prints out true because we convert '2' to 2, which is greater than 1. This conversion occurs because there's a number in the comparison
15B. This prints out false because we're comparing two strings, which causes JavaScript to compare letters. '1' is > '2', which will cause '2' < '12' to be false.
15C. This prints out true because we're comparing a string to a number, which causes the string '2' to be converted. 2 does equal 2, which prints out true
15D. This prints out false because === is a strict equality checker. Because the types of these two things were comparing aren't the same, this will evaluate to false
15E. This prints out false because true converts to 1, which isn't equal to 2
15F. This prints out true because the function Boolean(2) returns true, which is still a boolean. We're essentially comparing true to true, which are the exact same thing, which is why this prints out true
16. === is a strict equality operator while == is just a normal equality test. The difference is that === will not convert types when checking for equality while == does

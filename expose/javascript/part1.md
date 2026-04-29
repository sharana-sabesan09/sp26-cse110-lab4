### Answers to Part 1

**I accidentally fixed the buggy code first, I will do my best to stick to the lan!**

1. Line 9 prints the result of adding the parameters: num1 and num2 together. In this case, 20 is what would be printed. There is no error in this case. Here is what is explicitly printed:

"value added: 20"

2. Line 13 also prints the same result: 20. Even though var is declared in the if statement block, it leaks out and is still acessible outside. 

"final result: 20" 

3. Var has unpredictable behavior. In the code above, yes we are not throwing errors, but the var value leaking outside if the if statement is not a good thing. It is hard to debug as well, if a leaked var somehow overwrites the value of another variable. 

4. Line 9 prints successfully and throws no errors: 

"values added: 20"

5. This throws an error because the result is not defined outside of the if statement block above. 

6. This throws an error or will end up just printing 0, as a const variable cannot be changed: 

"values added: 0"

7. This throws an error because the result is not defined outside of the if statement block above. 
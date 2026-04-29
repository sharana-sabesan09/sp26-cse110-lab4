### Answers to Part 2

1. This line will print 3. The loop runs 3 times. Because i is declared with var, it leaks out of the for loop and can be printed. 

2. This line prints 150. 300 * (1 - 0.5) = 150. Because discountedPrice is declared with var inside the for loop, it leaks out of the for loop and can be printed. 

3. This line prints 150. Math.round(150 * 100) / 100 = 150. Because finalPrice is declared with var inside the for loop, it leaks out of the for loop and can be printed. 

4. This function returns an array called discounted with the discounted prices: [50, 100, 150]. Because the discount is 50%, it would be half of the values from the original prices value! 

5. We will get a reference error, because i is not defined. i is declared with let in the for loop header. It does not exist outside of the for loop. 

6. We will get a reference error, because discountedPrice is not defined. discountedPrice is declared with let in the for loop. It does not exist outside of the for loop. 

7. This will print 150. finalPrice is defined outside of the for loop, so there is no reference error. 

8. This function returns an array called discounted with the discounted prices: [50, 100, 150]. Because the discount is 50%, it would be half of the values from the original prices value! Discounted array is defined outside of the for loop, so again we do not run into any errors. 

9. We will get a reference error, because i is not defined. i is declared with let in the for loop header. It does not exist outside of the for loop. 

10. This will print 3, because length is declared with const outside of the for loop hence why it can be referenced in the function without any errors. It also does not get changed. 

11. This function returns an array called discounted with the discounted prices: [50, 100, 150]. Because the discount is 50%, it would be half of the values from the original prices value! Because const is redeclare every loop iteration, we do not run into ny errors around changing the value of the const var. 

12. 
- A: 
    - student.name
- B: 
    - student['Grad Year']
- C: 
    - student.greeting()
- D: 
    - student['Favorite Teacher'].name
- E:
    - student.courseLoad[0]

13. 
- A: 
    - Output is ('32'). This triggers string concatenation. 2 is converted to a string. 
- B: 
    - Output is (1). Minus sign does not have a string version, so '3' is converted to a number. 
- C: 
    - Output is (3). Null converts to 0.
- D: 
    - Output is ('3null'). The addition sign, converts null into a string. 
- E:
    - Output is (4). True converts to a 1. 
- F:
    - Output is (0). False converts to 0, and null converts to 0. 
- G:
    - Output is ('3undefined'). Due to the addition sign, the undefined gets converted to a string. 
- H:
    - Output is (NaN). '3' gets converted to 3, and undefined converts to Nan. If you subtract both, you still end up with Nan.

14. 
- A:
    - Output is true. '2' gets converted into a number! 
- B:
    - Output is false. Both are string so you compare using alphabetical order. '2' > '1' in 12. 
- C:
    - Output is true. Converts '2' to 2. This is a loose check. 
- D:
    - Output is false. This a strict check: nummber != to a string. 
- E: 
    - Output is false. True converts to 1. 1 and 2 are not equal. 
- F:
    - Output is true. Boolean(2) is true, any non zero number is true. 

15. == is the loose equality operator. It converts both values to the same type. === is the strict equality operator. It compares value and type, with no type conversion. I think its probably better to use === to avoid unexpected bugs caused by automatic type coercion. 

16. CODE DONE

17. The result would be [2, 4, 6]. modifyArray creates an empty array called newArr. It loops through the given array: [1, 2, 3], and calls the callback function for each element. Because the callback function: doSomething, doubles the element value, we end up with [2, 4, 6]. Each result is pushe into the newArr, and then the entire array is returned. 

18. CODE DONE

19. 
- OUTPUT is shown below. JS only runs things one a time. setTimeout, despite the delay, always goes to an async queue. It does not run till the sync code finished. 
- 1 is printed immediately. setTimeout for 1000ms for printing 2, so 2 waits. Next is logging 3, which has no delay, but it still goes to the queue. After this line 4 is printed immediately. Then 3, and lastly 2.

***Output:***
1
4
3
2




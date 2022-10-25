firstOperand
secondOperand
operator

Test Case: 2 + 3 + 4 = 9

STEP 1
User presses the 2 button
firstOperand = 2

STEP 2
User presses the "+" button
secondOperand = null
operator = "+"

STEP 3
User presses the 3 button
secondOperand = 3

STEP 4
User presses the "+" button
displays the number 5

firstOperand = 5
secondOperand = null
operator = "+"

Test Case 2: 4 + 3 \* 7 - 14 / 7 = 5

STEP 1
User presses the 4 button
firstOperand = 4

STEP 2
User presses the "+" button
operator = "+"

STEP 3
User presses the 3 button
secondOperand = 3

STEP 4
User presses the "\*" button
displays 7; firstOperand = 7
secondOperand = null
operator = "\*"

STEP 5
User presses the 7 button
firstOperand = 7; secondOperand = 7

STEP 6
User presses the "-" button
displays 49; firstOperand = 49
secondOperand = null
operator = "-"

STEP 7
User presses the "14" buttons
firstOperand = 49; secondOperand = 14
operator = "-"

STEP 8
User presses "/" button
firstOperand = 35; secondOperand = null
operator = "/"

STEP 9
User presses 7 button
firstOperand = 35; secondOperand = 7
operator = "/"

STEP 10
User presses "=" button
firstOperand = 5; secondOperand = null

Notes: 10/19
//Got it to display 7, but when pressing \* and 7, it does not say 49, it concatenates (to "37")--probably occurring within setInputValue function

Notes: 10/21
//When another operator is pressed, calculate the two operands and assign this value to firstOperand, assign secondOperand to null.

10/24: Decimals--Test Case 1

1 / 3 = 0.333

STEP 1: Press the 1 button
Expected: 1 appears in display
Result: it works!

STEP 2: Press the "/" button
Expected: Nothing--1 still shows in display
Result: It works

STEP 3: Press the 3 button
Expected: 3 appears in display
Result: IT WORKS!

STEP 4: Press the equals button
Expected: 0.333 appears in display
Result: It does not work

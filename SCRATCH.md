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

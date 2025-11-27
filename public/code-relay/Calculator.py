"""
Calculator
- Get the user input for 2 numbers
- Get the user input for the operation
- Print out the sum/difference/product/quotient
"""
# Input
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

# Operation choice
print("Choose an operation: +, -, *, /")
op = input("Operation: ")

# if statements (can be split)
if op == "+":
    print("Result:", num1 + num2)
elif op == "-":
    print("Result:", num1 - num2)
elif op == "*":
    print("Result:", num1 * num2)
elif op == "/":
    if num2 != 0:
        print("Result:", num1 / num2)
    else:
        print("Error: Division by zero")
else:
    print("Invalid operation.")

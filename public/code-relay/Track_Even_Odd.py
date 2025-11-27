"""
Even or Odd
- Get the user input for 10 numbers
- Check if the number is odd
- Check if the number is even
- Print out the total number of odd/even numbers
"""

# Loop user input 10 times
numbers = []
for _ in range(10):
    num = int(input("Enter a number: "))
    numbers.append(num)

# Keep track of even numbers
evens = 0
for num in numbers:
    if num % 2 == 0:
        evens += 1

# Print Result
odds = len(numbers) - evens
print("Even numbers:", evens)
print("Odd numbers:", odds)
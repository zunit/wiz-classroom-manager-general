"""
Pyramid Builder
- Get the user input for the height and make a variable for the emoji (building block for the pyramid)
- Make a function to convert celsius kelvin
- Make a list of temperatures to convert
- Make a for loop to convert all the temperatures to F/K
"""
# Variables
height = int(input("How tall do you want the pyramid to be: "))
block = "🟪"

#Loop
for level in range(1, height + 1):
    blocks = block * (2 * level - 1)
    padding = " " * (height - level)
    print(padding + blocks + padding)
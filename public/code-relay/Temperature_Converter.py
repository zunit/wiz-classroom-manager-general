"""
Temperature converter
- Make a function to convert celsius to fahrenheit
- Make a function to convert celsius kelvin
- Make a list of temperatures to convert
- Make a for loop to convert all the temperatures to F/K
"""
# function celsius to fahrenheit
def c_to_f(c):
    return c * 9 / 5 + 32

# function celsius to kelvin
def c_to_k(c):
    return c + 273.15

# list of temperatures
temps_c = [0, 20, 37, 100]

# loop & output section
print("C to F", "F to K")
for c in temps_c:
    print(c_to_f(c), " ", c_to_k(c))


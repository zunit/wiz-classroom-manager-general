"""
Countdown
- Get the user input for the staring number
- Print out the countdown
- Print 'Lift off!'
"""
# Input
start = int(input("Countdown from what number? "))

# Countdown
while start > 0:
    print(start)
    start -= 1

print("Lift off!")

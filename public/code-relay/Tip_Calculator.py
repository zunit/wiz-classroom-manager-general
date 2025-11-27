"""
Tip Calculator
- Get the user input for the cost of the meal
- Get the user input for the percent amount
- Print the output
"""
# Input
cost = float(input("Enter the meal cost: $"))
tip_percent = int(input("Tip percent (i.e.., 15 for 15%): "))

# Calculate
tip = cost * tip_percent / 100
total = cost + tip

# Output
print("Tip: $", round(tip, 2))
print("Total bill: $", round(total, 2))
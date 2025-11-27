"""
Initials
- Get the user input for their first and last name
- Print out their initials
"""
# Input
first = input("First name: ")
last = input("Last name: ")

# Output
print("Your initials are:", first[0].upper() + last[0].upper())

# # Alternative method without using .upper()
# initials = first[0] + last[0]
# print("Your initials are:", initials)

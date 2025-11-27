"""
Counting Letter
- Get the user input for the word and letter they want to count
- Count how many letters are in the word
- Print out the total number of letters in the word
"""
# Input
word = input("Enter a word: ")
letter = input("Enter a letter to count: ")

# Count number of letters in the word
count = 0
for char in word:
    if char == letter:
        count += 1


# Print Results
print("Count:", count)
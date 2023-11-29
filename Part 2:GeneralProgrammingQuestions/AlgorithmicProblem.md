# Algorithmic Problem (10 points):

### ● Implement a function in a language of your choice that checks if a given string is a palindrome.

### Python Code

```
def is_palindrome(s):
    # Convert the string to lowercase and remove non-alphanumeric characters
    cleaned_string = ''.join(char.lower() for char in s if char.isalnum())
    # Check if the cleaned string is equal to its reverse
    return cleaned_string == cleaned_string[::-1]
input_string = input()
result = is_palindrome(input_string)
if result:
    print(f"{input_string} is a palindrome.")
else:
    print(f"{input_string} is not a palindrome.")
```

This code first cleans the input string by converting it to lowercase and removing non-alphanumeric characters. Then, it checks if the cleaned string is equal to its reverse, which determines if the original string is a palindrome. The example usage shows how to use the function with a sample string.

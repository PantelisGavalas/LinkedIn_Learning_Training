# Use a set to count unique items
# define a set of items that we want to reduce duplicates
items = ["apple", "pear", "orange", "banana", "apple",
         "orange", "apple", "pear", "banana", "orange",
         "apple", "kiwi", "pear", "apple", "orange"]

# TODO: create a set to perform a filter
# my_set = set(items) # this automatically converts the list to a set
unique_items = set()

# TODO: loop over each item and add to the set
for item in items:
    unique_items.add(item)
print(unique_items)

# TODO: Count the unique letters in a sentence
sentence = "The quick brown fox jumps over the lazy dog."
unique_letters = {char for char in sentence.lower() if char.isalnum()}
print(unique_letters)

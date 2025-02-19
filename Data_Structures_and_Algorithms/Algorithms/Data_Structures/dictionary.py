my_dict = {
    'key1': 1,
    'key2': 2,
    'key3': 3,
}
print(my_dict)

# Add key-value to the Dictionary
my_dict['key4'] = 444
print(my_dict)

# Modify value of specific key in the Dictionary
my_dict['key4'] = 4
print(my_dict)

# Access non-existent key
#print(my_dict['key555'])    # ERROR

# Iterate key, value pairs from the Dictionary
for key, value in my_dict.items():
    print(f'Key = {key} -- Value = {value}')

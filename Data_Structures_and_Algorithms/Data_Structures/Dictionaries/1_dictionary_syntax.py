# Key: State
# Value: Capital

states_to_capitals = {
    'Texas': 'Austin',
    'New York': 'Albany',
}

print(states_to_capitals['Texas'])


# Get keys, values or both
print(states_to_capitals.keys())
print(states_to_capitals.values())
print(states_to_capitals.items())

for key, value in states_to_capitals.items():
    print(f'Key = {key} and Value = {value}')


# Mutate a dictionary
user_preferences = {
    'language': 'English',
    'font_size': '14px',
    'timezone': 'GMT',
    'currency': 'USD',
    'enable_location': False,
    'volume_level': 80,
    'date_format': 'MM/DD/YYYY'
}

user_preferences['volume_level'] = '50'
user_preferences['language'] = 'Spanish'
print(user_preferences['language'])
print(user_preferences['volume_level'])

# Add a key-value to the dictionary
user_preferences['highlight_color'] = 'yellow'
print(user_preferences['highlight_color'])


# Delete a key-value from the dictionary
del user_preferences['currency']    # doesn't retrieve the item
removed_item = user_preferences.pop('date_format')
print(removed_item)

print(user_preferences)
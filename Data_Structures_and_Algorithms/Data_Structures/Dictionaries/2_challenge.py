user_preferences = {
    "timezone": "GMT",
    "language": "English",
    "notifications": None,
    "currency": "USD",
    "theme": None
}


def update_preferences(user_pref):
    '''
    new_dict = {}
    for key, value in user_pref.items():
        if value:
            new_dict[key] = value

    return new_dict
    '''
    return {key: value for key, value in user_pref.items() if value}


print(update_preferences(user_preferences))

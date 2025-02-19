# Searching in a list
my_list = [8, 5, 0, 3, 9, 7]
my_value = 7


def search_list(value, listy):
    for item in listy:
        if item == value:
            return True

    return False


print(search_list(my_value, my_list))

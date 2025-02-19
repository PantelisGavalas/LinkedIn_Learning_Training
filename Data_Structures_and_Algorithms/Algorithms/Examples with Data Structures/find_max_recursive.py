# Use a recursive algorithm to find a maximum value
def find_max(itemlist):
    # TODO: breaking condition: last item in list? return it
    if len(itemlist) == 1:
        return itemlist[0]

    # TODO: otherwise get the first item and call function
    # again to operate on the rest of the list
    first_item = itemlist[0]
    rest_items_max = find_max(itemlist[1:])

    # TODO: perform the comparison when we're down to just two
    if first_item > rest_items_max:
        return first_item
    else:
        return rest_items_max


# declare a list of values to operate on
items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
# test the function
print(find_max(items))

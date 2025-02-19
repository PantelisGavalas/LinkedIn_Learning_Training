# Return index of item if found in the List else return None
def find_item(itemlist, val):
    for i, item in enumerate(itemlist):
        if item == val:
            return i
    return None


items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
print(find_item(items, 87))
print(find_item(items, 250))

# Return index of item if found in the List else return None
def binary_search(itemlist, item):
    # get the list size
    list_size = len(itemlist) - 1
    # start at the two ends of the list
    lower_index = 0
    upper_index = list_size

    while lower_index <= upper_index:
        # TODO: calculate the middle point
        # // is the floor division. It rounds the result down to the nearest whole number
        mid_point = (lower_index + upper_index) // 2

        # TODO: if item is found, return the index
        if item == itemlist[mid_point]:
            return mid_point

        # TODO: otherwise get the next midpoint
        if item > itemlist[mid_point]:
            lower_index = mid_point + 1
        else:
            upper_index = mid_point - 1

    # If the while loop is exited and the indexes
    # have crossed the value is not in our list
    if lower_index > upper_index:
        return None


items = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87]
print(binary_search(items, 87))
print(binary_search(items, 250))
print(binary_search(items, 23))
print(binary_search(items, 21))

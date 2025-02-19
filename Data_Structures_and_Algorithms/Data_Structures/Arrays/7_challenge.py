# Find the second-smallest element in a list
def find_second_smallest(listy):
    my_num = max(listy)
    my_min = min(listy)
    for item in listy:
        if my_num > item > my_min:
            my_num = item
    return my_num


my_list = [5, 8, 3, 2, 6]
print(find_second_smallest(my_list))

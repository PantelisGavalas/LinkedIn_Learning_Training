# Sorting a list
my_list = [8, 5, 0, 3, 9, 7]
print(f'List: {my_list}')

# Sort in default = ASCENDING order
sorted_list = sorted(my_list)
print(f'Sorted List: {sorted_list}')

# Sort in DESCENDING order
desc_list = sorted(my_list, reverse=True)
print(f'Descending List: {desc_list}')

# Sort List of Tuples
student_grades = [('Sarah', 89), ('Rebecca', 82), ('Matt', 91)]
print(sorted(student_grades))   # sorting based on names
print(sorted(student_grades, key=lambda x: x[1], reverse=True))     # sort based on grade from big to low

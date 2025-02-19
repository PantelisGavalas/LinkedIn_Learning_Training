# A set of primary colors
primary_colors = {'red', 'blue', 'yellow'}

color = 'yellow'
if color in primary_colors:
    print(color + ' is a primary color!')
else:
    print(color + ' is not a primary color!')


# Add item in a set
letters = {'a', 'b'}
letters.add('c')
print('c added' if 'c' in letters else 'c not added')
print(letters)


# Operations in Sets
set_A = {10, 20, 30, 40, 50}
set_B = {30, 40, 50, 60, 70}

union_set = set_A.union(set_B)
print(union_set)

intersection_set = set_A.intersection(set_B)
print(intersection_set)

difference_set_AB = set_A.difference(set_B)
print(difference_set_AB)
difference_set_BA = set_B.difference(set_A)

symmetric_difference_set_AB = set_A.symmetric_difference(set_B)
print(symmetric_difference_set_AB)

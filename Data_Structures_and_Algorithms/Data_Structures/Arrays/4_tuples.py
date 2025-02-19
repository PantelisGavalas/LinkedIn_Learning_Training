# Immutable Collection of items
point = (5, 2)
# Indexing for access
x = point[0]
y = point[1]


# Area in perimeter of square
def square_properties(side_length):
    area = side_length ** 2
    perimeter = 4 * side_length
    return area, perimeter  # returns a tuple


result = square_properties(5)
print(f'Area = {result[0]} and Perimeter = {result[1]}')

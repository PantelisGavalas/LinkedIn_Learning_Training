# Multidimensional List
seating_chart = [
    ["Sarah", "Claire", "Ben", "Taylor", "Eva"],
    ["Frankie", "George", "Lindsey", "Izzy", "Jack"],
    ["Katherine", "Lauren", "Mary", "Nathan", "Olive"],
    ["Chad", "April", "Matt", "Thomas", "Penny"]
]

# 2nd student from 3rd row
print(seating_chart[2][1])  # row_index = 2 ,  student_index = 1

# Each student with their row and seat number
for i, row in enumerate(seating_chart):
    for j, column in enumerate(row):
        print(f'{column} is seated in row {i+1} and seat {j+1}.')
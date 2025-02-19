# Mutation of a list
student_pets = [0, 1, 0, 2, 1, 1, 4, 0, 0, 0, 3, 2, 1, 3, 0, 2, 2, 4]

# The second, third and last kids got one extra pet each
student_pets[1] += 1
student_pets[2] += 1
student_pets[-1] += 1
print(student_pets)

# A new student came with 4 pets
student_pets.append(4)
print(student_pets)

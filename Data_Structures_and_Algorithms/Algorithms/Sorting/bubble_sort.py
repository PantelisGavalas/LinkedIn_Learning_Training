def bubble_sort(dataset):
    for i in range(len(dataset)-1, 0, -1):
        for j in range(i):
            if dataset[j] > dataset[j+1]:
                tmp = dataset[j]
                dataset[j] = dataset[j+1]
                dataset[j+1] = tmp
        print(f'Current state = {dataset}')
    return dataset


list1 = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
print("Start: ", list1)
sorted_list1 = bubble_sort(list1)
print("Result: ", sorted_list1)

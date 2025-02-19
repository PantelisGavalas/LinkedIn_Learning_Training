def merge(set1, set2):
    merged_set = []
    a1 = 0
    a2 = 0
    while a1 < len(set1) and a2 < len(set2):
        if set1[a1] < set2[a2]:
            merged_set.append(set1[a1])
            a1 += 1
        else:
            merged_set.append(set2[a2])
            a2 += 1
    if a1 == len(set1):
        while a2 < len(set2):
            merged_set.append(set2[a2])
            a2 += 1
    else:
        while a1 < len(set1):
            merged_set.append(set1[a1])
            a1 += 1
    return merged_set


def mergesort(dataset):
    if len(dataset) == 1:
        return dataset
    else:
        list1 = mergesort(dataset[:int(len(dataset) / 2)])
        list2 = mergesort(dataset[int(len(dataset) / 2):])
        return merge(list1, list2)


items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

# test the merge sort with data
print(items)
sorted_items = mergesort(items)
print(sorted_items)

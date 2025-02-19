def partition(datavalues, first, last):
    # TODO: choose the first item as the pivot value
    pivot_value = datavalues[first]

    # TODO: establish the upper and lower indexes
    lower = first + 1
    upper = last

    # start searching for the crossing point
    done = False
    while not done:
        # TODO: advance the lower index
        while lower <= upper and datavalues[lower] <= pivot_value:
            lower += 1

        # TODO: advance the upper index
        while upper >= lower and datavalues[upper] >= pivot_value:
            upper -= 1

        # TODO: if the two indexes cross, we have found the split point
        if upper < lower:
            done = True
        else:
            temp = datavalues[lower]
            datavalues[lower] = datavalues[upper]
            datavalues[upper] = temp

    # TODO: when the split point is found, exchange the pivot value
    temp = datavalues[first]
    datavalues[first] = datavalues[upper]
    datavalues[upper] = temp

    # TODO: return the split point index
    return upper


def quick_sort(dataset, first, last):
    if first < last:
        # calculate the split point
        pivotIdx = partition(dataset, first, last)
        # now sort the two partitions
        quick_sort(dataset, first, pivotIdx - 1)
        quick_sort(dataset, pivotIdx + 1, last)
        return dataset


items = [20, 6, 8, 53, 56, 23, 87, 41, 49, 19]
# test the quick sort with data
print(items)
sorted_items = quick_sort(items, 0, len(items) - 1)
print(sorted_items)

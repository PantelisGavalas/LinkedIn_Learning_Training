from collections import deque
# Implementation of a Queue using a Deque.
queue = deque()

# Push items in the Queue
queue.append(1)
queue.append(2)
queue.append(3)
queue.append(4)

# Print Queue contents
print(queue)

# Remove - pop item from Left of the Queue
popped_item = queue.popleft()
print(popped_item)
print(queue)

# Remove - pop item from Right of the Queue
popped_item_2 = queue.pop()
print(popped_item_2)
print(queue)

from collections import deque

# Create a stack as a deque
history_stack = deque()

# Add items in the stack
history_stack.append('https://google.com')
history_stack.append('https://linkedin.com')
history_stack.append('https://stackoverflow.com')

# Pop item from the stack
print(history_stack.pop())

# See top of stack without removing it
print(history_stack[-1])

# Check if stack is empty
if not history_stack:  # equal to:  if len(history_stack) == 0
    print('History stack is empty')
else:
    print(f'stack length = {len(history_stack)}')

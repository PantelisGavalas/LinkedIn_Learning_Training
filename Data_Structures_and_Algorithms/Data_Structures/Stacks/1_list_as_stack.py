card_stack = []

# Add items in the Stack
card_stack.append("Jack of Hearts")
card_stack.append("2 of Diamonds")
card_stack.append("Ace of Spades")
# front(bottom) -------- back (top)

# Pop the top item from the stack
top_card = card_stack.pop()
print(top_card)

# See the top item without popping it
top_card = card_stack[-1]
print(top_card)

# Check if stack is empty
if not card_stack:  # equal to:  if len(card_stack) == 0
    print('Card stack is empty')
else:
    print(f'stack length = {len(card_stack)}')

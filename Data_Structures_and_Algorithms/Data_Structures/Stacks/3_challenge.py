from collections import deque


def check_matching_parentheses(s):
    my_num = 0
    my_stack = deque()
    for char in s:
        my_stack.append(char)
    for i in range(len(my_stack)):
        my_char = my_stack.pop()
        if my_char == '(':
            my_num += 1
        elif my_char == ')':
            my_num -= 1
        if my_num > 0:
            return False
    if my_num == 0:
        return True
    else:
        return False


print(check_matching_parentheses("()"))
print(check_matching_parentheses("(hi there)"))
print(check_matching_parentheses("(hell)o"))
print(check_matching_parentheses("((linkedin)) learning"))

print(check_matching_parentheses("(hi(there"))
print(check_matching_parentheses("()ok)"))
print(check_matching_parentheses("((increment)"))
print(check_matching_parentheses(")linkedin()"))

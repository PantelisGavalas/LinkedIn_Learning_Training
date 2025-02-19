# Use a stack to see if a programming statement is balanced
def is_balanced(my_str):
    # TODO: Your code goes here
    statement_stack = []
    for char in my_str:
        # if we open a (), [], {} then add it to the stack
        if char in ['(', '[', '{']:
            statement_stack.append(char)

        # if we close a (), [], {} then:
        if char in [')', ']', '}']:
            # check if stack is empty.
            # if it is empty then we try to close something that never opened --> FALSE
            if len(statement_stack) == 0:
                return False

            # Otherwise, if the top stack element is not
            # the matching to close of our current character --> FALSE
            test_char = statement_stack.pop()
            if test_char == ')' and char != '(':
                return False
            elif test_char == ']' and char != '[':
                return False
            elif test_char == '}' and char != '{':
                return False
    # If we still have characters after going through all of them:
    # of them --> there are open (, [, { that did not close --> FALSE
    if len(statement_stack) > 0:
        return False
    else:
        return True


test_statements = [
    "print('Hello World!')",
    "a(x[i]) == b(x[i])",
    "{c for c in a(x)}",
    "Hello!)",
    "(This is not [balanced)",
    "{{{[[(())]}}",
    "(",
    "}",
    "([Hello there! ]"
]

for statement in test_statements:
    print(f'"{statement}" balanced: {is_balanced(statement)}')

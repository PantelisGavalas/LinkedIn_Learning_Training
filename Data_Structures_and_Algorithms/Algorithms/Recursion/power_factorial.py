# num ** a with Recursion
def power(base, pow):
    if pow < 0:
        return base ** pow
    elif pow == 0:
        return 1
    else:
        return base * power(base, pow-1)


# num! with Recursion
def factorial(num):
    if num < 0:
        return
    elif num <= 1:
        return num
    else:
        return num * factorial(num-1)


print(power(4, 0))
print(power(4, 2))
print(power(4, 3))
print(power(10, 10))

print()

print(factorial(0))
print(factorial(4))
print(factorial(7))
print(factorial(10))

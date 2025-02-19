def my_func(n):
    c = 0
    while n >= 0:
        n = n - 2
        c = c + n - 2
    return c


print(my_func(1))
print(my_func(3))
print(my_func(5))
print(my_func(7))
print(my_func(9))
print(my_func(11))
print(my_func(13))


print('\n')
print(my_func(0))
print(my_func(2))
print(my_func(4))
print(my_func(6))
print(my_func(8))
print(my_func(10))
print(my_func(12))
print(my_func(15))
print(my_func(129))

for i in range(1000):
    print(my_func(i))

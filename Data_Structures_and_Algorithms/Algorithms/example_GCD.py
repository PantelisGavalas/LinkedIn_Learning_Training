def gcd(a, b):
    big = max(a, b)
    small = min(a, b)
    if big % small == 0:
        return small
    else:
        return gcd(small, big % small)


print(gcd(20, 8))
print(gcd(60, 96))

def countdown(num):
    if num < 0:
        return
    if not num:
        print("Happy New Year!")
        return
    else:
        print(f'{num}...')
        countdown(num-1)


countdown(5)

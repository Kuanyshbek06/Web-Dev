x = int(input())
d = int(input())

count = 0

while x > 0:
    digit = x % 10
    if digit == d:
        count += 1
    x = x // 10

print(count)
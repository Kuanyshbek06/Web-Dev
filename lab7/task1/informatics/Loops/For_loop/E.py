x = int(input())


count = 0

while x > 0:
    digit = x % 10
    count += digit
    x = x // 10

print(count)
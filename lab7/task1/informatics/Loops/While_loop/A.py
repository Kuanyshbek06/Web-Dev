a = int(input())

for i in range(1, a + 1):
    if int(i ** 0.5) ** 2 == i:
        print(i, sep="\n")
        
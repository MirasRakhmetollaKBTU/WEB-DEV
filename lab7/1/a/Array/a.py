array = [int(x) for x in input().split()]

for i in range(len(array)):
    if i % 2 == 0:
        print(array[i], end=' ')
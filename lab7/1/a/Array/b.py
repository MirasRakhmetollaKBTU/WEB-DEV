array = [int(x) for x in input().split()]

for i in range(len(array)):
    if array[i] % 2 == 0:
        print(array[i], end=' ')
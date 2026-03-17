array = [int(x) for x in input().split()]

for i in range(1, len(array)):
    if array[i - 1] < array[i]:
        print(array[i], end=' ')
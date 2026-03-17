array = [int(x) for x in input().split()]

index = 0
max = array[0]

for i in range(1, len(array)):
    if array[i] > max:
        max = array[i]
        index = i

print(max, index)
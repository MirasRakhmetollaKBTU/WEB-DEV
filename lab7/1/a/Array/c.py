count = 0

array = [int(x) for x in input().split()]

for i in range(len(array)):
    if array[i] > 0:
        count += 1

print(count)
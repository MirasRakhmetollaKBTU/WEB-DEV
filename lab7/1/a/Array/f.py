array = [int(x) for x in input().split()]

count = 0

for i in range(1, len(array)):
    if array[i - 1] < array[i]:
        count += 1

print(count)
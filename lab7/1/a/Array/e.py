array = list(map(lambda x: True if x >= 0 else False, [int(x) for x in input().split()]))

for i in range(1, len(array)):
    if array[i - 1] == False and array[i] == False or array[i - 1] == True and array[i] == True:
        print(array[i - 1], end=' ')
        print(array[i], end=' ')
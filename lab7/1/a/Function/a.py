def min(array):
    minimum = array[0]

    for i in range(1, len(array)):
        if array[i] < minimum:
            minimum = array[i]

    return minimum

array = [int(x) for x in input().split()]
print(min(array))
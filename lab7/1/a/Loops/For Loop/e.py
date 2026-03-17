x = int(input())

summ = 0

while x > 0:
    summ += x%10
    x //= 10
print(summ)
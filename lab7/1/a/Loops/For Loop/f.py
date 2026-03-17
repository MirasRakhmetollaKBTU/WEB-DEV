x = int(input())

s = ''

while x > 0:
    s += str(x%10)
    x //= 10
print(int(s))
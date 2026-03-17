a = int(input())

is_power_of_two = False

while a > 1:
    if a % 2 != 0:
        is_power_of_two = False
        break
    a //= 2
else:
    is_power_of_two = True

if is_power_of_two:
    print("YES")
else:
    print("NO")

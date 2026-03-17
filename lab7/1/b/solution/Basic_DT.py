n   = int(input())
arr = map(int, input().split())

u_s = set(arr)

u_s.remove(max(u_s))
print(max(u_s))

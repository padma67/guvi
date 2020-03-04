N=int(input())
arr = list(map(int,input().split()))
fsum=0
lsum=0
for i in range(1,3):
  fsum=fsum+arr[i]
for i in range(N-4,N+1):
  lsum=fsum+arr[i]
if(fsum==lsum):
  print("1")
else:
  print("0")

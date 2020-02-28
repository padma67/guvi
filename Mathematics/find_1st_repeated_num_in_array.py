N= int(input())
arr = list(map(int,input().split()))
count=0
for i in range(0,N+1):
    if(arr[i]==arr[i+1]):
      count=count+1
	  break
if(count>0):
  print(arr[i])
else:
  print("unique")

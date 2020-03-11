N= int(input())
arr = list(map(int,input().split()))
count=0
for i in range(0,N):
    for j in range(i+1,N):
        if(arr[i]==arr[j]):
            count=count+1
    if(count==1):
        break
if(count==1):
    print(arr[i])
else:
    print("unique")

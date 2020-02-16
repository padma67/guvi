#Given a number N followed by N numbers.
#Find the smallest number and largest number and print both the indices
c=0
N= int(input())
arr = list(map(int,input().split()))
for i in range(0,N):
    for j in range(1,N):
        if(arr[i]<arr[j]):
            c=arr[i]
            arr[i]=arr[j]
            arr[j]=c
print(min(arr),max(arr))

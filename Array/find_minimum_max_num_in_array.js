#Given a number N followed by N numbers.
#Find the smallest number and largest number and print both the indices
c=0
N= int(input())
arr = list(map(int,input().split()))
print(min(arr),max(arr))

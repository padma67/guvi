#Given a number N followed by N numbers.
#Find the smallest number and largest number and print both the indices
def min():
  c=0
  N= int(input())
  arr = list(map(int,input().split()))
  #find min element in array 
  a=min(arr)
  #find max element in array
  b=max(arr)
  return a,b
res=min()
print(res)

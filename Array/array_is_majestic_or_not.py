#check given array is majestic or not.A ‘majsetic’ array is an array whose sum of first three number is equal to last three number.
def arr():
  N=int(input())
  arr = list(map(int,input().split()))
  fsum=0
  lsum=0
  #using for loop to find sum of first three numbers in array
  for i in range(1,3):
    fsum=fsum+arr[i]
  #using for loop to find sum of first three numbers in array
  for i in range(N-4,N+1):
    lsum=fsum+arr[i]
  #compare the sum value
  if(fsum==lsum):
    return 1
  else:
    return 0
res=arr()
print(res)

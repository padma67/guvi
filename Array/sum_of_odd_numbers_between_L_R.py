#To print sum of odd numbers between L and R

def sumodd():
    #get the n value from user
    L,R= map(int, input().split())
    sum=0
    #find odd numbers between L and R by using for loop
    for i in range(L,R+1):
      if(i%2!=0):
        sum=sum+i
    return sum
res=sumodd()
print(res)

#print odd digit in a number
def sumdig():
    n=int(input())
    sum=0
    while(n>0):
        #find each digit of number
        dig=n%10
        #check if the digit odd or even
        if(dig%2!=0):
          return dig
        n=n//10
    else:
     return -1
res=sumdig()
print(res)

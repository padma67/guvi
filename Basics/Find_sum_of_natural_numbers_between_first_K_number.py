#Program to find sum of all Natural numbers between 1 to K

def Natural():
    #get the K value from user
    number = int(input())
    i = 1
    sum=0 

    while ( i<=number):
        sum=sum+i
        i=i+1
    return sum
res=Natural()

print(res)

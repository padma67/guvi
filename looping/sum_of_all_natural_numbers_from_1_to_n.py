#  Program to find sum of all Natural numbers between 1 to n

def Natural():
    number = int(input("Enter the n value"))
    i = 1
    sum=0 

    while ( i<=number):
        sum=sum+i
        i=i+1
    print("sum of all Natural numbers between 1 to n is {0}".format(sum))
Natural()

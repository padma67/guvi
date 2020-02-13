#To print sum of odd numbers between 1 to n

def sumodd():
    #get the n value from user
    n=int(input("Enter the n value"))
    sum=0
    for i in range(1,n+1):
        if(i%2!=0):
            sum=sum+i
    print(" sum of odd numbers between 1 to n is {}".format(sum))
    return sum
sumodd()

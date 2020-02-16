#Given a number N, print 'yes' if it is composite else print 'no'.
def composite():
    y="yes"
    n="no"
    N=int(input())
    #check N is composite or not
    
    for j in range(2,N):
        if(N%2==0):
            print(n)
            break
    else:
        print(y)
   #return result 
    return y,n
res = composite()

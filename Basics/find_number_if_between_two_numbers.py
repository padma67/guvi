#Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
def between():
    y="yes"
    n="no"
    #get N,L,R value from user
    N=int(input())
    L, R = map(int, input().split())
    #Compare the N value to L and R
    if(N>L and N<R):
        print(y)
    else:
        print(n)
    #return result 
    return y,n
res = between()

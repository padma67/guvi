# program for Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.
def square():
    y="yes"
    n="no"
    L, R = map(int, input().split())
    product=L*R
    div=product/L
    if(div==L):
        print(y)
    else:
        print(n)
    return y,n
res=square()

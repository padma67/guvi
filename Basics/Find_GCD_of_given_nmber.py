#Given 2 numbers N,M find the GCD of N and M.If it cannot be found for given number(s) then print -1
def GCD():
    gcd=0
    g=-1
    N, M = map(int, input().split())
    i = 1
    while(i <= N and i <= M):
        if(N % i == 0 and M % i == 0):
            gcd = i
        i = i + 1
    return gcd
    
res=GCD()
print(res)

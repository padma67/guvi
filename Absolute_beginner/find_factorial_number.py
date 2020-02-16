#Find the facorial of a number
def factorial():
    
    # To take input from the user
    N = int(input())
    factorial = 1

    for i in range(1,N+ 1):
        factorial = factorial*i
    return factorial
res=factorial()
print(res)

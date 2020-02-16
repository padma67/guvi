#Print the largest amongst these three numbers.
A=int(input())
B=int(input())
C=int(input())
if(A>B and A>C):
    print(A)
elif(B>C):
    print(B)
else:
    print(C)

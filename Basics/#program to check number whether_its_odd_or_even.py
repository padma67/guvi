#program to check number whether its odd or even.
number=float(input())
num=round(number)
#check number whether it is zero
if(num==0):
    print("Zero")
#whether the number is not zero check its odd or even
elif(num%2==0):
    print("Even")
else:
    print("Odd")

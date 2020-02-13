#Calculator

#get the input value from user
a=int(input("Enter the first value:"))
b=int(input("Enter the second value:"))
print("Addiion-1","Subtraction-2","Division-3","Modulas-4","Multiplication-5","Exponenial-6")
#get the function operator from user
c=int(input("Enter your choice:"))
if(c==1):
    print("Addition of given inputs:",a+b)
if(c==2):
    print("subtraction of given inputs:",a-b)
if(c==3):
    print("Division of given inputs:",a/b)
if(c==4):
    print("Modulas of given inputs:",a%b)
if(c==5):
    print("Multiplication of given inputs:",a*b)
if(c==6):
    print("exponential of given inputs:",a**b)


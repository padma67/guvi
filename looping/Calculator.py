#Calculator

#get the input value from user
num1=float(input("Enter the number 1:"))
num2=float(input("Enter the number 2:"))
print("1.Add")
print("2.Sub")
print("3.Div")
print("4.Mod")
print("5.Mul")
print("6.Expo")
#get the function operator from uuer
ch=float(input("Enter your choice:"))
c=round(ch)
if(c==1):
    print("The output of ",num1,"and",num2,"is",num1+num2)
elif(c==2):
    print("The output of ",num1,"and",num2,"is",num1-num2)
elif(c==3):
      if(num2==0):
          print("The output of ",num1,"and",num2,"is Infinity")
      else:
          print("The output of ",num1,"and",num2,"is",num1/num2)
elif(c==4):
    print("The output of ",num1,"and",num2,"is",num1%num2)
elif(c==5):
    print("The output of ",num1,"and",num2,"is",num1*num2)
elif(c==6):
    print("The output of ",num1,"and",num2,"is",num1**num2)
else:
    print("Invalid choice")


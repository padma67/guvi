#To find the Mark grade

#get the mark value from the user
Mark=int(input("Enter the Mark"))
if(Mark>95):
    print("your grade is A")
elif(Mark>=70 and Mark<=89):
    print("your grade is B")
elif(Mark>=50 and Mark<=69):
    print("your grade is C")
elif(Mark>=30 and Mark<=49):
    print("your grade is D")
else:
    print("fail")

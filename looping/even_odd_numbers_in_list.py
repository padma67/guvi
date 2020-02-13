# To find sum of even numbers and sum of odd numbers in list of elements

al=[] # Declaring list for getting elements from user
even=[] # Declaring list for collecting even numbers
odd=[] # Declaring list for collecting even numbers
sumev=[]# Declaring list for collecting sum of even numbers in list
sumd=[]# Declaring list for collecting sum of odd numbers in list
sume=0
sumo=0
len1=int(input("enter the number of elements"))
for i in range(0,len1):
    a=int (input("enter the elements"))
    al.append(a)
    if(a%2==0):
        even.append(a)
        sume=sume+a
    else:
        odd.append(a)
        sumo=sumo+a
print("All Numbers List:",al)
print("Odd Number List:",odd)
print("Even Number List:",even)
print("Sum of even numbers",sume)
print("Sm of odd nubers",sumo)

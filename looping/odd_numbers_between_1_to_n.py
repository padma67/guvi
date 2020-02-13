#To print all odd numbers between 1 to n

#get the n value from user
n=int(input("Enter the n value"))
#declare the list for collect odd numbers
odd=[]
for i in range(1,n):
    if(i%2!=0):
        odd.append(i)
print("odd number between 1 to n",odd)
      

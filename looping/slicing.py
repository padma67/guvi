even=[]
g=[]
start=int(input("enter starting element"))
end=int(input("enters ending value"))
for i in range (start,end):
    if(i%2==0):
        even.append(i)
print("even number",even)
start=int(input("enter the staring value"))
end=int(input("enter the ending value"))
print(even[start:end:1])

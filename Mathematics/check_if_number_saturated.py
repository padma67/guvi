# Program to tell whether that number is saturated.
#A saturated number is a number which is made by exactly two digits.
def Digit():
    count = 0
    number = int(input())
    while (number > 0):
        number = number//10
        count = count + 1
    return count
res=Digit()
if(res>1):
    print("Saturated")
else:
    print("Unsaturated")

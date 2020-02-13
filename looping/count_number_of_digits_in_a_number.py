# Program to count number of digits in a number
def Digit():
    count = 0
    number = int(input("Enter a number "))
    while (number > 0):
        number = number//10
        count = count + 1
    print ("Total number of digits : ",count)
Digit()

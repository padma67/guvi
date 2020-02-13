# Program to find First Digit and last digit of a Number

def fldigit():
    number = int(input("Enter the Number: "))
    firstdigit = number

    while (firstdigit >= 10):
        firstdigit = firstdigit // 10
        lastdigit = number % 10
    print("sum of first and last digit of number is {0}".format(firstdigit+lastdigit))

fldigit()

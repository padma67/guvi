# Program to find First Digit and last digit of a Number

def fldigit():
    number = int(input("Enter the Number: "))
    firstdigit = number

    while (firstdigit >= 10):
        firstdigit = firstdigit // 10

    print("The First Digit of Number {0} = {1}".format(number, firstdigit))

    lastdigit = number % 10

    print("The Last Digit of Number {0} = {1}".format(number, lastdigit))
fldigit()

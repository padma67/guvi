# Program to find First Digit and last digit of a Number

def fldigit():
    number = int(input())
    firstdigit = number
    while (firstdigit >= 10):
      firstdigit = firstdigit // 10
    lastdigit = number % 10
    print(firstdigit+lastdigit)
fldigit()

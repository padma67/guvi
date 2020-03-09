# Program to find First Digit and last digit of a Number

def fldigit():
    number = int(input())
    firstdigit = number
    #find the firstdigit of number
    while (firstdigit >= 10):
      firstdigit = firstdigit // 10
    #find the lastdigit of number
    lastdigit = number % 10
    sum=(firstdigit+lastdigit)
    return sum
res=fldigit()
print(res)

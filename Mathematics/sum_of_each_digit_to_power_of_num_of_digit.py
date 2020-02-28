count = 0
sum=0
number = int(input())
while (number > 0):
  number = number//10
  count = count + 1
while(number>0):
  dig=n%10
  sum=sum+(dig**count)
  n=n//10
print(sum)
sumdig()

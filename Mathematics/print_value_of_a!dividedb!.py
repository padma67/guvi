A,B= map(int, input().split())
product=1
product1=1
for i in range(1,A+1):
  product=product*i
for i in range(1,B+1):
  product1=product1*i
C=product/product1
print(C)

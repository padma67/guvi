# function to check if three sides form a triangle or not  
A, B,C = map(int, input().split())
y="yes"
n="no"
# check condition  
if(A**2+B**2==C**2):
	print(y)
else: 
    print(n)

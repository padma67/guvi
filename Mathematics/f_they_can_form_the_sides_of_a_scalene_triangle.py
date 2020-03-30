# function to check if three sides form a scalene triangle or not  
A, B,C = map(int, input().split())
y="yes"
n="no"
# check condition  
if (A + B <= C) or (A + C <= B) or (B + C <= A):
	print(n)
elif( A == B == C):
	print(n)
elif( A==B or B==C or C==A):
	print(n)
else:
	print(y)

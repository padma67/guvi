# function to check if three sides form a triangle or not 
def triangle():
	A, B,C = map(int, input().split())
	y="yes"
	n="no"
	# check condition  
	if (A + B <= C) or (A + C <= B) or (B + C <= A):
	print(y)
	else: 
    	print(n)
res=triangle()
print(res)
    

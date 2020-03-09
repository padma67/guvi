#Alternate sorting:Given a number N followed by array of N elements,
#sort the array in such a way that the first number is the first maximum and second number is the 1st minimum 3rd number isthe 2nd maximum and so on.
def max():
	N=int(input())
	num1=list(map(int,input().split()))
	#sort aray by inbuild function
	m=sorted(num1)
	#reverse the sorted array 
	a=m[::-1]
	s=[]
	v=[]
	#by using for loop append the maximum and minimum number alternatively to array
	for i in range(N):
		s.append(a[i])
		s.append(m[i])
	v=(*s[:N])
	return v
res=max()
print(res)

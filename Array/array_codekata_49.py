#Alternate sorting:Given a number N followed by array of N elements,
#sort the array in such a way that the first number is the first maximum and second number is the 1st minimum 3rd number isthe 2nd maximum and so on.
def max():
	N=int(input())
	num1=list(map(int,input().split()))
	m=sorted(num1)
	a=m[::-1]
	s=[]
	v=[]
	for i in range(N):
		s.append(a[i])
		s.append(m[i])
	v=(*s[:N])
	return v
res=max()
print(res)

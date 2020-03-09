#Given 2 strings S1 and s2, check whether they are case senitively equal without using any predefined function(case sensitive).
#If they are not same print 'no'
def str():
	s1,s2=map(str,input().split())
	count=0
	y="yes"
	n="no"
	#check two strings are case senitively equal
	if(len(s1)==len(s2)):
		for i in range(len(s1)):
			if(s1[i]==s2[i]):
				count+=1
	if(count==len(s2)):
		return y
	else:
		return n
res=str()
print(res)

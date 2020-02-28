s1,s2=map(str,input().split())
count=0
if(len(s1)==len(s2)):
	for i in range(len(s1)):
		if(s1[i]==s2[i]):
			count+=1
if(count==len(s2)):
	print("yes")
else:
	print("no")

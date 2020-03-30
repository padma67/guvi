N=int(input())
count=0
for i in range(1,N):
  p=2**i
  if(N==p):
    count=count+1
if(count==1):
  print('yes')
else:
  print('no')
    

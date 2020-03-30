N,K= map(int, input().split())
for i in range(2,K):
  if(N%i==0 and K%i==0):
    print(i)
    break
  

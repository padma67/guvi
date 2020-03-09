def max():
  n=int(input())
  a=list(map(int,input().split()))
  b=sorted(a)
  c=(b[len(b)-2])
  return c
res=max()
console.log(res)

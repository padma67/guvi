S=input()
l=len(S)
d=float(l/2)
D=round(d)
if(l%2==0):
  S.replace(d,"*")
  S.replace(d+1,"*")
  print(S)
else:
  S.replace(d,"*")
  print(S)
  

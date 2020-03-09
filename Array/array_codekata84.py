#print two star between string,if its length odd,else print one star between string
#get the input from user
def replace():
  S=input()
  l=len(S)
  d=float(l/2)
  D=round(d)
  if(l%2==0):
    S.replace(d,"*")
    S.replace(d+1,"*")
    return S
  else:
    S.replace(d,"*")
    return S
  res=replace()
  print(res)
  

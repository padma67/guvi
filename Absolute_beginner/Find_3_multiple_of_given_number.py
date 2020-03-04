#Print the First 3 multiples of the given number "N".
#get A  value from user
def multiple():
  A=int(input())
  B=A+A
  C=A+A+A
  return A,B,C
res=multiple();
print(res)

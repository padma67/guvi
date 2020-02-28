S=input()
vowel=set("aeiouAEIOU")
count=0
for i in S:
  for j in vowel:
    if(i==j):
      count=count+1
if(count>0):
  print("yes")
else:
  print("no")

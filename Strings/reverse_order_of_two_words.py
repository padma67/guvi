# Python code to Reverse each word 
# of a Sentence individually 
def reverseWords(str):
  inputword=str.split(" ")
  inputword=inputword[-1::-1]
  output=' '.join(inputword)
  return output
str=input("")
print(reverseWords(str))

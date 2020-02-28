# Python program to remove vowels from a string 
# Function to remove vowels 
def rem_vowel(): 
    vowels =set ('a', 'e', 'i', 'o', 'u')  
    for x in string.lower(): 
        if x in vowels: 
            s = string.replace(x, "") 
  	print(s)
# Driver program 
s=string(input())
rem_vowel() 

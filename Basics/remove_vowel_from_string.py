# Python program to remove vowels from a string 
# Function to remove vowels 
def rem_vowel():
    string=input()
    vowels = ('a', 'e', 'i', 'o', 'u')  
    for x in string.lower(): 
        if x in vowels: 
            string = string.replace(x, "") 
              
    # Print string without vowels 
    return string
res=rem_vowel()
print(res)

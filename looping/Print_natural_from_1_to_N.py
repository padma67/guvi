# Python Program to Print Natural Numbers from 1 to N

def Natural():
    number = int(input("Enter the n value"))
    i = 1
    

    print("The List of Natural Numbers from 1 to {0} are".format(number)) 

    while ( i <= number):
        print(i)
        i = i + 1
    
Natural()

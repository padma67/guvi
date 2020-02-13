# Python Program to Print Natural Numbers in revese from n to 1

def Natural():
    number = int(input("Enter the n value"))
    i = 1
    

    print("The List of Natural Numbers in revese from {0} to 1 are".format(number)) 

    while ( number>=i):
        print(number)
        number=number-1
    
Natural()

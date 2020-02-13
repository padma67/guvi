#To print all odd numbers between 1 to 100

def Even():
    #declare the list for collect odd numbers
    odd=[]
    i=1
    while(i<=100):
        if(i%2!=0):
            odd.append(i)
        i=i+1
    print("even numbers between 1 to 100",odd)
Even()

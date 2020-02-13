#To print all even numbers between 1 to 100

def Even():
    #declare the list for collect even numbers
    even=[]
    i=1
    while(i<=100):
        if(i%2==0):
            even.append(i)
        i=i+1
    print("even numbers between 1 to n",even)
Even()
      

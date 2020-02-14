def pattern():
    n=int(input("Enter the number"))
    for row in range(0,n):
        for col in range(n):
            if(col==0 or row==n-1 or row==col):
                print("*",end="")
            else:
                print(end=" ")
        print("")
pattern()

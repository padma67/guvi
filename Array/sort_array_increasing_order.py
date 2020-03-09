#sort the array in increasing order
def arr():
    N=int(input()) 
    n1=list(map(int,input().split())) 
    #sort the array by inbuild function
    n2=sorted(n1) 
    a=[]
    for i in range(N):
        for j in range(N): 
            if(n2[i]==n1[j]):
                a.append(j+1) 
    c=*a
    return c
res=arr()
print(res)

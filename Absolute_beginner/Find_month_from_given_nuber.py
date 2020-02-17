# Print the number of days in the month corresponding to that number.
def month():
    m=int(input())
    #check the month number for 31 days
    if(m==1 or m==3 or m==5 or m==7 or m==8 or m==10 or m==12):
        return '31'
    #check the month number for 30 days
    elif(m==4 or m==6 or m==9 or m==11):
        return '30'
    #check the month number for 28 days
    elif(m==2):
        return '28'
    else:
        return 'Error'
res=month()
print(res)

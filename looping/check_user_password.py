User_name="Padma"
Password="Padma"
Hashpassword=hash(Password)

i=1
while(i<=5):
    UserPassword=input("enter the password")
    HashUser=hash(UserPassword)
    
    if(Hashpassword==HashUser):
        print("ok")
        break
    else:
        i=i+1
    

#Given base(B) and height(H) of a triangle find its area.
def area():
    #get base and height of triangle from user
    Base,Height = map(int, input().split())
    #calculate area
    Area=(1/2*Base*Height)
    return Area
res=area()
print(res)

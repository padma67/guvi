#Find the circumference of a circle
import math
def radius():
    #get the raius of circle from user
    Radius = float(input())

    # calculate the circumference of circle
    Circumference = (math.pi*2*Radius)
    circumference=round(Circumference,2)
    return circumference
res = radius()
print(res)

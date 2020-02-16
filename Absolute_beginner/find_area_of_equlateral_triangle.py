# Python Program to find Area of an Equilateral Triangle

import math
def equarea():
    #get the side of triangle from user
    side = int(input())

    # calculate the area
    Area = (math.sqrt(3)/ 4)*(side * side)
    area=round(Area,2)
    return area
res = equarea()
print(res)

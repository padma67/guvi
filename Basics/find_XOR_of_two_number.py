#Given numbers A,B find A^B.
def exor():
    A,B= map(int, input().split())
    C=A^B
    return C
res=exor()
print(res)

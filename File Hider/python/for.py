#for loop
list=[1,2,3,4]#list
for val in list:
    print(val)
#tuples
veg=("tomato","potato","cucumber","brinjal")
for val in veg:
    print(val)   
#strings
str="pardhuva"
for char in str:
    print(char)
# for loop with else:
for char in str:
    print(char)
else:
    print("for loop is printed")
#if in for Loop
for char in str:
    if char=='u':
        print("u found")
        break
    print(char)
print("end")# here we should not use else because due to break the end will not be printed 
#range() function range(start,stop,step)
for el in range(5):  #range(stop)
    print(el)
for el in range(1,5,2): #range(start,stop,step)
    print(el)

#pass statement
for el in range(5):
    pass         #it should not be left empty 
print("some code")
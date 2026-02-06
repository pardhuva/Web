num1=int(input("num1:"))
num2=int(input("num2:"))
sum=num1+num2
print(sum)
#square area by input side
side=int(input("side:"))
area=side*side
print(area)
#input two floatnumbers and print their average
first=int(input("first:"))
second=int(input("second:"))
avg=(first+second)/2
print(avg)
#input users name and print its length
name=input("name:")
print(len(name))
#to find occurence of 's' in a string
str="she is so beautiful"
print(str.count('s')) 
#to check if number entered is odd or even
num=int(input("num:"))
if(num % 2 == 0):
    print("even")
else:
    print("odd")
#find the greatest of three numbers entered by the user
num3=int(input("num:"))
num4=int(input("num:"))
num5=int(input("num:"))
if(num3>num4):
    if(num3>num5):
        greatest=num3
    else:
        greatest=num5
else:
    if(num4>num5):
        greatest=num4
    else:
        greatest=num5
print(greatest)
#in another way
if(num3>num4 and num3>num5):
    greatest=num3
elif(num4>=num5):
    greatest=num4
else:
    greatest=num5
print(greatest)


#conditional statements if-elif-else
colour="red"
if(colour=="red"):
    print("stop")
elif(colour=="green"):
    print("go")
else:
    print("ready")
age=18

#ex1
if(age>=18):
    print("can drink")
    print("can drive")
else:
    print("cannot drink")
    print("cannot drive")
#ex2
marks=int(input("marks:"))
if(marks>=90):
    grade='A'
elif(marks>=80 and marks<90):
    garde='B'
elif(marks>=70 and marks<80):
    grade='C'
else:
    grade='D'
print(grade)

#nesting statement inside a statement
age=int(input("age:"))
if(age>=18):
    if(age>=80):
        print("cannot drive")
    else:
        print("can drive")
else:
    print("cannot drive")    
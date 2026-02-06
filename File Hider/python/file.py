#file f=open("file name","mode")
f=open("text.txt","rt")# r-read mode and t=text mode
data=f.read()
print(data)
print(type(data))
f.close()
#write in a file
f=open("text.txt","w")
f.write("i want to learn jaava tomorrow.")  #then this will overwrite the already present data
f.close()
#append
f=open("text.txt","a")
f.write("i am a programmer") #this will append the already present data
f.close()
#"r+" for reading and overwriting pointer at start
f=open("text.txt","r+")
f.write("abc")#only these abc number of characters will be overwritten no truncate
print(f.read())
f.close() 
#"w+" mode truncated mode all the existing data will be erased we should write newly
#read and overwrite and pointer at start
#"a+" read+append pointer at end ,no truncate
#the data will start reading(printing) from the start of the pointer 

# with syntax
with open("demo.txt","r") as f:
    data=f.read()   #it willl read the data
    print(data)

with open("demo.txt","w") as f:
    f.write("new data") # it will be overwritten in the file
#deleting a file
import os
os.remove("demo.txt")

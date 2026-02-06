#dictionary
stud={
    "name":"pardhuva",
    "age":18,
    "cgpa":[9.1,9.2] # if multiple it should be stored as like lists or tuple () or []
}
print(stud)
print(type(stud))
print(stud["name"])
stud["name"]="paru"#can be changed overwrite
print(stud)
stud["surname"]="bheemarati" #can be inserted
print(stud)
#from null dictonary
null_dict={}
null_dict["name"]="abdul kalam"
print(null_dict)
#nested dictionary
st={
    "name":"pardhu",
    "marks":{
        "math":98,
        "phy":97,
        "chem":95
    }
}
print(st)
print(st["name"])
print(st["marks"])
print(st["marks"]["math"])
#dictionary methods
print(st.keys()) #print all keys in the dictionary
print(st.values())#print all values in the dictionary
print(st.items())#print all the pairs these are in the form of tuples.can be stored in the form of list
pairs=list(st.items())
print(pairs)     #tuples inside list
print(pairs[0])
print(st.get("name")) #print(st["name"]) both gives same output
#error in these methods occurs then it gives output as none 
#update is used to insert any new item
st.update({"city":"ap"}) #it should contain flower brackets
print(st)
#this update can be done in another way
new_dict={"city":"ap","age":18}
st.update(new_dict)
print(st)
new_dict={"name":"paru"}
st.update(new_dict)
print(st)

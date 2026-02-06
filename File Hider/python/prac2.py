#create a python dictionary for word meanings
meanings={}
meanings["table"]="a piece of furniture","list of facts and figures"
meanings["cat"]="a small animal"
print(meanings)
#in another way
meaning={
    "cat":"a small animal",
    "table":("a piece of furniture","list of facts and figures") #() or []
}
print(meaning)
#you are given list of subjects and one classroom is required for one subject theb the total number of classrooms required
#here set can be used because in sets unique values are stored so it can count the different subjects
#set1 = {
#     "python","jaava,"python","jaavascript","jaava","python","jaava","c" }
#print(set1)
#print(len(set1))     it is giving me wrong output

#input 3 marks of subjects and store in dict start with empty and add use subject as key and mark as value
dict={}
dict["maths"]=int(input("math:"))
dict["phy"]=int(input("phy:"))
dict["chem"]=int(input("chem:"))
print(dict) 
#or in another way
dict1={}
x=int(input("math:"))
dict1.update({"math":x})
y=int(input("phy:"))
dict1.update({"phy":y})
z=int(input("che:"))
dict1.update({"che":z})
print(dict1)
#find way to store 9 and 9.0 as a seperate values in set hint use built in data types
set2=set()
set2={9,'9.0'}
print(set2)
#in another way
set3=set()
set3={
    "int":9,
    "float":9.0
}
print(set3)
#list
marks=[94,87,69,89,43]#here [94,87,69,89,43,"hello"] in this way it can be stored
print(marks)
print(type(marks))
print(len(marks))
print(marks[0])
print(marks[1])
student=["pardhuva",18,49.5,"vizag"]
print(student)
student[0]="paru"
print(student)
#list slicing
print(marks[2:5])
print(marks[:5])
#list methods
list=[1,4,3]
list.append(7)#adds one element at the end  
print(list)
list.sort()#sort the element
print(list)
list.sort(reverse=True)#sort in descending order
print(list)
list.reverse()# reverse the list
print(list)
list.insert(1,2)#insert element in index mentioned
print(list)
list.remove(1)#remove first occurence of 1
print(list)
list.pop(2)#removes elemnt at third index
print(list)     
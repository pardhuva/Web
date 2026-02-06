#sets(flower brackets are used)
set2={1,2,3,4}
print(set2)
print(type(set2))
set1={6,7,8,9,"hello","world"}
print(set1)
#len(set) gives the total number of items
print(len(set2))
print(len(set1))
set3={1,2,7,7} #only once the repeated values can be printed
print(set3)
#null set if set1={} is given then it is null dictionaary so the syntax is set1=set() 
collec = set()
print(collec)
print(type(collec))
#set methods
#set.add(5) add element 5
set2.add(7)
set2.add((1,2,3)) #adding the tuple but we cannot add list
set2.add("pardhuva")
print(set2)
set2.remove(4)#removes element 4
print(set2)
set2.clear()#empties the set
print(set2)
set1.pop() #removes some random lement
print(set1)
print(set1.union(set3))#cobines both the sets and produce new set
print(set1.intersection(set3))#combines common values and returns new
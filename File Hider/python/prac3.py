#multiplication table of n
n=int(input("n:"))
i=1
while i<=10:
    print(n*i)
    i+=1
#print the elements of the list using a loop
list=[1,4,9,16,25,36,49,64,81,100]
i=0
while i<len(list):
    print(list[i])
    i+=1
#search the number x in this tuple using loop
x=int(input("x:"))
tuple=(1,4,9,16,25,36,49,64,81,100)
i=0
while i<len(tuple):
    if(tuple[i]==x):
        print("found")
    i+=1
# print the elements in the list using for loop
for val in list:
    print(val)
# search the number x in this tuple using loop for
idx=0
for val in list:
    if(val==x):
        print("found at index",idx)
        break
    idx+=1
# find sum of n numbers using while  
k=0
sum=0
n=int(input("n:"))
while k<=n:
  sum+=k
  k+=1
print(sum)
#find factorial of first n numbers using for
fact=1
for val in range(1,n+1,1):
    print("for",val)
    for val1 in range(1,val+1):
        fact*=val1
    print(fact)
    fact=1

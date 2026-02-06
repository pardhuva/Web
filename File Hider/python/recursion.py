#recursion
#print 5 to 1
def show(n):
    if(n==0): #base step
     return
    print(n)
    show(n-1) #recirsive step
show(5)
#
def show(n):
    if(n==0): #base step
     return
    print(n)    
    show(n-1)
    print("end") #after printing 3 2 1 then after returning from zero then it will go back according to the stack
show(3)
#factorial of a number by recursion
def fact(n):
   if(n==0 or n==1):
      return 1
   return n*fact(n-1)
print(fact(4))
#recursive function to calculate the sum of first n natural numbers
def cal_sum(n):
   if(n==0):
      return 0   #here dont forget to put 0
   return cal_sum(n-1) + n
sum=cal_sum(10)
print(sum)
# recursive function to print all the elemnets in the list
def print_list(list,i):
   if i>=len(list):
      return 0
   print(list[i])
   return print_list(list,i=i+1)
list=[1,2,3,4,5]
print_list(list,0)

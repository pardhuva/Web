# fuctions
# if you are doing sum of many pairs in that case functions makes it easier
def print_sum(a,b):
    sum=a+b                 # fucntion defnition
    print(sum)
    return sum
print_sum(5,2)         #fucntion call
print_sum(3,2)
#
def print_sum(a,b):
    sum=a+b                 # fucntion defnition
    return sum
print(print_sum(9,1)) 
def cal_sum(a,b):      #function defnition
    return a+b
print(cal_sum(0,1))
sum=cal_sum(2,1)      #fucntion call
print(sum)
#no parameters
def print_hello():
    print("hello")
print_hello()
#finding avg of three numbers using functions
def cal_avg(a,b,c):
    avg=(a+b+c)/3
    print(avg)
    return avg
cal_avg(1,2,3)

#built in functions-print(),type(),len(),range()
print("paru")   #here end="\n" so the next one will print in next line so for avoiding this if we want to print in single line we have to change the end
print("madhu") 
print("paru",end=" ")   #considering the end as space 
print("madhu")
#default parameters
def pro(a,b=2):
    print(a*b)
    return a*b #by default here 1 is stored in a and 2 is stored in b
pro(1) #here if we pro() it gives error  even pro(1) it gives error

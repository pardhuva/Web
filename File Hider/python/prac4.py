# function to print the length of the list in the parameter
def print_len(list):
    print(len(list))
    return len(list)
print_len([1,2,3,4])
#function to print the elements of the list in a single line
def print_len(list):
    print(list)
    return list
print_len([1,2,3,4]) 
#or
def print_len(list):
    for val in list:
        print(val,end=" ")
    return list
print_len([1,2,3,4]) 
# function to find the factorial of the ni parameter
def cal_fact(n):
    fact=1    # the variables should be defined inside the function
    for val in range(1,n+1):
        fact*=val
    print(fact)
    return fact
cal_fact(4)

#fucntion to convert from usd to inr 1dollar=83 rupees
def dol_conv(x):
    print(x,"usd=",x*83,"inr")
    return x*83
dol_conv(2)
#fucntion take input if it is odd "odd" if even "even"
def cal_odd(x):
    if x%2!=0:
        ans="odd"
    else:
        ans="even"
    return ans
print(cal_odd(3))

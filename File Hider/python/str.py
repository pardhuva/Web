str1="i will try. we will try it."
str2='you can do it.'
str3="""super you did it."""
print(str1)
print(type(str1))
print(type(str2))
print(type(str3))
str4="i will try\n we will try it."
print(str4)
str5="i will try.\t we will try it."
print(str5)
#string concatenation
print(str1+str2)
#string length
print(len(str1))
fin_str=str1+" "+ str2
print(fin_str)
#indexing
ch=str1[0] #here wee can only access the values we cannot modify these values
print(ch)
#slicing #start_index:end index end index will not be included
print(str1[0:4])
print(str1[0:len(str1)])
print(str1[:4])#0:4
print(str1[4:])#4:len(str1)
#negative indices
str="apple"
print(str[-5:-1])
#string functions
str="i am a coder."
print(str.endswith("er."))#if it ends then it gives True
#str.capitalize() capitalizes first char
print(str.capitalize())
#str.replace(old,new) replaces old with new
print(str.replace('coder','gamer'))
#str.find(word) return first index of first occurence 
print(str.find('coder'))
#str.count("substr") conts the total no of occurence of substring in the string
print(str.count("a"))

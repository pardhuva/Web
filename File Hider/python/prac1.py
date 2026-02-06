#input 3 movies and store them in list
m1=input("m:")
m2=input("m:")
m3=input("m:")
list=[m1,m2,m3]
print(list)
# in another way
movies=[]
movies.append(m1)
movies.append(m2)
movies.append(m3)
print(movies)
#or in another way
movie=[]
movie.append(input("m:"))
movie.append(input("m:"))
movie.append(input("m:"))
print(movie)
#check if the list contains the palindrome of elements
list1=[1,2,1]  # palindrome
list2=[1,2,3]  # not palindrome 
copy_list1=list1.copy() #here we will use copy() because if we directly use reverse then in that list1 the reversed one will be stored so we create another list using copy()
copy_list1.reverse()
if(copy_list1==list1):
    print("it is palindrome")
else:
    print("it is not a plaindrome")

#to count no of students with grade A
grade=('C','D','A','A','B','B','A')
print(grade.count('A'))
# sort the above values from a to d
grades=['C','D','A','A','B','B','A']
grades.sort()
print(grades)

#while
#while True: (":" this is mandatory after condition)
#   print("hello") this prints infinite hello's
count=1
while count<=5:
   print("hello")
   count+=1
   print(count)
print(count)
# with iterators
i=2
while i<7:
  print("hello world")
  i+=1
# print numbers from 1 to 5
j=1
while j<=5:
   print(j)
   j+=1
k=5
while k>0:
  print(k)
  k-=1
#print 1 to 100
i=1
while i<=100:
   print(i)
   i+=1
# break  terminates the loop
count1=1
while count1<=5:
   print(count1)
   if(count1==3):
      break
   count1+=1
#continue terminates the current iteration and continue of the next iteration
k=0
while k<=5:
   if(k==3):
      k+=1
      continue
   print(k)
   k+=1
#
  
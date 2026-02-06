#create a file "practice.txt" and add the data
with open("practice.txt","w") as f:
    f.write("hi everyone")
    f.write("we are learning python")
#now practice.txt is created and this data is placed
#write a function that replaces python with jaava in above file
def replacing():
    with open("practice.txt","r") as f:
        data=f.read()
        new_data= data.replace("jaava","python")
    with open("practice.txt","w") as f:
        f.write(new_data)
        data=f.read()
        print(data)
replacing()
#write a function to check whether th eword is present or not
def check_for_word():
    word="learning"
    with open("pracice.txt","r") as f:
        data=f.read()
        if(data.find(word)!=-1):
            print("found")
        else:
            print("not found")
check_for_word()
#write a function to check in which line the word "learning occurs first"
def check_for_line():
    line=0
    word="learning"
    with open("practice.txt","r") as f:
        data=f.readline()
        if(data.find(word)!=-1):
            print(line)
            return
        line+=1
    return -1
check_for_line
# from a file containing numbers seperated by comma,print the ocunt of even numbers
with open("pracice.txt","r") as f:
    count=0
    data=f.read()
    nums=data.split(",") #split fucntion to split based on commas
    print(nums)
    for val in nums:
        if val%2==0:
            count+=1

print(count)


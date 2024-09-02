def move_zeros(arr):
    total_zeros_count = arr.count(0)
    for i in range(total_zeros_count):
        arr.remove(0)
        arr.append(0)



arr = [0,1,2,0,12]
move_zeros(arr)

print(arr)
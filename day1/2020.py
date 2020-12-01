from itertools import permutations

def part1_simple_solution(target=2020):
  small_nums = []
  large_nums = []
  with open('input.txt') as f:
    for line in f:
      if int(line) <= target/2:
        small_nums.append(int(line))
      else:
        large_nums.append(int(line))
  for sm in small_nums:
    for big in large_nums:
      if sm + big == 2020:
        print("Small: ", sm, " big: ", big, ' answer: ', sm * big)
        return (sm * big)

def extract_input(file='input.txt'):
  with open('input.txt') as f:
    return [int(row) for row in f]


def part1_alternative(data, target=2020):
  for a in data:
    for b in data:
      if a + b == target:
        return a * b

def part2_simple(data, target=2020):
  for a in data:
    for b in data:
      for c in data:
        if a + b + c == target:
          return a * b * c

def part2_alternative(data, target=2020, combinations=3):
  perms = list(permutations(data,combinations))
  for option in perms:
    if sum(option) == target:
      print(option)
      res = 1 
      for ele in option:  
          res *= ele  
      return res 




print("Part 1 First attempt: ", part1_simple_solution(2020))
input = extract_input()
print("Part 1 Second attempt: ", part1_alternative(data=input, target=2020))
print("Part 2 First attempt: ", part2_simple(data=input, target=2020))
print("Part 2 Second attempt: ", part2_alternative(data=input, target=2020, combinations=3))
print("Part 1 using Part 2 Second attempt: ", part2_alternative(data=input, target=2020, combinations=2))
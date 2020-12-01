class Day2
  require 'test/unit'

  attr_accessor :input, :position, :program

  def initialize(program = '')
    @program = program.split(',').map(&:to_i)
    @position = 0
  end

  def int_code
    puts 'helloo....'
    
    while position <= program.length - 3
      input1 = program[program[position + 1]]
      input2 = program[program[position + 2]]
      case program[position]
      when 1
        program[program[position + 3]] = input1 + input2
        @position += 4puts "case 1 position #{position}"
      when 2
        program[program[position + 3]] = input1 * input2
        @position += 4puts "case 2 position #{position}"
      when 99
        return program
      else
        "Error"
      end
    end
    program
  end

  extend Test::Unit::Assertions

    # #PART 1 TEST'
    assert_equal([2, 0, 0, 0, 99], Day2.new('1, 0, 0, 0, 99').int_code)
    assert_equal([2, 3, 0, 6, 99], Day2.new('2, 3, 0, 3, 99').int_code)
    assert_equal([2, 4, 4, 5, 99, 9801], Day2.new('2, 4, 4, 5, 99, 0').int_code)
    assert_equal([30, 1, 1, 4, 2, 5, 6, 0, 99], Day2.new('1, 1, 1, 4, 99, 5, 6, 0, 99').int_code)

end

day2_part1 = Day2.new(File.read("input.txt"))
answer = day2_part1.int_code
puts "Part 1 #{answer[0]}"

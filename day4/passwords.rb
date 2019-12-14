class Password

  attr_accessor :start_code, :end_code
  LENGTH = 6

  def initialize(start_code, end_code)
    @start_code = start_code
    @end_code = end_code
  end

  def valid_options
    valid_options = []
    current_value = next_valid_option(start_code)
    while current_value <= end_code
      valid_options << current_value
      current_value = next_valid_option(current_value + 1)
    end
    valid_options
  end

  def next_valid_option(code)
    possible = next_increaser_option(code)
    while possible.digits.uniq.length == LENGTH
      possible = next_increaser_option(possible + 1)
    end
    possible
  end

  def next_increaser_option(code)
    digits = code.to_s.chars.map(&:to_i)
    output_digits = []
    digits.each_with_index do |digit, index|
      if index.zero? || digit >= output_digits[index - 1] 
        output_digits << digit
      else
        multiplier = digits.length - index
        multiplier.times {output_digits << output_digits[index-1]}
        break
      end
    end
    output_digits.join.to_i
  end


  part1 = Password.new(307237,769058)
  part1_output = part1.valid_options
  puts part1_output.count

end
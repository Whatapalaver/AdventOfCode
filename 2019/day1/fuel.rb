
require 'test/unit'

extend Test::Unit::Assertions

def simple_fuel(mass)
  mass / 3 -2
end

def fuel_needed(mass)
  fuel = 0
  while mass > 0 do
    mass = mass / 3 - 2
    fuel += mass if mass > 0
  end
  fuel
end

#PART 1 TEST
assert_equal(2, simple_fuel(12))
assert_equal(2, simple_fuel(14))
assert_equal(654, simple_fuel(1969))
assert_equal(33583, simple_fuel(100756))

#PART 2 TEST
assert_equal(2, fuel_needed(14))
assert_equal(8, fuel_needed(30))
assert_equal(966, fuel_needed(1969))
assert_equal(50346, fuel_needed(100756))

module_masses = File.readlines('input.txt')
puts "part 1 = #{module_masses.inject(0) { |fuel, mass| fuel += simple_fuel(mass.to_i) } }"
puts "part 2 = #{ module_masses.inject(0) { |fuel, mass| fuel += fuel_needed(mass.to_i) } }"
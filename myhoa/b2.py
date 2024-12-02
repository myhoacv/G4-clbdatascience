import cmath  # For complex number solutions

# Function to solve quadratic equation
def solve_quadratic(a, b, c):
    # Calculate the discriminant
    discriminant = b**2 - 4*a*c
    
    # Calculate two solutions
    sol1 = (-b + cmath.sqrt(discriminant)) / (2 * a)
    sol2 = (-b - cmath.sqrt(discriminant)) / (2 * a)
    
    return sol1, sol2

# Example input
a = float(input("Enter coefficient a: "))
b = float(input("Enter coefficient b: "))
c = float(input("Enter coefficient c: "))

# Solve the quadratic equation
solution1, solution2 = solve_quadratic(a, b, c)

# Display the solutions
print(f"The solutions are: {solution1} and {solution2}")
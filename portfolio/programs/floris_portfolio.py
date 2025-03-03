from turtle import *
### Floris ### 
print(
  '''
  Hiya! I'm a flowermaking bot!
  My name is Floris!
  I am here to help you make your very own bouquet of beautiful
  flowers!
  Follow the instructions below and have some fun
  DISCLAIMER
  May take a long time to grow your lovely flowers, to to 
  the level of precision we are working on.
  '''
)
tutorial = input("Would you like a set of instructions for this process? (Y or N) >>>  ") == 'Y'
if tutorial == True:
  print(
    '''
    \\\ INSTRUCTIONS //
    1. When on yes or no questions:
      answer with 'Y' or 'N'. (no quotations)
    ================================
    2. You have a choice to fill, or not. If you do not fill,
      it will just be black lines and a white background.
    ================================
    3. The 'petal length' is the length of each of the sides of the petals.
    ================================
    4. The sepal is the circle in the centre
    ================================
    5. Consult:
        https://groklearning.com/learn/aca-dt-78-py-turtle/colours/1/
        for the color chart.
    ================================
    6. Separate colors with spaces.
    ================================
    7. Always answer in lower case.
    ================================
    8. For "How many" questions answer 0 if you don't want any.
    ================================

    \\\\\\\\\\\\\\ ENJOY ///////

    Bot by Finn-Oskar Mikkelsen
  '''
  )
pi = 3.14159265358979323846264338327950288419716950 # for circle calculation
petalnum = int(input("How many petals >>>  "))
petal_length = int(input("Petal side length >>>  "))
petal_sides = int(input("How many sides do the petals have >>>  "))
bo_colour = input("What Border Colour would you like? (if you don't want 1 press Enter.) >>>  ")
inner_colours = {} # for listing the colours
countcols = int(input("How many colours are the petals (num or 0) >>>  "))
for colour in range(countcols):# for every colour wanted
  current_colour = input("Colour >>>  ").lower().strip()
  inner_colours[colour] = current_colour  # add it to the dictionary
rows = int(input("How many extra rows do you want (num or 0) >>>  "))
if rows != 0:
  petalnum_xrows = []
  petal_length_xrows = []
  petal_sides_xrows = []
  bo_colour_xrows = []
  inner_colours_xrows = []
  for set_row in range(2, rows + 2):
    petalnum_xrows.append(int(input(f"How many petals in row {set_row} >>>  ")))
    petal_length_xrows.append(int(input(f"Petal side length in row {set_row}>>>  ")))
    petal_sides_xrows.append(int(input(f"How many sides do THESE petals have? >>>  ")))
    bo_colour_xrows.append(input(f"Border Colour  of row {set_row}>>>  "))
    inner_colours_xrows.append(input(f"What color are these petals in row {set_row}>>>  "))
current_petal_colour = 0 # colour we are currently filling
pensize(int(input("Pensize >>>  ")))
do_fill = input("Use fill colour? If you did not input one it will be black if you answer yes to this. Y or N >>>  ").upper().strip() == 'Y'# determine whether they want color
is_sepal = input("Circle / Sepal? Y or N >>>  ").upper().strip() == 'Y'

if is_sepal: # is there a sepal
  sepal_radius = int(input("Radius of circle >>>  "))
  sepal_colour = input("Colour of sepal input colour >>>  ")
# end of setup, beginning of drawing.
hideturtle()
pendown()
for i in range(petalnum): # for every petal
  if bo_colour: 
    pencolor(bo_colour) # check if we are using color
  if inner_colours:
    fillcolor(inner_colours[current_petal_colour]) # deciding which color to use and setting it to fill
    if current_petal_colour + 1 == len(inner_colours): # checking if it's over the index limit to prevent IndexError
      current_petal_colour = 0 # loop back to start
    else:
      current_petal_colour  = current_petal_colour + 1 # otherwise increment
  if do_fill: begin_fill()
  for i in range(petal_sides): # for every side of the petal
    right(360/petal_sides) # turn right petal angle
    forward(petal_length) # go forward petal length
  right(360/petalnum) # get Nready for next petal
  if do_fill: end_fill()
for i in range(petalnum): # for every petal. Go over again over the fill so we keep the lovely patterns
  if bo_colour: 
    pencolor(bo_colour)
  for i in range(petal_sides):
    right(360/petal_sides)
    forward(petal_length)
  right(360/petalnum)
if rows != 0: # if we have more rows
  for current_row in range(rows): # iterate through rows, using index in from range()
    for i in range(petalnum_xrows[current_row]): # for every petal in row
      if bo_colour_xrows[current_row]:
        pencolor(bo_colour_xrows[current_row]) # we have an index
      if inner_colours_xrows[current_row]:
        fillcolor(inner_colours_xrows[current_row])
      if do_fill: begin_fill()
      for i in range(petal_sides_xrows[current_row]): # making the petals on the row b.
        right(360/petal_sides_xrows[current_row])
        forward(petal_length_xrows[current_row])
      right(360/petalnum_xrows[current_row])
      if do_fill: end_fill()
    for i in range(petalnum_xrows[current_row]): # only lining; without filling so we have those lovely patterns
      if bo_colour_xrows[current_row]: 
        pencolor(bo_colour_xrows[current_row])
      for i in range(petal_sides_xrows[current_row]):
        right(360/petal_sides_xrows[current_row])
        forward(petal_length_xrows[current_row])
      right(360/petalnum_xrows[current_row])
if is_sepal:# if we have a sepal
  penup() # so we don't cause a radial line
  forward(sepal_radius) # go to edge of circle
  left(90) # turn onto circle axis
  pendown() # activate pen.
  if sepal_colour:
    begin_fill()
    fillcolor(sepal_colour)
  circle(sepal_radius)
  if sepal_colour: end_fill()

mainloop()

# Mars rover ironhack prework

Learning goals
In this exercise, the goal is to apply as many as possible of the concepts you've just learned:

how to work with different types of variables,
how to manipulate nested data structures,
how to define and invoke functions.
Introduction
We are sending a rover to Mars, and we need to be able to move it through a series of instructions sent from the Earth. As the final exercise for this part of the module, you will be leading this project.



Getting started and submission
Open a new CodePen and when ready, send the link to the TA via Slack or email. Don't wait until you're entirely done, any time you're stuck reach out in code-help Slack channel to members of the Ironhack community, to your peers in your cohorts' Slack channel and then if you didn't get needed help, to your TAs.

Paste this code as your start in the CodePen you just opened:

// Rover Object Goes Here
// ======================




// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
Basic Information
Our Mars Rover is kind of dumb. By that, we mean it can't move and turn at the same time. This means that if the rover wants to move to the left, its first move must be a turn. Its next move will then be a step forward.

We will discuss this concept in more detail as we progress through the exercise.

Also, our rover is on a test mission. NASA has placed the rover on a 10x10 grid to make sure all is well before we ship it off to Mars.

At a high level, what we will do in the exercise is the following:

create a function to turn the rover,
create a function to move the rover forward or backward based on its direction,
create a function to receive a list of commands and move based off of those commands.
Does this sound familiar to you? Haven't we just done something similar in our Final exercise?

Let's go!

Iteration 1 | The Rover Object
Create an object to represent the rover. This object will have only one property for now: the direction.

The direction property can contain one of four values: "N", "S", "E", or "W". The rover's default direction will be "N" (as North).

Iteration 2 | Turning the Rover
The rover has a direction attribute. We've already provided functions named turnLeft() and turnRight(). Each function receives a rover object as an argument. Your job is to turn the rover in the appropriate direction based off of its current direction.

Examples:

Rover is facing North and turns left => Rover is now facing West

Rover is facing West and turns left => Rover is now facing South

Rover is facing North and turns right => Rover is now facing East.



Suggested Approach
Begin with a switch statement. Based off of which function is being called, turn the rover in the correct direction based off of its current direction.

Test these functions putting console logs in them which will tell you which direction is rover facing and check the output in the console of the CodePen.

Iteration 3 | Moving the Rover
The rover's position
To move the rover around, we have to keep track of the rover's position.

Positions can be represented as a pair of coordinates, x and y. Add two properties to your rover called x and y. Their default values will both be set to 0.

Again, is this familiar to you?



Moving Forward
Once the rover has a position, it's time to move it.



moveForward() is a function of the rover's current direction, and the movement forward.

For instance, if the rover is facing west and moves forward, we would decrease the rover's x by 1.

If the rover is facing north and moves forward, we would decrease the rover's y by 1.

If the rover is facing south and moves forward, we would increase the y by 1.

Fill in this logic in the moveForward() function. After each movement, console.log the rover's coordinates so you can see where it's positioned.

Iteration 4 | Commands
Create a function that receives a list of commands. These commands will be the first letter of either (f)orward, (r)ight, or (l)eft.

To test it, use the string: ‘rffrfflfrff’.

Suggested Approach
Use a loop to iterate over the string. Inside this loop, write a switch or if statement to call the correct function. For instance, if the letter is f, you're going to want to call the goForward() function.

Iteration 5 | Tracking
We want to know where our rover has been so far. Create a property on the rover object that contains the coordinates of the places where it has been. This property will be an array and you can call it travelLog.

After each move, push the coordinates of the previous place where the rover was to the travelLog array. After the rover has finished its moves, print out all of the places the rover has traveled over.

Bonus 1 | Enforce Boundaries
At some point, you may have accidentally run our rover off of the grid. If you recall, our grid is 10x10.

Make sure your rover doesn't accidentally roam off the map!

Bonus 2 | Move Backwards
Create another function called moveBackward() that will move the rover back. This will be very similar to the moveForward() function.

Bonus 3 | Validate Inputs
If we enter a letter into our inputs that isn't a rover command, nothing happens. For example, ffzzy would simply move forward twice. Add validation so that the inputs must be f, b, r, or l.

Bonus 4 | Obstacles
The following requires you to actually create a grid for the rover to move around on. In code, these grids are often represented as two-dimensional arrays.

Obstacles - Create obstacles for the rover. If the rover's next move would run it into an obstacle, stop it from moving forward and report the obstacle as found with console.log.
Other Rovers - Add additional rovers to the map. Have them take turns moving. If one rover is going to run into the other, you should stop the rover and console.log a message saying so.

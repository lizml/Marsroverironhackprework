//Rover A

var roverA = {
    id: "A",
    position: [0,0], // x and y coordinates
    direction: "f",
    rotation: 0,
    char: "N",
    moving: false
  };
  
  //Rover B
  var roverB = {
    id: "B",
    position: [1,0], // x and y coordinates
    direction: "f",
    rotation: 1,
    char: "E",
    moving: false
  };
  
  // Obstacles
  var Obstacles = {
    obsA: [0,4],
    obsB: [0,-1],
    obsC: [0,2]
  };
  
  var par = document.createElement("p");
  var br;
  var textnode;
  
  random_coordinates(Obstacles.obsA);
  random_coordinates(Obstacles.obsB);
  random_coordinates(Obstacles.obsC);
  
  function goXdirection(rover, direction){
    var movement = 0;
    var new_position = rover.position[0];
    switch (direction) {
      case 'f':
            movement = 1;
            break;
      default:
            movement = -1;
    };
  
      if(rover.rotation == 1)
        new_position += movement;
      else
        new_position -= movement;
  
      if(new_position < -5)
        new_position = 5;
      else if(new_position  > 5)
        new_position  = -5;
  
      if(checkObstacle(new_position,rover.position[1], rover)){
        rover.position[0] = new_position;
      }
  };
  
  function goYdirection(rover, direction){
    var movement = 0;
    var new_position = rover.position[1];
    switch (direction) {
      case 'f':
            movement = 1;
            break;
      default:
            movement = -1;
    };
  
      if(rover.rotation == 0)
        new_position += movement;
  
      else
        new_position -= movement;
  
      if(new_position < -5){
          new_position = 5;
        }
      else if(new_position > 5){
          new_position = -5;
        }
  
      if(checkObstacle(rover.position[0],new_position, rover)){
          rover.position[1] = new_position;
        }
  };
  
  function rotateRover(rover, rotation){
    if(rotation == "r"){
      if(rover.rotation == 3)
        rover.rotation = 0;
      else
        rover.rotation++;
    }
    else{
      if(rover.rotation == 0)
        rover.rotation = 3;
      else
        rover.rotation--;
    }
    switch(rover.rotation){
      case 1:
        rover.char = "E";
        break;
      case 2:
        rover.char = "S";
      break;
      case 3:
        rover.char = "W";
      break;
      default:
        rover.char = "N";
    };
  };
  
  function directRover(rover, direction){
    rotation = rover.rotation;
    if(direction == 'f' || direction == 'b'){
      if(rotation == 0 || rotation == 2){
        goYdirection(rover, direction);
      }
      else {
        goXdirection(rover, direction);
      }
    }
    else if(direction == 'r' || direction == 'l'){
      rotateRover(rover, direction);
    }
  
    else{
      br = document.createElement("br");
      textnode = document.createTextNode("Invalid Input: Rover did not change.");
      par.appendChild(textnode);
      par.appendChild(br);
    }
    br = document.createElement("br");
    textnode = document.createTextNode("Rover " + rover.id + "'s location and direction: Facing: " + rover.char + " Coordinates: [" + rover.position[0] + ", " + rover.position[1] + "]");
    par.appendChild(textnode);
    par.appendChild(br);
    document.getElementById("rovers_log").appendChild(par);
  };
  
  function checkObstacle(x,y, rover){
    br = document.createElement("br");
    var new_position = x + "," + y;
    if(rover.id == "A"){
      if(new_position == roverB.position){
        textnode = document.createTextNode("Rover detected Rover B in its path. Rover " + rover.id + " cannot move.");
        par.appendChild(textnode);
        par.appendChild(br);
        return false;
      }
    }
    else{
      if(new_position == roverA.position){
          textnode = document.createTextNode("Rover detected Rover A in its path. Rover " + rover.id + " cannot move.");
          par.appendChild(textnode);
          par.appendChild(br);
          return false;
        }
    }
    if(new_position != Obstacles.obsA && new_position != Obstacles.obsB && new_position != Obstacles.obsC){
      return true;
    }
    else{
      textnode = document.createTextNode("Rover detected obstacle in its path. Rover " + rover.id + " cannot move.");
      par.appendChild(textnode);
      par.appendChild(br);
      return false;
    }
  };
  
  function controltheRover(rover){
      if(rover.id == "A"){
          var user_commands = document.getElementById("roverA_control").value;
          document.getElementById("roverA_control").value= "";
      }
      else{
          var user_commands = document.getElementById("roverB_control").value;
          document.getElementById("roverB_control").value= "";
      }
    rover.direction = user_commands;
    for(var i=0; i < rover.direction.length; i++){
      directRover(rover, rover.direction[i]);
    }
    rover.moving = true;
      map();
  };
  
  function map(){
      var row, column, info, current_position;
      document.getElementById("map").innerHTML = "";
      for(var i=5; i >= -5; i--){
          row = document.createElement("div");
          row.className = "row";
          for(var j=-5; j <= 5; j++){
          current_position = j + "," + i;
          column = document.createElement("div");
          column.className = "col-sm-1 col-xs-1";
          if(current_position == roverA.position){
                 column.className += "  glyphicon glyphicon-registration-mark rover";
                 if(roverA.moving){
                     column.className += " moving";
                     roverA.moving = false;
                 }
                 textnode = document.createTextNode(" " + roverA.char);
          }
          else if(current_position == roverB.position){
                 column.className += " glyphicon glyphicon-registration-mark rover";
                 if(roverB.moving){
                     column.className += " moving";
                     roverB.moving = false;
                 }
                 textnode = document.createTextNode(" " + roverB.char);
          }
          else if(current_position == Obstacles.obsA || current_position == Obstacles.obsB || current_position == Obstacles.obsC){
              column.className += " glyphicon glyphicon-flash obstacle";
              textnode = document.createTextNode("");
          }
          else{
             column.className += " cell";
             textnode = document.createTextNode(" "); 
          }
          column.appendChild(textnode);
          row.appendChild(column);
          document.getElementById("map").appendChild(row);
          }
      }
  };
  
  function random_coordinates(obstacle){
      var x,y;
      do{
             x = Math.floor((Math.random() * 11) - 5);
          if(x > 5)
              x = -5;
             y = Math.floor((Math.random() * 11) - 5);
          if(y > 5)
              y = -5;
            current_position = x + "," + y;
      }while(current_position == roverA.position || current_position == roverB.position)
             obstacle[0] = x;
             obstacle[1] = y;
  }
  
  map();
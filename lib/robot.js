'use strict';

function Robot(coordinates) {
  // implement your solution here!
  this.coordinates = []

}

Robot.prototype.orient = function(currentDirection){
  if(currentDirection === "east"){
    this.bearing = currentDirection
  }else if(currentDirection === "west"){
    this.bearing = currentDirection
  }else if(currentDirection === "north"){
    this.bearing = currentDirection
  }else if(currentDirection === "south"){
    this.bearing = currentDirection
  }else{
    throw new Error("Invalid Robot Bearing")
  }
}

Robot.prototype.turnRight = function(){
  if(this.bearing === "east"){
    this.bearing = "south"
  }else if(this.bearing === "west"){
    this.bearing = "north"
  }else if(this.bearing === "north"){
    this.bearing = "east"
  }else if(this.bearing === "south"){
    this.bearing = "west"
  }
}

Robot.prototype.turnLeft = function(){
  if(this.bearing === "east"){
    this.bearing = "north"
  }else if(this.bearing === "west"){
    this.bearing = "south"
  }else if(this.bearing === "north"){
    this.bearing = "west"
  }else if(this.bearing === "south"){
    this.bearing = "east"
  }
}

Robot.prototype.at = function(x, y){
  this.coordinates[0] = x
  this.coordinates[1] = y
}

Robot.prototype.advance = function(){
  if(this.bearing === "north"){
    this.coordinates[1] += 1
  }else if(this.bearing === "east"){
    this.coordinates[0] += 1
  }else if(this.bearing === "south"){
    this.coordinates[1] -= 1
  }else if(this.bearing === "west"){
    this.coordinates[0] -= 1
  }
}

Robot.prototype.instructions = function(dir){
  var outputarray = []
  var inputarray = dir.split("")
  for(var i = 0, l = inputarray.length; i < l; i++){
    if(inputarray[i] === "L"){
      outputarray.push("turnLeft")
    }else if(inputarray[i] === "R"){
      outputarray.push("turnRight")
    }else if(inputarray[i] === "A"){
      outputarray.push("advance")
    }
  }
  return outputarray
}

Robot.prototype.place = function(instobj){
  // this.coordinates[0] = instobj['x']
  // this.coordinates[1] = instobj['y']
  // this.orient = instobj['direction']
  this.at(instobj['x'], instobj['y'])
  this.orient(instobj['direction'])
}


Robot.prototype.evaluate = function(dirstring){
  var direcarray = this.instructions(dirstring)
  for(var i = 0, l = direcarray.length; i < l; i++){
    if(direcarray[i] === "turnRight"){
      this.turnRight()
    }else if(direcarray[i] === "turnLeft"){
      this.turnLeft()
    }else if(direcarray[i] === "advance"){
      this.advance()
    }
  }
  // this.at(this.coordinates[0], this.coordinates[1])
  // this.orient()
  // return this.at(this.coordinates[0], this.coordinates[1])
}

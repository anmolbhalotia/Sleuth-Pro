/*

Officer: 1820440
CaseNum: 702-2-52623330-1820440

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a blue car with a numberPlate of 6MRP8T. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of chaseVehicleObject and the cars in
VehicleObject_Array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_vehicle()
{
	/*
	This function should do the following: 
	 - increment chaseVehicleObject's distDriven property by its speedAmt property 
	 - add a random amount between -0.03 and 0.03 to chaseVehicleObject's engineRumbleAmount property
	 - use the constrain function to constrain chaseVehicleObject's engineRumbleAmount property to values between 0.07 and 1.18
	 - call the cycle_engine function passing chaseVehicleObject as an argument
	*/

	chaseVehicleObject.distDriven += chaseVehicleObject.speedAmt;
	chaseVehicleObject.engineRumbleAmount += random(-0.03,0.03);
	chaseVehicleObject.engineRumbleAmount = constrain(chaseVehicleObject.engineRumbleAmount,0.07,1.18);
	cycle_engine(chaseVehicleObject);

}


function switch_lanes(car)
{
	/*
	This function should do the following: 
	 - move car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoordinate_A and LaneCoordinate_B to effect the change.
	 - finally you should return car at the end of the function.
	 hint: You will need to modify the xCoord property of car.
	*/

	if(car.xCoord == LaneCoordinate_A)
	{
		car.xCoord = LaneCoordinate_B;
	}
	else
	{
		car.xCoord = LaneCoordinate_A;
	}
	return car;

}


function searchCar_ahead( carObj )
{
	/*
	This function should do the following: 
	 - determine if carObj is in the same lane and less than 200px behind any of the cars in VehicleObject_Array.
	 - do this by traversing VehicleObject_Array and comparing each car's distDriven property to that of carObj.
	 - use the numberPlate property of each car to ignore cars that match carObj.
	 - if you find a car that matches these requirements then return the numberPlate property for the car. 
	 Otherwise return false.
	*/

	for(var i=0;i<VehicleObject_Array.length;i++)
	{
		if
		(
			carObj.xCoord == VehicleObject_Array[i].xCoord &&
			abs(carObj.distDriven - VehicleObject_Array[i].distDriven)<200 &&
			carObj.distDriven < VehicleObject_Array[i].distDriven
		)
		{
			return VehicleObject_Array[i].numberPlate;
		}
		else
		{
			return false;
		}
	}

}


function check_isAtSide( targetVehicle )
{
	/*
	This function should do the following: 
	 - determine if targetVehicleis parallel with chaseVehicleObject.
	 - if targetVehicle is found to be parallel to chaseVehicleObject then return 	 
	 - cars are considered parallel if the absolute difference between their distDriven properties is less than 
	 25 px and they have non-matching xCoord properties	
	 */

	if
	(
		targetVehicle.xCoord != chaseVehicleObject.xCoord &&
		abs(targetVehicle.distDriven<chaseVehicleObject.distDriven)
	)
	{
		return ;
	}
	else
	{
		return false;
	}

}


function check_criminal()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to chaseVehicleObject to see if they match the numberPlate property in the criminal description.
	 - it does this by traversing VehicleObject_Array and calling check_isAtSide for each car
.	 - if a positive result is returned then the numberPlate property of the found car is then checked against the criminal description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var chaseVehicleObject;

var roadWidth;
var roadLeftEdge;
var LaneCoordinate_A;
var LaneCoordinate_B;
var carImages = {};
var criminal;

var VehicleObject_Array = [
{ xCoord: 500, yCoord: 0, distDriven: -200, carType: 'redCar', numberPlate: 'H7GT49', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 200, carType: 'whiteCar', numberPlate: 'SUPXO7', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 600, carType: 'blueCar', numberPlate: 'D1CFZJ', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 1000, carType: 'greenCar', numberPlate: '8ZBZ98', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 1400, carType: 'blueCar', numberPlate: '6MRP8T', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 1800, carType: 'greenCar', numberPlate: 'LUCA1E', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 2200, carType: 'blueCar', numberPlate: 'M81F8N', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 2600, carType: 'whiteCar', numberPlate: 'TMWNBJ', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 3000, carType: 'whiteCar', numberPlate: 'U9ZQXL', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 3400, carType: 'blueCar', numberPlate: 'TV287F', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 3800, carType: 'greenCar', numberPlate: '3P6WRO', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 4200, carType: 'blueCar', numberPlate: 'QT3T98', speedAmt: 2, exhaust: [  ]} , { xCoord: 500, yCoord: 0, distDriven: 4600, carType: 'redCar', numberPlate: 'J0ZW7A', speedAmt: 2, exhaust: [  ]} , { xCoord: 500, yCoord: 0, distDriven: 5000, carType: 'blueCar', numberPlate: 'H19M8K', speedAmt: 2, exhaust: [  ]} , { xCoord: 500, yCoord: 0, distDriven: 5400, carType: 'redCar', numberPlate: 'L9YTHY', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 5800, carType: 'greenCar', numberPlate: 'QP29W7', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 6200, carType: 'blueCar', numberPlate: 'HU5X8I', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 6600, carType: 'greenCar', numberPlate: 'B5B2MJ', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 7000, carType: 'blueCar', numberPlate: 'MAUA2Y', speedAmt: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distDriven: 7400, carType: 'whiteCar', numberPlate: '3572SI', speedAmt: 2, exhaust: [  ]} 
];



function preload()
{

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];


	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	LaneCoordinate_A = 300;
	LaneCoordinate_B = 500;

	chaseVehicleObject = 
	{
		xCoord: roadLeftEdge + roadWidth/4,
		yCoord: 550,
		distDriven: 0,
		speedAmt: 3,
		engineRumbleAmount: 0,
		carType: 'detective',
		numberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(criminal)
	{
		fill(255);

		text("criminal found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	move_vehicle();
	var b2b = searchCar_ahead( chaseVehicleObject );
	if(b2b)switch_lanes(chaseVehicleObject);
	var a = check_criminal();
	if(a != false)criminal = a;


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < VehicleObject_Array.length; i++)
	{
		VehicleObject_Array[i].distDriven += VehicleObject_Array[i].speedAmt;
		VehicleObject_Array[i].yCoord = chaseVehicleObject.yCoord - VehicleObject_Array[i].distDriven + chaseVehicleObject.distDriven;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (chaseVehicleObject.distDriven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (chaseVehicleObject.distDriven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(chaseVehicleObject);
	image
	(
		carImages["detective"],
		chaseVehicleObject.xCoord - carImages["detective"].width/2 + random(-chaseVehicleObject.engineRumbleAmount, chaseVehicleObject.engineRumbleAmount),
		chaseVehicleObject.yCoord + random(-chaseVehicleObject.engineRumbleAmount, chaseVehicleObject.engineRumbleAmount)
	);

	//draw all other cars

	for(var i = 0; i < VehicleObject_Array.length; i ++)
	{
		if(VehicleObject_Array[i].yCoord < height && VehicleObject_Array[i].yCoord > -height/2)
		{
			image(
			carImages[VehicleObject_Array[i].carType],
			VehicleObject_Array[i].xCoord - carImages[VehicleObject_Array[i].carType].width/2,
			VehicleObject_Array[i].yCoord
			);
			cycle_engine(VehicleObject_Array[i]);

			drawExhaust(VehicleObject_Array[i]);
		}
	}

}

function cycle_engine(car)
{

	car.exhaust.push({size: 2, x: car.xCoord, y: car.yCoord + carImages[car.carType].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speedAmt/3);
		if(car.carType != "detective")car.exhaust[i].y += (chaseVehicleObject.speedAmt - car.speedAmt);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}

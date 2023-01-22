/*

Officer: 1820440
CaseNum: 702-1-84138177-1820440

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of chaseCarObject and the cars in
VehicleObject_Data to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Vehicle()
{
	/*
	This function should do the following: 
	 - increment chaseCarObject's distAmt property by its accelAmt property 
	 - add a random amount between -0.07 and 0.07 to chaseCarObject's engineShudderValue property
	 - use the constrain function to constrain chaseCarObject's engineShudderValue property to values between 0.01 and 1.17
	 - call the Turn_Car_engine function passing chaseCarObject as an argument
	*/

	chaseCarObject.distAmt += chaseCarObject.accelAmt;
	chaseCarObject.engineShudderValue += random(-0.07,0.07);
	chaseCarObject.engineShudderValue = constrain(chaseCarObject.engineShudderValue,0.01,1.17);
	Turn_Car_engine(chaseCarObject);

}


function Cross_Lanes(vehicle)
{
	/*
	This function should do the following: 
	 - move vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_position_A and Lane_position_B to effect the change.
	 hint: You will need to modify the x property of vehicle.
	*/

	if(vehicle.x == Lane_position_A)
	{
		vehicle.x = Lane_position_B;
	}
	else
	{
		vehicle.x = Lane_position_A;
	}
	return vehicle;

}


function SearchVehicle_IsInfront( targetCar )
{
	/*
	This function should do the following: 
	 - determine if targetCar is in the same lane and less than 200px behind any of the cars in VehicleObject_Data.
	 - do this by traversing VehicleObject_Data and comparing each car's distAmt property to that of targetCar.
	 - if you find a car that matches these requirements then return the licencePlate property for the car. Otherwise return false.
	*/

	for(var i=0;i<VehicleObject_Data.length;i++)
	{
        if(targetCar.x==VehicleObject_Data[i].x&&
          abs(targetCar.distAmt-VehicleObject_Data[i].distAmt)<200&&
          targetCar.distAmt<VehicleObject_Data[i].distAmt)
		{
            return VehicleObject_Data[i].licencePlate;
        }
    }
    return false;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var chaseCarObject;

var roadWidth;
var roadLeftEdge;
var Lane_position_A;
var Lane_position_B;
var carImages = {};

var VehicleObject_Data = [
{ x: 500, y: 0, distAmt: -200, carType: 'greenCar', licencePlate: 'W1J3EU', accelAmt: 2, exhaust: [  ]} , { x: 500, y: 0, distAmt: 200, carType: 'whiteCar', licencePlate: 'WSGLO2', accelAmt: 2, exhaust: [  ]} , { x: 500, y: 0, distAmt: 600, carType: 'redCar', licencePlate: 'KPCKWH', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 1000, carType: 'redCar', licencePlate: 'MK7NF5', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 1400, carType: 'redCar', licencePlate: '5I1N44', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 1800, carType: 'greenCar', licencePlate: 'Z9NCYD', accelAmt: 2, exhaust: [  ]} , { x: 500, y: 0, distAmt: 2200, carType: 'redCar', licencePlate: 'KI0OOJ', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 2600, carType: 'whiteCar', licencePlate: 'ET5VIM', accelAmt: 2, exhaust: [  ]} , { x: 500, y: 0, distAmt: 3000, carType: 'redCar', licencePlate: 'KKOALE', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 3400, carType: 'blueCar', licencePlate: 'OBV9Y4', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 3800, carType: 'blueCar', licencePlate: 'VUB7EE', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 4200, carType: 'greenCar', licencePlate: '0YSWX1', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 4600, carType: 'redCar', licencePlate: 'L0TIH6', accelAmt: 2, exhaust: [  ]} , { x: 500, y: 0, distAmt: 5000, carType: 'redCar', licencePlate: 'J02DXL', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 5400, carType: 'whiteCar', licencePlate: 'ZKH0XT', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 5800, carType: 'greenCar', licencePlate: '4CX9ZW', accelAmt: 2, exhaust: [  ]} , { x: 500, y: 0, distAmt: 6200, carType: 'whiteCar', licencePlate: '3J94C2', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 6600, carType: 'whiteCar', licencePlate: 'PMBRIX', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 7000, carType: 'whiteCar', licencePlate: 'HXFLYU', accelAmt: 2, exhaust: [  ]} , { x: 300, y: 0, distAmt: 7400, carType: 'greenCar', licencePlate: 'CXQ90C', accelAmt: 2, exhaust: [  ]} 
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

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_position_A = 300;
	Lane_position_B = 500;

	chaseCarObject = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 550,
		distAmt: 0,
		accelAmt: 3,
		engineShudderValue: 0,
		carType: 'detective',
		licencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	Drive_Vehicle();
	var b2b = SearchVehicle_IsInfront( chaseCarObject );
	if(b2b)Cross_Lanes(chaseCarObject);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < VehicleObject_Data.length; i++)
	{
		VehicleObject_Data[i].distAmt += VehicleObject_Data[i].accelAmt;
		VehicleObject_Data[i].y = chaseCarObject.y - VehicleObject_Data[i].distAmt + chaseCarObject.distAmt;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (chaseCarObject.distAmt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (chaseCarObject.distAmt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(chaseCarObject);
	image
	(
		carImages["detective"],
		chaseCarObject.x - carImages["detective"].width/2 + random(-chaseCarObject.engineShudderValue, chaseCarObject.engineShudderValue),
		chaseCarObject.y + random(-chaseCarObject.engineShudderValue, chaseCarObject.engineShudderValue)
	);

	//draw all other cars

	for(var i = 0; i < VehicleObject_Data.length; i ++)
	{
		if(VehicleObject_Data[i].y < height && VehicleObject_Data[i].y > -height/2)
		{
			image(
			carImages[VehicleObject_Data[i].carType],
			VehicleObject_Data[i].x - carImages[VehicleObject_Data[i].carType].width/2,
			VehicleObject_Data[i].y
			);
			Turn_Car_engine(VehicleObject_Data[i]);

			drawExhaust(VehicleObject_Data[i]);
		}
	}

}

function Turn_Car_engine(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.carType].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accelAmt/3);
		if(car.carType != "detective")car.exhaust[i].y += (chaseCarObject.accelAmt - car.accelAmt);
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

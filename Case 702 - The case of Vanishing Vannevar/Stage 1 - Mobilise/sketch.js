/*

Officer: 1820440
CaseNum: 702-0-61278126-1820440

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of InvestigatorVehicleObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function drive_vehicle()
{
	/*
	This function should do the following: 
	 - increment InvestigatorVehicleObject's DistanceAmt property by its AccelAmount property 
	 - add a random amount between -0.07 and 0.07 to InvestigatorVehicleObject's EngineShudderValue property
	 - use the constrain function to constrain InvestigatorVehicleObject's EngineShudderValue property to values between 0.04 and 0.96
	 - call the run_car_engine function passing InvestigatorVehicleObject as an argument
	*/

	InvestigatorVehicleObject.DistanceAmt += InvestigatorVehicleObject.AccelAmount;
	InvestigatorVehicleObject.EngineShudderValue += random(-0.07,0.07);
	InvestigatorVehicleObject.EngineShudderValue = constrain(InvestigatorVehicleObject.EngineShudderValue,0.04,0.96);
	run_car_engine(InvestigatorVehicleObject);

}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var InvestigatorVehicleObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	InvestigatorVehicleObject = 
	{
		PositionX: roadLeftEdge + roadWidth/4,
		PositionY: 300,
		DistanceAmt: 0,
		AccelAmount: 3,
		EngineShudderValue: 0,
		VehicleCategory: 'detective',
		NumberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	drive_vehicle();


	drawRoad();
	drawCars();
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
		roadLeftEdge + roadWidth/2 , i * 100 + (InvestigatorVehicleObject.DistanceAmt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (InvestigatorVehicleObject.DistanceAmt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(InvestigatorVehicleObject);
	image
	(
		carImages["detective"],
		InvestigatorVehicleObject.PositionX - carImages["detective"].width/2 + random(-InvestigatorVehicleObject.EngineShudderValue, InvestigatorVehicleObject.EngineShudderValue),
		InvestigatorVehicleObject.PositionY + random(-InvestigatorVehicleObject.EngineShudderValue, InvestigatorVehicleObject.EngineShudderValue)
	);

}

function run_car_engine(car)
{

	car.exhaust.push({size: 2, x: car.PositionX, y: car.PositionY + carImages[car.VehicleCategory].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.AccelAmount/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
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

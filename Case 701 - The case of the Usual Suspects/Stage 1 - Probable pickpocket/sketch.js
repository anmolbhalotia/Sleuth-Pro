/*

Officer: 1820440
CaseNum: 701-0-31044772-1820440

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist nicole oorin and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. Their expression seemed nerveous. The person I saw was male. It's hard to say. They wore red glasses. I'm not quite sure. That's all I know officer. 

*/

var lineupLog = [
	{ 
		"name": "GAYLA THAXTER",
		"gender": "male",
		"expression": "nerveous",
		"glasses": "red"
	},
	{ 
		"name": "MALINDA BROADVIEW",
		"gender": "male",
		"expression": "menacing",
		"glasses": "very thin"
	},
	{ 
		"name": "LESLEY SILVEIRA",
		"gender": "female",
		"expression": "sad",
		"glasses": "blue"
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function matchSuspect(suspectObj)
{
	if(
		suspectObj.gender == "male" &&
		suspectObj.glasses== "red" &&
		suspectObj.expression == "nerveous")
	{
		return true;
	}
	return false;
}



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < lineupLog.length; i++){
    if(matchSuspect(lineupLog[i]) == true){
      fill(255,0,0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}

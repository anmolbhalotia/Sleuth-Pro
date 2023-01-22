/*

Officer: 1820440
CaseNum: 701-1-88355160-1820440

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. I'm not quite sure. They were carrying a orange tote bag. I think they were more than 156 cm tall. They had no hair. It's hard to say. The person I saw was male. They wore white glasses. They were quite big, they probably weigh more than 74 Kg. That's all I know officer. 

*/

var allSuspects = [
	{ 
		"name": "PIERRE GOODBURY",
		"glasses": "red",
		"hair": "thick black",
		"gender": "male",
		"weight": 64,
		"height": 175
	},
	{ 
		"name": "LIANNE BROADVIEW",
		"glasses": "white",
		"hair": "no",
		"gender": "male",
		"weight": 80,
		"height": 160
	},
	{ 
		"name": "JESUS OORIN",
		"glasses": "light tan",
		"hair": "shaved",
		"gender": "male",
		"weight": 78,
		"height": 150
	},
	{ 
		"name": "BRAD ZETLAND",
		"glasses": "very thin",
		"hair": "red",
		"gender": "male",
		"weight": 100,
		"height": 190
	},
	{ 
		"name": "JULIANA JOYER",
		"glasses": "black",
		"hair": "long white",
		"gender": "female",
		"weight": 68,
		"height": 165
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

function testProperties(suspectObj)
{
	if
	(
		suspectObj.height >= 156 &&
		suspectObj.hair == "no" &&
		suspectObj.gender == "male" &&
		suspectObj.glasses == "white" &&
		suspectObj.weight >= 74 
	)
	{
		return true;
	}
	return false;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < allSuspects.length; i++){
    if(testProperties(allSuspects[i]) == true){
      fill(255,0,0);
      text(allSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(allSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}

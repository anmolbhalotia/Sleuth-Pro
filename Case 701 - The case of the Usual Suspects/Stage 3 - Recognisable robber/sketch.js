/*

Officer: 1820440
CaseNum: 701-2-85575149-1820440

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from bridget courtwood. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. They were fairly tall, I think between a height of 162 and 181 cm. It was so scary! They were wearing a green army coat. They seemed to be between the age of 38 and 50 years old. They wore red glasses. They brobably weigh between 68 and 85 kg. It's so hard to remember right now. I distinctly remember that they were wearing a pink scarf, I remember thinking that was quite unusual. They had shaved hair. I'll never forget their pale eyes. That's all I can remember about them. 

*/

var usualSuspects = [
	{ 
		"name": "KITTY ASHELY",
		"eyes": "black",
		"coat": "black hoodie",
		"item": "orange socks",
		"glasses": "cheap plastic",
		"weight": 80,
		"age": 45,
		"height": 181
	},
	{ 
		"name": "JAUNITA MAUBERT",
		"eyes": "blue",
		"coat": "blue overcoat",
		"item": "fur vest",
		"glasses": "black",
		"weight": 73,
		"age": 35,
		"height": 182
	},
	{ 
		"name": "GAYLA DAVISWOOD",
		"eyes": "green",
		"coat": "green jacket",
		"item": "dotted necktie",
		"glasses": "light tan",
		"weight": 74,
		"age": 49,
		"height": 175
	},
	{ 
		"name": "JESUS PEGORD",
		"eyes": "black",
		"coat": "white fur coat",
		"item": "pair of leather trousers",
		"glasses": "thin metallic",
		"weight": 66,
		"age": 40,
		"height": 196
	},
	{ 
		"name": "ERMELINDA ZETLAND",
		"eyes": "pale",
		"coat": "green army coat",
		"item": "pink scarf",
		"glasses": "red",
		"weight": 79,
		"age": 48,
		"height": 179
	},
	{ 
		"name": "JENIFFER MYRLE",
		"eyes": "brown",
		"coat": "black overcoat",
		"item": "red necktie",
		"glasses": "dark brown",
		"weight": 63,
		"age": 30,
		"height": 172
	},
	{ 
		"name": "MAJORIE PHINNEY",
		"eyes": "brown",
		"coat": "yellow poncho",
		"item": "purple hat",
		"glasses": "blue",
		"weight": 70,
		"age": 54,
		"height": 170
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
function matchProperties(suspectObj)
{
	if
	(
		suspectObj.height >= 162 && suspectObj.height <= 181 &&
		suspectObj.coat == "green army coat" &&
		suspectObj.age >=38 && suspectObj.age <= 50 &&
		suspectObj.glasses == "red" &&
		suspectObj.weight >= 68 && suspectObj.weight <= 85 &&
		suspectObj.item == "pink scarf" &&
		suspectObj.eyes == "pale"
	)
	{
		return 7
	}
	return false;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    let matchingProperties = matchProperties(usualSuspects[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + usualSuspects[i].name, 60, 60 + i * 20);
  }
}

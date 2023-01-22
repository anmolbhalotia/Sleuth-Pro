/*

Officer: 1820440
CaseNum: 701-3-67467260-1820440

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from tamica crome.
All they need is for you to do the detective work.

This time you must implement two functions:

- A testProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A findGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - function findGuilty(){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. They had thick black hair. They were carrying a plastic box. They seemed to be between the age of 34 and 45 years old. It was very dark and I could barely see, It was very dark and I could barely see, I'll never forget their black eyes. They wore dark brown glasses. They brobably weigh between 70 and 95 kg. It was very dark and I could barely see, I distinctly remember that they were wearing a orange socks, I remember thinking that was quite unusual. They were fairly tall, I think between a height of 152 and 205 cm. The person I saw was female. Can I go home now Sir? 

*/

var usualSuspects = [
	{ 
		"name": "LARRAINE MONKSFORD",
		"item": "pink scarf",
		"eyes": "green",
		"accessory": "glass bottle",
		"gender": "female",
		"weight": 79,
		"age": 22,
		"height": 182
	},
	{ 
		"name": "DRUSILLA COURTWOOD",
		"item": "net weave shirt",
		"eyes": "green",
		"accessory": "big black envelope",
		"gender": "male",
		"weight": 67,
		"age": 55,
		"height": 179
	},
	{ 
		"name": "JESSIA WARMAN",
		"item": "fur vest",
		"eyes": "grey",
		"accessory": "brown paper bag",
		"gender": "male",
		"weight": 75,
		"age": 41,
		"height": 181
	},
	{ 
		"name": "JESUS MOHWAWK",
		"item": "dotted necktie",
		"eyes": "pale",
		"accessory": "orange tote bag",
		"gender": "female",
		"weight": 75,
		"age": 54,
		"height": 185
	},
	{ 
		"name": "LAKESHA JOYER",
		"item": "red necktie",
		"eyes": "pale",
		"accessory": "metal briefcase",
		"gender": "female",
		"weight": 60,
		"age": 29,
		"height": 156
	},
	{ 
		"name": "PIERRE SILVEIRA",
		"item": "orange socks",
		"eyes": "black",
		"accessory": "plastic box",
		"gender": "female",
		"weight": 75,
		"age": 41,
		"height": 176
	},
	{ 
		"name": "LESLEY OORIN",
		"item": "purple hat",
		"eyes": "blue",
		"accessory": "red backpack",
		"gender": "female",
		"weight": 69,
		"age": 40,
		"height": 168
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

function testProperties(usualSuspects)
{
	var matches = 0;
	if (usualSuspects.hair == "black")
	{
		matches ++
	}
	if (usualSuspects.accessory == "plastic box")
	{
		matches ++
	}
	if (usualSuspects.age >= 34 && usualSuspects.age <= 45)
	{
		matches ++
	}
	if (usualSuspects.eyes == "black")
	{
		matches ++
	}
	if (usualSuspects.weight >= 70 && usualSuspects.weight <= 95)
	{
		matches ++
	}
	if (usualSuspects.item == "orange socks")
	{
		matches ++
	}
	if (usualSuspects.height >= 152 && usualSuspects.height <= 205)
	{
		matches ++
	}
	if (usualSuspects.gender == "female")
	{
		matches ++
	}

	return matches	
}

function findGuilty()
{
	var guilty = {}
	var max = 0;

	for (var p = 0;p<usualSuspects.length;p++)
	{
		if(testProperties(usualSuspects[p]) > max)
		{
			max = testProperties(usualSuspects[p])
			guilty = usualSuspects[p]
		}
	}
	return guilty;

}



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(findGuilty().name + " is guilty!", 60, 80);
}

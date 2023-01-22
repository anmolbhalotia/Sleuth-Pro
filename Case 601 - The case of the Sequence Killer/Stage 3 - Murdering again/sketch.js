/*
Officer: 1820440
CaseNum: 601-2-93767221-1820440

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Sienna stroke triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, ForestGreen stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 33 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- stroke
- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var frySighted = [ 
  { coord_x : 639, coord_y : 288},
  { coord_x : 681, coord_y : 286},
  { coord_x : 712, coord_y : 293},
  { coord_x : 756, coord_y : 310},
  { coord_x : 715, coord_y : 368},
  { coord_x : 701, coord_y : 425},
  { coord_x : 753, coord_y : 436},
  { coord_x : 815, coord_y : 468},
  { coord_x : 795, coord_y : 506},
  { coord_x : 788, coord_y : 497},
  { coord_x : 781, coord_y : 486},
  { coord_x : 768, coord_y : 489},
  { coord_x : 750, coord_y : 500},
  { coord_x : 732, coord_y : 506},
  { coord_x : 714, coord_y : 514},
  { coord_x : 695, coord_y : 531},
  { coord_x : 693, coord_y : 552},
  { coord_x : 654, coord_y : 523},
  { coord_x : 624, coord_y : 500},
  { coord_x : 594, coord_y : 484},
  { coord_x : 555, coord_y : 474} 
];


//Recent crime records.

var murderRecord = [ 
  { PtX : 409, PtY : 446, Victim : 'GAYLA WILLMAR'},
  { PtX : 443, PtY : 419, Victim : 'NELSON TINTLE'},
  { PtX : 465, PtY : 548, Victim : 'HANG NIEMELA'},
  { PtX : 709, PtY : 552, Victim : 'LOUISE ZETLAND'},
  { PtX : 695, PtY : 421, Victim : 'JACQUELINE DURANTS'},
  { PtX : 652, PtY : 268, Victim : 'JESUS FORSLIN'},
  { PtX : 641, PtY : 306, Victim : 'JENIFFER DEAUVILLE'},
  { PtX : 119, PtY : 344, Victim : 'MALINDA GOODBURY'},
  { PtX : 114, PtY : 359, Victim : 'LESLEY MONKSFORD'},
  { PtX : 90, PtY : 490, Victim : 'JAUNITA JOYER'},
  { PtX : 76, PtY : 516, Victim : 'LAKESHA SYMMES'},
  { PtX : 615, PtY : 741, Victim : 'MAJORIE JENI'},
  { PtX : 349, PtY : 796, Victim : 'LIANNE COURTWOOD'},
  { PtX : 456, PtY : 770, Victim : 'LAVERNE JACQUELIN'} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

  //add your code below here

  noFill();
  noStroke();
  for(var i=0;i<frySighted.length;i++)
  {
    stroke(160,82,45);
    triangle(
            frySighted[i].coord_x -5,
            frySighted[i].coord_y,
            frySighted[i].coord_x,
            frySighted[i].coord_y + 5,
            frySighted[i].coord_x + 5,
            frySighted[i].coord_y -5
    )
    noStroke();
  }

  for(var j=0;j<murderRecord.length;j++)
  {
    stroke(34,139,34);
    rect(
        murderRecord[j].PtX -5,
        murderRecord[j].PtY -2.5,
        10,5
    )
  }

  /*
  Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 
  33 pixels of any of the crimes then the details
  should be pushed to possible matches with the following format.

  { crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }
  */

  for(var p=0;p<murderRecord.length;p++)
  {
    for(var k=0;k<frySighted.length;k++)
    {
      if(dist(murderRecord[p].PtX,murderRecord[p].PtY,frySighted[k].coord_x,frySighted[k].coord_y)<33)
    {
      var u = { crime:{x: murderRecord[p].PtX, y:murderRecord[p].PtY, victimName: murderRecord[p].Victim},
               suspect:{x: frySighted[k].coord_x, y:frySighted[k].coord_y} }
      
      possibleMatches.push(u);
    }
    }
    
  }


	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time

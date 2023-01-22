/*
Officer: 1820440
CaseNum: 601-3-21558612-1820440

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Gold stroke ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DarkBlue fill triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 84 pixels of any of the crimes within no more than 3 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- stroke
- ellipse()

- fill
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var criminalLog = {
	PointX: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	PointY: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	date: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var incidentLogbook = {
	PointX: [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817],
	PointY: [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474],
	recordDate: [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18],
	VictimName: ['PIERRE DORCEY', 'LARRAINE PEGORD', 'LINETTE MOHWAWK', 'TAMICA MAUBERT', 'DARBY MYRLE', 'BRAD SILVEIRA', 'LAKESHA SYMMES', 'KITTY THAXTER', 'LOUISE ZETLAND', 'LESLEY MONKSFORD', 'SUMMER CASIMERE', 'JENIFFER DEAUVILLE', 'MAJORIE JENI', 'DRUSILLA WARMAN', 'JACQUELINE DURANTS'],
};

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
	for(var i=0;i<criminalLog.PointX.length;i++)
	{
		stroke(255,215,0);
		ellipse(criminalLog.PointX[i],criminalLog.PointY[i],5);
		noStroke();
	};

	for(var j=0;j<incidentLogbook.PointX.length;j++)
	{
		fill(0,0,139);
		triangle(
				incidentLogbook.PointX[j] - 5,
				incidentLogbook.PointY[j],
				incidentLogbook.PointX[j],
				incidentLogbook.PointY[j] + 5,
				incidentLogbook.PointX[j] + 5,
				incidentLogbook.PointY[j] - 5
		)
		noFill();		
	};

	/*
	This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
	If she was within less than 84 pixels of any of the crimes within no more than 3 days of their occurrence then the details
	should be pushed to the list of possible matches with the following format.

	{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }
	*/

	
	for(var p=0;p<incidentLogbook.PointX.length;p++)
  {
    for(var k=0;k<criminalLog.PointX.length;k++)
    {
		var d = dist(incidentLogbook.PointX[p],incidentLogbook.PointY[p],criminalLog.PointX[k],criminalLog.PointY[k])
		var e = (abs(incidentLogbook.recordDate[p] - criminalLog.date[k]) <= 3)
    	if(d<84 && e)
		{
			var u = { suspect_x: criminalLog.PointX[k], suspect_y: criminalLog.PointY[k] ,
					crime_x: incidentLogbook.PointX[p], crime_y: incidentLogbook.PointY[p], victimName: incidentLogbook.VictimName[p] }
		
			possibleMatches.push(u);

		
		}
    }
    
  }



	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time

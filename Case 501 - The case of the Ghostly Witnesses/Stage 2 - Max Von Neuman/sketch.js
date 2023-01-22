/*

Officer: 1820440
CaseNum: 501-1-69139303-1820440

Case 501 - Max Von Neuman - stage 2

Madame McCarthy says that to summon Max Von Neuman a different approach is needed.
Follow her advice below.

How young Max loved to march with his toy soldiers.
To speak to Max beyond the grave you must place a toy soldier in each of the dashed circles.
Use the image() and the item variable command to place each soldier in its position.
You will need to use a separate for loop for each of the diagonal lines.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, item;

function preload() {
    backgroundImg = loadImage("background.jpg");
    item = loadImage("Soldier.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below

    for(var i = 0;i<7;i++)
    {
        image(item,719 + i*26,270+ i*35);
    }

    for(var j = 0;j<7;j++)
    {
        image(item,1122 - j*40,274 + j*25);
    }

    for (var k = 0;k<4;k++)
    {
        image(item,726 + k*39,532 - k*26);
    }
}

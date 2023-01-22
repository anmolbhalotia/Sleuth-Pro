/*

Officer: 1820440
CaseNum: 502-2-13573695-1820440

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var AExcerpt = {
	Fragment0: [ "sail", "tug", "smile"], 
	Fragment1: [ "fence", "tug", "consider"], 
	Fragment2: [ "rejoice", "radiate", "plug"], 
	Fragment3: [ "fence", "play", "stuff"], 
	Fragment4: [ "play", "sail", "play"], 
	Fragment5: [ "mend", "sneeze", "smile"], 
	Fragment6: [ "rejoice", "radiate", "radiate"], 
	Fragment7: [ "sneeze", "play", "Edsger"], 
	Fragment8: [ "consider", "bake", "succeed"], 
	Fragment9: [ "hurry", "campaign", "sail"]
};

var BExcerpt = {
	Fragment0: [ "sail", "rejoice", "clip"], 
	Fragment1: [ "charge", "play", "bake"], 
	Fragment2: [ "consider", "clip", "$200,000"], 
	Fragment3: [ "hit", "a donation", "Governor Zuckerberg"], 
	Fragment4: [ "ALGOL", "succeed", "plug"], 
	Fragment5: [ "charge", "clip", "meddle"], 
	Fragment6: [ "Hopper", "consider", "syndicate"], 
	Fragment7: [ "play", "protect", "start"], 
	Fragment8: [ "clip", "radiate", "clip"], 
	Fragment9: [ "meddle", "plug", "radiate"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  redactedText = "Dear "+BExcerpt.Fragment3[2]+", I am sure that something could be worked out in terms of "+BExcerpt.Fragment3[1]+" for your "+AExcerpt.Fragment9[1]+". How does "+BExcerpt.Fragment2[2]+" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+BExcerpt.Fragment6[0]+" needs to be out of the picture. She’s caused enough trouble. Get the "+BExcerpt.Fragment6[2]+" to organise the "+BExcerpt.Fragment3[0]+" but I’d prefer it you don’t mention me or "+BExcerpt.Fragment4[0]+". I owe them enough favours already. Your old friend, "+AExcerpt.Fragment7[2]+"";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}

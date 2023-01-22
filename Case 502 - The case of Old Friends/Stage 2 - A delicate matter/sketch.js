/*

Officer: 1820440
CaseNum: 502-1-46676717-1820440

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var ListingA = [
	{Bit0: "rejoice", Bit1: "consider", Bit2: "sail"}, 
	{Bit0: "play", Bit1: "sail", Bit2: "stuff"}, 
	{Bit0: "romantic", Bit1: "tug", Bit2: "succeed"}, 
	{Bit0: "play", Bit1: "tug", Bit2: "consider"}, 
	{Bit0: "stuff", Bit1: "smile", Bit2: "charge"}, 
	{Bit0: "Hopper’s", Bit1: "bake", Bit2: "play"}, 
	{Bit0: "hurry", Bit1: "radiate", Bit2: "sail"}, 
	{Bit0: "protect", Bit1: "Governor Zuckerberg", Bit2: "sneeze"}, 
	{Bit0: "hurry", Bit1: "sneeze", Bit2: "clip"}, 
	{Bit0: "sneeze", Bit1: "clip", Bit2: "mend"}
];

var ListingB = [
	{Bit0: "start", Bit1: "sail", Bit2: "fence"}, 
	{Bit0: "mend", Bit1: "Edsger", Bit2: "tug"}, 
	{Bit0: "mend", Bit1: "stuff", Bit2: "smile"}, 
	{Bit0: "protect", Bit1: "tug", Bit2: "play"}, 
	{Bit0: "a donation", Bit1: "play", Bit2: "stuff"}, 
	{Bit0: "charge", Bit1: "plug", Bit2: "fence"}, 
	{Bit0: "start", Bit1: "COBOL", Bit2: "play"}, 
	{Bit0: "syndicate", Bit1: "play", Bit2: "she has"}, 
	{Bit0: "delicate", Bit1: "fence", Bit2: "consider"}, 
	{Bit0: "rejoice", Bit1: "start", Bit2: "capital"}
];

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

  missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

  redactedText = "My dearest "+ListingB[1].Bit1+", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about "+ListingA[5].Bit0+" intervention. I suspect that "+ListingB[7].Bit2+" a "+ListingA[2].Bit0+" interest at the "+ListingB[6].Bit1+". I and the "+ListingB[7].Bit0+" appreciate your many contributions over the years. However, this is a most "+ListingB[8].Bit0+" matter which would require significant "+ListingB[9].Bit2+" for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps "+ListingB[4].Bit0+" to my forthcoming campaign would help. Yours sincerely, "+ListingA[7].Bit1+"";

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

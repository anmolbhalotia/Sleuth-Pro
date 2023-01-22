/*

Officer: 1820440
CaseNum: 502-3-65793834-1820440

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var Archive_A = [
{
	Word_0: {Element_0: "meddle", Element_1: "Governor Zuckerberg", Element_2: "start", Element_3: "consider"}, 
	Word_1: {Element_0: "charge", Element_1: "plug", Element_2: "rejoice", Element_3: "charge"}, 
	Word_2: {Element_0: "start", Element_1: "radiate", Element_2: "hurry", Element_3: "plug"}
},
{
	Word_0: {Element_0: "play", Element_1: "clip", Element_2: "sail", Element_3: "sneeze"}, 
	Word_1: {Element_0: "play", Element_1: "succeed", Element_2: "donation", Element_3: "succeed"}, 
	Word_2: {Element_0: "charge", Element_1: "bake", Element_2: "stuff", Element_3: "tug"}
},
{
	Word_0: {Element_0: "stuff", Element_1: "start", Element_2: "protect", Element_3: "ALGOL fish wholesalers"}, 
	Word_1: {Element_0: "mend", Element_1: "charge", Element_2: "tug", Element_3: "stuff"}, 
	Word_2: {Element_0: "clip", Element_1: "radiate", Element_2: "tug", Element_3: "plug"}
},
{
	Word_0: {Element_0: "charge", Element_1: "meddle", Element_2: "charge", Element_3: "consider"}, 
	Word_1: {Element_0: "smile", Element_1: "plug", Element_2: "bake", Element_3: "ALGOL"}, 
	Word_2: {Element_0: "rejoice", Element_1: "hurry", Element_2: "meddle", Element_3: "sneeze"}
},
{
	Word_0: {Element_0: "start", Element_1: "mend", Element_2: "play", Element_3: "charge"}, 
	Word_1: {Element_0: "sail", Element_1: "tug", Element_2: "protect", Element_3: "smile"}, 
	Word_2: {Element_0: "bake", Element_1: "$200,000", Element_2: "fence", Element_3: "play"}
}];

var Archive_B = [
{
	Word_0: {Element_0: "stuff", Element_1: "plug", Element_2: "development", Element_3: "tug"}, 
	Word_1: {Element_0: "plug", Element_1: "start", Element_2: "clip", Element_3: "play"}, 
	Word_2: {Element_0: "start", Element_1: "fence", Element_2: "hurry", Element_3: "plug"}
},
{
	Word_0: {Element_0: "bake", Element_1: "consider", Element_2: "rejoice", Element_3: "sail"}, 
	Word_1: {Element_0: "smile", Element_1: "succeed", Element_2: "play", Element_3: "play"}, 
	Word_2: {Element_0: "rejoice", Element_1: "play", Element_2: "tug", Element_3: "sail"}
},
{
	Word_0: {Element_0: "hurry", Element_1: "you", Element_2: "consider", Element_3: "succeed"}, 
	Word_1: {Element_0: "meddle", Element_1: "charge", Element_2: "meddle", Element_3: "protect"}, 
	Word_2: {Element_0: "play", Element_1: "fence", Element_2: "tug", Element_3: "meddle"}
},
{
	Word_0: {Element_0: "plug", Element_1: "consider", Element_2: "syndicate", Element_3: "hurry"}, 
	Word_1: {Element_0: "play", Element_1: "fence", Element_2: "succeed", Element_3: "COBOL"}, 
	Word_2: {Element_0: "bake", Element_1: "protect", Element_2: "succeed", Element_3: "tug"}
},
{
	Word_0: {Element_0: "clip", Element_1: "protect", Element_2: "sneeze", Element_3: "charge"}, 
	Word_1: {Element_0: "charge", Element_1: "tug", Element_2: "sail", Element_3: "Edsger"}, 
	Word_2: {Element_0: "smile", Element_1: "mend", Element_2: "stuff", Element_3: "clip"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

  redactedText = "My dearest "+Archive_B[4].Word_1.Element_3+", I have just received your very generous "+Archive_A[1].Word_1.Element_2+" of "+Archive_A[4].Word_2.Element_1+". Thank you. This will be invaluable to our campaign. "+Archive_A[3].Word_1.Element_3+" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+Archive_B[2].Word_0.Element_1+" or "+Archive_A[2].Word_0.Element_3+" to the "+Archive_B[3].Word_0.Element_2+" Your new "+Archive_B[0].Word_0.Element_2+" at the "+Archive_B[3].Word_1.Element_3+" can now proceed without impediment. Yours sincerely, "+Archive_A[0].Word_0.Element_1+"";

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

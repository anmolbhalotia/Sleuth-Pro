/*
802 - The case of Monte Carlo
Stage 1 - Card sharks

Officer: 1820440
CaseNum: 802-0-50644328-1820440

Time to pull on your best threads kid, grab a martini prepare for an evening at the Monte Carlo casino.

Our targets for this op are a gang of high rolling statisticians. They maintain an air of 
respectability as the board of Rossling Polling, a company used by the shady politicians of 
Console City to make them seem more popular than they really are. They’re prepared to give up the 
dirt on their techniques if we can beat them in a game of 5 card stud poker. We can’t go in and gamble 
away Sleuth & Co’s cash reserves. There isn’t that much green in the evidence room to compete with these card 
sharks. Let’s stack the odds in our favour. First let’s learn how to mark cards.

* Write a function called  pickCards.
* Using a for loop to set the marked property of the cardDeck array elements to true when the suit is Clubs or the value is 8
* Call the function from within setup

*/

var cardDeck = [{"marked":false,"s":"Spades","n":"A"},
				{"marked":false,"s":"Spades","n":"2"},
				{"marked":false,"s":"Spades","n":"3"},
				{"marked":false,"s":"Spades","n":"4"},
				{"marked":false,"s":"Spades","n":"5"},
				{"marked":false,"s":"Spades","n":"6"},
				{"marked":false,"s":"Spades","n":"7"},
				{"marked":false,"s":"Spades","n":"8"},
				{"marked":false,"s":"Spades","n":"9"},
				{"marked":false,"s":"Spades","n":"10"},
				{"marked":false,"s":"Spades","n":"J"},
				{"marked":false,"s":"Spades","n":"Q"},
				{"marked":false,"s":"Spades","n":"K"},
				{"marked":false,"s":"Clubs","n":"A"},
				{"marked":false,"s":"Clubs","n":"2"},
				{"marked":false,"s":"Clubs","n":"3"},
				{"marked":false,"s":"Clubs","n":"4"},
				{"marked":false,"s":"Clubs","n":"5"},
				{"marked":false,"s":"Clubs","n":"6"},
				{"marked":false,"s":"Clubs","n":"7"},
				{"marked":false,"s":"Clubs","n":"8"},
				{"marked":false,"s":"Clubs","n":"9"},
				{"marked":false,"s":"Clubs","n":"10"},
				{"marked":false,"s":"Clubs","n":"J"},
				{"marked":false,"s":"Clubs","n":"Q"},
				{"marked":false,"s":"Clubs","n":"K"},
				{"marked":false,"s":"Hearts","n":"A"},
				{"marked":false,"s":"Hearts","n":"2"},
				{"marked":false,"s":"Hearts","n":"3"},
				{"marked":false,"s":"Hearts","n":"4"},
				{"marked":false,"s":"Hearts","n":"5"},
				{"marked":false,"s":"Hearts","n":"6"},
				{"marked":false,"s":"Hearts","n":"7"},
				{"marked":false,"s":"Hearts","n":"8"},
				{"marked":false,"s":"Hearts","n":"9"},
				{"marked":false,"s":"Hearts","n":"10"},
				{"marked":false,"s":"Hearts","n":"J"},
				{"marked":false,"s":"Hearts","n":"Q"},
				{"marked":false,"s":"Hearts","n":"K"},
				{"marked":false,"s":"Diamonds","n":"A"},
				{"marked":false,"s":"Diamonds","n":"2"},
				{"marked":false,"s":"Diamonds","n":"3"},
				{"marked":false,"s":"Diamonds","n":"4"},
				{"marked":false,"s":"Diamonds","n":"5"},
				{"marked":false,"s":"Diamonds","n":"6"},
				{"marked":false,"s":"Diamonds","n":"7"},
				{"marked":false,"s":"Diamonds","n":"8"},
				{"marked":false,"s":"Diamonds","n":"9"},
				{"marked":false,"s":"Diamonds","n":"10"},
				{"marked":false,"s":"Diamonds","n":"J"},
				{"marked":false,"s":"Diamonds","n":"Q"},
				{"marked":false,"s":"Diamonds","n":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your pickCards function here
	pickCards();

}

//write your pickCards function here
function pickCards()
{
	for(var i=0;i<cardDeck.length;i++)
	{
		if(cardDeck[i].s == "Clubs" || cardDeck[i].n == "8")
		{
			cardDeck[i].marked = true;
		}
	}
}


function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (cardDeck[i].marked)
		{
			drawCard(cardDeck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(cardDeck[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.n == values[j] && card.s == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}

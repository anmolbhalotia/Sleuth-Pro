/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 1820440
CaseNum: 802-2-26917689-1820440

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in winningHand from the deck and store it in the hand array.

*Write a function called build_winning_hand and call it from setup.
*We need to be quick so our ruse isn’t spotted. Make sure you use a nested for loop and the break statement in the inner loop when you find a match in the deck.
*When you find a card in the deck that matches one in winningHand add it to the handArray. Then break and search for the next card.

*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 5 and end at 88.
*Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var playingCards = [{"card_suit":"Spades","v":"A"},{"card_suit":"Spades","v":"2"},{"card_suit":"Spades","v":"3"},{"card_suit":"Spades","v":"4"},{"card_suit":"Spades","v":"5"},{"card_suit":"Spades","v":"6"},{"card_suit":"Spades","v":"7"},{"card_suit":"Spades","v":"8"},{"card_suit":"Spades","v":"9"},{"card_suit":"Spades","v":"10"},{"card_suit":"Spades","v":"J"},{"card_suit":"Spades","v":"Q"},{"card_suit":"Spades","v":"K"},{"card_suit":"Clubs","v":"A"},{"card_suit":"Clubs","v":"2"},{"card_suit":"Clubs","v":"3"},{"card_suit":"Clubs","v":"4"},{"card_suit":"Clubs","v":"5"},{"card_suit":"Clubs","v":"6"},{"card_suit":"Clubs","v":"7"},{"card_suit":"Clubs","v":"8"},{"card_suit":"Clubs","v":"9"},{"card_suit":"Clubs","v":"10"},{"card_suit":"Clubs","v":"J"},{"card_suit":"Clubs","v":"Q"},{"card_suit":"Clubs","v":"K"},{"card_suit":"Hearts","v":"A"},{"card_suit":"Hearts","v":"2"},{"card_suit":"Hearts","v":"3"},{"card_suit":"Hearts","v":"4"},{"card_suit":"Hearts","v":"5"},{"card_suit":"Hearts","v":"6"},{"card_suit":"Hearts","v":"7"},{"card_suit":"Hearts","v":"8"},{"card_suit":"Hearts","v":"9"},{"card_suit":"Hearts","v":"10"},{"card_suit":"Hearts","v":"J"},{"card_suit":"Hearts","v":"Q"},{"card_suit":"Hearts","v":"K"},{"card_suit":"Diamonds","v":"A"},{"card_suit":"Diamonds","v":"2"},{"card_suit":"Diamonds","v":"3"},{"card_suit":"Diamonds","v":"4"},{"card_suit":"Diamonds","v":"5"},{"card_suit":"Diamonds","v":"6"},{"card_suit":"Diamonds","v":"7"},{"card_suit":"Diamonds","v":"8"},{"card_suit":"Diamonds","v":"9"},{"card_suit":"Diamonds","v":"10"},{"card_suit":"Diamonds","v":"J"},{"card_suit":"Diamonds","v":"Q"},{"card_suit":"Diamonds","v":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

var winningHand = [{"cardSuit":"Diamonds","number":"K"},{"cardSuit":"Hearts","number":"J"},{"cardSuit":"Spades","number":"J"},{"cardSuit":"Clubs","number":"10"},{"cardSuit":"Clubs","number":"K"}];
var hand =[];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	
	shuffleDeck(shuffleSeed());

	//call your build_winning_hand function here
	
	build_winning_hand();

}

//write your build_winning_hand function here
function build_winning_hand()
{
	for(var i = 0;i<playingCards.length;i++)
	{
		for(var j=0;j<winningHand.length;j++)
		{
			if(playingCards[i].card_suit == winningHand[j].cardSuit && 
				playingCards[i].v == winningHand[j].number)
			{
				hand.push(playingCards[i]);
			}
		}
		if(winningHand == hand)
		{
			break;
		}
	}
}

//write your shuffleSeed() function here.
function shuffleSeed()
{
	var randomNumbers = [];
	for(var i=0;i<52;i++)
	{
		randomNumbers.push(round(random(5,88)));
	}
	return randomNumbers;
}


/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < playingCards.length; j++)
	   {
		  var tempCard = playingCards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playingCards.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
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
			if (card.v == values[j] && card.card_suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}

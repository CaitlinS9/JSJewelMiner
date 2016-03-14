#pragma strict
 import UnityEngine.UI;


var score : int = 0;
var targetScore : int = 400;
var scoreText : Text;
var timeText : Text;
var timePerLevel : int = 30;
var youWon : GameObject;
var gameOver : GameObject;

 var clockSpeed : float = 1f;
  

function Awake () 
{
	scoreText.text = ('Score: ' + score + '/' + targetScore);
	InvokeRepeating('Clock', 0, clockSpeed);
}

function Clock () 
{
	timePerLevel--;
	timeText.text = ('Time: ' + timePerLevel);

	if (timePerLevel == 0)
	{
		CheckGameOver();
	}
}

function AddPoints (pointScored : int) : int
{
	score += pointScored;
	scoreText.text = ('Score: ' + score + '/' + targetScore);
}

function CheckGameOver()
{
	if (score >= targetScore)
		{
			Time.timeScale = 0;
			youWon.SetActive(true);
		}
	else
		{
			Time.timeScale = 0;
			gameOver.SetActive(true);
		}
}
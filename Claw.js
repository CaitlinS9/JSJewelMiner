#pragma strict

var origin : Transform;
var speed : float = 4f;
var gun : Gun;
var scoreManager : ScoreManager;

var target : Vector3;
var jewelValue : int = 100;
var childObject : GameObject;
var lineRenderer : LineRenderer;
var hitJewel : boolean;
var retracting : boolean;

function Awake () 
{
	lineRenderer = GetComponent.<LineRenderer>();
}

function Update () 
{
	var step : float = speed * Time.deltaTime;
	transform.position = Vector3.MoveTowards (transform.position, target, step);
	lineRenderer.SetPosition(0, origin.position);
	lineRenderer.SetPosition(1, transform.position);

	if (transform.position == origin.position && retracting)
	{
		gun.CollectedObject();
		if (hitJewel)
		{
			scoreManager.AddPoints(jewelValue);
			hitJewel = false;
		}
		Destroy(childObject);
		gameObject.SetActive(false);
	}
}

function ClawTarget (pos : Vector3) : Vector3
{
	target = pos;
}

function OnTriggerEnter (other : Collider) : Collider
{
	retracting = true;
	target = origin.position;

	if (other.gameObject.CompareTag('Jewel'))
	{
		hitJewel = true;
		childObject = other.gameObject;
		other.transform.SetParent(this.transform);
	}
	else if (other.gameObject.CompareTag('Rock'))
	{
		childObject = other.gameObject;
		other.transform.SetParent(this.transform);
	}
}

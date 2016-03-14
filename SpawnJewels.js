#pragma strict

var xRange : int = 10;
var yRange : int = 3;
var numObjects : int = 16;

var objects : GameObject[];

function Start () 
{
	Spawn();
}

function Spawn () 
{
	for (var i = 0; i <= numObjects; i++)
	{
		var spawnLoc : Vector3 = Vector3 (Random.Range (-xRange, xRange), Random.Range (-yRange, yRange), 0);

		var objectPick : int = Random.Range (0, objects.Length);
		Instantiate(objects[objectPick], spawnLoc, Random.rotation);
	}
}
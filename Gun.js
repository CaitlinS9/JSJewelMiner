#pragma strict

    var claw : GameObject;
    var isShooting : boolean = true;
    var minerAnimator : Animator;
    var clawScript : Claw;


function Update ()
{
    if (Input.GetButtonDown('Fire1') && !isShooting)
    {
        LaunchClaw();
    }
}

function LaunchClaw()
{
    isShooting = true;
    minerAnimator.speed = 0;
    var hit : RaycastHit;
    var down : Vector3 = transform.TransformDirection(Vector3.down);

    if (Physics.Raycast(transform.position, down, hit, 100))

    {
       claw.SetActive(true);
       clawScript.ClawTarget(hit.point); 
    }
}

function CollectedObject()
{
    isShooting = false;
    minerAnimator.speed = 1;
}

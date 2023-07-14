
function preload() {
video = createCapture(VIDEO);
video.size(500, 500);
video.position(460, 175);
}

function setup() {
canvas = createCanvas(800, 600);
canvas.position(560, 50);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function draw() {
    background("#979A97")
    textSize(difference);
    fill('#A020F0');
    text("Shreyas", 50, 300)
}

function gotPoses(results){

    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        
        difference = floor(leftWristX - rightWristX);

        console.log("Right Wrist: " + rightWristX + "   Left Wrist:" + leftWristX + "   Difference : " + difference);
    }
}

noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;
song="";
score_right_wrist=0;
score_left_wrist=0;

left_wrist_x=0;
left_wrist_y=0;

right_wrist_x=0;
right_wrist_y=0;


function preload(){
song=loadSound("music.mp3");

}
function setup(){
canvas=createCanvas(500,400);
camera=createCapture(VIDEO);
canvas.center();
camera.hide();

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);

}
function draw(){
image(camera,0,0,500,400);

}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}
function modelLoaded(){
    console.log("posenet is loaded");
}



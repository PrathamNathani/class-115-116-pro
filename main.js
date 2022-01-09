nose_x=0;
nose_y=0;

function preload(){
    mustache = loadImage("https://i.postimg.cc/X7Kb1wZB/download.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);

}
function draw(){
    image(video,0,0,300,300);
     // fill("red");
    // stroke("black");
    // rect(nose_x,nose_y,40,30);
    image(mustache,nose_x,nose_y,30,30);
}
function take_snapshot(){
    save("selfie,with,muustache,2o.png");    
  }
  function modelLoaded(){
    console.log("Pose Net Model Loaded");
    }
    function gotposes(result){
        if(result.length>0){
            console.log(result);
            nose_x=result[0].pose.nose.x-185;
            nose_y=result[0].pose.nose.y-100;
            console.log(" X Position Of Nose: " + result[0].pose.nose.x);
            console.log(" Y Position Of Nose: " + result[0].pose.nose.y);     
        }
    }
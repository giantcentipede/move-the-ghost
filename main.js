nose_x = 0;
nose_y = 0;
Lwrist_x = 0;
Rwrist_x = 0;
dif = 0;


function setup() {

    video = createCapture(VIDEO);
    video.size(550,500)

    canvas=createCanvas(500,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotposes)
}

function draw() {
    background("#000000");

stroke("#6c44e3");
textSize(dif);
text("👻",nose_x,nose_y);

document.getElementById("a_span_tag").innerHTML="width and height of the 👻 will be- " + dif + "px";


}

function modelLoaded() {
    console.log("model loaded");

}

function gotposes(results) {
    if (results.length > 0) {
console.log(results);

nose_x = results[0].pose.nose.x;
nose_y = results[0].pose.nose.y;
Lwrist_x = results[0].pose.leftWrist.x;
Rwrist_x = results[0].pose.rightWrist.x;
dif = floor(Lwrist_x-Rwrist_x);


    }
}
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
function Start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if(content =="Take my selfie.") {
        console.log("Charin");
        Speak();
    }
}
function Speak() {
    var Synth = window.speechSynthesis;
    SpeakData = "Taking your Selfie in 5 Seconds.";
    var Utter = new SpeechSynthesisUtterance(SpeakData);
    Synth.speak(Utter);
    Webcam.attach(Camera);
    setTimeout(function(){
        take_snapshot();
        save();
    }, 5000);
}
Camera = document.getElementById("Camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML = '<img id="selfie_img" src="'+data_uri+'"/>';
    });
}
function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}
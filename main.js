Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 1080
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function TakeSnapshot()
{
    Webcam.set({
        width:350,
        height:300
    });

    Webcam.snap(function (data_uri) {
    document.getElementById("result");

    });
        
    
}
console.log('Model Imported!');


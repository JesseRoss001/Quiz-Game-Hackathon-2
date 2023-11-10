document.addEventListener("DOMContentLoaded",function(){
let x ;
    x = document.getElementById("audioPlayer");
    playAudio();
    volumeControl();


/*Audio player adapted from W3Schools */
 
function playAudio () {
    x.play();
}

function volumeControl () {
   let volumeSlider =document.getElementById("volumeSlider");
    x.volume =volumeSlider.value;

    volumeSlider.addEventListener("input", function () {
        x.volume =volumeSlider.value
    });
}

});




/*Stack overflow local storage. I need local storage to determine what graphic to display at game over */


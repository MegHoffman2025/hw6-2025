var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

video = document.getElementById('player1');
// Page load
// Initialize the video element and turn off autoplay and turn off looping.



// Play the video and update the volume information. 

playButton = document.getElementById('play')
playButton.addEventListener('click', function(){

	console.log('getting play button')

	video.play()
	document.getElementById('volume').innerHTML = (video.volume * 100) + '%'

})

// Pause the video.

pauseButton = document.getElementById('pause')
pauseButton.addEventListener('click', function(){

	console.log('getting pause button')

	video.pause()
})

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  

slowerButton = document.getElementById('slower')
slowerButton.addEventListener('click', function(){

	console.log('getting slow down button')

	tenPercent = video.defaultPlaybackRate * .1
	video.playbackRate = video.playbackRate - tenPercent
	console.log(video.playbackRate)

})


// Increase the current video speed each time the button is clicked and log the new speed to the console.  
// Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and 
// then speed up three times you should be within 5 digits of 100% again.

fasterButton = document.getElementById('faster')
fasterButton.addEventListener('click', function(){

	console.log('getting speed up button')

	tenPercent = video.defaultPlaybackRate * .1
	video.playbackRate = video.playbackRate + tenPercent
	console.log(video.playbackRate)

})
// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start 
// of the video - no farther.   Log the current location of the video.


skipButton = document.getElementById('skip')
skipButton.addEventListener('click', function(){

	console.log('getting skip ahead button')

	console.log(video.currentTime)
	if ((video.currentTime + 10) < video.seekable.end(0)){
		video.currentTime = video.currentTime + 10
	} else {
		video.currentTime = video.seekable.start(0)
	}
	console.log(video.currentTime)

})

// Mute/unmute the video and update the text in the button.
muteButton = document.getElementById('mute')
volumeSlider = document.getElementById('slider')
muteButton.addEventListener('click', function(){

	console.log('getting mute button')

	if (muteButton.innerHTML == 'Unmute'){
		muteButton.innerHTML = 'Mute'
		video.volume = (volumeSlider.value / 100.00)
		document.getElementById('volume').innerHTML = (video.volume * 100) + '%'
	} else {
		muteButton.innerHTML = 'Unmute'
		video.volume = 0
		document.getElementById('volume').innerHTML = '0%'
	}

})


// Change the volume based on the slider and update the volume information.
volumeSlider.addEventListener('change', function(){

	console.log('getting slider move')

	video.volume = ((volumeSlider.value) / 100.00)
	console.log(video.volume)
	document.getElementById('volume').innerHTML = volumeSlider.value + '%'

})


// Utilize the existing oldSchool class on the video element
oldButton = document.getElementById('vintage')
oldButton.addEventListener('click', function(){

	console.log('getting old button')

	video.classList.add('oldSchool')

})


// Remove the oldSchool class from the video.

newButton = document.getElementById('orig')
newButton.addEventListener('click', function(){

	console.log('getting original button')

	video.classList.remove('oldSchool')

})
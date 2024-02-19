
	starteds = false;
	
	function mostrarSubpagina(n) {
      var i;
      var subpaginas = document.getElementsByClassName("big-div");
	  var subsub = document.getElementsByClassName("subsub");
      for (i = 0; i < subpaginas.length; i++) {
        subpaginas[i].style.display = "none";
		
      }
	  for (i = 0; i < subsub.length; i++) {
        subsub[i].style.display = "none";
		
      }
      document.getElementById("changer" + n).style.display = "block";
	  if ("changer" + n == "changer2") {
	  
		mostrarSubSub(1)
	  
	  } else {
		  
		playSound()
		  
	  }
    }
	
    const audiosoft = document.getElementById('audiosoft');
	
	function mostrarSubSub(n) {
      var i;
	  var subsub = document.getElementsByClassName("subsub");
	  var subb = document.getElementsByClassName("testC2")
      for (i = 0; i < subsub.length; i++) {
        subsub[i].style.display = "none";
		subb[i].style.background = 'linear-gradient(0deg, transparent, black, transparent)';
      }
      document.getElementById("subsubs" + n).style.display = "block";
	  document.getElementById("subsub" + n).style.background = 'linear-gradient(0deg, transparent, rebeccapurple, transparent)';
		playSound()
    }
	
	if (starteds == false) {
    // Execute the action
		var i;
		var subsub = document.getElementsByClassName("subsub");
		mostrarSubpagina(1)
		started = true;
		for (i = 0; i < subsub.length; i++) {
			subsub[i].style.display = "none";
		}
	}

	let audio1 = new Audio();

	function playSound() {
		// Select the correct audio URL based on idS
		let audioUrl = "monitor.wav";
		
		// Create a new instance of Audio
		let audiosoft = new Audio(audioUrl);
		// Set playback rate
		// audiosoft.playbackRate = speed;
		// Play the sound
		audiosoft.play();
    }

	const musicToggle = document.getElementById('music-toggle');
	const backgroundMusic = document.getElementById('background-music');
	const musicButtonImage = document.getElementById('music-button-image');

	// Add event listener to toggle music on click
	musicButtonImage.addEventListener('click', function() {
		if (backgroundMusic.paused) {
			backgroundMusic.play(); // If music is paused, play it
			musicButtonImage.src = 'https://i.imgur.com/jEOZX38.png'; // Update button image to play icon
		} else {
			backgroundMusic.pause(); // If music is playing, pause it
			musicButtonImage.src = 'https://i.imgur.com/uD2jivb.png'; // Update button image to pause icon
		}
	});


//make sure code is running
	// alert('Welcome :)');

//variables using:
	var abc;				//letters available to choose from
	var currentWord;		//word i'm thinking of
	var word;				//word to be guessed
	var index;				//index of the chosen word and will used to get the same background and music
	var image;				//image array
	var currentImage;		//image to be displayed when word guessed
	var userGuessed = [];	//letters user guessed
	var userCorrect = [];	//store the letters of the correct word
	var wins = 0;			//# of wins
	var losses = 0;			//# of losses
	var numGuessLeft = 10;	//# of guesses left
	var checkInput;			//check if user guessed the same letter or not
	var checkAbc;			//check if user pressed key is within the array
	var checkMatch;			//check if letter matched the current word
	var keyPressed;			//key user pressed
	var displayLetter;		//display guessed wrong letters
	
//letters to choose from
	abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	word = [
			'one-piece', 
			'naruto', 
			'detective-conan', 
			'hunter-x-hunter',
			'sailor-moon', 
			'cardcaptor-sakura', 
			'doraemon', 
			'dragon-ball', 
			'full-metal-alchemist', 
			'pokemon', 
			'bleach', 
			'inuyasha', 
			'tsubasa', 
			'chobits', 
			'ojamajo', 
			'yu-gi-oh', 
			'death-note', 
			'my-neighbor-totoro', 
			'the-wind-rises', 
			'princess-mononoke',
			'spirited-away', 
			'ponyo' 
			];

	image = [
			'url(http://images6.fanpop.com/image/photos/40500000/One-piece-firewall36-40550547-2560-1440.jpg)', //one-piece 
			'url(https://wallpaperbits.com/wp-content/uploads/2018/04/naruto-all-characters-wallpaper-naruto-shippuden-wallpaper-hd-desktop-characters-of-mobile-phones-full-pics.jpg)', //naruto
			'url(https://vignette.wikia.nocookie.net/detectivconan/images/f/f4/Detective-Conan-HD-Wallpaper.png/revision/latest?cb=20141102130629)', //detective-conan
			'url(https://i.ytimg.com/vi/r0PRjL8D4NE/maxresdefault.jpg)',  //hunter-x-hunter
			'url(https://images2.alphacoders.com/454/thumb-1920-454764.jpg)',  //sailor-moon
			'url(https://static.zerochan.net/Cardcaptor.Sakura.full.44619.jpg)',  //cardcaptor-sakura
			'url(http://walldiskpaper.com/wp-content/uploads/2015/11/Doraemon-Wallpaper-Windows-HD.jpg)',  //doraemon
			'url(http://kb4images.com/images/dragon-ball-z-wallpapers/37897214-dragon-ball-z-wallpapers.jpg)',  //dragon-ball
			'url(https://thewallpaper.co/wp-content/uploads/2016/10/Fullmetal-Alchemist-Brotherhood-Wallpaper-HD-full-hd-desktop-images-windows-10-backgrounds-colourful-download-wallpapers-cool-best-colours-3166x2046.jpg)',  //full-metal-alchemist
			'url(https://i.pinimg.com/originals/34/a5/54/34a554f4b24f9d93ffb6965b3aeff11e.jpg)',  //pokemon
			'url(https://www.pixelstalk.net/wp-content/uploads/2016/04/Anime-bleach-wallpapers-HD.jpg)',  //bleach
			'url(https://images4.alphacoders.com/227/227924.jpg)',  //inuyasha
			'url(http://www.tokkoro.com/picsup/1147491-tsubasa-reservoir-chronicle.jpg)',  //tsubasa
			'url(http://images5.fanpop.com/image/photos/29400000/Chobits-championcynthia-29440610-1600-1200.jpg)',  //chobits
			'url(https://rocketdock.com/images/screenshots/Ojamajo-Doremi-1920x1080.jpg)',  //ojamajo
			'url(http://4.bp.blogspot.com/-OWiBLbJu7Tk/T0nHrhzcYmI/AAAAAAAAASU/E94pNkx2ZY0/s1600/classic_1_wallpaper_1280x800.jpg)',  //yu-gi-oh
			'url(http://www.wpaperhd.com/uploads/originals/2016/01/25/death-note-light-yagami-v-l-and-ryuk-8X8r.jpg)',  //death-note
			'url(https://images2.alphacoders.com/499/thumb-1920-499590.jpg)',  //my-neighbor-totoro
			'url(https://i.ytimg.com/vi/qYNvTX_ioYo/maxresdefault.jpg)',  //the-wind-rises
			'url(http://zonewallpaper.net/wp-content/uploads/2017/02/Best-Anime-Princess-Mononoke-Wallpaper.jpg)',  //princess-mononoke
			'url(http://athenacinema.com/wp-content/uploads/2015/09/spirited-away-1.jpg)',  //spirited-away
			'url(https://stmed.net/sites/default/files/ponyo-wallpapers-29809-1229230.jpg)'   //ponyo
			];

//randomly choose a letter

	index = Math.floor(Math.random() * word.length)

	currentWord = word[index].toUpperCase();

	currentImage = image[index];

	console.log (currentWord);


//letters & numbers updates from javascript
	document.querySelector('#win').innerText = wins;
	document.querySelector('#loss').innerText = losses;
	document.querySelector('#guessLeft').innerText = numGuessLeft;
	document.querySelector('#currentWord').innerText = currentWord;
	displayLetters = document.querySelector('#guessedLetters');

//to show the currentWord in _ _ - _ _ _
	function hideWords (){
		for (var i = 0; i < currentWord.length; i++) {
			userCorrect[i] = "_";
			document.querySelector('#currentWord').innerHTML = userCorrect.join(" ");
		}for (var k = 0; k < currentWord.length; k++){
			if (currentWord[k] == "-"){
				userCorrect[k] = "-"; 
				document.querySelector('#currentWord').innerHTML = userCorrect.join(" ");
			}
		}
	}

	hideWords();

//game		
	function game(event) {

		keyPressed = event.key.trim().toUpperCase();
		checkInput = userGuessed.indexOf(keyPressed);
		checkAbc = abc.indexOf(keyPressed);
		checkMatch = currentWord.indexOf(keyPressed);

	//check if key pressed is within the array
		if (checkInput == -1 && checkAbc == -1){
			alert('please enter a letter from A-Z');

	//warn user same key has been pressed
		}else if (checkInput >= 0) {
			// alert(`you've guessed " ${keyPressed} " already`);

	//store user's guesses and decrease num of guesses
		}else if (checkInput == -1 && checkMatch == -1 && numGuessLeft > 0){
			userGuessed.push(keyPressed);
			numGuessLeft--;
			document.querySelector('#guessLeft').innerText = numGuessLeft;
			displayLetters.innerText = displayLetters.innerText + " " + keyPressed;

	//if user guessed right letter of the word
		}else if (checkInput == -1 && checkMatch >= 0 && numGuessLeft > 0){

			for (var j = 0; j < currentWord.length; j++){
				if (currentWord[j] == keyPressed){
					userCorrect[j] = keyPressed;
					document.querySelector('#currentWord').innerHTML = userCorrect.join(" ");
				}
			}

	//if user can't guess the right letter when numGuessLeft == 0
		}else if (checkInput == -1 && checkMatch -1 && numGuessLeft >= 0){
			userGuessed.push(keyPressed);
			numGuessLeft--;
			losses++;
			document.querySelector('#loss').innerText = losses;

			lossMsg();
		}

	//if user guessed all the letters and wins		
		if (userCorrect.indexOf("_") == -1 && numGuessLeft > 0){
			wins++;
			document.querySelector('#win').innerText = wins;
			
			document.querySelector('#animeName').innerText = currentWord;

			

			winMsg();
		}
	}


	document.onkeyup = game;

// wins and display name
	function winMsg(){
		document.querySelector('#animeName').innerText = currentWord;
		alert('you got it!');

		document.getElementById("backgoundImage_body").style.backgroundImage = currentImage;

		reset();
	} 

// wins and display name
	function lossMsg(){
		
		alert(`TOO BAD, IT WAS "${currentWord}"`);

		reset();
	}	

// reset - if win/loss
	function reset(){
		index = Math.floor(Math.random() * word.length)
		currentWord = word[index].toUpperCase();
		console.log (currentWord);
		userGuessed = [];
		userCorrect = [];
		numGuessLeft = 10;
		document.querySelector('#guessLeft').innerText = numGuessLeft;
		displayLetters.innerText = userGuessed;
		currentImage = image[index];

		hideWords();

	}

// refresh the page
	function refresh() {
		location.reload();
	}
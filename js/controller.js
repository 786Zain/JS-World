		// var previous = array[i == 0 ? array.length - 1 : i - 1];
		// var current = array[i];
		// var next = array[i == array.length - 1 ? 0 : i + 1];
		var slides = document.getElementsByClassName("pieces-slider__slide");
		var count = 0;
		Git_message();
		$(".Github_Comment" ).hide();
		gitAlert();
		function Git_message(){
			var quote=`
			To get access to Github Code Call <strong>+918971097951</strong>`;
			$( ".Github_Comment" ).html(quote);
			$( "#GitLink" ).hover(
				function() {
				  $(".Github_Comment").show();
				}, function() {
				  $(".Github_Comment" ).hide();
				}
			  );
		}
		function gitAlert() {
			var msgs = [
				"Angular 8 Project Chat forum with Signin, Signup, blog filter features", "Magento 2 Project will be updated on 23-01-2020", "Node Express Project will be updated on 23-01-2020", "These is macOS theme written in ReactJS Code Format.", "These is macOS theme written in VueJS Code Format.", "These theme written in WordPress Code Format and can be edited.", "These is cloud computing project it defines recommendation video list to member can also operate by android application."
			];
			document.getElementById("alert").innerHTML = msgs[count];
		}
		function decr() {
			count = (count == 0) ? slides.length - 1 : count - 1;
			gitAlert();
		}
		function incr() {
			var check = (count < slides.length - 1) ? count++ : count = 0;
			gitAlert();
		}
		function Git() {
			var links = [
				"https://github.com/786Zain/Angular-8.git", "#", "#", "https://github.com/786Zain/macOS.git", "https://github.com/786Zain/VueJS.git", "https://github.com/786Zain/WordPress.git", "https://github.com/786Zain/VIDEO-RECOMMENDATION.git"
			];
			var emp=["","","","","","",""];
			document.getElementById("GitLink").setAttribute('href', links[count]);
		}
		function Live() {
			var links = [
				"https://786zain.github.io/JS-World/Angular8", "#", "#", "https://786zain.github.io/JS-World/ReactJS", "https://786zain.github.io/JS-World/VueJS", "https://github.com/786Zain/WordPress.git", "https://786zain.github.io/JS-World/"
			];
			document.getElementById("LiveLink").setAttribute('href', links[count]);
		}
		function Download() {
			var links = [
				"https://dlapkmod.com/file/M2Q1N2", "", "", "https://dlapkmod.com/file/YzQyZW", "https://dlapkmod.com/file/ZjNhMD", "https://dlapkmod.com/file/ZGM0MG", "https://dlapkmod.com/file/OTJhOG"
			];
			document.getElementById("DownloadLink").setAttribute('href', links[count]);
		}
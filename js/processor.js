class ZT {
  constructor(options) {
    let self = this;
    self.init();
  }
  init() {
    // var first = document.createElement('first');
    // document.head.appendChild(first);
    let self = this;
    $.when(
      self.Header(),
      self.code(),
      $.getScript("js/controller.js", function () {})
    ).done(function () {
      console.log("Scripts Loaded");
    });
  }
  Header() {
    $("#header").empty().append(`
        <link rel="shortcut icon" href="favicon.png">
        <link rel="stylesheet" type="text/css" href="css/base.css" />
        <link rel="stylesheet" type="text/css" href="css/slider.css" />
        <link rel="stylesheet" type="text/css" href="css/button.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <script>document.documentElement.className = "js"; var supportsCssVars = function () { var e, t = document.createElement("style"); return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e }; supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");</script>
        <style>
            .custom {
                position: absolute;
                top: 80%;
                bottom: 20%;
                left: 150%;
                width: 150px;
                height: 150px;
                align-items: center;
                border: 1px solid black;
            }
        </style>
    
        `);
  }
  code() {
    $("#code")
      .empty()
      .append(
        `
       
	<svg class="hidden">
		<symbol id="icon-arrow" viewBox="0 0 24 24">
			<title>arrow</title>
			<polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
		</symbol>
		<symbol id="icon-drop" viewBox="0 0 24 24">
			<title>drop</title>
			<path
				d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z" />
			<path
				d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z" />
		</symbol>
		<symbol id="icon-github" viewBox="0 0 32.6 31.8">
			<title>github</title>
			<path
				d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C32.6,7.3,25.3,0,16.3,0z" />
		</symbol>
	</svg>
	<main>
		<div class="content content--fixed">
			<header class="codrops-header">
				<div class="codrops-links">
					<a class="codrops-icon codrops-icon--drop" href="#" title="Back to the article"><svg
							class="icon icon--drop">
							<use xlink:href="#icon-drop"></use>
						</svg></a>
				</div>
				<h1 class="codrops-header__title">ZT Projects</h1>
			</header>
        </div>
        <div class="content">
        <div class="pieces-slider">
            <div  class="tn-box tn-box-color-2">
                <p id="alert"></p>
                <div class="tn-progress"></div>
            </div>
            ` +
          this.slides() +
          `
            <canvas class="pieces-slider__canvas"></canvas>
            <button class="pieces-slider__button pieces-slider__button--prev" onclick="decr()">prev</button>
            <button class="pieces-slider__button pieces-slider__button--next" onclick="incr()">next</button>
        </div>
    </div>
    <div class="">
        <p class="Github_Comment"></p>
</div>
		<a id="GitLink" href=""><button class="btn fourth GitButton" onclick="Git()">View on Github</button></a>
		<a id="LiveLink" href=""><button class="btn fourth LiveButton" onclick="Live()">Live Demo</button></a>
		<!--<a id="DownloadLink" href="">
			<div class="DownloadButton" onclick="Download()"></div>
		</a>-->
	</main>
	<script src='js/anime.min.js'></script>
	<script src='js/pieces.min.js'></script>
	<script src='js/demo.js'></script>

        `
      );
  }
  slides() {
    var slides = `
        <div class="pieces-slider__slide">
        <img class="pieces-slider__image" src="img/1.png" alt="">
        <h2 class="pieces-slider__text">Angular 11</h2>
    </div>
    <div class="pieces-slider__slide">
        <img class="pieces-slider__image" src="img/2.png" alt="">
        <h2 class="pieces-slider__text">C++ Firmware</h2>
    </div>
    <div class="pieces-slider__slide">
        <img class="pieces-slider__image" src="img/3.png" alt="">
        <h2 class="pieces-slider__text">NodeJS v14 BackEnd</h2>
    </div>
    <div class="pieces-slider__slide">
        <img class="pieces-slider__image" src="img/4.png" alt="">
        <h2 class="pieces-slider__text">React JS</h2>
    </div>
    <div class="pieces-slider__slide">
        <img class="pieces-slider__image" src="img/5.png" alt="">
        <h2 class="pieces-slider__text">Vue JS</h2>
    </div>
    <div class="pieces-slider__slide">
        <img class="pieces-slider__image" src="img/6.png" alt="">
        <h2 class="pieces-slider__text">WordPress</h2>
    </div>
    <div class="pieces-slider__slide">
        <img class="pieces-slider__image" src="img/7.png" alt="">
        <h2 class="pieces-slider__text">Cloud Computing Java Hibernate</h2>
    </div>
    <div class="pieces-slider__slide">
    <img class="pieces-slider__image" src="img/8.png" alt="">
    <h2 class="pieces-slider__text">VueJS macOS Theme</h2>
</div>
<div class="pieces-slider__slide">
<img class="pieces-slider__image" src="img/9.png" alt="">
<h2 class="pieces-slider__text">Photographer Management</h2>
</div>
        `;
    return slides;
    // $(slides).insertBefore($(".pieces-slider__canvas"));
  }
}
$(document).ready(function () {
  let zain = new ZT();
});

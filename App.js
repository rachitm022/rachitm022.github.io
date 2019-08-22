import React, { Component } from 'react';
import './app.css';
import ItemsCarousel from 'react-items-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Particles from 'react-particles-js';

// Set the date we're counting down to
var countDownDate = new Date("Sept 1, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("exbox1").innerHTML = days;
  document.getElementById("exbox2").innerHTML = hours;
  document.getElementById("exbox3").innerHTML = minutes;
  document.getElementById("exbox4").innerHTML = seconds;
    
  
}, 1000);


function ScrollTo(target, speed, timeout) {

  if (!timeout) timeout = 0;
  if (!speed) speed = 800;

  if (typeof target !== "undefined") {
    //target = target.replace("#", ".");
    //target = $(document.body).find(target);
    setTimeout(function() {
      $('wholepage').stop().animate({
        scrollTop: $(target).offset().top
      }, speed,'swing');
    }, timeout);
  }
}

  window.onload = function(){
  	
           var refButton = document.getElementById("signup");
           var refButton2 = document.getElementById("login");
           var refButton3 = document.getElementById("signup2");
           var refButton4 = document.getElementById("join");
           var refButton5 = document.getElementById("forgot-pass-text");
           var refButton6 = document.getElementById("forgot-pass-email");
           var navbar = document.getElementById("navbar");
           var firstSection=document.getElementById("firstSection");
			var sticky = navbar.offsetTop;


			firstSection.style.opacity="1";
			firstSection.style.transform="translate(0,0)";
            refButton.onclick = function() {
                document.getElementById("signup-form").style.display="block";
                document.getElementById("firstSection").style.opacity = 0.8;
            }

            refButton2.onclick = function() {
                document.getElementById("login-form").style.display="block";
                document.getElementById("firstSection").style.opacity = 0.8;
            }

             refButton3.onclick = function() {
                document.getElementById("signup-form").style.display="block";
                document.getElementById("firstSection").style.opacity = 0.8;
            }

            refButton4.onclick = function() {
                document.getElementById("signup-form").style.display="block";
                document.getElementById("firstSection").style.opacity = 0.8;
            }

            refButton5.onclick = function() {
                document.getElementById("forgot-pass").style.display="block";
                document.getElementById("login-form").style.opacity = 0.8;
                

            }
            refButton6.onclick = function() {
                document.getElementById("forgot-pass-notif").style.display="block";
             
            }

            window.onscroll = function() {myFunction1();myFunction2();};


function myFunction1() {
  if (window.pageYOffset >= sticky) {

    navbar.style.backgroundColor="white";
    var x= document.getElementsByClassName("links");
    var i;
    for (i = 0; i < x.length; i++) {
  x[i].style.color = "black";
	}
	document.getElementById("pageLogo").src="images/logo_dark.png";
  }
}

function myFunction2() {
  if (window.pageYOffset == 0) {
  	var x= document.getElementsByClassName("links");
    var i;
    for (i = 0; i < x.length; i++) {
  x[i].style.color = "white";
	}
	document.getElementById("pageLogo").src="images/logo.png";
    navbar.style.backgroundColor="initial";
    }
}

        }

var modal= document.getElementById("x");
var modal2= document.getElementById("xx");
window.onclick = function(event) {
  if (event.target.id==modal.id) {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("firstSection").style.opacity = 1;
  }
   if (event.target.id==modal2.id) {
    document.getElementById("forgot-pass").style.display = "none";
    document.getElementById("forgot-pass-notif").style.display = "none";
    document.getElementById("login-form").style.opacity = 1;
    
  }
};

$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(".section")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    } else {
      $(tag).removeClass("visible")
    }
  }
});

$("#navbar > nav > ul > li > a").click(function(e) {
  // Prevent a page reload when a link is pressed
  e.preventDefault();
  // Call the scroll function
  ScrollTo($(this).attr("href"), 900,5); // target, speed, timeout
});



class App extends Component{
	  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: Array.from(new Array(8)).map((_, i) =>
      <div id="slider-images"
        key={i}
        style={{
		      
          background: 'url(../images/1.png)'
        }}
      />
    ),
      })
    }, 100);
  }

   render(){const {
      activeItemIndex,
      children,
    } = this.state;
      return(
         <div id="wholepage">
	 <div id="particles" style={{
		position: "absolute",
		top: 0,
		left: 0,
		
	}}>
	 <Particles params={{
	    "particles": {
	        "number": {
	            "value": 60
	        },
	        "size": {
	            "value": 6,
	            "random": true
	        },
	        "color": {
            "value": "#186287"
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#294079",
            opacity: 1,
            width: 0.6413648243462091
          },
          opacity: {
            value:1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          }
	    },
	    

	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} 
	canvasClassName="example"
	 /></div>
	<div id="navbar">
	<nav>
		  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
		<img src="images/logo.png" id="mobile-logo"></img>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      		<div class="collapse navbar-collapse" id="myNavbar">
			<ul>
				<li><a href="#"><img src="images/logo.png" id="pageLogo" width="80%"></img></a></li>
				<li><a id="link" class="links" href="#about">WHAT IS WORK COIN?</a></li>
				<li><a id="link" class="links" href="#sale">TOKEN SALE</a></li>
				<li><a id="link" class="links" href="#road">ROAD MAP</a></li>
				<li><a id="link" class="links" href="#mvp">MVP</a></li>
				<li><a id="link" class="links" href="#team">TEAM</a></li>
				<li><a id="link" class="links" href="#contact">CONTACT</a></li>
				<li><a id="link" class="links" href="#faq">FAQ</a></li>
				<li><a id="signup" class="links" >SIGN&nbsp;UP</a></li>
				<li><a id="login" class="links" >LOGIN&nbsp;&nbsp;</a></li>
			</ul>
			</div>
		</nav>
	</div>	
				
	<div id="login-form" class="form">
	<span id="x" class="close" title="Close Modal">&times;</span>
	<form class="form-content" action="./dashboard.html" method="get">
	<div class="form-container">
	<div id="left-form">
	<img src="images/login.png" id="form-logo"></img></div>
	<img src="images/wq.png" id="icon-logo3"></img>
	<div id="right-form">
	<img src="images/photo.png" id="photo"></img>
	<p id="whiteprint">Login</p>
	<p id="login-text">LOGIN AND JOIN ICO PRESALE</p>
	<label for="email"><p id="smallletters13">USER NAME</p></label>
	<div class="input-container">
    <img src="images/user-input.png" id="input-icons" />
      <input type="text2" placeholder="Enter Email" name="email" required></input>
      </div>
      <label for="psw"><p id="smallletters12">ENTER PASSWORD</p></label>
      <div class="input-container">
    <img src="images/password icon.png" id="input-icons2" />
      <input type="password" placeholder="Enter Password" name="psw" required /></div>
      <button type="submit" href="./dashboard.html" class="loginbtn">LOGIN</button>
      <p id="forgot-pass-text">FORGOT &nbsp;PASSWORD?</p>
      <p id="mediumletters7"><br />DON'T HAVE AN ACCOUNT YET?<br /><br /></p>
      <button id="signup2" class="signupbtn">CREATE ACCOUNT</button>
      <p id="mediumletters6"><br /><br /><br /></p>
      </div>
	</div></form></div>
	<div id="forgot-pass" class="form">
	<span id="xx" class="close" title="Close Modal">&times;</span>
	<p id="forgot-pass-mediumletters">FORGOT YOUR<br /> PASSWORD?</p>
	<p id="smallletters"> Don't worry, just enter your registered email and we'll send<br /> you a link to your registered email.</p>
      <input type="text3" placeholder="Enter Email" name="email" required />
      <button id="forgot-pass-email" >SEND</button>
      <img src="images/Clip2.png" id="forgot-img" />
	</div>
	<div id="forgot-pass-notif" class="form">
	<span id="xx" class="close" title="Close Modal">&times;</span>
	<p id="forgot-pass-mediumletters">CHECK YOUR EMAIL</p>
	<p id="pass-email-conf">We've sent an email to your mail. Click the link in the email to reset the password.<br /><br /><br />If you don't see the mail, check other plpaces it might be in spam or other folders.</p>
	</div>

	<div id="signup-form" class="form">
	<span id="x" class="close" title="Close Modal">&times;</span>
	<form class="form-content" action="/action_page.php">
	<div class="form-container">
	<div id="left-form">
	<img src="images/regis.png" id="form-logo"></img>
	<p id="signup-text">ENTER BASIC INFORMATIOIN TO GET STARTED</p>
	<img src="images/wq.png" id="icon-logo4"></img>
	</div>
	
	<div id="right-form">
	<p id="whiteprint2">Regis<br />tration</p>
	<label for="firstname"><p id="mediumletters5">FIRST NAME</p></label>
	 <div class="input-container">
    <img src="images/user-input.png" id="input-icons" />
      <input type="text2" placeholder="" name="firstname" required /></div>

      <label for="lastname"><p id="mediumletters5">LAST NAME</p></label>
       <div class="input-container">
    <img src="images/user-input.png" id="input-icons" />
      <input type="text2" placeholder="" name="lastname" required /></div>


      <label for="username"><p id="mediumletters5">USER NAME</p></label>
       <div class="input-container">
    <img src="images/check-square.png" id="input-icons" />
      <input type="text2" placeholder="" name="username" required /></div>


      <label for="mail"><p id="mediumletters5">MAIL</p></label>
       <div class="input-container">
    <img src="images/mail.png" id="input-icons" />
      <input type="text2" placeholder="" name="mail" required /></div>


      <label for="pass"><p id="mediumletters5">ENTER PASSWORD</p></label>
       <div class="input-container">
    <img src="images/password icon.png" id="input-icons2" />
      <input type="password" placeholder="" name="pass" required /></div>


      <label for="confirm"><p id="mediumletters5">CONFIRM PASSWORD</p></label>
       <div class="input-container">
    <img src="images/password icon.png" id="input-icons2" />
      <input type="password" placeholder="" name="confirm" required /></div>

      <button type="submit" class="registerbtn">REGISTRATION</button>
      
      <p id="mediumletters6"><br /><br /><br /></p>
      </div>
	</div></form></div>
	<div class="section" id="firstSection">
	<div id="left-box">
		<p id="bigletters">WORK QUEST ICO STARTUP A GLOBAL MARKETPLACE FOR ANY TYPE OF WORK<br /><br /></p>
		<p id="smallletters">WORK QUEST ICO STARTUP A<br /> GLOBAL JOB MARKETPLACE<br /> FOR ANY TIPE OF WORK.</p>
		<a id="join">SIGN UP TO JOIN</a>
		<p id="smallletters2">OUR PARTNERS</p>
	</div>
	<img src="images/a.png" id="right-logo"></img>
	<ul class="partners-list">
				<li><a href="https://eucc.eu/"><img src="images/EUCC.png" id="partners"></img></a></li>
				<li><a href="https://globiance.com/"><img src="images/globiance.png" id="partners"></img></a></li>
				<li><a href="http://attis-group.com/?page_id=252&lang=en"><img src="images/ag.png" id="partners"></img></a></li>
				<li><a href="https://kcolbchain.com/"><img src="images/KCOLBCHAIN.png" id="partners"></img></a></li>
				</ul>
	
	</div>
	<div class="section" id="about">
		<div id="left-box2">
			<p id="heading">ABOUT PROJECT<br /><br /></p>
			<p id="bigletters3">WORK COIN<br /> WHY DO WE USE IT?</p>
		<p id="smallletters7">WORK COIN IS A CRYPTOCURRENCY USED ON THE WORK QUEST ECO-SYSTEM</p>
		<p id="smallletters7">WORK COIN, IS A CRYPTOCURRENCY USED TO CALCULATE REMUNERATION BETWEEN AN EMPLOYEE AND EMPLOYER IN THE WORK QUEST NETWORK. THE COIN IS ALSO USED TO FACI.LLITATE PAYMENT TRANSACTION OF ANY TYPE WITHIN OUR WORK QUEST ECO-SYSTEM. </p>
		<p id="smallletters7">WORK QUEST AS A GLOBAL PROJECT THAT WOULD WORK AS A TOOL SEARCH AND COMMUNICATION OF WORKERS AND EMPLOYEES. IT IS AN ONLINE WORK MARKETPLACE CONNECTING ALL TYPES OF EMPLOYEES WITH WORKERS AROUND EVERY CORNER OF THE WORLD THROUGH A BLOCKCHAIN POWERED SMART CONTRACT.</p>

		</div>
		<a href="https://www.youtube.com/watch?v=SSo_EIwHSd4" id="youtube"><img src="images/PLAY BUTTON.png" id="play-btn" class="play-btn"></img></a>
		<img src="images/ICO infographic.png" id="right-logo2"></img>
	</div>
	<div class="section">
		<p id="heading3">OUR MISSION</p>
		<p id="smallletters8">CONNCETING EMPLOYERS AND EMPLOYEES THROUGH OUR INNOVATIVE ONLINE PLATFORM,<br></br> EASING COMMUNICATION AND IMPROVING FINANCIAL STANDARDS OF ALL STAKEHOLDERS </p>
		<div id="content">
			<div class="one-third">
				<img src="images/bi.png" id="small-logo"></img>
				<p id="mediumletters">BLOCKCHAIN <br></br>INFRASTRUCTURE</p>
				<p id="smallletters3">WORK COIN, IS A<br></br> CRYPTOCURRENCY USED TO<br></br> CALCULATE REMUNERATION<br></br> BETWEEN AN EMPLOYEE AND<br></br> EMPLOYER IN THE WORK<br></br> QUEST NETWORK. </p>
			</div>
			<div class="one-third">
				<img src="images/eti.png" id="small-logo"></img>
				<p id="mediumletters">EASY TOKEN <br></br>INTEGRATION</p>
				<p id="smallletters3">WORK COIN, IS A<br></br> CRYPTOCURRENCY USED TO<br></br> CALCULATE REMUNERATION<br></br> BETWEEN AN EMPLOYEE AND<br></br> EMPLOYER IN THE WORK<br></br> QUEST NETWORK. </p>
			</div>
			<div class="one-third">
				<img src="images/global.png" id="small-logo"></img>
				<p id="mediumletters">GLOBAL SYSTEM<br></br> AND SECURE</p>
				<p id="smallletters3">WORK COIN, IS A<br></br> CRYPTOCURRENCY USED TO<br></br> CALCULATE REMUNERATION<br></br> BETWEEN AN EMPLOYEE AND<br></br> EMPLOYER IN THE WORK<br></br> QUEST NETWORK. </p> 
			</div>
		</div>
		<a id="join2" href="images/WORK QUEST white paper.pdf">DOWNLOAD WHITEPAPER</a>
	</div>
	<div class="section">
		<p id="heading3">OUR FEATURES</p>
		<div id="content2">
			<div class="one-third">
				<img src="images/ltc.png" id="small-logo"></img>
				<p id="mediumletters">LOW TRANSACTION<br />COST</p>
				<p id="smallletters4">ON OUR WORK QUEST PLATFORM<br></br> TRANSACTIONAL FEE IS SET AT 1% OF<br></br> THE TOTAL USER INCOME AGAINST<br></br> 7-20%  FEE CHARGED BY OTHER<br></br> MARKETPLACES.<br></br>
ZERO COST TO LIST NEW EMPLOYEES.<br></br><br></br></p> 
			</div>
			<div class="one-third">
				<img src="images/it.png" id="small-logo"></img>
				<p id="mediumletters">INNOVATIVE<br />TECHNOLOGY</p>
				<p id="smallletters4">IT IS AN ONLINE JOB MARKETPLACE<br></br> POWERED BY  BLOCKCHAIN THUS<br></br> TAPPING INTO DECENTRALIZATION<br></br> FEATURES OF THIS TECHNOLOGY . ANY<br></br> ONE AROUND THE WORLD CAN USE THE<br></br> PLATFORM AND BE PAID USING OUR<br></br> CRYPTOCURRENCY WORK COIN.</p>
			</div>
			<div class="one-third">
				<img src="images/rt.png" id="small-logo"></img>
				<p id="mediumletters">REAL TIME</p>
				<p id="smallletters4"><br></br>WORK QUEST USES SMART CONTRACT<br></br> TECHNOLOGY TO FACILLITATE REAL TIME<br></br> TRANSACTIONS ELIMINATING DELAYS<br></br> CAUSED BY THIRD PARTIES. IT TAKES A<br></br> FEW MINUTES TO MATCH  JOB DEMAND<br></br> AND SKILLS AS IT IS ALSO LOCATION <br></br>BASED.</p>
			</div>
		</div>
		<div id="content">
			<div class="one-third">
				<img src="images/ss.png" id="small-logo"></img>
				<p id="mediumletters">SAFE AND SECURE<br /><br /></p>
				<p id="smallletters4">THE PLATFORM IS SAFE AND SECURE<br></br> TO USE AS THE USE OF BLOCKCHAIN<br></br> TECHNOLOGY ALLOWS HIGH DATA<br></br> ENCRYPTION WHICH HELPS IN<br></br> HARNESSING SECURITY OF THE<br></br> PLATFORM. AN ESCROW SYSTEM IS<br></br> INTEGRATED ON THE PLATFORM TO<br></br> ELIMINATE FINANCIAL FRAUD.</p>
			</div>
			<div class="one-third">
				<img src="images/ivrs.png" id="small-logo"></img>
				<p id="mediumletters">IMMUTABLE VERIFICATION<br />AND RATING SYSTEM</p>
				<p id="smallletters4">BOTH EMPLOYERS AND EMPLOYEES<br></br> UNDERGO VETTING DURING PROFILE<br></br> CREATION TO ENSURE USER<br></br> LEGITIMACY. TRUSTWORTHY FEEDBACK<br></br> ON EACH QUEST TRANSACTED AND ITS<br></br> RECORDED ON BLOCKCHAIN NETWORK.<br /><br /><br /></p>
			</div>
			<div class="one-third">
				<a id="pitchdeck" href="images/WORK QUEST pitch deck.pdf">DOWNLOAD&nbsp;OUR&nbsp;PITCH&nbsp;DECK</a>
			</div>
		</div>
	</div>
	<div class="section" id="sale">
	<p id="heading3">TOKEN SALE INFO</p>
		<p id="smallletters9">THE WORK COIN WILL BE ISSUED AS AN INDEPENDENT BLOCKCHAIN<br /> WORK QUEST AND WE WILL ISSUE 2 BILLION TOKENS</p>
	<div id="right-logo5">
	<p id="mediumletters">ICO WILL BE STARTED IN</p>
		<div id="exbox1"></div><p id="time1">DAYS</p>
 	<div id="exbox2"></div><p id="time2">HOURS</p>
 	<div id="exbox3"></div><p id="time3">MINUTES</p>
 	<div id="exbox4"></div><p id="time4">SECONDS</p>
 	<a id="timer-button" href="#">JOIN AND BUY TOKEN NOW</a>
	</div>
	<div id="left-box5">
		<p id="mediumletters2">OUR START</p>
		<p id="blueletters">Jun 1, 2019 (12:00AM GMT)</p>
		<p id="mediumletters2">END</p>
		<p id="blueletters">Aug 1, 2019 (12:00AM GMT)</p>
		<p id="mediumletters2">ACCEPTABLE CURRENCIES</p>
		<p id="blueletters">ETH, BTC, LTC & FIAT</p>
		<p id="mediumletters2">NUMBER OF TOKENS FOR SALE</p>
		<p id="blueletters">600,000,000 WRC</p>
		<p id="mediumletters2">TOKENS EXCHANGE RATE</p>
		<p id="blueletters">1 ETH = 140 WRC</p>
		<p id="mediumletters2">MINIMUM TRANSCATION AMOUNT</p>
		<p id="blueletters">$50</p>
	</div>

	<div id="left-box3">
		<p id="bigletters2">TOKEN DISTRIBUTION</p>
		<img src="images/ifd.png" id="small-logo2" />
	</div>
	<div id="left-box4">
		<p id="bigletters2">ICO FUNDS<br /> DISTRIBUTION</p>
		<img src="images/td.png" id="small-logo2" />
	</div>
	</div>
	<div class="section" id="road">
	<p id="heading3">ROAD MAP</p>
	<p id="smallletters9">WITH HELP FROM OUR TEAMS, CONTRIBUTORS AND INVESTORS THESE<br />ARE THE MILESTONES WE ARE LOOKING FORWARD TO ACHEIVE</p>
	
	<div id="slider" style={{"padding":"0 85px","maxWidth":1100}}>
  <ItemsCarousel
    placeholderItem={<div style={{ height: 150, background: '#EEE' }} />}
    enablePlaceholder={true}
    numberOfPlaceholderItems={3}
    numberOfCars={3}
    gutter={12}
    slidesToScroll={2}
    chevronWidth={73}
    outsideChevron={true}
    showSlither={false}
    firstAndLastGutter={false}
    activeItemIndex={this.state.activeItemIndex}
    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
    rightChevron={<div style={{
		  width:300,      
          height: 74,
          background: 'url(../images/next-page.png)'
        }} />}
    leftChevron={<div style={{
		  width:300,      
          height: 74,
          background: 'url(../images/prev-page.png)'
        }} />}
  >
    {children}
  </ItemsCarousel>
</div>
<div class="section" id="sectionX">
	<p id="heading3">WHAT<br />TECHNOLOGY<br />IS BASED</p>
	<p id="smallletters8">WORK QUEST BASED ON BLOCKCHAIN TECHNOLOGY.<br />
BLOCKCHAIN TECHNOLOGY IS AN INCORRUPTIBLE DIGITAL LEDGER OF ECONOMIC TRANSACTIONS THAT CAN BE<br /> PROGRAMMED TO RECORD NOT JUST FINANCIAL TRANSACTIONS BUT VIRTUALLY EVERYTHING OF VALUE. OUR<br /> OBJECTIVE IS TO DEVELOP OWN BLOCKCHAIN KNOWN AS WORK QUEST BLOCKCHAIN AND WILL ALSO INTEGRATE<br /> SMART CONTRACTS TO EASE COMPLETION AND COMMUNICATION BETWEEN AN EMPLOYER AND EMPLOYEE IN THE<br /> PLATFORM</p>
	<div id="left-box3">
	<p id="mediumletters2"><br /><br />
	ELEMENTS OF WORK QUEST<br /> PLATFORM AND HOW THE<br /> SYSTEM WORKS:
	</p>
	<ul class="list2" >
		<li class="blue"><img src="images/Ellipseb.png" id="blue-icon"></img>USER REGISTRATION</li>
		<li class="green"><img src="images/Ellipse 1.png" id="green-icon"></img>QUEST CREATION</li>
		<li class="grey"><img src="images/Ellipseg.png" id="grey-icon"></img>EMPLOYEE SEARCHING</li>
		<li class="yellow"><img src="images/Ellipse D.png" id="blue-icon"></img>SMART CONTRACT</li>
		<li class="orange"><img src="images/Ellipse E.png" id="blue-icon"></img>EVALUATION OF<br /> &nbsp;&nbsp;&nbsp; COMPLETED WORK <br />
&nbsp;&nbsp;&nbsp;&nbsp;AND FEEDBACK</li>
	</ul>
	</div>
	<img src="images/Clip.png" id="right-logo3"></img>
	<img src="images/bg.png" id="small-logo3"></img>
</div>
<div id="section-rel" class="section">
		<p id="heading3">PROBLEMS WE SOLVE<br /> ON GLOBAL JOB<br /> MARKETPLACE</p>
		<div id="content">
			<div class="one-third">
				<img src="images/web.png" id="small-logo"></img>
				<p id="mediumletters">GLOBAL SKILLS<br /> AVAILABILITY AND<br /> HIRING MISMATCH</p>
				<p id="smallletters4">THERE IS JOB DEMAND IN<br /> SOME COUNTRIES WHILE<br /> LABOR SUPPLY IS<br /> AVAILABLE ACROSS OTHER<br /> COUNTRIES.<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></p>
			</div>
			<div class="one-third">
				<img src="images/job.png" id="small-logo"></img>
				<p id="mediumletters">FRAGMENTED<br /> JOB BOARDS<br /><br /></p>
				<p id="smallletters4">IN THE EMERGENCE OF<br /> DIGITAL PLATFORMS MENY JOB<br /> BOARDS TRYING TO MATCH<br /> RECRUITERS, EMPLOYERS<br /> AND EMPLOYEES HAVE<br /> SPRUNG UP. THEY ARE<br /> INEFFICIENT AND NOT<br /> TRUSTWORTHY. HIGH<br /> INDUSTRY FRAGMENTATION<br /> CREATES INFORMATION GAP<br /> WHICH LEADS TO POOR<br /> INTEGRATION OF WORKERS<br /> INTO THE PROFFESIONAL<br /> COMMUNITY </p>
			</div>
			<div class="one-third">
				<img src="images/central.png" id="small-logo"></img>
				<p id="mediumletters">CENTRALIZED<br /> PLATFORMS<br /><br /></p>
				<p id="smallletters4">EXISTING CENTRALIZED<br /> ONLINE MARKETPLACES<br /> CONTROL CRITICAL USER <br />DATA INCLUDING FINANCIAL<br /> INFORMATION AND ITS DONE<br /> WITHOUT CONSENT OF<br /> USERS.<br /><br /><br /><br /><br /><br /><br /><br /></p> 
			</div>
		</div>
	</div>
<div class="section">
		<p id="heading3">SOLUTIONS</p>
		<div id="content">
			<div class="one-third">
				<img src="images/tles.png" id="small-logo"></img>
				<p id="mediumletters">TRUST LESS ECO-<br />SYSTEM<br /><br /></p>
				<p id="smallletters4">WORK QUEST UTILIZES<br /> BLOCKCHAIN TECHNOLOGY<br /> WHICH CREATES AN ECO-<br />SYSTEM WHERE ALL<br /> TRANSACTIONS ARE<br /> IMPLEMENTED BY AN<br /> INDEPENDENT NETWORK<br /> 
AND SMART CONTRACT<br /> EXECUTION. THE<br /> PLATFORM OFFERS OPEN<br /> INDIVIDUAL USER REVIEW<br /> 
AND VERIFICATION TO<br /> ELIMINATE THE PROBLEM<br /> OF DATA LOSS OR FRAUD<br /> IN THE JOB MARKET.</p>
			</div>
			<div class="one-third">
				<img src="images/sec.png" id="small-logo"></img>
				<p id="mediumletters">SECURITY<br /><br /><br /></p>
				<p id="smallletters4">USERS ON THE PLATFORM<br /> POSSESS CONTROL OF THEIR<br />
DATA AND EITHER PARTY TO A <br />CONTRACT WILL HAVE TO<br /> SEEK PERMISSION FROM<br /> INDIVIDUAL PLATFORM<br /> PARTICIPANT IN ORDER TO<br /> USE, ACCESS OR AMEND ANY<br /> INFORMATION ALTOUGH THIS<br /> WORKS IN REAL TIME TO MAKE<br /> THE PROCESS FAST AND<br /> RELIABLE. <br /><br /><br /><br /> </p>
			</div>
			<div class="one-third">
				<img src="images/decentral.png" id="small-logo"></img>
				<p id="mediumletters">DECENTRALIZED<br /> PROFESSIONAL<br /> NETWORK</p>
				<p id="smallletters4">WORK QUEST PROVIDES A<br /> SINGLE INTERFACE<br /> PLATFORM YET<br /> DECENTRALIZED WITH BOTH<br /> PARTIES ACCESSING<br /> TRANSACTIONS ON THE JOBS<br /> BOARD IN REAL TIME.<br /><br /><br /><br /><br /> <br /><br /><br /><br /></p> 
			</div>
		</div>
	</div>
	<div class="sectionxd" id="mvp">
	<p id="heading3">MVP</p>
	<p id="smallletters10">OUR PROJECTS IS BASED ON WORK QUEST MARKETPLACE</p>
	<div id="left-box">
	<img src="images/macbook.png" id="small-logo4" ></img>
	<img src="images/wqmac.png" id="laptop-image" ></img>
	<a id="join3" href="Workquest/index.html">ENTER PLATFORM</a>
	<img src="images/BLUE BG TEXT.png" id="small-logo5"></img>
	<img src="images/xd.png" id="small-logo6"></img>
	<div id="rel-box">
	<p id="bigletters">WORK&nbsp;COIN PROJECT</p>
	<p id="smallletters6">WORK QUEST IS BASED ON OWN BLOCKCHAIN COUPLED WITH ITS OWN SMART CONTRACT SYSTEM. USERS BOTH EMPLOYERS AND EMPLOYEES WILL BE ABLE TOCREATE PROFILES ON THE PLATFORM AND THEIR DATA IS SAFELY SECURED BY THE BLOCKCHAIN.<br /> <br /> 

USERS UPON VETTING THEIR PROFILE IS UPDATED ON THE PLATFORM. WHEN CREATING A QUEST USER FILLS IN ALL NECESSARY INFORMATION INCLUDING CONDITIONS FOR EXECUTION, ANNOUNCED COST AND URGENCY OF EXECUTION.
USING GEOLOCATION SERVICES AN EMPLOYER WILL SEARCH FOR PROSPECTIVE EMPLOYEES AND REVIEW THEIR PROFILE PRIOR TO SENDING QUEST REQUEST. THE EMPLOYEE ENGAGES THE EMPLOYER AND UPON AGREEMENT A SMART CONTRACT IS ESTABLISHED BETWEEN THE PARTIES WITH ALL DETAILS AND CONDITIONS REQUIRED FOR EXECUTION OF THE QUEST CREATED. SMART CONTRACT EXECUTES ALL TRANSACTIONS AS FED IN TO THE SYSTEM INCLUDING HOLDING FUNDS IN AN ESCROW AND RELEASE OF FUNDS AFTER COMPLETION OF WORK BY EMPLOYEE. 

</p>
	</div>
	</div>
	</div>
	</div>
	<div class="section" id="team">
	<p id="heading3">OUR TEAM</p>
	<p id="smallletters9">OUR TEAM IS PASSIONATE AND COMMITED TO DELIVER RESULTS. DIVERSITY IS<br /> KEY TO US AND DRIVING INNOVATION DESIRED ON WORK QUEST</p>
	<div id="content">
			<div class="one-fourth">
				<img src="images/ceo.png" id="small-logo"></img>
				<p id="mediumletters">Andril Kotsur (CEO)<br /><br /></p>
				<p id="smallletters18">Andrii expertise and experience includes knowledge of digital currency, how to manage a highly skilled team, building relationships and driving the company forward. Founder and main ideologue of the project concept.</p>
			
        <img src="images/Ellipse 1067.png" id="small-logo"></img>
        <p id="mediumletters">Oliver Marco La Rosa (Advisor)</p>
        <p id="smallletters18">Co-Founder Globiance
Board Member Maltese Italian Chamber of Commerce
President at Government Blockchain Association Malta </p>
      
        <img src="images/Abhishek Krishna.png" id="small-logo"></img>
        <p id="mediumletters">Abhishek Krishna</p>
        <p id="smallletters18">Abhishek is a Tech Entrepreneur and started his first venture 6 years ago. Since then, he has built several products and has consulted and advised a few startups and corporations. He started coding in school and has a keen sense of product design too. He specializes in building product and technology teams. He currently runs Kcolbchain and Ojam.<br /><br /><br /><br /><br /></p> 
      
      </div>
			<div class="one-fourth">
          <img src="images/Ellipse 1065.png" id="small-logo"></img>
        <p id="mediumletters">Amin Baradaran </p>
        <p id="smallletters18">President of "Attis group", who incorporates the company CJSC "A algorithms and Systems" (Belarus) and also such companies as Attis Capital (Russia, Moscow), Stars Factor (Kazakhstan), One Small Planet (China), Kontinentas (Lithuania), Sabre Invest (Latvia), Monolit (Russia, Krasnodar), Monolit – Yug (Russia, Krasnodar), SK ATISS (Russia, Krasnodar). He promotes the Company's initiatives and projects on the international arena, cooperates with large international investment structures and with business community, huge oil and gas market players, providing complex worldwide oil products trade transactions with high efficiency and reliability. His long term and successful experience in implementation of the most ambitious projects with multi-million investment allows the Company to implement its strategic objectives.</p>

				<img src="images/Myros L.png" id="small-logo"></img>
				<p id="mediumletters9">Lovska Myroslav (Chief project designer)</p>
				<p id="smallletters18">Experience in graphic design, UI/UX, Branding and Social Media advertising.

Portfolio on behance ^ 
www.behance.net/massivedesigngroup<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></p>
			</div>

			<div class="one-fourth">
        <img src="images/S. NIKOLAYEV.png" id="small-logo"></img>
        <p id="mediumletters">Sergei Nikolayev</p>
        <p id="smallletters18">The projects leader at ATTIS Group. After graduating the Belarusian State University of Radio Electronics and Information Technology in 1988, he participated in the development of automated data processing systems at state institutes and customs organizations.

He successfully passed the international course of automation of the US Customs Academy In 1994 and made a decission that it is impossible to implement ambitious and complex projects within state structures. In 1996, the National Bank of Kazakhstan invited him as an IT consultant. So, he started developing two nation-wide projects - the interbank settlement system (Kazakhstan Interbank Settlement Center) and the State Pension System (Kazakhstan State Pension Center and Kazakhstan State Pension Fund). He was the inspiration and the expert for all this time of the company's history in different countries where all projects were implemented, being directly on the hot front, wherever projects are being implemented (Kazakhstan, Russia, the USA, Lithuania, Belarus, China, etc.)</p> 
        
          <img src="images/Ellipse 1068.png" id="small-logo"></img>
        <p id="mediumletters9">Morris Gitonga (Advisor and consultant of marketing)</p>
        <p id="smallletters18">Morris has been within the blockchain and crypto space for the last 2 years, with excellent online research skills. He has 5 years of exceptional writing and research skills.
</p> 
				</div>
      <div class="one-fourth">
        <img src="images/Ellipse 1066.png" id="small-logo"></img>
        <p id="mediumletters">Edward H C Bowen<br /><br /></p>
        <p id="smallletters18">Edward Bowen began his career in the British Army as an infantry officer having been a Royal Military Academy student in the early 1990s. In 1992, Edward came to Latvia as an advisor to the Latvian Ministry of Defense. Thereafter Edward was a development director of Kolonna Group and setup Celcius Limited – a logistics company specializing in food products. Celcius serviced sea and land operations on behalf of clients from the Americas with principal markets in Russia, Kazakhstan and Uzbekistan. In 1997, Edward became Managing Director of Furness Terminals, a joint venture with Furness Group from Holland. Furness Terminals serviced ship cargo through Riga port for clients, including Tyson Foods, the largest protein company in the world. Subsequently the company was sold to Maersk Group from Denmark in 2001. In 2004, Edward became co-founder of SABRE Invest. Edward has also founded the British Chamber of Commerce in Latvia and established the first Latvian professional cycling team, currently ranked in the top ten of the European Tour.
</p> 
      
        <img src="images/Abhishek Kishor.png" id="small-logo"></img>
        <p id="mediumletters9">Abhishek Kishor</p>
        <p id="smallletters18">Blockchain developer and Network engineer. He is certified in CCNA R&S and CCNA security. He has worked on Ethereum and Hyperledger on the various project including Government project. He is also passionate about Hacking & Security.<br /><br /><br /></p> 
      </div>
		</div>
	</div>
	<div class="section" id="contact">
	<p id="heading3">GET IN TOUCH</p>
	<p id="smallletters8">ANY QUESTION? REACH OUT TO US AND WE’LL GET BACK TO YOU SHORTLY.</p>
	<div id="left-box2">
	<p id="smallletters17">feedback@workquest.co<br /><br />join us on telegram</p>
	</div>
	<div id="right-logo4">
	<form action="action_page.php" method="post">
  <p id="smallletters11">YOUR NAME</p><br />
  <input type="text" name="name" onkeypress="return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 48 && event.charCode <= 57)" />
  <br />
  <p id="smallletters11">YOUR EMAIL</p><br />
  <input type="text" name="email" onkeypress="return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 48 && event.charCode <= 57)" />
  <br /><br />
  <p id="smallletters11">YOUR MESSAGE</p><br />
  <input type="text" name="message" id="xdx" onkeypress="return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 48 && event.charCode <= 57)" />
  <br /><br />
  <input type="submit" value="SEND" />
</form>
	</div>	
</div>
<div class="section" id="faq">
<p id="heading3">FREQUENTLY ASKED<br /> QUESTIONS</p>
<p id="smallletters8">BELOW WE’VE PROVIDED INFORMATION ABOUT WORKQUEST AND WORK<br /> COIN(WRC), AND FEW OTHERS, IF YOU HAVE ANY QUESTIONS, PLEASE GET IN<br /> TOUCH USING THE CONTACT FORM BELOW</p>
<div class="half">
<p id="mediumletters8">GENERAL</p>
<p id="blueletters2">WHAT IS THE DIFFERENCE BETWEEN A WORK QUEST AND A WORK COIN</p>
<p id="smallletters16">WORK QUEST IS A PLATFORM CONNECTING EMPLOYERS AND EMPLOYEES USING BLOCKCHAIN TECHNOLOGY. WORK COIN(WRC) IS THE TOKEN USED IN THE ECO-SYSTEM TO FACILITATE PAYMENTS AND OTHER TRANSACTIONS</p>
<p id="blueletters2">WHAT CRYPTOCURRENCIES CAN I USE TO PURCHASE WRC?</p>
<p id="smallletters16">ONE CAN USE ETH, BTC, LTC OR EVEN FIAT MONEY</p>
<p id="blueletters2">HOW CAN I PARTICIPATE IN THE ICO TOKEN SALE?</p>
<p id="smallletters16">IT IS EASY, REGISTER ON OUR WEBSITE, THE ACQUIRE THE ACCEPTED CRYPTOCURRENCIES NAMELY, BTC ETH AND LTH, SEND THE RESPECTIVE CRYPTOCURRENCY YOU PURCHASED AND HAVE IN YOUR WALLET OUR CAMPAIGN ADDRESS AND IN RETURN YOU RECEIVE THE WRC TOKENS AND THEN STORE THEM IN YOUR PREFERRED WALLET
</p>
<p id="blueletters2">WHO IS WORK QUEST TARGETED AT?</p>
<p id="smallletters16">WORK QUEST TARGETS JOB SEEKERS AND EMPLOYERS WHO ARE WORLDS APART AND CAN PROVIDE THEIR SERVICES VIA AN ONLINE PLATORM WHILE GETTING THE BEST AWARD<br /><br /><br /><br /><br /><br /><br /></p>


</div>
<div class="half">
<p id="mediumletters8">ICO</p>
<p id="blueletters2">WHY DO YOU NEED AN ICO?<br /><br /></p>
<p id="smallletters16">SUCCESFUL ICO WILL ENABE US DEVELOP AND ACQUIRE MORE BLOCKCHAIN AND CRYPTOCURRENCY TALENT TO CREATE A HIGHLY UNIQUE AND BENEFICIAL PLATFORM TO HELP OUR STAKEHOLDERS. ALL OUR PROCEEDS GO TO PRODUCT DEVELOPMENT RELATED ACTIVITIES AND LAUNCH AS WELL AS USER ACQUISATION
</p>
<p id="blueletters2">WHY SHOULD YOU INVEST IN OUR ICO?</p>
<p id="smallletters16">WE ARE COMMMITED TO CREATE THE MOST ADVANCED AND TRUSTWORTHY PLATFORM THAT TRANSFORMS RELATIONS BETWEEN EMPLOTYERS AND EMPLOYEES IN THE INDUSTRY AND AT A GLOBAL SCALE. WE TARGET 3.5 MILLION USERS AND 10,000 CORPORATE USERS BY 2023</p>
<p id="blueletters2">WHAT IS THE GOAL OF THE ICO CAMPAIGN?</p>
<p id="smallletters16">THE MAXIMUM TARGET FOR THE CAMPAIGN IS $1O MILLION</p>
<p id="blueletters2">HOW CAN YOU BE SURE WORK WILL COMMENCE AFTER TOKEN SALE?</p>
<p id="smallletters16">WE ARE A TEAM OF PEOPLE DRIVEN BY RESULTS AND THIS IS EVIDENT FROM OUR PAST PROJECTS WIHTING THE ICO AND OUTSIDE THE ICO SPACE. THE TEAM EITHE RCOLLABORATIVELY OR INDIVIDUALLY HAVE BEEN INVOLVED IN INTERNATIONAL PROJECTS WHICH HAVE BEEN CONCLUDED TO FRUITION. WE ARE USING ICO FINACNING METHOD BECAUSE OF ITS AFFORDABILITY AND ABILITY TO INVOLVE OTHER PEOPLE WORLDWIDE IN OUR PROJECT</p>

</div>
</div>
<img src="images/footer background.png" id="small-logo7"></img>
<div id="footer">
  <img src="images/Logotype.png" id="footer-logo" />
  <ul class="footer-list">
				<li><a id="link" href="#about">WHAT IS WORK COIN?</a></li>
				<li><a id="link"  href="#sale">TOKEN SALE</a></li>
				<li><a id="link"  href="#road">ROAD MAP</a></li>
				<li><a id="link" href="#mvp">MVP</a></li>
				<li><a id="link" href="#team">TEAM</a></li>
				<li><a id="link" href="#contact">CONTACT</a></li>
				<li><a id="link" href="#faq" >FAQ</a></li>
	</ul>
	<ul class="social-icons">
  	<li><a href="#"><FontAwesomeIcon icon={faFacebook} size="5x" /></a></li>
  	<li><a href="#"><FontAwesomeIcon icon={faTwitter} size="5x" /></a></li>
  	<li><a href="#"><FontAwesomeIcon icon={faYoutube} size="5x" /></a></li>
  	<li><a href="#"><FontAwesomeIcon icon={faInstagram} size="5x" /></a></li>
  	<li><a href="#"><FontAwesomeIcon icon={faTelegram} size="5x" /></a></li>
  	<li><a href="#"><FontAwesomeIcon icon={faLinkedin} size="5x" /></a></li>
  </ul>
  <p id="footer-text">WORK COIN IS A CRYPTOCURRENCY USED TO CALCULATE RENUMERATION BETWEEN AN EMPLOYER AND AN EMPLOYEE IN THE WORKQUEST NETWORK. THE COIN IS ALSO USED TO FACILITATE PAYMENT TRANSACTION OF ANY TYPE WITHIN OUR WORKQUEST ECOSYSTEM.</p>
  <p id="disclaimer">COPYRIGHT © 2019, WORKCOIN. ALL TRADE COPYRIGHTS BELONG TO THEIR RESPECTIVE OWNERS</p> 
</div>
</div>
      );
   }

  changeActiveItem(activeItemIndex){this.setState({ activeItemIndex });}
  createChildren(n){range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);}

}

export default App;
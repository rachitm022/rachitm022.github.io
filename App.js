import React, { Component } from 'react';
import './app.css';
import ItemsCarousel from 'react-items-carousel';

function ScrollTo(target, speed, timeout) {

  if (!timeout) timeout = 0;
  if (!speed) speed = 1000;

  if (typeof target !== "undefined") {
    //target = target.replace("#", ".");
    //target = $(document.body).find(target);
    setTimeout(function() {
      $('html,body').animate({
        scrollTop: $(target).offset().top - 140
      }, speed);
    }, timeout);
  }
}

  window.onload = function(){
           var refButton = document.getElementById("signup");

            refButton.onclick = function() {
                document.getElementById("signup-form").style.display="block";
            }
        }

var modal= document.getElementById("x");
window.onclick = function(event) {
  if (event.target.id==modal.id) {
    document.getElementById("signup-form").style.display = "none";

  }
};


$("#navbar > nav > ul > li > a").click(function(e) {
  // Prevent a page reload when a link is pressed
  e.preventDefault();
  // Call the scroll function
  ScrollTo($(this).attr("href"), 0, 0); // target, speed, timeout
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
      <div
        key={i}
        style={{
		  width:300,      
          height: 350,
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
	<div class="section">
	<div id="navbar">
	<nav>
			<ul>
				<li><a href="#"><img src="images/logo.png" width="50%"></img></a></li>
				<li><a id="link" href="#about">WHAT IS WORK COIN?</a></li>
				<li><a id="link" href="#sale">TOKEN SALE</a></li>
				<li><a id="link" href="#road">ROAD MAP</a></li>
				<li><a id="link" href="#mvp">APP</a></li>
				<li><a id="link" href="#team">TEAM</a></li>
				<li><a id="link" href="#contact">CONTACT</a></li>
			</ul>
		</nav>
	</div>
	<ul id="loginbar">
				<li><a id="signup" >SIGN&nbsp;UP</a></li>
				<li><a id="login" href="#">LOGIN&nbsp;&nbsp;</a></li></ul>
	<div id="signup-form" class="form">
	<span id="x" class="close" title="Close Modal">&times;</span>
	<form class="form-content" action="/action_page.php">
	<div class="form-container">
	<div id="left-form">
	<img src="images/login.png" id="form-logo"></img></div>
	<div id="right-form">
	<img src="images/photo.png" id="photo"></img>
	<label for="email"><p id="mediumletters5">USER NAME</p></label>
      <input type="text2" placeholder="Enter Email" name="email" required />

      <label for="psw"><p id="mediumletters5">ENTER PASSWORD</p></label>
      <input type="text2" placeholder="Enter Password" name="psw" required />
      <button type="submit" class="loginbtn">LOGIN</button>
      <p id="mediumletters6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FORGOT &nbsp;PASSWORD?</p>
      <p id="mediumletters7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DON'T HAVE AN ACCOUNT YET?<br /><br /></p>
      <button type="submit" class="signupbtn">CREATE ACCOUNT</button>
      <p id="mediumletters6"><br /><br /><br /></p>
      </div>
	</div></form></div>
	<div id="left-box">
		<p id="bigletters">WORK QUEST ICO STARTUP A GLOBAL JOB MARKETPLACE FOR ANY TYPE OF WORK.</p>
		<p id="smallletters">WORK QUEST ICO STARTUP A GLOBAL JOB MARKETPLACE FOR ANY TIPE OF WORK.</p>
		<a id="join" href="#">SIGN UP TO JOIN</a>
		<p id="smallletters2">OUR PARTNERS</p>
	</div>
	<img src="images/illustration.png" id="right-logo"></img>
	<ul class="partners-list">
				<li><a id="signup" href="https://eucc.eu/"><img src="images/EUCC.png" id="partners"></img></a></li>
				<li><a id="login" href="https://globiance.com/"><img src="images/globiance.png" id="partners"></img></a></li>
				<li><a id="login" href="http://attis-group.com/?page_id=252&lang=en"><img src="images/ag.png" id="partners"></img></a></li>
				<li><a id="login" href="https://kcolbchain.com/"><img src="images/KCOLBCHAIN.png" id="partners"></img></a></li>
				</ul>
	
	</div>
	<div class="section" id="about">
		<div id="left-box2">
			<p id="heading">ABOUT PROJECT</p>
			<p id="bigletters">WORK COIN WHY DO WE USE IT?</p>
		<p id="smallletters">WORK COIN IS A CRYPTOCURRENCY USED ON THE WORK QUEST ECO-SYSTEM</p>
		<p id="smallletters">WORK COIN, IS A CRYPTOCURRENCY USED TO CALCULATE REMUNERATION BETWEEN AN EMPLOYEE AND EMPLOYER IN THE WORK QUEST NETWORK. THE COIN IS ALSO USED TO FACI.LLITATE PAYMENT TRANSACTION OF ANY TYPE WITHIN OUR WORK QUEST ECO-SYSTEM. </p>
		<p id="smallletters">WORK QUEST AS A GLOBAL PROJECT THAT WOULD WORK AS A TOOL SEARCH AND COMMUNICATION OF WORKERS AND EMPLOYEES. IT IS AN ONLINE WORK MARKETPLACE CONNECTING ALL TYPES OF EMPLOYEES WITH WORKERS AROUND EVERY CORNER OF THE WORLD THROUGH A BLOCKCHAIN POWERED SMART CONTRACT.</p>

		</div>
		<img src="images/ICO infographic.png" id="right-logo2"></img>
	</div>
	<div class="section">
		<p id="heading">OUR MISSION</p>
		<p id="smallletters">CONNCETING EMPLOYERS AND EMPLOYEES THROUGH OUR INNOVATIVE ONLINE PLATFORM,<br></br> EASING COMMUNICATION AND IMPROVING FINANCIAL STANDARDS OF ALL STAKEHOLDERS </p>
		<div id="content">
			<div class="one-third">
				<img src="images/bi.png" id="small-logo"></img>
				<p id="mediumletters">BLOCKCHAIN INFRASTRUCTURE</p>
				<p id="smallletters3">WORK COIN, IS A<br></br> CRYPTOCURRENCY USED TO<br></br> CALCULATE REMUNERATION<br></br> BETWEEN AN EMPLOYEE AND<br></br> EMPLOYER IN THE WORK<br></br> QUEST NETWORK. </p>
			</div>
			<div class="one-third">
				<img src="images/eti.png" id="small-logo"></img>
				<p id="mediumletters">EASY TOKEN INTEGRATION</p>
				<p id="smallletters3">WORK COIN, IS A<br></br> CRYPTOCURRENCY USED TO<br></br> CALCULATE REMUNERATION<br></br> BETWEEN AN EMPLOYEE AND<br></br> EMPLOYER IN THE WORK<br></br> QUEST NETWORK. </p>
			</div>
			<div class="one-third">
				<img src="images/global.png" id="small-logo"></img>
				<p id="mediumletters">GLOBAL SYSTEM AND SECURE</p>
				<p id="smallletters3">WORK COIN, IS A<br></br> CRYPTOCURRENCY USED TO<br></br> CALCULATE REMUNERATION<br></br> BETWEEN AN EMPLOYEE AND<br></br> EMPLOYER IN THE WORK<br></br> QUEST NETWORK. </p> 
			</div>
		</div>
		<a id="join2" href="#">DOWNLOAD WHITEPAPER</a>
	</div>
	<div class="section">
		<p id="heading">OUR FEATURES</p>
		<div id="content2">
			<div class="one-third">
				<img src="images/ltc.png" id="small-logo"></img>
				<p id="mediumletters">BLOCKCHAIN INFRASTRUCTURE</p>
				<p id="smallletters4">ON OUR WORK QUEST PLATFORM<br></br> TRANSACTIONAL FEE IS SET AT 1% OF<br></br> THE TOTAL USER INCOME AGAINST<br></br> 7-20%  FEE CHARGED BY OTHER<br></br> MARKETPLACES.<br></br>
ZERO COST TO LIST NEW EMPLOYEES.</p> 
			</div>
			<div class="one-third">
				<img src="images/it.png" id="small-logo"></img>
				<p id="mediumletters">EASY TOKEN INTEGRATION</p>
				<p id="smallletters4">IT IS AN ONLINE JOB MARKETPLACE<br></br> POWERED BY  BLOCKCHAIN THUS<br></br> TAPPING INTO DECENTRALIZATION<br></br> FEATURES OF THIS TECHNOLOGY . ANY<br></br> ONE AROUND THE WORLD CAN USE THE<br></br> PLATFORM AND BE PAID USING OUR<br></br> CRYPTOCURRENCY WORK COIN.</p>
			</div>
			<div class="one-third">
				<img src="images/rt.png" id="small-logo"></img>
				<p id="mediumletters">REAL TIME<br /><br /></p>
				<p id="smallletters4">WORK QUEST USES SMART CONTRACT<br></br> TECHNOLOGY TO FACILLITATE REAL TIME<br></br> TRANSACTIONS ELIMINATING DELAYS<br></br> CAUSED BY THIRD PARTIES. IT TAKES A<br></br> FEW MINUTES TO MATCH  JOB DEMAND<br></br> AND SKILLS AS IT IS ALSO LOCATION BASED.</p>
			</div>
		</div>
		<div id="content">
			<div class="one-third">
				<img src="images/ss.png" id="small-logo"></img>
				<p id="mediumletters">BLOCKCHAIN INFRASTRUCTURE</p>
				<p id="smallletters4">THE PLATFORM IS SAFE AND SECURE<br></br> TO USE AS THE USE OF BLOCKCHAIN<br></br> TECHNOLOGY ALLOWS HIGH DATA<br></br> ENCRYPTION WHICH HELPS IN<br></br> HARNESSING SECURITY OF THE<br></br> PLATFORM. AN ESCROW SYSTEM IS<br></br> INTEGRATED ON THE PLATFORM TO<br></br> ELIMINATE FINANCIAL FRAUD.</p>
			</div>
			<div class="one-third">
				<img src="images/ivrs.png" id="small-logo"></img>
				<p id="mediumletters">EASY TOKEN INTEGRATION</p>
				<p id="smallletters4">BOTH EMPLOYERS AND EMPLOYEES<br></br> UNDERGO VETTING DURING PROFILE<br></br> CREATION TO ENSURE USER<br></br> LEGITIMACY. TRUSTWORTHY FEEDBACK<br></br> ON EACH QUEST TRANSACTED AND ITS<br></br> RECORDED ON BLOCKCHAIN NETWORK.</p>
			</div>
			<div class="one-third">
				<a id="pitchdeck" href="#">DOWNLOAD&nbsp;OUR&nbsp;PITCH&nbsp;DECK</a>
			</div>
		</div>
	</div>
	<div class="section" id="sale">
	<p id="heading">TOKEN SALE INFO</p>
		<p id="smallletters">THE WORK COIN WILL BE ISSUED AS AN INDEPENDENT BLOCKCHAIN<br /> WORK QUEST AND WE WILL ISSUE 2 BILLION TOKENS</p>
	<div id="left-box2">
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
	<img src="images/isb.png" id="right-logo2" />
	<div id="left-box3">
		<p id="bigletters2">TOKEN DISTRIBUTION</p>
		<img src="images/td.png" id="small-logo2" />
	</div>
	<div id="left-box3">
		<p id="bigletters2">ICO FUNDS<br /> DISTRIBUTION</p>
		<img src="images/ifd.png" id="small-logo2" />
	</div>
	</div>
	<div class="section" id="road">
	<p id="heading">ROAD MAP</p>
	<p id="smallletters">WITH HELP FROM OUR TEAMS, CONTRIBUTORS AND INVESTORS THESE<br />ARE THE MILESTONES WE ARE LOOKING FORWARD TO ACHEIVE</p>
	
	<div style={{"padding":"0 60px","maxWidth":900,"margin":"auto auto"}}>
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
<div class="section">
	<p id="heading2">WHAT<br />TECHNOLOGY<br />IS BASED</p>
	<p id="smallletters">WORK QUEST BASED ON BLOCKCHAIN TECHNOLOGY.<br />
BLOCKCHAIN TECHNOLOGY IS AN INCORRUPTIBLE DIGITAL LEDGER OF ECONOMIC TRANSACTIONS THAT CAN BE<br /> PROGRAMMED TO RECORD NOT JUST FINANCIAL TRANSACTIONS BUT VIRTUALLY EVERYTHING OF VALUE. OUR<br /> OBJECTIVE IS TO DEVELOP OWN BLOCKCHAIN KNOWN AS WORK QUEST BLOCKCHAIN AND WILL ALSO INTEGRATE<br /> SMART CONTRACTS TO EASE COMPLETION AND COMMUNICATION BETWEEN AN EMPLOYER AND EMPLOYEE IN THE<br /> PLATFORM</p>
	<div id="left-box3">
	<p id="mediumletters2">
	ELEMENTS OF WORK QUEST<br /> PLATFORM AND HOW THE<br /> SYSTEM WORKS:
	</p>
	<ul class="list2" >
		<li class="blue"><img src="images/Ellipseb.png" id="blue-icon"></img>USER REGISTRATION</li>
		<li class="green"><img src="images/Ellipse 1.png" id="green-icon"></img>QUEST CREATION</li>
		<li class="grey"><img src="images/Ellipseg.png" id="grey-icon"></img>EMPLOYEE SEARCHING</li>
		<li class="blue"><img src="images/Ellipseb.png" id="blue-icon"></img>SMART CONTRACT</li>
		<li class="blue"><img src="images/Ellipseb.png" id="blue-icon"></img>EVALUATION OF<br /> &nbsp;&nbsp;&nbsp; COMPLETED WORK <br />
&nbsp;&nbsp;&nbsp;&nbsp;AND FEEDBACK</li>
	</ul>
	</div>
	<img src="images/Clip.png" id="right-logo3"></img>
	<img src="images/bg.png" id="small-logo3"></img>
</div>
<div class="section-rel">
		<p id="heading2">PROBLEMS WE SOLVE<br /> ON GLOBAL JOB<br /> MARKETPLACE</p>
		<div id="content">
			<div class="one-third">
				<img src="images/web.png" id="small-logo"></img>
				<p id="mediumletters3">GLOBAL SKILLS AVAILABILITY AND HIRING MISMATCH</p>
				<p id="smallletters4">THERE IS JOB DEMAND IN<br /> SOME COUNTRIES WHILE<br /> LABOR SUPPLY IS<br /> AVAILABLE ACROSS OTHER<br /> COUNTRIES.</p>
			</div>
			<div class="one-third">
				<img src="images/job.png" id="small-logo"></img>
				<p id="mediumletters3">FRAGMENTED JOB BOARDS<br /><br /></p>
				<p id="smallletters4">IN THE EMERGENCE OF<br /> DIGITAL PLATFORMS MENY JOB<br /> BOARDS TRYING TO MATCH<br /> RECRUITERS, EMPLOYERS<br /> AND EMPLOYEES HAVE<br /> SPRUNG UP. THEY ARE<br /> INEFFICIENT AND NOT<br /> TRUSTWORTHY. HIGH<br /> INDUSTRY FRAGMENTATION<br /> CREATES INFORMATION GAP<br /> WHICH LEADS TO POOR<br /> INTEGRATION OF WORKERS<br /> INTO THE PROFFESIONAL<br /> COMMUNITY </p>
			</div>
			<div class="one-third">
				<img src="images/central.png" id="small-logo"></img>
				<p id="mediumletters3">CENTRALIZED PLATFORMS<br /><br /></p>
				<p id="smallletters4">EXISTING CENTRALIZED<br /> ONLINE MARKETPLACES<br /> CONTROL CRITICAL USER <br />DATA INCLUDING FINANCIAL<br /> INFORMATION AND ITS DONE<br /> WITHOUT CONSENT OF<br /> USERS.</p> 
			</div>
		</div>
	</div>
<div class="section">
		<p id="heading2">SOLUTIONS</p>
		<div id="content">
			<div class="one-third">
				<img src="images/tles.png" id="small-logo"></img>
				<p id="mediumletters3">TRUST LESS ECO-SYSTEM<br /><br /></p>
				<p id="smallletters4">WORK QUEST UTILIZES<br /> BLOCKCHAIN TECHNOLOGY<br /> WHICH CREATES AN ECO-<br />SYSTEM WHERE ALL<br /> TRANSACTIONS ARE<br /> IMPLEMENTED BY AN<br /> INDEPENDENT NETWORK<br /> 
AND SMART CONTRACT<br /> EXECUTION. THE<br /> PLATFORM OFFERS OPEN<br /> INDIVIDUAL USER REVIEW<br /> 
AND VERIFICATION TO<br /> ELIMINATE THE PROBLEM<br /> OF DATA LOSS OR FRAUD<br /> IN THE JOB MARKET.</p>
			</div>
			<div class="one-third">
				<img src="images/sec.png" id="small-logo"></img>
				<p id="mediumletters3">SECURITY<br /><br /><br /></p>
				<p id="smallletters4">USERS ON THE PLATFORM<br /> POSSESS CONTROL OF THEIR<br />
DATA AND EITHER PARTY TO A <br />CONTRACT WILL HAVE TO<br /> SEEK PERMISSION FROM<br /> INDIVIDUAL PLATFORM<br /> PARTICIPANT IN ORDER TO<br /> USE, ACCESS OR AMEND ANY<br /> INFORMATION ALTOUGH THIS<br /> WORKS IN REAL TIME TO MAKE<br /> THE PROCESS FAST AND<br /> RELIABLE.  </p>
			</div>
			<div class="one-third">
				<img src="images/decentral.png" id="small-logo"></img>
				<p id="mediumletters3">DECENTRALIZED PROFFESIONAL NETWORK</p>
				<p id="smallletters4">WORK QUEST PROVIDES A<br /> SINGLE INTERFACE<br /> PLATFORM YET<br /> DECENTRALIZED WITH BOTH<br /> PARTIES ACCESSING<br /> TRANSACTIONS ON THE JOBS<br /> BOARD IN REAL TIME.</p> 
			</div>
		</div>
	</div>
	<div class="sectionxd" id="mvp">
	<p id="heading">MVP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
	<p id="smallletters5">OUR PROJECTS IS BASED ON WORK QUEST MARKETPLACE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
	<div id="left-box">
	<img src="images/macbook.png" id="small-logo4"></img>
	<img src="images/BLUE BG TEXT.png" id="small-logo5"></img>
	<img src="images/xd.png" id="small-logo6"></img>
	<div id="rel-box">
	<p id="bigletters">WORK COIN PROJECT</p>
	<p id="smallletters6">WORK QUEST IS BASED ON OWN BLOCKCHAIN COUPLED WITH ITS OWN SMART CONTRACT SYSTEM. USERS BOTH EMPLOYERS AND EMPLOYEES WILL BE ABLE TOCREATE PROFILES ON THE PLATFORM AND THEIR DATA IS SAFELY SECURED BY THE BLOCKCHAIN.<br /> <br /> 

USERS UPON VETTING THEIR PROFILE IS UPDATED ON THE PLATFORM. WHEN CREATING A QUEST USER FILLS IN ALL NECESSARY INFORMATION INCLUDING CONDITIONS FOR EXECUTION, ANNOUNCED COST AND URGENCY OF EXECUTION.
USING GEOLOCATION SERVICES AN EMPLOYER WILL SEARCH FOR PROSPECTIVE EMPLOYEES AND REVIEW THEIR PROFILE PRIOR TO SENDING QUEST REQUEST. THE EMPLOYEE ENGAGES THE EMPLOYER AND UPON AGREEMENT A SMART CONTRACT IS ESTABLISHED BETWEEN THE PARTIES WITH ALL DETAILS AND CONDITIONS REQUIRED FOR EXECUTION OF THE QUEST CREATED. SMART CONTRACT EXECUTES ALL TRANSACTIONS AS FED IN TO THE SYSTEM INCLUDING HOLDING FUNDS IN AN ESCROW AND RELEASE OF FUNDS AFTER COMPLETION OF WORK BY EMPLOYEE. 

</p>
	</div>
	</div>
	</div>
	</div>
	<div class="sectionA" id="team">
	<p id="heading">OUR TEAM</p>
	<p id="smallletters">OUR TEAM IS PASSIONATE AND COMMITED TO DELIVER RESULTS. DIVERSITY IS<br /> KEY TO US AND DRIVING INNOVATION DESIRED ON WORK QUEST</p>
	<div id="content">
			<div class="one-third">
				<img src="images/ceo.png" id="small-logo"></img>
				<p id="mediumletters">Andril Kotsur (CEO)</p>
				<p id="smallletters3">Andrii expertise and experience<br /> includes knowledge of digital currency,<br /> how to manage a highly skilled team,<br /> building relationships and driving the<br /> company forward. Founder and main <br />ideologue of the project concept.</p>
			</div>
			<div class="one-third">
				<img src="images/Abhishek Kishor.png" id="small-logo"></img>
				<p id="mediumletters">Abhishek  Kishor<br /><br /></p>
				<p id="smallletters3">Blockchain developer and Network<br /> engineer. He is certified in CCNA R&S<br /> and CCNA security. He has worked on<br /> Ethereum and Hyperledger on the<br /> various project including Government<br /> project. He is also passionate about<br /> Hacking & Security.</p>
			</div>
			<div class="one-third">
				<img src="images/Abhishek Krishna.png" id="small-logo"></img>
				<p id="mediumletters">Abhishek Krishna<br /><br /></p>
				<p id="smallletters3">Abhishek is a Tech Entrepreneur and<br /> started his first venture 6 years ago.<br /> Since then, he has built several<br /> products and has consulted and<br /> advised a few startups and<br /> corporations. He started coding in<br /> school and has a keen sense of<br /> product design too. He specializes in<br /> building product and technology<br />teams. He currently runs Kcolbchain<br /> and Ojam.</p> 
			</div>
		</div>
	</div>
	<div class="sectionA" id="contact">
	<p id="heading">GET IN TOUCH</p>
	<p id="smallletters">ANY QUESTION? REACH OUT TO US AND WE’LL GET BACK TO YOU SHORTLY.</p>
	<div id="left-box2">
	<p id="smallletters">+044 0123 4567<br /><br />info@workquest.co<br /><br />join us on telegram</p>
	</div>
	<div id="right-logo4">
	<form action="/action_page.php">
  <p id="smallletters3">YOUR NAME</p><br />
  <input type="text" name="name" />
  <br />
  <p id="smallletters3">YOUR EMAIL</p><br />
  <input type="text" name="email" />
  <br /><br />
  <p id="smallletters3">YOUR MESSAGE</p><br />
  <input type="text" name="email" id="xdx" />
  <br /><br />
  <input type="submit" value="SEND" />
</form>
	</div>	
</div>
<img src="images/bg.png" id="small-logo"></img>
<img src="images/logo.png" id="icon-logo2"></img>
</div>
      );
   }

  changeActiveItem(activeItemIndex){this.setState({ activeItemIndex });}
  createChildren(n){range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);}

}

export default App;
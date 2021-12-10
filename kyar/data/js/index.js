var onOff=1;
var interv = 0;
var settingsChoose=0;

		function buttonChose() {
			if (onOff==1) {
				onOff=0
				document.getElementById('buttonOnOff').innerHTML="ВКЛ.";
			}
			else{
				onOff=1
				document.getElementById('buttonOnOff').innerHTML="ВЫКЛ.";
			}
		}
		
		function watchVDA(){
			if (onOff==1) {
				document.location.assign('library.html');
			}
			else{
				document.getElementById('flexBlock').style.display="none";
				document.getElementById('videoClass').style.display="none";
				document.getElementById('animeV').style.display="block";
				document.getElementById('animeV').style.position="fixed";
 				let audio = new Audio(); 
  				audio.src = 'css/audio/animeAudio.mp3'; 
 				audio.autoplay = true; 
 				let interval = setInterval('openNewStr()',1000);
			}
		}
		
		function openNewStr(){
			interv+=1;
			if (interv==14){
				document.location.assign('library.html');
				clearInterval(interval);
			}
		}
		

		timeOutBlackOff=setTimeout(blackOff,3000);
		function blackOff(){
			document.getElementById("blackSvg").style.display="none";
		}

		function skipBlackSvg(){
			document.getElementById("blackSvg").style.display="none";
		}

		$(document).ready(function(){		  
			$("#aboutUs,#oNas").hover(function(){
				$(".onHiddenFooter").slideToggle('slow');
			});
			return false;	  
		});
		$(document).ready(function(){		  
			$("#aSettings,#closeSettings").click(function(){
				$("#showSettings").toggle("slow",function(){
					$(this).css("width","280px")
				});
			});
			return false;	  
		});
		var oNasBlock=1;
		var regAusBlock=1;
		$(document).ready(function(){		  
			$("#regAus").click(function(){
				if (oNasBlock==1) {$("#regAusForm").toggle("slow",function(){
					$(this).css("width","250px");
					if (regAusBlock==1) {
						regAusBlock=2;
					}
					else{
						regAusBlock=1;
					}
				});}
					else{
					$("#oNas").toggle("slow");
					$("#oNas").css("display","flex");
					if (oNasBlock==1) {
						oNasBlock=2;
					}
					else{
						oNasBlock=1;
					}
					$("#regAusForm").toggle("slow",function(){
					$(this).css("width","250px");
					if (regAusBlock==1) {
						regAusBlock=2;
					}
					else{
						regAusBlock=1;
					}
				});
					}
			});
			return false;	  
		});
		$(document).ready(function() {
			$("#aboutUs,.informZaglav").click(function(){
				if (regAusBlock==1) {
					if (oNasBlock==1) {
						oNasBlock=2;
					}
					else{
						oNasBlock=1;
					}
					$("#oNas").toggle("slow");
				$("#oNas").css("display","flex");
				}
				else{
					$("#regAusForm").toggle("slow",function(){
					$(this).css("width","250px");
					if (regAusBlock==1) {
						regAusBlock=2;
					}
					else{
						regAusBlock=1;
					}
					if (oNasBlock==1) {
						oNasBlock=2;
					}
					else{
						oNasBlock=1;
					}
					$("#oNas").toggle("slow");
					$("#oNas").css("display","flex");
				});
				}
			});
			return false;
		});
		$(document).ready(function(){	
		$("#newSettingsForm,#newSettings").click(function(){
			if (settingsChoose==0) {
				$("#mainSettingsForm").animate({ "height": "-=360px"}, "300" );
				$("#newSettingsForm").animate({ "height": "+=360px"}, "300" );
				$(".formString").css("display","none");
				$(".formStringNew").css("display","flex");
				$("#musicChoose").css("display","none");
				$(".setFirst").css("display","none");
				$(".setSecond").css("display","block");
				settingsChoose=1;
			}
		});});
		$(document).ready(function(){	
		$("#mainSettings,#mainSettingsForm").click(function(){
			if (settingsChoose==1) {
				$("#mainSettingsForm").animate({ "height": "+=360px"}, "300" );
				$("#newSettingsForm").animate({ "height": "-=360px"}, "300" );
				$(".formString").css("display","flex");
				$(".formStringNew").css("display","none");
				$("#musicChoose").css("display","block");
				$(".setSecond").css("display","none");
				$(".setFirst").css("display","block");
				settingsChoose=0;
				
			}
		});});
	var mainMusic = new Audio();
	var dontStopMusic=0;
		function checkNewSetting(){

			if (document.getElementById("nightLight").checked){
				document.getElementById("videoClass").style.opacity=0.4;
				document.getElementById("svgBg").style.opacity=0.4;
			}
			else
			{
				document.getElementById("videoClass").style.opacity=1;
				document.getElementById("svgBg").style.opacity=1;
				}
			var video = document.getElementsByTagName('video')[2];  
			
			if (document.getElementById("bgSettingPS").checked){
 				video.pause(); 
			}
 			else{
 				video.play();
 			}

 			if (document.getElementById("musicSettingOnOff").checked)
 			{	
 				if (dontStopMusic!=1) {
				if (document.forms["mainSettingsForm"].musicChoose.value==0) {
 					mainMusic.src = "data/audio/Karamel-Kel-Aglow.mp3";
  					mainMusic.currentTime = 0.0;
  					mainMusic.play();
  					dontStopMusic=1;
 				}
 			}
 				if (dontStopMusic!=2) {
				if (document.forms["mainSettingsForm"].musicChoose.value==1) {
 					mainMusic.src = "data/audio/tilekid-you-not-the-same.mp3";
  					mainMusic.currentTime = 0.0;
  					mainMusic.play();
  					dontStopMusic=2;
 				}
 			}
 			
 				if (dontStopMusic!=3) {
 				if (document.forms["mainSettingsForm"].musicChoose.value==2) {
 					mainMusic.src="data/audio/Kaito-Shoma-Hotline.mp3";
  					mainMusic.currentTime = 0.0;
  					mainMusic.play();
  					dontStopMusic=3;
 				}
 			}
 			}
 			else{
			mainMusic.currentTime = 0.0;
 			mainMusic.pause();
 			dontStopMusic=0;
 			}
 				if(document.forms["newSettingsForm"].noneBgVideo.checked)
 					document.getElementById('videoClass').style.display="none";
 				else
				document.getElementById('videoClass').style.display="block";

			if(document.forms["newSettingsForm"].svgBgOnOff.checked){
				document.getElementById('svgBg').style.display="block";
			}
			else
				document.getElementById('svgBg').style.display="none";
		}
		var voitiIliZareg=0;
		$(document).ready(function() {
			$("#buttonLogin").click(function() {
				$("#regAusForm").animate({ "opacity": "0.0"}, 500);
				if (voitiIliZareg==0) {
					voitiIliZareg=1
				setTimeout(function(){
				document.getElementById("regAusName").innerHTML="Вход";
				document.forms["regAusForm"].userPassTwo.style.display="none";
				document.forms["regAusForm"].userMail.style.marginTop="15%";
				document.getElementById("newIli").innerHTML="<div id='ili'>или</div>";
				document.getElementById("buttonReg").innerHTML="Войти";
				document.getElementById("buttonLogin").innerHTML="Зарегистрироваться";
				clearTimeout();},500);
				}
				else{
					voitiIliZareg=0;
				setTimeout(function(){
				document.getElementById("regAusName").innerHTML="Регистрация";
				document.forms["regAusForm"].userPassTwo.style.display="block";
				document.forms["regAusForm"].userMail.style.marginTop="7%";
				document.getElementById("newIli").innerHTML="";
				document.getElementById("buttonReg").innerHTML="Зарегистрироваться";
				document.getElementById("buttonLogin").innerHTML="Уже зарегистрированы?";
				clearTimeout();},500);
				}
				$("#regAusForm").animate({ "opacity": "1.0"}, 500);
			});
		});
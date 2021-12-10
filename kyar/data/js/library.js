	var videoF=0;
	function animeChose(c) {
		document.location.assign(c)
	}
			$(document).ready(function(){		  
			$("#aSettings,#closeSettings").click(function(){
				$("#showSettings").toggle("slow",function(){
					$(this).css("width","280px")
				});
			});
			return false;	  
		});

			var mainMusic = new Audio();
	var dontStopMusic=0;
		function checkNewSetting(){

			if (document.getElementById("nightLight").checked)
				document.getElementById("videoBg").style.opacity=0.4;
			else
				document.getElementById("videoBg").style.opacity=1;

			var video = document.getElementsByTagName('video')[0];  
			
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
 				if(document.forms["mainSettingsForm"].noneBgVideo.checked)
 					document.getElementById('videoBg').style.display="none";
 				else
				document.getElementById('videoBg').style.display="block";

			if(document.forms["mainSettingsForm"].svgBgOnOff.checked){
				document.getElementById('svgBg').style.display="block";
			}
			else
				document.getElementById('svgBg').style.display="none";
		}
		timeOutBlackOff=setTimeout(blackOff,1000);
		function blackOff(){
			document.getElementById("blackSvg").style.display="none";
		}

		function skipBlackSvg(){
			document.getElementById("blackSvg").style.display="none";
		}

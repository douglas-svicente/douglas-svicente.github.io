function MM_openBrWindow(f,e,d){window.open(f,e,d)}function openModal(N,L,J,i,y){var e,G,F,C;var I=navigator.appName=="Netscape"&&parseInt(navigator.appVersion)==4;var D=navigator.appName=="Netscape"&&parseFloat(navigator.appVersion)>4.04;var K=navigator.appName=="Netscape"&&parseInt(navigator.appVersion)==5;var M=navigator.appName=="Netscape"&&parseInt(navigator.appVersion)==6;var z=navigator.appName.indexOf("Microsoft")>-1&&parseInt(navigator.appVersion)==4;var A=navigator.appName.indexOf("Microsoft")>-1&&parseInt(navigator.appVersion)==5;var B=navigator.appName.indexOf("Microsoft")>-1&&parseInt(navigator.appVersion)==6;var E=z||A||B;var H=I||D||K||M;var x=false;if(y!=null){x=y}if(I){e=window.screenX+(window.outerWidth-L)/2;G=window.screenY+(window.outerHeight-J)/2;F="screenX="+e+",screenY="+G+",location=no,toolbar=no,directories=no,status=no,resizable=no,dependent=yes,width="+L+",height="+J}else{e=(screen.width-L)/2;G=(screen.height-J)/2;F="left="+e+",top="+G+",location=no,toolbar=no,directories=no,status=no,resizable=no,width="+L+",height="+J}if(x){F+=",scrollbars=yes"}if(i==null){C="modal"}else{C=i}C=ajustaStr(C);try{if(oWindow&&oWindow.open){closeModal()}}catch(w){}oWindow=window.open(N,C,F);oWindow.focus()}function doChatCapa(a){if(a!=null){window.open("/jsp/popup_ingresso_chat.jsp?room="+a,"ingresso","toolbar=no,menubar=no,resizable=no,scrollbars=no,width=250,height=200")}}function doVoteVotacao(a){document.location.href="https://web.archive.org/web/20140131075411/http://www.clicrbs.com.br/cdm/jsp/cdm_login.jsp?url="+escape(a)}function ajustaStr(e){var c=new Array(/ /g,/ç/g,/õ/g,/ô/g,/ò/g,/ó/g,/ã/g,/â/g,/á/g,/à/g,/í/g,/ì/g,/ü/g,/ù/g,/ú/g,/ê/g,/è/g,/é/g);var d=new Array("_","c","o","a","i","u","e");var a=0;e=e.toLowerCase();for(var b in c){if(b==0){a=0}else{if(b==1){a=1}else{if(b>=2&&b<=5){a=2}else{if(b>=6&&b<=9){a=3}else{if(b>=10&&b<=11){a=4}else{if(b>=12&&b<=14){a=5}else{if(b==15){a=6}}}}}}}e=e.replace(c[b],d[a])}return e}function linkLsb(h){var k=document.cookie;var j=k.indexOf("clicRBSv2.prefs");var i="1";if(j>-1){conteudo=k.substring(j);var l=conteudo.substring(conteudo.indexOf("uf=")+3,conteudo.indexOf("):usuario"));i=l.substring(l.indexOf("(")+1)}var g="https://web.archive.org/web/20140131075411/http://minutoaminuto.clicrbs.com.br/lsb/jsp/index.jsp?spev="+h+"&uf="+i;openModal(g,800,600,"lsbce",false)}function linkPopup(a,b,e,d,c){if(e==0&&d==0){popup=window.open("/jsp/popup.jsp?catgid="+a+"&template="+b+".dwt&p_url="+c,"PopUP")}else{popup=window.open("/jsp/popup.jsp?catgid="+a+"&template="+b+".dwt&p_url="+c,"PopUP","resizable=yes,location=no,directories=no,status=no,toolbar=no,menubar=no,scrollbars=no,width="+e+",height="+d)}}function showFlashbox(b,a,h,d){try{pageTracker._trackEvent("Infografico",b,location.href)}catch(g){try{_gaq.push(["_trackEvent","Infografico",b,location.href])}catch(g){}}var c=d+b,f=document.createElement("a");f.title=unescape("Infogr%E1fico");f.href=c;SLoader.getObj("/js/","Util").showIframeModal(f,a,h)}function popupFormArqNew(c,b){var a="https://web.archive.org/web/20140131075411/http://www.clicrbs.com.br/formulario/jsp/pop_formulario_arq2.jsp?titulo="+c+"&emailAlvo="+b;window.open(a,"popup","width=590,height=540,scrollbars=1")};

/*
     FILE ARCHIVED ON 07:54:11 Jan 31, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:19 Dec 12, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 98.121 (5)
  PetaboxLoader3.resolve: 142.978 (3)
  exclusion.robots: 0.255
  LoadShardBlock: 99.999 (3)
  load_resource: 173.93
  captures_list: 310.014
  CDXLines.iter: 39.37 (3)
  RedisCDXSource: 19.674
  esindex: 0.017
  exclusion.robots.policy: 0.241
*/
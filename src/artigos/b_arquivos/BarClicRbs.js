var BarClicRbs=function(){var j=function(){try{c(document.getElementById("menuBarraClic_todos"));c(document.getElementById("menuBarraClic_classificados"))}catch(k){}},c=function(m){try{var l=0;while(l<m.childNodes.length){if(m.childNodes[l].tagName&&(m.childNodes[l].tagName.toLowerCase()=="div"||m.childNodes[l].tagName.toLowerCase()=="a")){m.childNodes[l].onmouseover=i;m.childNodes[l].onmouseout=h}l++}m=l=null}catch(k){}},i=function(){try{var n=this.parentNode.getAttribute("rel"),k=document.getElementById("menuBarraClic_"+n),m=0;while(m<k.childNodes.length){if(k.childNodes[m].tagName&&k.childNodes[m].tagName.toLowerCase()=="div"){d();k.childNodes[m].style.display="block";break}m++}n=k=m=null}catch(l){}},h=function(){try{var n=this.parentNode.getAttribute("rel"),k=document.getElementById("menuBarraClic_"+n),m=0;while(m<k.childNodes.length){if(k.childNodes[m].tagName&&k.childNodes[m].tagName.toLowerCase()=="div"){k.childNodes[m].style.display="none";g();break}m++}n=k=m=null}catch(l){}},d=function(){try{var o=document.getElementsByTagName("object"),n=document.getElementsByTagName("embed"),m=document.getElementsByTagName("select"),l=0;while(l<o.length){if(o[l].style.display!="none"){o[l].setAttribute("barraclicrbs","hidden");o[l].style.display="none"}l++}l=0;while(l<n.length){if(n[l].style.display!="none"){n[l].setAttribute("barraclicrbs","hidden");n[l].style.display="none"}l++}l=0;while(l<m.length){if(m[l].style.display!="none"){m[l].setAttribute("barraclicrbs","hidden");m[l].style.display="none"}l++}o=n=m=l=null}catch(k){}},g=function(){try{var o=document.getElementsByTagName("object"),n=document.getElementsByTagName("embed"),m=document.getElementsByTagName("select"),l=0;while(l<o.length){if(o[l].getAttribute("barraclicrbs")&&o[l].getAttribute("barraclicrbs")!=""){o[l].style.display="";o[l].removeAttribute("barraclicrbs")}l++}l=0;while(l<n.length){if(n[l].getAttribute("barraclicrbs")&&n[l].getAttribute("barraclicrbs")!=""){n[l].style.display="";n[l].removeAttribute("barraclicrbs")}l++}l=0;while(l<m.length){if(m[l].getAttribute("barraclicrbs")&&m[l].getAttribute("barraclicrbs")!=""){m[l].style.display="";m[l].removeAttribute("barraclicrbs")}l++}o=n=m=l=null}catch(k){}},e=function(){var k=document.getElementById("frmSearch3");try{document.getElementById("frmSearch3").onsubmit=function(){try{var s=this.c,n=k.c.value,o=k.q.value,r=s.options[s.selectedIndex].getAttribute("rel"),p;p=s.options[s.selectedIndex].className;if(a(o)){if(n=="local"){if(window.top.location){window.top.location.href="https://web.archive.org/web/20140126065656/http://www.clicrbs.com.br/busca"+p+"q="+encodeURIComponent(k.q.value)+"&c="+r+"&t="+n}else{window.location.href="https://web.archive.org/web/20140126065656/http://www.clicrbs.com.br/busca"+p+"q="+encodeURIComponent(k.q.value)+"&c="+r+"&t="+n}}else{if(n=="web"){if(window.top.location){window.top.location.href="https://web.archive.org/web/20140126065656/http://www.clicrbs.com.br/busca"+p+"q="+encodeURIComponent(k.q.value)+"&c=004339507562457011598:qfd12rfa-vs&t="+n}else{window.location.href="https://web.archive.org/web/20140126065656/http://www.clicrbs.com.br/busca"+p+"q="+encodeURIComponent(k.q.value)+"&c=004339507562457011598:qfd12rfa-vs&t="+n}}}}}catch(m){}return false}}catch(l){}},a=function(k){try{if(k&&k!=""){return true}else{alert("Preencha o campo de busca");return false}}catch(l){}},f=function(){try{var k=document.getElementById("clic-barra-2010").getElementsByTagName("a"),m=0;while(m<k.length){if(!(new RegExp("^javascript.*")).test(k[m].href)){if((new RegExp("^http://www.hagah.com.br.*")).test(k[m].href)){k[m].setAttribute("target","_blank")}else{k[m].setAttribute("target","_top")}}m++}k=document.getElementById("menuBarraClic_classificados").getElementsByTagName("a"),m=0;while(m<k.length){if(!(new RegExp("^javascript.*")).test(k[m].href)){k[m].setAttribute("target","_blank")}m++}k=m=null}catch(l){}},b=function(n,m,k){if(n.addEventListener){n.addEventListener(m,k,false);return true}else{if(n.attachEvent){var l=n.attachEvent("on"+m,k);return l}else{return false}}};return{init:function(){b(window,"load",BarClicRbs.getInstance().init2)},init2:function(){j(),e(),f()},validateSites:function(){try{var m=document.location.href,l=m.match(/(clicrbs|precisofalar|parperfeito|ehlas|blogame)\.com\.br/gi)?true:false,k=m.match(/(canalrural)\.com\.br/gi)?true:false,o=m.match(/(kzuka)\.com\.br/gi)?true:false;m=null;return{padrao:l,canalrural:k,kzuka:o}}catch(n){return{padrao:false,canalrural:false,kzuka:false}}}}};BarClicRbs.instance=null,BarClicRbs.getInstance=function(){if(!BarClicRbs.instance){BarClicRbs.instance=new BarClicRbs()}return BarClicRbs.instance};

/*
     FILE ARCHIVED ON 06:56:56 Jan 26, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:24 Dec 12, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.027
  load_resource: 150.792
  captures_list: 189.893
  PetaboxLoader3.resolve: 165.609 (3)
  exclusion.robots: 0.178
  exclusion.robots.policy: 0.164
  RedisCDXSource: 51.149
  LoadShardBlock: 104.175 (3)
  PetaboxLoader3.datanode: 54.131 (5)
  CDXLines.iter: 17.59 (3)
*/
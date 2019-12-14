var RegionClicRbs=function(){var f=SLoader.getObj("/js/","Util").getCookie("clicRBSv2.prefs"),b=document.location.href.match(/www\.clicrbs\.com\.br\/[a-z]{2}\/?$/gi),e="https://web.archive.org/web/20140126085445/http://www.clicrbs.com.br/rs/",m="https://web.archive.org/web/20140126085445/http://www.clicrbs.com.br/sc/",l=document.location.href.match(/clicrbs\.com\.br\/esportes\/[a-z]{2}\/?$/gi),n="https://web.archive.org/web/20140126085445/http://zerohora.clicrbs.com.br/rs/esportes/",j="https://web.archive.org/web/20140126085445/http://www.clicrbs.com.br/esportes/sc/",c=document.location.href.match(/clicrbs\.com\.br\/especial\/[a-z]{2}\/[a-z0-9-]*\/(home|capa),.*/gi),i="",p="",k=false,d=function(){jQuery("object, embed").each(function(){jQuery(this).hide()})},g=function(){jQuery("object, embed").each(function(){jQuery(this).show()})},h=function(){if(!f.match(/uf=[a-z]{0,2}\((1|2)\)/gi)&&(b||l||(k&&c))){var r,q;if(b){r=e,q=m}else{if(l){r=n,q=j}else{if(c){r=i,q=p}}}o(r,q);d();SLoader.getObj("/js/","Util").showModal("regiao-box",false,null,null,null,0.7);r=q=null}},o=function(s,q){var r=jQuery("#regiao-box");if(r.length==0){jQuery("body").prepend('<div id="regiao-box"></div>');r=jQuery("#regiao-box")}jQuery(r).html(unescape("<h1>Escolha a sua regi%E3o:</h1>"));jQuery(r).append("<ul></ul>");jQuery(r).children("ul").append('<li><a title="Rio Grande do Sul" href="'+s+"\" onclick=\"SLoader.getObj('/js/', 'Region').selectRegion(this, 'rs'); return false;\">Rio Grande do Sul</a></li>");jQuery(r).children("ul").append('<li><a title="Santa Catarina" href="'+q+"\" onclick=\"SLoader.getObj('/js/', 'Region').selectRegion(this, 'sc'); return false;\">Santa Catarina</a></li>");s=q=r=null},a=function(){$("head").append('<link type="text/css" href="https://web.archive.org/web/20140126085445/http://www.clicrbs.com.br/css/padroes-regiao.css" rel="stylesheet" />')};return{init:function(r,q){jQuery(function(){if((r&&r!="")&&(q&&q!="")){k=true,i=unescape(r),p=unescape(q)}if(!b||f=="ask"){a();h()}r=q=null})},selectRegion:function(r,q){var s;s=document.location.href.replace(/.*\.com\.br(\/especial\/|\/esportes\/|\/)([a-z]{2})\/.*/gi,"$2"),s=(s=="sc")?"sc":"rs";if(q=="rs"){SLoader.getObj("/js/","Util").setCookie("clicRBSv2.prefs","local=(1):uf=(1):usuario=-none")}else{if(q=="sc"){SLoader.getObj("/js/","Util").setCookie("clicRBSv2.prefs","local=(18):uf=(2):usuario=-none")}}if(q==s){SLoader.getObj("/js/","Util").hideModal(jQuery("#regiao-box")),g()}else{document.location.href=r.href}RegionClicRbs.getInstance().checkSelectedRegion(q);r=q=s=null},checkSelectedRegion:function(q){try{if((q&&q=="rs")||(!q&&f.match(/uf=[a-z]{0,2}\((1)\)/gi))){document.getElementById("region-clicrbs-rs").className="selecionada";document.getElementById("region-clicrbs-sc").className=""}else{if((q&&q=="sc")||(!q&&f.match(/uf=[a-z]{0,2}\((2)\)/gi))){document.getElementById("region-clicrbs-rs").className="";document.getElementById("region-clicrbs-sc").className="selecionada"}}}catch(r){}}}};RegionClicRbs.instance=null,RegionClicRbs.getInstance=function(){if(!RegionClicRbs.instance){RegionClicRbs.instance=new RegionClicRbs()}return RegionClicRbs.instance};

/*
     FILE ARCHIVED ON 08:54:45 Jan 26, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:26 Dec 12, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 1183.634 (3)
  exclusion.robots: 0.139
  exclusion.robots.policy: 0.13
  load_resource: 643.242
  PetaboxLoader3.resolve: 1416.591 (3)
  RedisCDXSource: 94.785
  PetaboxLoader3.datanode: 382.349 (5)
  captures_list: 1592.757
  esindex: 0.016
  CDXLines.iter: 21.934 (3)
*/
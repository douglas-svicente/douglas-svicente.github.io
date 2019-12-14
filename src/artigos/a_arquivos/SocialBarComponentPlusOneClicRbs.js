var SocialBarComponentPlusOneClicRbs=function(){var f="SocialBarComponentTwitter",d="plusone",c=true,e="socialNetworksGoogle",h="#"+e,a="socialNetworksApp",b="Carregando...",g='<div id="'+e+'" class="'+a+'"><p>'+b+'</p> <div class="g-plusone" data-size="medium" data-count="true" data-href="'+document.location.href+'">&nbsp;</div> </div>';getTabCode=function(){return g};return{init:function(){SLoader.getObj("/js/","SocialBar").addSocialMedia(getTabCode(),f);(function(i){var j=i.createElement("script");body=i.getElementsByTagName("body")[0];j.id="google";j.type="text/javascript";j.async=true;j.innerHTML="{lang: 'pt-BR'}";j.src=("https:"==i.location.protocol?"https://":"http://")+"apis.google.com/js/plusone.js";body.appendChild(j)})(document);jQuery(h).children("p").hide()},load:function(){},getComponentName:function(){return d},useTracking:function(){return c}}};SocialBarComponentPlusOneClicRbs.instance=null,SocialBarComponentPlusOneClicRbs.getInstance=function(){if(!SocialBarComponentPlusOneClicRbs.instance){SocialBarComponentPlusOneClicRbs.instance=new SocialBarComponentPlusOneClicRbs()}return SocialBarComponentPlusOneClicRbs.instance};

/*
     FILE ARCHIVED ON 13:13:32 Jun 02, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:22 Dec 12, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 205.614 (3)
  esindex: 0.016
  CDXLines.iter: 16.308 (3)
  load_resource: 181.074
  captures_list: 262.134
  LoadShardBlock: 189.812 (3)
  exclusion.robots.policy: 0.135
  exclusion.robots: 0.144
  PetaboxLoader3.datanode: 162.117 (5)
  RedisCDXSource: 43.409
*/
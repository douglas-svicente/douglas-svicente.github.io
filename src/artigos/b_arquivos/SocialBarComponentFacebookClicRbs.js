var SocialBarComponentFacebookClicRbs=function(){var f="SocialBarComponentFacebook",d="facebook",c=true,e="socialNetworksFacebook",g="#"+e,a="socialNetworksApp",b="Carregando...";ID_CONTENT="socialNetworksContentFacebook",SEL_CONTENT="#"+ID_CONTENT,MSG_TABS="Compartilhar no Facebook",TAB_CODE='<div id="socialNetworksFacebook" class="'+a+'"><span class="sNtooltip">&nbsp;<strong class="tt2">Compartilhar no Facebook</strong></span></div>',APP_ID_FACEBOOK_CLICRBS="108630285857546",APP_ID_FACEBOOK_CANALRURAL="183611921681519",APP_ID_FACEBOOK_KZUKA="198616470157571",APP_ID_FACEBOOK_PENSEIMOVEIS="144949362234247",APP_ID_FACEBOOK_PENSECARROS="114417091969632",APP_ID_FACEBOOK=document.location.href.match(/(clicrbs\.com\.br)/gi)?APP_ID_FACEBOOK_CLICRBS:(document.location.href.match(/(canalrural\.com\.br)/gi)?APP_ID_FACEBOOK_CANALRURAL:(document.location.href.match(/(kzuka\.com\.br)/gi)?APP_ID_FACEBOOK_KZUKA:(document.location.href.match(/(penseimoveis\.com\.br)/gi)?APP_ID_FACEBOOK_PENSEIMOVEIS:(document.location.href.match(/(pensecarros\.com\.br)/gi)?APP_ID_FACEBOOK_PENSECARROS:null)))),HEIGHT=300,getTabCode=function(){return TAB_CODE};return{init:function(){SLoader.getObj("/js/","SocialBar").addSocialMedia(getTabCode(),f);jQuery(g).children("span, p").remove();jQuery(g).append("<span class='sNtooltip'>&nbsp;<strong class='tt2'>"+MSG_TABS+"</strong></span>")},load:function(){jQuery("#socialNetworks").removeClass("openEmail").addClass("openFacebook");jQuery("#socialNetworksFacebook").addClass("open");if(jQuery(SEL_CONTENT).size()==0){jQuery("#socialNetworksContent").append('<div id="'+ID_CONTENT+'" class="off"><div id="fb-root-2"></div></div>');if(jQuery("#javascript-facebook").size()==0){(function(){var h=document.createElement("script");h.id="javascript-facebook";h.type="text/javascript";h.async=true;h.src=("https:"==document.location.protocol?"https://":"http://")+"connect.facebook.net/pt_BR/all.js#appId=108630285857546&xfbml=1";document.getElementById("fb-root-2").appendChild(h)}());window.fbAsyncInit=function(){SocialBarComponentFacebookClicRbs.getInstance().loadSupport()}}else{SocialBarComponentFacebookClicRbs.getInstance().loadSupport()}}else{jQuery(SEL_CONTENT).show();SLoader.getObj("/js/","SocialBar").setHeightFromContent(HEIGHT)}},loadSupport:function(){if(jQuery(SEL_CONTENT).attr("class")=="off"){var h='<fb:like href="'+document.location.href+'" send="true" locale="pt_BR" width="500" show_faces="false" action="recommend"></fb:like> ';jQuery("#fb-root-2").append(h);if(typeof FB!="undefined"){FB.init({appId:"108630285857546",xfbml:true});FB.XFBML.parse(document.getElementById("fb-root-2"))}SLoader.getObj("/js/","SocialBar").setHeightFromContent(HEIGHT);FB.Event.subscribe("xfbml.render",function(){});FB.Event.subscribe("edge.create",function(){});jQuery(SEL_CONTENT).attr("class","on")}else{jQuery(SEL_CONTENT).show();SLoader.getObj("/js/","SocialBar").setHeightFromContent(HEIGHT)}},getComponentName:function(){return d},useTracking:function(){return c}}};SocialBarComponentFacebookClicRbs.instance=null,SocialBarComponentFacebookClicRbs.getInstance=function(){if(!SocialBarComponentFacebookClicRbs.instance){SocialBarComponentFacebookClicRbs.instance=new SocialBarComponentFacebookClicRbs()}return SocialBarComponentFacebookClicRbs.instance};

/*
     FILE ARCHIVED ON 08:01:36 Jan 26, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:20 Dec 12, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 20.141 (3)
  captures_list: 267.845
  exclusion.robots.policy: 0.212
  load_resource: 345.672
  PetaboxLoader3.datanode: 335.763 (5)
  LoadShardBlock: 216.386 (3)
  RedisCDXSource: 5.519
  esindex: 0.022
  exclusion.robots: 0.249
  PetaboxLoader3.resolve: 203.043 (3)
*/
var SocialBarComponentEmailClicRbs=function(){var f="SocialBarComponentEmail",c="email",b=true,a="socialNetworksContentEmail",e="#"+a,h=400,d={};var g='<div id="socialNetworksEmail" class="socialNetworksApp"><span class="sNtooltip">&nbsp;<strong>Enviar para um amigo</strong></span></div>';getTabCode=function(){return g};return{init:function(i){d=i;SLoader.getObj("/js/","SocialBar").addSocialMedia(getTabCode(),f)},load:function(){$("#socialNetworks").removeClass("openFacebook").addClass("openEmail");$("#socialNetworksEmail").addClass("open");SLoader.getObj("/js/","SocialBar").setHeightFromContent(h);if(jQuery(e).size()==0){jQuery("#socialNetworksContent").append('<div id="'+a+'" class="iframe"><iframe id="iframeEmail" scrolling="no" height="400" frameborder="0" width="700"></iframe></div>');$("#iframeEmail").attr("src","https://web.archive.org/web/20140602131332/http://www.clicrbs.com.br/jsp/SocialBarComponentEmailIframe.jsp?site="+d.site+"&url="+escape(d.url))}else{jQuery(e).show()}},getComponentName:function(){return c},useTracking:function(){return b}}};SocialBarComponentEmailClicRbs.instance=null,SocialBarComponentEmailClicRbs.getInstance=function(){if(!SocialBarComponentEmailClicRbs.instance){SocialBarComponentEmailClicRbs.instance=new SocialBarComponentEmailClicRbs()}return SocialBarComponentEmailClicRbs.instance};

/*
     FILE ARCHIVED ON 13:13:32 Jun 02, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:15 Dec 12, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 89.708
  LoadShardBlock: 67.265 (3)
  esindex: 0.012
  PetaboxLoader3.resolve: 1239.235 (2)
  CDXLines.iter: 12.454 (3)
  exclusion.robots: 0.149
  load_resource: 1293.557
  RedisCDXSource: 3.138
  exclusion.robots.policy: 0.139
  PetaboxLoader3.datanode: 113.704 (5)
*/
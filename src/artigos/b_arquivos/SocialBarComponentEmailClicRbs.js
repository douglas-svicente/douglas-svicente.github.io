var SocialBarComponentEmailClicRbs=function(){var f="SocialBarComponentEmail",c="email",b=true,a="socialNetworksContentEmail",e="#"+a,h=400,d={};var g='<div id="socialNetworksEmail" class="socialNetworksApp"><span class="sNtooltip">&nbsp;<strong>Enviar para um amigo</strong></span></div>';getTabCode=function(){return g};return{init:function(i){d=i;SLoader.getObj("/js/","SocialBar").addSocialMedia(getTabCode(),f)},load:function(){$("#socialNetworks").removeClass("openFacebook").addClass("openEmail");$("#socialNetworksEmail").addClass("open");SLoader.getObj("/js/","SocialBar").setHeightFromContent(h);if(jQuery(e).size()==0){jQuery("#socialNetworksContent").append('<div id="'+a+'" class="iframe"><iframe id="iframeEmail" scrolling="no" height="400" frameborder="0" width="700"></iframe></div>');$("#iframeEmail").attr("src","https://web.archive.org/web/20140126084146/http://www.clicrbs.com.br/jsp/SocialBarComponentEmailIframe.jsp?site="+d.site+"&url="+escape(d.url))}else{jQuery(e).show()}},getComponentName:function(){return c},useTracking:function(){return b}}};SocialBarComponentEmailClicRbs.instance=null,SocialBarComponentEmailClicRbs.getInstance=function(){if(!SocialBarComponentEmailClicRbs.instance){SocialBarComponentEmailClicRbs.instance=new SocialBarComponentEmailClicRbs()}return SocialBarComponentEmailClicRbs.instance};

/*
     FILE ARCHIVED ON 08:41:46 Jan 26, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:20 Dec 12, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.15
  esindex: 0.018
  RedisCDXSource: 5.133
  load_resource: 202.043
  CDXLines.iter: 10.699 (3)
  PetaboxLoader3.datanode: 158.559 (5)
  exclusion.robots: 0.162
  LoadShardBlock: 124.153 (3)
  PetaboxLoader3.resolve: 152.285 (3)
  captures_list: 146.544
*/
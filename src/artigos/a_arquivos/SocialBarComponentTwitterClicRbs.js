var SocialBarComponentTwitterClicRbs=function(){var f="SocialBarComponentTwitter",d="twitter",c=false,e="socialNetworksTwitter",h="#"+e,a="socialNetworksApp",b="Carregando...",g='<div id="'+e+'" class="'+a+'"><p>'+b+'</p><a href="https://web.archive.org/web/20140602131332/http://twitter.com/share" data-url="'+document.location.href+'" class="twitter-share-button" style="display:none"></a></div>';getTabCode=function(){return g};return{init:function(){SLoader.getObj("/js/","SocialBar").addSocialMedia(getTabCode(),f);jQuery.ajax({url:"https://web.archive.org/web/20140602131332/http://www.clicrbs.com.br/common/content/widgets.js",async:true,cache:true,dataType:"script",scriptCharset:"iso-8859-1",success:function(){jQuery(h).children("p").hide()}})},load:function(){},getComponentName:function(){return d},useTracking:function(){return c}}};SocialBarComponentTwitterClicRbs.instance=null,SocialBarComponentTwitterClicRbs.getInstance=function(){if(!SocialBarComponentTwitterClicRbs.instance){SocialBarComponentTwitterClicRbs.instance=new SocialBarComponentTwitterClicRbs()}return SocialBarComponentTwitterClicRbs.instance};

/*
     FILE ARCHIVED ON 13:13:32 Jun 02, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:16 Dec 12, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.128
  esindex: 0.011
  RedisCDXSource: 0.944
  load_resource: 170.236
  CDXLines.iter: 12.166 (3)
  PetaboxLoader3.datanode: 125.77 (5)
  exclusion.robots: 0.137
  LoadShardBlock: 164.882 (3)
  PetaboxLoader3.resolve: 201.985 (3)
  captures_list: 184.02
*/
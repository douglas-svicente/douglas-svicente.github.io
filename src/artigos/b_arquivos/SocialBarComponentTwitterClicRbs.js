var SocialBarComponentTwitterClicRbs=function(){var f="SocialBarComponentTwitter",d="twitter",c=false,e="socialNetworksTwitter",h="#"+e,a="socialNetworksApp",b="Carregando...",g='<div id="'+e+'" class="'+a+'"><p>'+b+'</p><a href="https://web.archive.org/web/20140126112750/http://twitter.com/share" data-url="'+document.location.href+'" class="twitter-share-button" style="display:none"></a></div>';getTabCode=function(){return g};return{init:function(){SLoader.getObj("/js/","SocialBar").addSocialMedia(getTabCode(),f);jQuery.ajax({url:"https://web.archive.org/web/20140126112750/http://www.clicrbs.com.br/common/content/widgets.js",async:true,cache:true,dataType:"script",scriptCharset:"iso-8859-1",success:function(){jQuery(h).children("p").hide()}})},load:function(){},getComponentName:function(){return d},useTracking:function(){return c}}};SocialBarComponentTwitterClicRbs.instance=null,SocialBarComponentTwitterClicRbs.getInstance=function(){if(!SocialBarComponentTwitterClicRbs.instance){SocialBarComponentTwitterClicRbs.instance=new SocialBarComponentTwitterClicRbs()}return SocialBarComponentTwitterClicRbs.instance};

/*
     FILE ARCHIVED ON 11:27:50 Jan 26, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:21 Dec 12, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 21.531 (3)
  captures_list: 82.584
  exclusion.robots.policy: 0.236
  load_resource: 185.528
  PetaboxLoader3.datanode: 70.811 (5)
  LoadShardBlock: 40.346 (3)
  RedisCDXSource: 1.218
  esindex: 0.022
  exclusion.robots: 0.248
  PetaboxLoader3.resolve: 101.302 (2)
*/
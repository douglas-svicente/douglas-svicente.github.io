var SocialBarClicRbs=function(){var i=document.location.href.match(/((clicrbs|hagah|canalrural|penseimoveis)\.com\.br)/gi)?true:false,o=navigator.userAgent,u=(new RegExp("MSIE\\s6","gi")).test(o)?true:false,j=(new RegExp("MSIE","gi")).test(o)?true:false,q=(new RegExp("iPad","i")).test(o)?true:false,k=(new RegExp("iPhone","i")).test(o)?true:false,a=(!u&&!k)?true:false,e=250,b=250,h="200px",r="40px",m="social.networks.showhide",t=jQuery.trim(SLoader.getObj("/js/","Util").getCookie(m)),s="socialNetworksApp",n="open",c="hover",l="hide",f="openEmail",p="openTwitter",g="openFacebook",d=(t!="")?t:"";CLASS_SHOWHIDE_MSG="tt1",MSG_SHOWHIDE="Ocultar",ID_MAIN="socialNetworks",ID_TABS_CONTAINER="socialNetworksTabs",ID_CONTENT_CONTAINER="socialNetworksContent",ID_SHOWHIDE="socialNetworksShowHide",SEL_TABS_APP="."+s,SEL_MAIN="#"+ID_MAIN,SEL_TABS_CONTAINER="#"+ID_TABS_CONTAINER,SEL_CONTENT_CONTAINER="#"+ID_CONTENT_CONTAINER,SEL_SHOWHIDE="#"+ID_SHOWHIDE,MIN_HEIGHT=55,SEO_CATEGORY="Redes Sociais",SEO_LABEL="URL�s mais compartilhadas";settings={site:jQuery("h1:first").html(),url:document.location.href,email:true,facebook:true,twitter:true,plusone:true,advertising:true,tracking:true,parentId:null};doImports=function(){if(settings.email){SLoader.getObj("/js/","SocialBarComponentEmail").init(settings)}if(settings.twitter){SLoader.getObj("/js/","SocialBarComponentTwitter").init()}if(settings.facebook){SLoader.getObj("/js/","SocialBarComponentFacebook").init()}if(settings.plusone&&!j){SLoader.getObj("/js/","SocialBarComponentPlusOne").init()}},mountBarStructure=function(){jQuery("head").append('<link rel="stylesheet" type="text/css" media="screen" href="https://web.archive.org/web/20140126063157/http://www.clicrbs.com.br/css/social-networks.css" />');if(settings.parentId){jQuery("#"+settings.parentId).html('<div id="'+ID_MAIN+'" class="'+d+'" style="display:none"></div>')}else{jQuery("body").prepend('<div id="'+ID_MAIN+'" class="'+d+'" style="display:none"></div>')}if(settings.advertising){jQuery(SEL_MAIN).append('<div class="sNpublicidade"></div>');if(jQuery("#SocialBar").length){if(jQuery("#SocialBarOAS").length){jQuery(".sNpublicidade").html(jQuery("#SocialBarOAS").html())}}else{jQuery(".sNpublicidade").html(jQuery("#SocialBarOAS").html())}}jQuery(SEL_MAIN).append('<div id="'+ID_TABS_CONTAINER+'">&nbsp;</div>');jQuery(SEL_MAIN).append('<div id="'+ID_CONTENT_CONTAINER+'">&nbsp;</div>');jQuery(SEL_MAIN).append('<div id="'+ID_SHOWHIDE+'">&nbsp;</div>');if(d!=""){jQuery(SEL_MAIN).css({width:r,height:r});jQuery(SEL_TABS_CONTAINER).css("display","none");jQuery(SEL_CONTENT_CONTAINER).css("display","none")}jQuery(SEL_MAIN).fadeIn(b)},applyShowHideMessages=function(){t=jQuery.trim(SLoader.getObj("/js/","Util").getCookie(m));d=(t!="")?t:"";CLASS_SHOWHIDE_MSG=(d!="")?"tt2":"tt1";MSG_SHOWHIDE=(d!="")?"Para compartilhar esse conte�do, clique aqui.":"Ocultar";jQuery(SEL_SHOWHIDE).html('<span class="sNtooltip">&nbsp;<strong class="'+CLASS_SHOWHIDE_MSG+'">'+MSG_SHOWHIDE+"</strong></span>")},buildShowHideEffect=function(){jQuery(SEL_SHOWHIDE).click(function(){if(jQuery(SEL_MAIN).hasClass(l)){jQuery(SEL_MAIN).removeClass(l).animate({width:"100%"},e,function(){jQuery(SEL_TABS_CONTAINER).fadeIn(b);applyShowHideMessages();jQuery(SEL_CONTENT_CONTAINER).fadeIn(b)});SLoader.getObj("/js/","Util").setCookie(m,"");try{if(settings.tracking&&pageTracker){pageTracker._trackEvent(SEO_CATEGORY,"abrir",SEO_LABEL)}}catch(v){}}else{jQuery(SEL_TABS_CONTAINER).fadeOut(b);jQuery(SEL_CONTENT_CONTAINER).fadeOut(b,function(){jQuery(SEL_TABS_APP).removeClass(n);applyShowHideMessages();jQuery(SEL_MAIN).removeClass(f).removeClass(g).addClass(l).animate({width:r,height:r},e);jQuery(SEL_CONTENT_CONTAINER).children().hide()});SLoader.getObj("/js/","Util").setCookie(m,l);try{if(settings.tracking&&pageTracker){pageTracker._trackEvent(SEO_CATEGORY,"ocultar",SEO_LABEL)}}catch(v){}}})},applyOptions=function(v){if(v){jQuery.extend(settings,v)}};return{init:function(v){if(a){applyOptions(v);mountBarStructure();applyShowHideMessages();buildShowHideEffect();doImports(v);if(q){SLoader.getObj("/js/","IosFollowAlong").init("socialNetworks")}}},addSocialMedia:function(w,v){if(w&&v){jQuery("#socialNetworksTabs").append(w);jQuery("#socialNetworksTabs").children(":last-child").click(function(){jQuery(SEL_CONTENT_CONTAINER).children().hide();if($(this).hasClass("open")){$("#socialNetworks").removeClass();$(".socialNetworksApp").removeClass("open");jQuery(SEL_MAIN).animate({height:"40px"},e)}else{$(".socialNetworksApp").removeClass("open");var y=SLoader.getObj("/js/",v).getComponentName();var x=SLoader.getObj("/js/",v).useTracking();SLoader.getObj("/js/",v).load();try{if(settings.tracking&&x&&pageTracker){pageTracker._trackEvent(SEO_CATEGORY,y,SEO_LABEL)}}catch(z){}}})}},setHeightFromContent:function(v){v=v?v:(jQuery(SEL_MAIN).css("height")=="auto"?40:(jQuery(SEL_MAIN).css("height")).replace("px",""));jQuery(SEL_MAIN).animate({height:parseInt(v)+MIN_HEIGHT+"px"},e)}}};SocialBarClicRbs.instance=null,SocialBarClicRbs.getInstance=function(){if(!SocialBarClicRbs.instance){SocialBarClicRbs.instance=new SocialBarClicRbs()}return SocialBarClicRbs.instance};

/*
     FILE ARCHIVED ON 06:31:57 Jan 26, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:22 Dec 12, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 1650.648 (3)
  exclusion.robots: 0.224
  exclusion.robots.policy: 0.21
  load_resource: 370.122
  PetaboxLoader3.resolve: 209.577 (2)
  RedisCDXSource: 1.245
  PetaboxLoader3.datanode: 1747.282 (5)
  captures_list: 1676.715
  esindex: 0.016
  CDXLines.iter: 9.922 (3)
*/
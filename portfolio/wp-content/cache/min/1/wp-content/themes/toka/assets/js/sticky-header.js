jQuery(document).ready(function(){"use strict";let prNavScroll=jQuery('#pr-nav');let swScrollTop=!1;let swScrollTopShow=!1;let swScrollTopAnim=!1;let scrollTopPosition=0;jQuery(window).on('scroll',function(){scrollTopPosition=jQuery(document).scrollTop();if(swScrollTop===!1){if(scrollTopPosition>=80){prNavScroll.addClass('navbar-fixed');swScrollTop=!0}}
if(swScrollTop===!0){if(scrollTopPosition<80){prNavScroll.removeClass('navbar-fixed');swScrollTop=!1}}
if(swScrollTopAnim===!1){if(scrollTopPosition>=250){prNavScroll.addClass('navbar-fixed-anim');swScrollTopAnim=!0}}
if(swScrollTopAnim===!0){if(scrollTopPosition<250){prNavScroll.removeClass('navbar-fixed-anim');swScrollTopAnim=!1}}
if(swScrollTopShow===!1){if(scrollTopPosition>=1000){prNavScroll.addClass('navbar-fixed-show');swScrollTopShow=!0}}
if(swScrollTopShow===!0){if(scrollTopPosition<1000){prNavScroll.removeClass('navbar-fixed-show');swScrollTopShow=!1}}})})
"use strict";var utopiasoftware_Cookies={};window.addEventListener("message",utopiasoftware_receiveMessage,!1),jQuery(document).ready(function(){if(window!==window.parent&&(jQuery("html").addClass("utopiasoftware-mobile"),utopiasoftware_Cookies=Cookies.noConflict()),!0===jQuery("html").hasClass("utopiasoftware-mobile"))return jQuery("html, body").scrollTop(0),window.parent.postMessage("page ready","*"),void window.setTimeout(utopiasoftware_getUsage,0)});function utopiasoftware_receiveMessage(){}function utopiasoftware_getUsage(){return new Promise(function(){Promise.resolve(jQuery.ajax({url:"https://shopoakexclusive.com/wp-json/wc/v2/cart",type:"get",contentType:"application/json",crossDomain:!0,xhrFields:{withCredentials:!0},dataType:"json",timeout:24e4,processData:!1})).then(function(a){window.parent.postMessage(JSON.stringify(a),"*")}).catch(function(a){console.log("SERVER ERROR",a)})})}function utopiasoftware_addUsage(){jQuery(".variations_form.cart button[type=\"submit\"].button").get(0).click()}function utopiasoftware_removeUsage(){var a=utopiasoftware_Cookies.get();for(var b in a)utopiasoftware_Cookies.remove(b);window.localStorage.clear(),window.sessionStorage.clear()}

//# sourceMappingURL=product-customisation-compiled.js.map
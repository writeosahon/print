"use strict";function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}var utopiasoftware_app_namespace="print_service_ecommerce";var utopiasoftware=_defineProperty({},"print_service_ecommerce",{randomisationEngine:Random.engines.browserCrypto,accessor:"ZGV2ZWxvcGVyQHNob3BvYWtleGNsdXNpdmUuY29tOk9ha0RldmVsb3BlckAx",paystackAccessor:"c2tfdGVzdF83YzkxMThiMzlhZmYzNmNlMGRlYTMyMzMzOTMwMDk1NjhlNWMyMDRl",databaseOperations:{loadData:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c.get(b);case 3:return a.abrupt("return",a.sent);case 4:return a.prev=4,a.finish(4);case 6:case"end":return a.stop();}},a,this,[[0,,4,6]])}));return function b(){return a.apply(this,arguments)}}(),saveData:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.prev=1,a.next=4,utopiasoftware[utopiasoftware_app_namespace].databaseOperations.loadData(b._id,c);case 4:b._rev=a.sent._rev,a.next=9;break;case 7:a.prev=7,a.t0=a["catch"](1);case 9:return a.next=11,c.put(b);case 11:return a.abrupt("return",a.sent);case 12:return a.prev=12,a.finish(12);case 14:case"end":return a.stop();}},a,this,[[0,,12,14],[1,7]])}));return function b(){return a.apply(this,arguments)}}(),removeData:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){var d;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,utopiasoftware[utopiasoftware_app_namespace].databaseOperations.loadData(b,c);case 3:return d=a.sent._rev,a.next=6,c.remove(b,d);case 6:return a.abrupt("return",a.sent);case 7:return a.prev=7,a.finish(7);case 9:case"end":return a.stop();}},a,this,[[0,,7,9]])}));return function b(){return a.apply(this,arguments)}}()}});

//# sourceMappingURL=base-compiled.js.map
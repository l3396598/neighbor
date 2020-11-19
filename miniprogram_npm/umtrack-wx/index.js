"use strict";var e,t,n="[UMENG] -- ",a=(t=!1,function(){null===e&&(e=new i);return e});function i(){this.setDebug=function(e){t=e};this.d=function(){if(t)try{"string"==typeof arguments[0]&&(arguments[0]=n+arguments[0]);console.debug.apply(console,arguments)}catch(e){}};this.i=function(){try{if(t)try{"string"==typeof arguments[0]&&(arguments[0]=n+arguments[0]);console.info.apply(console,arguments)}catch(e){}}catch(e){}};this.e=function(){if(t)try{"string"==typeof arguments[0]&&(arguments[0]=n+arguments[0]);console.error.apply(console,arguments)}catch(e){}};this.w=function(){if(t)try{"string"==typeof arguments[0]&&(arguments[0]=n+arguments[0]);console.warn.apply(console,arguments)}catch(e){}};this.v=function(){if(t)try{"string"==typeof arguments[0]&&(arguments[0]=n+arguments[0]);console.log.apply(console,arguments)}catch(e){}};this.t=function(){if(t)try{console.table.apply(console,arguments)}catch(e){}};this.tip=function(){try{"string"==typeof arguments[0]&&(arguments[0]=n+arguments[0]);console.log.apply(console,arguments)}catch(e){}};this.tip_w=function(e){try{console.log("%c "+n+e,"background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;")}catch(e){}};this.err=function(){try{"string"==typeof arguments[0]&&(arguments[0]=n+arguments[0]);console.error.apply(console,arguments)}catch(e){}}}var r,s=(r=e=null,function(){return r=r||new o});function o(){var n={};this.useOpenid=function(){return!!n.useOpenid};this.useSwanid=function(){return!!n.useSwanid};this.autoGetOpenid=function(){return!!n.autoGetOpenid};this.appKey=function(){return n.appKey};this.uploadUserInfo=function(){return n.uploadUserInfo};this.enableVerify=function(){return n.enableVerify};this.set=function(e){n=e};this.get=function(){return n};this.setItem=function(e,t){n[e]=t};this.getItem=function(e){return n[e]}}function c(){this.listeners={};this.maxListener=2}c.prototype.addListener=c.prototype.on=function(e,t){var n=this.listeners;n[e]&&n[e].length>=this.maxListener?console.error("监听器的最大数量是%d,您已超出限制",this.maxListener):n[e]instanceof Array?-1===n[e].indexOf(t)&&n[e].push(t):n[e]=[].concat(t)};c.prototype.emit=function(e){var t=Array.prototype.slice.call(arguments);t.shift();var n=this.listeners;n[e]instanceof Array&&n[e].forEach(function(e){e.apply(null,t)})};c.prototype.listeners=function(e){return this.listeners[e]};c.prototype.setMaxListeners=function(e){this.maxListener=e};c.prototype.removeListener=function(e,t){var n=this.listeners,t=(n[e]||[]).indexOf(t);0<=t&&n[e].splice(t,1)};c.prototype.removeAllListener=function(e){this.listeners[e]=[]};c.prototype.once=function(n,i){var r=this;this.on(n,function e(){var t=Array.prototype.slice.call(arguments);i.apply(null,t);r.removeListener(n,e)})};var u=new c,f=0,p=1,l=new(function(){function e(){}e.prototype.setStorage=function(e,t,n){wx.setStorage({key:e,data:t,success:function(){"function"==typeof n&&n(!0)},fail:function(){"function"==typeof n&&n(!1)}})};e.prototype.getStorage=function(t,n){wx.getStorage({key:t,success:function(e){"function"==typeof n&&n(e.data)},fail:function(e){a().w(t+": "+e.errMsg);"function"==typeof n&&n()}})};e.prototype.removeStorage=function(e,t){wx.removeStorage({key:e,success:function(){"function"==typeof t&&t(!0)},fail:function(){"function"==typeof t&&t(!1)}})};e.prototype.getSystemInfo=function(i){wx.getSystemInfo({success:function(e){var t={model:e.model,brand:e.brand,pixelRatio:e.pixelRatio,screenWidth:e.screenWidth,screenHeight:e.screenHeight,fontSizeSetting:e.fontSizeSetting,platform:e.platform,platformVersion:e.version,platformSDKVersion:e.SDKVersion,language:e.language,deviceName:e.model,OSVersion:e.system,resolution:""},n=e.system.split(" ");Array.isArray(n)&&(t.OS=n[0]);n=Math.round(e.screenWidth*e.pixelRatio),e=Math.round(e.screenHeight*e.pixelRatio);t.resolution=e<n?n+"*"+e:e+"*"+n;"function"==typeof i&&i(t)},fail:function(){"function"==typeof i&&i()}})};e.prototype.getDeviceInfo=function(e){"function"==typeof e&&e("")};e.prototype.checkNetworkAvailable=function(t){wx.getNetworkType({success:function(e){"function"==typeof t&&t(e&&"none"!==e.networkType)},fail:function(){"function"==typeof t&&t(!1)}})};e.prototype.getNetworkInfo=function(t){wx.getNetworkType({success:function(e){"function"==typeof t&&t({networkAvailable:"none"!==e.networkType,networkType:e.networkType})},fail:function(){"function"==typeof t&&t()}})};e.prototype.getDeviceId=function(e){e("")};e.prototype.getAdvertisingId=function(e){"function"==typeof e&&e("")};e.prototype.onNetworkStatusChange=function(t){wx.onNetworkStatusChange(function(e){"function"==typeof t&&t(e.isConnected)})};e.prototype.request=function(e){var t=e.success,n=e.fail,i=!1,r=null;e.success=function(e){if(!i){r&&clearTimeout(r);"function"==typeof t&&t(e)}};e.fail=function(){if(!i){r&&clearTimeout(r);"function"==typeof n&&n(!1)}};wx.request(e);r=setTimeout(function(){r&&clearTimeout(r);i=!0;"function"==typeof n&&n(i)},e.timeout||5e3)};e.prototype.getSdkType=function(){return"wxmp"};e.prototype.getPlatform=function(){return"wx"};e.prototype.connectSocket=function(e){wx.connectSocket(e)};e.prototype.closeSocket=function(e){wx.closeSocket(e)};e.prototype.sendSocketMessage=function(e){wx.sendSocketMessage(e)};e.prototype.onSocketOpen=function(e){wx.onSocketOpen(e)};e.prototype.onSocketClose=function(e){wx.onSocketClose(e)};e.prototype.onSocketMessage=function(e){wx.onSocketMessage(e)};e.prototype.onSocketError=function(e){wx.onSocketError(e)};e.prototype.getClipboard=function(t){try{wx.getClipboardData({success:function(e){"function"==typeof t&&t(e.data)},fail:function(){"function"==typeof t&&t("")}})}catch(e){a.e("读取clipboard发生错误",e)}};e.prototype.showModal=function(e){try{wx.showModal(e)}catch(e){a.e("展示Modal时发生错误",e)}};e.prototype.showToast=function(e){try{wx.showToast(e)}catch(e){a.e("showToast error",e)}};e.prototype.getUserInfo=function(t){var n={fail:function(){t&&t()},success:function(e){if(e&&e.userInfo){e=e.userInfo;t&&t({avatar:e.avatarUrl,nickName:e.nickName,gender:e.gender,country:e.country,province:e.province,city:e.city,language:e.language})}}};try{wx.getSetting({success:function(e){e.authSetting["scope.userInfo"]&&wx.getUserInfo(n)},fail:function(){t()}})}catch(e){a.e("getUserInfo error",e)}};e.prototype.getAppInfoSync=function(){if(wx.getAccountInfoSync){var e=wx.getAccountInfoSync(),e=e&&e.miniProgram?e.miniProgram:{};return{appId:e.appId,appEnv:e.envVersion,appVersion:e.version}}return{}};e.prototype.onShareAppMessage=function(e){wx.onShareAppMessage(e)};e.prototype.shareAppMessage=function(e){wx.shareAppMessage(e)};return e}()),d=function(e,t){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function h(e,t){d(e,t);function n(){this.constructor=e}e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var g={SESSION_INTERVAL:3e4,LOG_URL:"https://umini.shujupie.com/wxm_logs",GET_OPENID_URL:"https://umini.shujupie.com/uminiprogram_logs/wx/getuut",USERINFO_URL:"https://umini.shujupie.com/uminiprogram_logs/comm/uif",DEVICE_INFO_KEY:"device_info",ADVERTISING_ID:"mobile_ad_id",ANDROID_ID:"android_id",CURRENT_SESSION:"current_session",SESSION_PAUSE_TIME:"session_pause_time",EVENT_SEND_DEFAULT_INTERVAL:15e3,EVENT_LAST_SEND_TIME:"last_send_time",MAX_EVENTID_LENGTH:128,MAX_PROPERTY_KEY_LENGTH:256,MAX_PROPERTY_KEYS_COUNT:100,REPORT_POLICY:"report_policy",REPORT_INTERVAL_TIME:"report_interval_time",REPORT_POLICY_START_SEND:"1",REPORT_POLICY_INTERVAL:"6",IMPRINT:"imprint",SEED_VERSION:"1.0.0",IMPL_VERSION:"2.4.11",ALIPAY_AVAILABLE_VERSION:"10.1.52",SHARE_PATH:"um_share_path",SHARES:"shares",REQUESTS:"requests",UUID:"um_uuid",UUID_SUFFIX:"ud",OPENID:"um_od",UNIONID:"um_unid",ALIPAYID:"um_alipayid",USERID:"um_userid",PROVIDER:"um_provider",SWANID:"um_swanid",ANONYMOUSID:"um_anonymousid",LAUNCH_OPTIONS:"LAUNCH_OPTIONS",UM_SSRC:"_um_ssrc",USER_INFO:"user_info",IS_ALIYUN:!1,ALIYUN_URL:"serverless.huoban.youmeng.network.forward"};var v,y,_={isNumber:function(e){return!Number.isNaN(parseInt(e,10))},compareVersion:function(e,t){for(var n=String(e).split("."),i=String(t).split("."),r=0;r<Math.max(n.length,i.length);r++){var o=parseInt(n[r]||0,10),s=parseInt(i[r]||0,10);if(s<o)return 1;if(o<s)return-1}return 0},getRandomStr:function(e){for(var t="",n=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],i=0;i<Number(e);i++)t+=n[Math.round(Math.random()*(n.length-1))];return t},clone:function(e){return JSON.parse(JSON.stringify(e))},startsWith:function(e,t){return!(!e||!t||0===t.length||t.length>e.length)&&e.substr(0,t.length)===t},endsWith:function(e,t){return!(!t||0===e.length||t.length>e.length)&&e.substring(e.length-t.length)===t},assign:function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var i=arguments[n];if(i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},deepEqual:function e(t,n){if(t===n)return!0;if(t&&"object"==typeof t&&n&&"object"==typeof n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(var i in t){if(Object.prototype.hasOwnProperty.call(n,i))return!1;if(!e(t[i],n[i]))return!1}return!0}return!1},trimStart:function(e,t){if(!e)return"";if("string"==typeof t&&t.length){t=new RegExp("^"+t+"*");e=e.replace(t,"")}else e=e.replace(/^s*/,"");return e},trimEnd:function(e,t){if(!e)return"";var n,i;if("string"==typeof t&&t.length){n=new RegExp(t);i=e.length;for(;n.test(e.charAt(i));)--i;return e.slice(0,i+1)}n=/s/;i=e.length-1;for(;n.test(e.charAt(i));)--i;return e.slice(0,i+1)}},m=function(e){h(t,e);function t(){return null!==e&&e.apply(this,arguments)||this}t.prototype.getOpenIdAsync=function(t,n){var i=this;wx.login({success:function(e){e.code?l.request({url:g.GET_OPENID_URL,method:"GET",data:{key:t,code:e.code},success:function(e){if(e&&200===e.statusCode&&e.data&&e.data.data){e=e.data.data;i.setOpenid(e.oid);i.setUnionid(e.uid);return n&&n(!0)}n&&n()},fail:function(e){a().v("wx request failed...",e);n&&n()}}):n&&n()},fail:function(){n&&n()}})};return t}(function(t){h(e,t);function e(){var e=null!==t&&t.apply(this,arguments)||this;e._openid="";e._unionid="";e._useOpenid=!1;return e}e.prototype.initID=function(t){var n=this;n._idType=n._useOpenid?"openid":"uuid";a().v("id type: ",n._idType);l.getStorage(g.UNIONID,function(e){n._unionid=e});this._useOpenid?l.getStorage(g.OPENID,function(e){n._openid=e;t&&t()}):t&&t()};e.prototype.setUseOpenid=function(e){this._useOpenid=e};e.prototype.setOpenid=function(e){if(!this._openid&&e){this._openid=e;l.setStorage(g.OPENID,e)}};e.prototype.setUnionid=function(e){if(!this._unionid&&e){this._unionid=e;l.setStorage(g.UNIONID,e)}};e.prototype.getIdTracking=function(){var e=t.prototype.getIdTracking.call(this);this._openid&&(e.openid=this._openid);this._unionid&&(e.unionid=this._unionid);this._userid&&(e.userid=this._userid);return e};e.prototype.getId=function(){return this._useOpenid?this._openid:this._uuid};return e}(function(){function e(){this._uuid="";this._userid="";this._provider="";this._idType=""}e.prototype.createUUID=function(){return _.getRandomStr(10)+Date.now()+_.getRandomStr(7)+g.UUID_SUFFIX};e.prototype.initUUID=function(t){var n=this;l.getStorage(g.UUID,function(e){if(e)n._uuid=e;else{n._uuid=n.createUUID();l.setStorage(g.UUID,n._uuid)}t&&t(e)})};e.prototype.initUserid=function(){var t=this;l.getStorage(g.USERID,function(e){if(!t._userid&&e){t._userid=e;a().v("userId is ",e)}});l.getStorage(g.PROVIDER,function(e){if(!t._provider&&e){t._provider=e;a().v("provider is ",e)}})};e.prototype.init=function(e){var t=this;t.initUUID(function(){t.initUserid();t.initID(e)})};e.prototype.setUserid=function(e,t){if(!this._userid&&e){this._userid=e;this._provider=t;l.setStorage(g.USERID,e);l.setStorage(g.PROVIDER,t)}};e.prototype.getUserId=function(){return this._userid};e.prototype.getProvider=function(){return this._provider};e.prototype.getIdType=function(){return this._idType};e.prototype.getIdTracking=function(){var e={};this._uuid&&(e.uuid=this._uuid);this._userid&&(e.userid=this._userid);return e};return e}())),S=function(){return v=v||new m},I=function(){return y=y||new E};function E(){var t=!1,n=null,i=[];this.addPageStart=function(e){if(e&&!t){n={ts:Date.now(),path:e,page_name:e};t=!0}};this.addPageEnd=function(e){if(t&&e&&n&&e===n.page_name){e=Date.now()-n.ts;n.duration=Math.abs(e);i.push(n);n=null;t=!1}};this.get=function(){return i};this.getCurrentPage=function(){return n};this.clear=function(){i.length=0}}var O={};function A(){return function(e){var t,n=[];for(t in e)"_um_ssrc"!==t&&"_um_sts"!==t&&n.push(t+"="+e[t]);return n.join("&")}(O)}var w,N,T,k=function(){return w=w||new R};function R(){return{add:function(e,t){a().v("share origin: %o",e);var n={title:e&&e.title,path:e&&e.path&&e.path.split("?")[0],_um_sts:Date.now()};n.path&&1<n.path.length&&_.startsWith(n.path,"/")&&(n.path=_.trimStart(n.path,"/"));var i=e.path||"",r=S().getId();if(r){var o=T.split(","),s=(o=o.filter(function(e){return 0<e.length})).indexOf(r);0<=s&&(o=o.slice(0,s));o.length<3&&o.push(r);r=o.join(",");-1!==i.indexOf("?")?i+="&_um_ssrc="+r:i+="?_um_ssrc="+r;o=Date.now();i+="&_um_sts="+o;if(t){t=A(),t=t?t+"&_um_ssrc="+r+"&_um_sts="+o:"_um_ssrc="+r+"&_um_sts="+o;e.query=e.query?e.query+"&_um_ssrc="+r+"&_um_sts="+o:t}else e.path=i;n._um_ssrc=r;n._um_sts=o}N.push(n);a().v("share: %o",e);return e},setShareSource:function(e){T=e},clear:function(){N.length=0},get:function(){return N}}}var U,b,L,P,D={stringify:function(e){if(e)try{return JSON.stringify(e)}catch(e){}return""},parse:function(e){if(e)try{return JSON.parse(e)}catch(e){}return null},parseToArray:function(e){if(e)try{return JSON.parse(e)}catch(e){}return[]}},C=(P=!(N=[]),function(){return U=U||new M});function M(){this.load=function(t){if(L){l.removeStorage(b);t()}else{b="um_cache_"+s().appKey();l.getStorage(b,function(e){L=D.parse(e)||{};P=!0;l.removeStorage(b);t()})}};this.save=function(){L&&l.setStorage(b,D.stringify(L))};this.set=function(e,t){L&&(L[e]=t)};this.get=function(e){return(L||{})[e]};this.remove=function(e){L&&L[e]&&delete L[e]};this.getAll=function(){return L};this.clear=function(){L=null};this.has=function(e){return!!this.get(e)};this.isLoaded=function(){return P}}var x,V,j,K,G="ekvs",F=1e4,q=(j=[],K=[],function(){return x=x||{addEvent:function(e){if(V){j.unshift(e);if(1<j.length){H();j.length=0}}else{a().w("session id is null: ",V);K.unshift(e)}},setSessionId:function(e){V=e;a().v("setSessionId: ",V);if(Array.isArray(K)&&K.length&&V){for(var t=0;t<K.length;t++)this.addEvent(K[t]);K.length=0}},getEkvs:function(){var e=C().get(G);j&&j.length&&(e=Y(e,j));return e},clear:function(){C().remove(G);j.length=0}}});function H(){if(j.length){var e=C().get(G);if(function(e){var t,n=0;for(t in e)Array.isArray(e[t])&&(n+=e[t].length);return n}(e)+j.length<=F){e=Y(e,j);C().set(G,e)}}}function Y(e,t){var n=(e=e||{})[V];Array.isArray(n)&&n.length?e[V]=n.concat(t):e[V]=[].concat(t);return e}var W,J="2g",B="3g",X="4g",z={HALF_SESSION:"half_session",CLOSE_SESSION:"close_session",EKV:"ekv",ENTER_PAGE:"enter_page",LEAVE_PAGE:"leave_page"},Q=["access","access_subtype"],Z={instance:function(){return W=W||$()}};function $(){var e=!1,o={};function t(n){var e=C().get(g.IMPRINT);e&&(o.imprint=e);o.device_type="Phone";o.sdk_version=g.IMPL_VERSION;o.appkey=s().appKey();l.getDeviceInfo(function(e){o.device_info=e||""});e=l.getAppInfoSync();o.appid=e.appId;o.app_env=e.appEnv;o.app_version=e.appVersion;l.getSystemInfo(function(t){l.getNetworkInfo(function(e){e=function(e,t){var n={},i=(t=t||{}).networkType;"none"===i&&(i="unknown");var r=e.model||"",o=e.platform||"",s=e.brand||"",t=s.toLowerCase();n.sdk_type=l.getSdkType();n.platform=l.getPlatform();n.platform_sdk_version=e.platformSDKVersion;n.platform_version=e.platformVersion;n.resolution=e.resolution;n.pixel_ratio=e.pixelRatio;n.os=o;n.font_size_setting=e.fontSizeSetting;n.device_model=r;n.device_brand=s;n.device_manufacturer=t;n.device_manuid=r;n.device_name=r;n.os_version=e.OSVersion;n.language=e.language;switch(i=i?i.toLowerCase():""){case X:n.access_subtype="LTE";n.access="4G";break;case B:n.access_subtype="CDMA";n.access="3G";break;case J:n.access_subtype="GRPS";n.access="2G";break;default:n.access=i;delete n.access_subtype}return n}(t,e);_.assign(o,e);!function(e){var t=[];if(e){t.push({name:"系统名",value:o.platform});t.push({name:"支付宝版本号",value:o.platform_version})}t.push({name:"设备型号",value:o.device_model});t.push({name:"设备生产商",value:o.device_brand});t.push({name:"os版本号",value:o.os_version});t.push({name:"网络类型",value:o.access});t.push({name:"运营商",value:o.access_subtype});t.push({name:"分辨率",value:o.resolution});t.push({name:"pixelRatio",value:o.pixel_ratio});for(var n="",i=0;i<t.length;i++){var r=t[i];n+=r.name+": "+r.value+"; "}a().v("调试辅助信息: ",n)}();n&&n()})})}return{init:function(){t(function(){e=!0})},isLoaded:function(){return e},get:function(){return o},getRealtimeFields:function(){var t={};Q.forEach(function(e){t[e]=o[e]});return t},setIdTracking:function(e){this.setItem("id_tracking",e)},setIdType:function(e){this.setItem("id_type",e)},setAppVersion:function(e){this.setItem("app_version",e)},setSuperProperty:function(e){o.sp||(o.sp={});o.sp.isv=e},getSuperProperty:function(){return o&&o.sp?o.sp.isv:""},setItem:function(e,t){o[e]=t},getItem:function(e){return o[e]}}}var ee,te,ne,ie=(ne=te=ee=W=L=U=w=y=v=null,function(){return ee=ee||re()});function re(){return{resume:function(e){var t=!1;ne=ne||C().get(g.CURRENT_SESSION);var n=new Date;te=n.getTime();if(!ne||!ne.end_time||te-ne.end_time>g.SESSION_INTERVAL){t=!0;!function(e){try{var t=(ne||{}).options||{},n=_.assign({},function(e){var t,n={};for(t in e)0===t.indexOf("_um_")&&(n[t]=e[t]);a().v("query: ",e);a().v("_um_params: ",n);return n}(e.query));n.path=e.path||t.path;n.scene=e.scene?l.getPlatform()+"_"+e.scene:t.scene;t=e.referrerInfo;t&&(n.referrerAppId=t.appId);a().v("session options: ",n);t=n[g.UM_SSRC];t&&k().setShareSource(t);t=Date.now();ne={id:_.getRandomStr(10)+t,start_time:t,options:n}}catch(e){a().e("生成新session失败: ",e)}}(e);a().v("开始新的session(%s): ",ne.id,ne)}else a().v("延续上一次session(%s): %s ",ne.id,n.toLocaleTimeString(),ne);return t},pause:function(){!function(){if(ne){var e=new Date;ne.end_time=e.getTime();"number"!=typeof ne.duration&&(ne.duration=0);ne.duration=ne.end_time-te;C().set(g.CURRENT_SESSION,ne);a().v("退出会话(%s): %s ",ne.id,e.toLocaleTimeString(),ne)}}()},getCurrentSessionId:function(){return(ne||{}).id},getCurrentSession:function(){return ne},cloneCurrentSession:function(){return _.clone(ne)}}}function oe(e){var t=null;switch(e){case z.HALF_SESSION:t=function(){var e=null,t=ie().cloneCurrentSession();t&&(e={header:{st:"1"},analytics:{sessions:[t]}});return e}();break;case z.CLOSE_SESSION:t=function(){var e=null,t={},n=ie().cloneCurrentSession();if(n){var i=I().get(),r=k().get();Array.isArray(i)&&i.length&&(n.pages=_.clone(i));Array.isArray(r)&&r.length&&(n.shares=_.clone(r));I().clear();k().clear();t.sessions=[n]}n=q().getEkvs();if(n){t.ekvs=_.clone(n);q().clear()}(t.sessions||t.ekvs)&&(e={analytics:t});return e}();break;case z.EKV:t=function(){var e=null,t=q().getEkvs();if(t){e={analytics:{ekvs:_.clone(t)}};q().clear()}return e}()}return t}var se={sessions:"sn",ekvs:"e",active_user:"active_user"},ae={sdk_type:"sdt",access:"ac",access_subtype:"acs",device_model:"dm",language:"lang",device_type:"dt",device_manufacturer:"dmf",device_name:"dn",platform_version:"pv",id_type:"it",font_size_setting:"fss",os_version:"ov",device_manuid:"did",platform_sdk_version:"psv",device_brand:"db",appkey:"ak",_id:"id",id_tracking:"itr",imprint:"imp",sdk_version:"sv",resolution:"rl",testToken:"ttn"},ce={uuid:"ud",unionid:"und",openid:"od",anonymousid:"nd",alipay_id:"ad",device_id:"dd",userid:"puid"};function ue(e){return{h:function(e,t){var n=fe(e,t);e&&e.id_tracking&&(n[t.id_tracking||"id_tracking"]=fe(e.id_tracking,ce));return n}(e.header,ae),a:function(e,t){var n={};if(e)for(var i in e)e[i]&&(n[t[i]]=e[i]);return n}(e.analytics,se)}}function fe(e,t){var n,i={};for(n in e)t[n]?i[t[n]]=e[n]:i[n]=e[n];return i}var pe=b=T="";function le(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?Se(192|t>>>6)+Se(128|63&t):Se(224|t>>>12&15)+Se(128|t>>>6&63)+Se(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return Se(240|t>>>18&7)+Se(128|t>>>12&63)+Se(128|t>>>6&63)+Se(128|63&t)}function de(e){var t=[0,2,1][e.length%3],e=e.charCodeAt(0)<<16|(1<e.length?e.charCodeAt(1):0)<<8|(2<e.length?e.charCodeAt(2):0);return[_e.charAt(e>>>18),_e.charAt(e>>>12&63),2<=t?"=":_e.charAt(e>>>6&63),1<=t?"=":_e.charAt(63&e)].join("")}function he(e){return e.replace(Ie,le).replace(/[\s\S]{1,3}/g,de)}function ge(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return Se(55296+(t>>>10))+Se(56320+(1023&t));case 3:return Se((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return Se((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}}function ve(e){var t=e.length,n=t%4,e=(0<t?me[e.charAt(0)]<<18:0)|(1<t?me[e.charAt(1)]<<12:0)|(2<t?me[e.charAt(2)]<<6:0)|(3<t?me[e.charAt(3)]:0);(e=[Se(e>>>16),Se(e>>>8&255),Se(255&e)]).length-=[0,0,2,1][n];return e.join("")}function ye(e){return e.replace(/[\s\S]{1,4}/g,ve).replace(Ee,ge)}var _e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",me=function(e){for(var t={},n=0,i=e.length;n<i;n++)t[e.charAt(n)]=n;return t}(_e),Se=String.fromCharCode,Ie=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Ee=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),Oe={encode:function(e,t){return t?he(String(e)).replace(/[+\/]/g,function(e){return"+"==e?"-":"_"}).replace(/=/g,""):he(String(e))},decode:function(e){return ye(String(e).replace(/[-_]/g,function(e){return"-"==e?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))}};var Ae=new function(){var t="",n=this;this.set=function(e){t=e};this.get=function(){return t};this.getImpObj=function(){return D.parse(Oe.decode(t))};this.getItem=function(e){var t=n.getImpObj();return t&&t[e]||""};this.load=function(){t=C().get(g.IMPRINT)};this.save=function(){t&&C().set(g.IMPRINT,t)}};function we(n,i,r,e){Z.instance().setIdType(S().getIdType());Z.instance().setIdTracking(S().getIdTracking());var t=S().getUserId();t&&n.analytics&&(n.analytics.active_user={puid:t,provider:S().getProvider()});t=_.clone(Z.instance().get());n.header=_.assign(t,n.header,{ts:Date.now(),testToken:pe,traceId:_.getRandomStr(10)+Date.now()+_.getRandomStr(9)});var t=ue(n),o=D.stringify(t),t={url:g.LOG_URL,method:"POST",data:Oe.encode(o),success:function(e){var t=e.code||e.status||e.statusCode;if(200===t||413===t){a().i("数据发送成功: ",n,o);!function(e){if(e){Z.instance().setItem(g.IMPRINT,e);Ae.set(e);Ae.save();a().v("imprint: ",Ae.getImpObj());Ae.getItem("ttn_invalid")&&(pe="")}}((e.data||{}).imprint);"function"==typeof i&&i(e)}else{a().w("数据发送失败: ",o);"function"==typeof r&&r()}},fail:function(e){a().w("超时: ",o);"function"==typeof r&&r()},complete:function(){"function"==typeof e&&e()}};l.request(_.assign(t,{header:{"Content-Type":t=l.getSdkType()+"/json","Msg-Type":t}}))}function Ne(e){var t=e,n=[];this.enqueue=function(e){"number"==typeof t&&this.size()>=t&&this.dequeue();n.push(e)};this.dequeue=function(){return n.shift()};this.front=function(){return n[0]};this.isEmpty=function(){return 0===n.length};this.clear=function(){n.length=0};this.size=function(){return n.length};this.items=function(){return n};this.print=function(){console.log(n.toString())}}var Te,ke,Re,Ue,be=(Te=null,ke=!1,Re=[],Ue=new Ne(50),function(){return Te=Te||new De});function Le(t){var e=Ue.front();if(e)we(e,function(){Ue.dequeue();Le(t)},function(){var e=Ue.dequeue();e&&!e.noCache&&Re.push(e);Le(t)});else{!function(){Re.forEach(function(e){Ue.enqueue(e)});Re.length=0}();t()}}function Pe(e){if(S().getId())if(ke)a().i("队列正在发送中");else{ke=!0;Le(function(){ke=!1;"function"==typeof e&&e()})}else{a().i("获取id标识失败，暂缓发送");"function"==typeof e&&e()}}function De(){this.send=function(e,t,n){e?this.add(e,t,function(){Pe(n)}):Pe(n)};this.add=function(e,t,n){!function e(t,n,i){if(Z.instance().isLoaded()){n=n||{};var r=oe(t);if(r){var o=Z.instance().getRealtimeFields();r.header=_.assign({},r.header,o);r.noCache=n.noCache;Ue.enqueue(r)}"function"==typeof i&&i()}else setTimeout(function(){e(t,n,i)},100)}(e,t,n)};this.load=function(){var e=C().get(g.REQUESTS);e&&e.length&&e.forEach(function(e){Ue.enqueue(e)});C().remove(g.REQUESTS)};this.save=function(){C().set(g.REQUESTS,_.clone(Ue.items()));Ue.clear()}}var Ce,Me=(Ce=null,function(){return Ce=Ce||new xe});function xe(){this.update=function(){l.getUserInfo(function(t){if(t){var e=C().get(g.USER_INFO);e&&_.deepEqual(t,e)||function(t,n){var e=s().appKey(),i=l.getSdkType(),r=S().getId(),o=S().getIdType();if(!(e&&i&&r&&o))return;o={ak:s().appKey(),sdt:l.getSdkType(),uin:t.nickName,uia:t.avatar,uig:t.gender,uit:t.country,uip:t.province,uic:t.city,uil:t.language,id:S().getId(),it:S().getIdType()},o=JSON.stringify(o);o=Oe.encode(o);l.request({url:g.USERINFO_URL,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:"ui="+o,success:function(e){a().v("用户信息上传成功: ",t);n&&n(e&&e.data&&200===e.data.code)},fail:function(){a().e("用户信息上传失败: ",t);n&&n(!1)}})}(t,function(e){e&&C().set(g.USER_INFO,t)})}})}}function Ve(e,t){this.id=e;this.ts=Date.now();var n=typeof t;if("string"==n&&t)this[e]=t;else if("object"==n)for(var i in t)!{}.hasOwnProperty.call(t,i)||(this[i]=t[i])}function je(){var r=!1,n=!1,o=0;this.init=function(e){a().v("sdk version: "+g.IMPL_VERSION);r?a().v("Lib重复实例化"):C().load(function(){a().v("cache初始化成功: ",C().getAll());!function(){S().setUseOpenid&&S().setUseOpenid(s().useOpenid());S().init(function(){Z.instance().init();a().v("Header初始化成功")})}();r=!0;"function"==typeof e&&e();a().tip("SDK集成成功")})};this.resume=function(e){if(r&&!n){a().v("showOptions: ",e);var t;n=!0;s().enableVerify()&&e&&e.query&&(t=e.query._ttn,pe=t||pe);this._resume(e)}};this._resume=function(e){be().load();var t=ie().resume(e),e=ie().getCurrentSessionId();q().setSessionId(e);t&&be().add(z.HALF_SESSION,{},function(){S().setUseOpenid&&S().setUseOpenid(s().useOpenid());if(s().useOpenid()&&s().autoGetOpenid()&&!S().getId()){a().v("get id async");!function t(n,i){if(S().getId()||n<=0)return;S().getOpenIdAsync(s().appKey(),function(e){if(e){a().v("获取id成功");be().send()}else{a().v("获取openid失败,启动重试,剩余可用次数",n-1);setTimeout(function(){t(n-1,i)},i)}})}(10,3e3)}else{a().v("session auto send");be().send()}})};this.pause=function(e){if(r){n=!1;o=0;ie().pause();s().uploadUserInfo()&&Me().update();be().send(z.CLOSE_SESSION,{},function(){be().save();C().save();a().v("cache save success");"function"==typeof e&&e()})}};this.setOpenid=function(e){a().v("setOpenId: %s",e);S().setOpenid(e);be().send()};this.setUnionid=function(e){a().v("setUnionid: %s",e);S().setUnionid(e)};this.setUserid=function(e,t){a().v("setUserid: %s",e,t);S().setUserid(e,t)};this.setAnonymousid=function(e){a().v("setAnonymousId: %s",e);S().setAnonymousid(e);be().send()};this.setAppVersion=function(e){e&&"string"!=typeof e?a().w("setAppVersion方法只接受字符串类型参数"):Z.instance().setAppVersion(e)};this.setAlipayUserid=function(e){if(e&&"string"!=typeof e)a().w("setAlipayUserid方法只接受字符串类型参数");else{a().v("setAlipayUserid: %s",e);S().setAlipayUserid(e)}};this.setSuperProperty=function(e){if(e&&"string"!=typeof e)a().w("超级属性只支持字符串类型");else{var t=this;if(Z.instance().getSuperProperty()!==e){Z.instance().setSuperProperty(e);t.pause(function(){t.resume()})}}};this.trackEvent=function(e,t){if(r){a().v("event: ",e,t);if(function(e,t){if(e&&"string"==typeof e){var n=["id","ts","du"],i={};n.forEach(function(e){i[e]=1});if(i[e])a().e("eventId不能与以下保留字冲突: "+n.join(","));else if(e.length>g.MAX_EVENTID_LENGTH)a().e("The maximum length of event id shall not exceed "+g.MAX_EVENTID_LENGTH);else{if(!t||"object"==typeof t&&!Array.isArray(t)||"string"==typeof t){if("object"==typeof t){var r,o=0;for(r in t)if({}.hasOwnProperty.call(t,r)){if(r.length>g.MAX_PROPERTY_KEY_LENGTH){a().e("The maximum length of property key shall not exceed "+g.MAX_PROPERTY_KEY_LENGTH);return}if(o>=g.MAX_PROPERTY_KEYS_COUNT){a().e("The maximum count of properties shall not exceed "+g.MAX_PROPERTY_KEYS_COUNT);return}if(i[r]){a().e("属性中的key不能与以下保留字冲突: "+n.join(","));return}o+=1}}return 1}a().e("please check trackEvent properties. properties should be string or object(not include Array)")}}else a().e('please check trackEvent id. id should be "string" and not null')}(e,t)){var n=new Ve(e,t);q().addEvent(n);var i=!!pe,e=i?0:g.EVENT_SEND_DEFAULT_INTERVAL,t=Date.now();if(n=t,e=e,"number"!=typeof o||"number"!=typeof e||(o<=0||e<n-o)){o=t;be().send(z.EKV,{noCache:i},function(){})}}}};this.trackShare=function(e){if(r){try{if(-1<l.getSdkType().indexOf("game")){e=k().add(e,!0);a().v("shareQuery: ",e)}else{e=k().add(e,!1);a().v("sharePath: ",e.path)}}catch(e){a().v("shareAppMessage: ",e)}return e}};this.trackPageStart=function(e){r&&I().addPageStart(e)};this.trackPageEnd=function(e){r&&I().addPageEnd(e)};this.onShareAppMessage=function(e){var t=this;l.onShareAppMessage(function(){return t.trackShare(e())})};this.shareAppMessage=function(e){this.trackShare(e);l.shareAppMessage(e)}}var Ke=[];function Ge(){}Ge.prototype={createMethod:function(e,t,n){try{e[t]=n&&n[t]?function(){return n[t].apply(n,arguments)}:function(){Ke.push([t,[].slice.call(arguments)])}}catch(e){a().v("create method errror: ",e)}},installApi:function(e,t){try{for(var n="resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,setSuperProperty".split(","),i=0,r=n.length;i<r;i++)this.createMethod(e,n[i],t);if(t)for(i=0,r=Ke.length;i<r;i++){var o=Ke[i];try{t[o[0]].apply(t,o[1])}catch(e){a().v("impl[v[0]].apply error: ",o[0],e)}}}catch(e){a().v("install api errror: ",e)}}};var Fe=["https://umini.shujupie.com","https://ulogs.umeng.com"],qe=0;function He(t,e){if(t>=Fe.length||e){e&&function(){var e="https://umini.shujupie.com";g.LOG_URL=g.LOG_URL.replace(e,Fe[qe]);g.GET_OPENID_URL=g.GET_OPENID_URL.replace(e,Fe[qe]);g.USERINFO_URL=g.USERINFO_URL.replace(e,Fe[qe])}();e&&a().v("命中可用服务",Fe[qe]);e||a().tip_w("未命中可用服务")}else l.request({url:Fe[t]+"/uminiprogram_logs/ckdh",success:function(e){200===(e.code||e.status||e.statusCode)&&e.data&&200===e.data.code?He((qe=t)+1,!0):He(t+1,!1)},fail:function(){He(t+1,!1)}})}({init:function(e){setTimeout(function(){He(0,!1)},e)}}).init(3e3);var Ye=new Ge,We={_inited:!1,init:function(e){if(this._inited)a().v("已经实例过，请避免重复初始化");else if(e)if(e.appKey){"boolean"!=typeof e.useOpenid&&(e.useOpenid=!0);s().set(e);a().setDebug(e.debug);this._inited=!0;var t=this;u.emit(f,e);try{var n=new je;a().v("成功创建Lib对象");n.init(function(){a().v("Lib对象初始化成功");Ye.installApi(t,n);a().v("安装Lib接口成功");u.emit(p,e)})}catch(e){a().w("创建Lib对象异常: "+e)}}else a().err("请确保传入正确的appkey");else a().err("请正确设置相关信息！")}};try{Ye.installApi(We,null)}catch(e){a().w("uma赋值异常: ",e)}var Je={FETCH_URL:"https://ucc.umeng.com/v1/mini/fetch",ABLOG_URL:"https://pslog.umeng.com/mini_ablog",SDK_VERSION:"2.4.11",MOBILE_NETWORK_NONE:"none",MOBILE_NETWORK_2G:"2g",MOBILE_NETWORK_3G:"3g",MOBILE_NETWORK_4G:"4g",MOBILE_NETWORK_5G:"5g",MOBILE_NETWORK_WIFI:"wifi",IMPRINT:"imprint"},Be={},Xe=Array.isArray;Be.isArray=Xe||function(e){return"[object Array]"===toString.call(e)};Be.isObject=function(e){return e===Object(e)&&!Be.isArray(e)};Be.isEmptyObject=function(e){if(Be.isObject(e)){for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}return!1};Be.isUndefined=function(e){return void 0===e};Be.isString=function(e){return"[object String]"===toString.call(e)};Be.isDate=function(e){return"[object Date]"===toString.call(e)};Be.isNumber=function(e){return"[object Number]"===toString.call(e)};Be.each=function(e,t,n){if(null!=e){var i={},r=Array.prototype.forEach;if(r&&e.forEach===r)e.forEach(t,n);else if(e.length===+e.length){for(var o=0,s=e.length;o<s;o++)if(o in e&&t.call(n,e[o],o,e)===i)return}else for(var a in e)if(hasOwnProperty.call(e,a)&&t.call(n,e[a],a,e)===i)return}};Be.buildQuery=function(e,t){var n,i,r=[];void 0===t&&(t="&");Be.each(e,function(e,t){n=encodeURIComponent(e.toString());i=encodeURIComponent(t);r[r.length]=i+"="+n});return r.join(t)};Be.JSONDecode=function(e){if(e){try{return JSON.parse(e)}catch(e){console.error("JSONDecode error",e)}return null}};Be.JSONEncode=function(e){try{return JSON.stringify(e)}catch(e){console.error("JSONEncode error",e)}};var ze=Object.create(null);function Qe(n){a().v("开始构建 fetch body");l.getSystemInfo(function(t){l.getNetworkInfo(function(e){e=(e=(e=e||{}).networkType)===Je.MOBILE_NETWORK_NONE?"unknown":e.toUpperCase();ze.access=e;!function(e,t){var n=e.brand||"";ze.deviceType="Phone";ze.sdkVersion=Je.SDK_VERSION;ze.appkey=s().appKey();ze.sdkType=l.getSdkType();ze.umid=S().getId();if(e){ze.language=e.language||"";ze.os=e.OS;ze.osVersion=e.OSVersion;ze.deviceName=e.deviceName;ze.platformVersion=e.platformVersion;ze.platformSdkVersion=e.platformSDKVersion;ze.deviceBrand=n;e=e.resolution.split("*");if(Be.isArray(e)){ze.resolutionHeight=Number(e[0]);ze.resolutionWidth=Number(e[1])}}!function(e){if(e){ze.installTime=e.install_datetime&&Date.parse(e.install_datetime);ze.scene=e.install_scene;ze.channel=e.install_channel;ze.campaign=e.install_campaign}}(Ae.getImpObj());t&&t(ze)}(t,n)})})}var Ze=Object.create(null),$e=null,et=!1,tt={minFetchIntervalSeconds:43200};function nt(e){e&&Be.each(e,function(e){Ze[e.k]=e})}function it(){var t=this;this.STORAGE_NAME=null;u.on(f,function(e){a().v("云配初始化开始...");t.init(e)})}it.prototype={setDefaultValues:function(e){et&&Be.isObject(e)&&Be.each(e,function(e,t){Ze[t]&&Ze[t].v||(Ze[t]={v:e})})},getValue:function(t){a().v("从配置项中读取 value, 当前配置为: ",Ze);a().v("待读取的 key : ",t);try{if(!et)return;var e=Ze[t]||{};a().v("读取相应配置ing..., 结果为: ",e);if(Be.isNumber(e.e)&&Be.isNumber(e.g)){a().v("读取到相应配置, 开始数据上报...");!function(e){var t={appkey:s().appKey(),sdkType:l.getSdkType(),expId:e&&e.e,groupId:e&&e.g,clientTs:Date.now(),key:e&&e.k,value:e&&e.v,umid:S().getId()};try{l.request({url:Je.ABLOG_URL,method:"POST",data:[t],success:function(e){e&&200===e.statusCode?a().v("上传数据成功",t):a().w("ablog 请求成功, 返回结果异常 ",e)},fail:function(e){a().w("ablog 请求数据错误 ",t,e)}})}catch(e){a().w("urequest 调用错误",e)}}(e)}return e.v}catch(e){a().w("getValue error, key: ",t)}},active:function(e){try{if(!et)return;var t,n;e&&e.params&&(t=e.params);e&&e.callback&&(n=e.callback);a().v("激活配置项: ",t);if(t){a().v("本地已缓存的配置项: ",Ze);nt(t);a().v("合并后的配置项: ",Ze);n&&n(Ze);a().v("active 结束")}else{a().v("配置项为空!! 读取本地配置...");l.getStorage(this.STORAGE_NAME,function(e){if(e){nt((e=Be.JSONDecode(e)||{}).params);a().v("当前本地配置项为: ",Ze);n&&n(Ze);a().v("active 结束")}else a().v("当前本地配置项为空, 退出激活")})}}catch(e){a().w("SDK active 错误",e)}},init:function(e){if(e.appKey){$e=e.appKey;this.STORAGE_NAME="um_remote_config_{{"+$e+"}}"}if($e)if(et)a().w("SDK 已经初始化, 请避免重复初始化");else{et=!0;this.setOptions(e);this.active()}else a().err("请检查您的小程序 appKey, appKey 不能为空")},setOptions:function(e){if(Be.isObject(e)){e=e.minFetchIntervalSeconds;Be.isNumber(e)&&(tt.minFetchIntervalSeconds=Math.max(e,5))}},fetch:function(e){if(et&&this.STORAGE_NAME){var i,r;e&&e.active&&(i=e.active);e&&e.callback&&(r=e.callback);var o=this;l.getStorage(this.STORAGE_NAME,function(e){a().v("开始读缓存 data is ",e);if((e=Be.JSONDecode(e)||{}).params&&e.ts&&Date.now()-e.ts<1e3*tt.minFetchIntervalSeconds){a().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch");r&&r(e.params)}else Qe(function(t){a().v("缓存数据不存在, 构建 fetch body :",t);try{l.request({url:Je.FETCH_URL,method:"POST",data:t,success:function(e){if(e&&200===e.statusCode&&e.data&&e.data.cc){a().v("fetch 请求成功, 响应数据: ",e.data);var t=Object.create(null);Be.each(e.data.cc,function(e){t[e.k]=e});var n={ts:Date.now(),params:t};a().v("开始缓存 fetch 请求的云配置结果...");l.setStorage(o.STORAGE_NAME,Be.JSONEncode(n),function(e){a().v("缓存云配置成功, 缓存数据为: ",n);a().v("缓存云配置成功, 成功消息为: ",e);a().v("云配拉取数据是否自动激活: ",i);if(e&&i){a().v("激活云配置...");o.active({params:t,callback:r})}})}else{a().w("fetch 请求成功,返回结果异常 ",e.data);r&&r()}},fail:function(e){a().w("fetch请求数据错误 ",t,e);r&&r()}})}catch(e){a().w("urequest调用错误",e)}})})}}};var rt="",ot={};function st(e){e&&(rt=e)}function at(){return function(e,t){if(!e)return"";var n,i=[];for(n in t)"_um_ssrc"!==n&&"_um_sts"!==n&&i.push(n+"="+t[n]);var r=i.join("&");return r?e+"?"+r:e}(rt,ot[rt])}function ct(e,n){if(e.onShareAppMessage){var i=e.onShareAppMessage;e.onShareAppMessage=function(e){var t=i.call(this,e)||{},e=at();!t.path&&e&&(t.path=e);return n.trackShare.call(this,t)}}}function ut(e,t,n){var i=e[t];e[t]=function(e){n.call(this,e);i&&i.call(this,e)}}function ft(e){try{We.resume(e,!0)}catch(e){a().v("onAppShow: ",e)}}function pt(){try{We.pause()}catch(e){a().v("onAppHide: ",e)}}function lt(){try{st(this.route);We.trackPageStart(this.route)}catch(e){a().v("onPageShow: ",e)}}function dt(e){try{st(this.route);e&&(t=this.route,n=e,t&&(ot[t]=n));a().v("Page onLoad: ",this.route,e)}catch(e){a().v("onPageLoad: ",e)}var t,n}function ht(){try{We.trackPageEnd(this.route)}catch(e){a().v("onPageHide: ",e)}}try{var gt=App;App=function(e){ut(e,"onLaunch",function(){!function(e){try{We.init(e)}catch(e){a().v("onAppLaunch: ",e)}}(e.umengConfig)});ut(e,"onShow",ft);ut(e,"onHide",pt);gt(e)}}catch(e){a().w("App重写异常")}try{var vt=Page;Page=function(e){ut(e,"onShow",lt);ut(e,"onHide",ht);ut(e,"onUnload",ht);ut(e,"onLoad",dt);ct(e,We);vt(e)}}catch(e){a().w("Page重写异常")}try{var yt=Component;Component=function(t){try{t.methods=t.methods||{};var e=t.methods;ut(e,"onShow",lt);ut(e,"onHide",ht);ut(e,"onUnload",ht);ut(e,"onLoad",dt);ct(e,We);yt(t)}catch(e){yt(t)}}}catch(e){a().w("Component重写异常")}var _t=We.init;We.init=function(e){if(e&&e.useOpenid){a().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");a().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取");a().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")}_t.call(We,e)};Xe=new it;!function(e,t,n){if("object"==typeof e){if("string"==typeof t&&t.length)e[t]=n;else for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e[i]){a().v("方法已定义，无法注入此插件方法: ",i);return}n[i]&&(e[i]=function(){n[i](arguments)})}}else a().v("插件安装失败，宿主对象不能为空")}(We,"rc",Xe);wx.uma=We;module.exports=We;

// device.js
// =========
// zhangshibing@baidu.com

var WIN = window;
var DOC = document;
var LOC = WIN["location"];
var REFERER = DOC["referrer"];
var HIS = WIN.history;
var NA = WIN.navigator;
var UA = NA.userAgent;
var IsTouch = "ontouchend" in WIN;
var IsHasDeviceMotion = "ondevicemotion" in WIN;
var IsAndroid = /Android|HTC/i.test(UA) || /Linux/i.test(WIN.navigator.platform + '');
var IsIPad = !IsAndroid && /iPad/i.test(UA);
var IsIPhone = !IsAndroid && /iPod|iPhone/i.test(UA);
var IsIOS = IsIPad || IsIPhone;
var IsWinPhone = /Windows Phone/i.test(UA);
var IsWebapp = NA["standalone"];
var IsXiaoMi = IsAndroid && /mi\s+/i.test(UA);
var IsUC = /UCBrowser/i.test(UA);
var IsWeixin = /MicroMessenger/i.test(UA);
var IsWechat = IsWeixin;
var IsBaiduBrowser = /baidubrowser/i.test(UA);
var IsChrome = !!WIN["chrome"];
var IsBaiduBox = /baiduboxapp/i.test(UA);
var IsPC = !IsAndroid && !IsIOS && !IsWinPhone;
var IsHTC = IsAndroid && /HTC\s+/i.test(UA);
var IsBaiduWallet = /baiduwallet/i.test(UA);

var IsDebug = ~("" + LOC["port"]).indexOf("0");


var device = {
	IsTouch: IsTouch,
	IsAndroid: IsAndroid,
	IsIPad: IsIPad,
	IsIPhone: IsIPhone,
	IsIOS: IsIOS,
	IsWinPhone: IsWinPhone,
	IsWebapp: IsWebapp,
	IsXiaoMi: IsXiaoMi,
	IsUC: IsUC,
	IsWeixin: IsWeixin,
	IsBaiduBox: IsBaiduBox,
	IsBaiduBrowser: IsBaiduBrowser,
	IsChrome: IsChrome,
	IsPC: IsPC,
	IsHTC: IsHTC,
	IsBaiduWallet: IsBaiduWallet,
	IsDebug: IsDebug
};

var elHTML = document.getElementsByTagName("html")[0];
for (var i in device) {
	window[i] = device[i];
	if (device[i]) {
		elHTML.className += " " + i.replace("Is", "").toLowerCase();
	}
}

module.exports = device;

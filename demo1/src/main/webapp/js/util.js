

var fmt = "yyyy-MM-dd";

//对Date的扩展，将 Date 转化为指定格式的String
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
//例子： 
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
//(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 

Date.prototype.Format = function (fmt) { //author: meizz 
	var o = {
	   "M+": this.getMonth() + 1, //月份 
	   "d+": this.getDate(), //日 
	   "h+": this.getHours(), //小时 
	   "m+": this.getMinutes(), //分 
	   "s+": this.getSeconds(), //秒 
	   "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	   "S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
	}

//给日期类对象添加日期差方法，返回日期与poor参数日期的时间差，单位为时
Date.prototype.poor=function(date){
	try {
		
		return (this.getTime() - date.getTime())/(60*60*1000);
	} catch (e) {
		// TODO: handle exception
		return 0;
	}
}
//分
Date.prototype.poorMin=function(date){
	try {
		return (this.getTime() - date.getTime())/(60*1000);
	} catch (e) {
		// TODO: handle exception
		return 0;
	}
}

//移除指定元素 
Array.prototype.remove = function(s) {
  for (var i = 0; i < this.length; i++) {
      if (s == this[i])
          this.splice(i, 1); //移除元素
  }
}

/**
 * Simple Map
 * 
 * 
 * var m = new Map();
 * m.put('key','value');
 * ...
 * var s = "";
 * m.each(function(key,value,index){
 *         s += index+":"+ key+"="+value+"\n";
 * });
 * alert(s);
 * 
 */
function Map() {
   /** 存放键的数组(遍历用到) */
   this.keys = new Array();
   /** 存放数据 */
   this.data = new Object();
   
   /**
    * 放入一个键值对
    * @param {String} key
    * @param {Object} value
    */
   this.put = function(key, value) {
       if(this.data[key] == null){
           this.keys.push(key);
       }
       this.data[key] = value;
   };
   
   /**
    * 获取某键对应的值
    * @param {String} key
    * @return {Object} value
    */
   this.get = function(key) {
       return this.data[key];
   };
   
   /**
    * 删除一个键值对
    * @param {String} key
    */
   this.remove = function(key) {
       this.keys.remove(key);
       this.data[key] = null;
   };
   
   /**
    * 遍历Map,执行处理函数
    * 
    * @param {Function} 回调函数 function(key,value,index){..}
    */
   this.each = function(fn){
       if(typeof fn != 'function'){
           return;
       }
       var len = this.keys.length;
       for(var i=0;i<len;i++){
           var k = this.keys[i];
           fn(k,this.data[k],i);
       }
   };
   
   /**
    * 获取键值数组(类似Java的entrySet())
    * @return 键值对象{key,value}的数组
    */
   this.entrys = function() {
       var len = this.keys.length;
       var entrys = new Array(len);
       for (var i = 0; i < len; i++) {
           entrys[i] = {
               key : this.keys[i],
               value : this.data[i]
           };
       }
       return entrys;
   };
   
   /**
    * 判断Map是否为空
    */
   this.isEmpty = function() {
       return this.keys.length == 0;
   };
   
   /**
    * 获取键值对数量
    */
   this.size = function(){
       return this.keys.length;
   };
   
   /**
    * 重写toString 
    */
   this.toString = function(){
       var s = "{";
       for(var i=0;i<this.keys.length;i++,s+=','){
           var k = this.keys[i];
           s += k+"="+this.data[k];
       }
       s+="}";
       return s;
   };
}



// JavaScript Document
/*(function(){
		　function Cat() {
		
		　　　　this.name = "大毛";
		
		　　}  		
				
			var cat1 = new Cat();
			alert(cat1.name); // 大毛
			
					　
					
		  
		  })()*/
/*(function(cat){
		  console.warn(cat);
		  var cat1=new cat();
		  //var cat1=new cat();
		  alert(cat1.name);
		  
		  })(function Cat(){this.name="大毛";})

*/

/*
(function(){
		  
		  
		  
		  //低版本不兼容的情况下
		  　if (!Object.create) {

		　　　　Object.create = function (o) {
		
		　　　　　　 function F() {}
		
		　　　　　　F.prototype = o;
		
		　　　　　　return new F();
		
		　　　　};
		
		　　}
		  
		  //
		  var Cat={
			  		name:"大毛",
					makeSound:function(){alert("喵喵喵")}
			  }
		  var cat1=Object.create(Cat);
		  
		  
		  alert(cat1.name); // 大毛
　		　cat1.makeSound(); // 喵喵喵
		  
		  
		  
		  })()
*/

//常用的方法
/*
(function(){
		  var Cat ={
			  create:function(){
				  	var cat = {};
					cat.name="大毛";
					cat.makeSound=function(){alert("喵喵")};
					return cat;
				  	
				  }
			  
			  }
		  var cat=Cat.create();
		  cat.makeSound();
		  })()
*/

//继承

/*(function(){
		  var Animal={
			  create:function(){
				  var animal={};
				  animal.sleep=function(){alert("睡觉")};
				  return animal;
				  }
			  }
		  var Cat={
			  create:function(){
				  var cat=Animal.create();
				  cat.name="大毛";
				  cat.makeSound=function(){alert("喵喵")};
				  return cat;
				  }
			  }
		  var cat=Cat.create();
		  cat.sleep();
		  cat.makeSound();
		  
		  })()*/


/*(function(){
		  var Cat={
			  name:'',
			  color:''
			  };
		  var cat1={};
		  
		  cat1.name="大毛";
		  cat1.color="红色";
		  
		  var cat2={};
		  
		  cat2.name="二毛";
		  cat2.color="黄色";
				
		  
		  
		  })()*/
/*(function(){
		  function Cat(name,color){
			  		return {
						name:name,
						color:color						
						};
			  }
		  var cat1=new Cat("大毛","红色");
		  var cat2=new Cat("二毛","黄色");
		  
		  })
*/
/*(function(){
		  function Cat(name,color){
			  this.name=name;
			  this.color=color;
			  }
		  var cat1=new Cat("大毛","黄色");
		  var cat2=new Cat("二毛","黑色");
		  console.warn(cat1);
		  console.warn(cat2);
		  
		  console.warn(cat1.constructor==Cat)//constructor 是对象指向该对象的构造函数
		  console.warn(cat2.constructor==Cat)//constructor 是对象指向该对象的构造函数
		  
		  //Javascript还提供了一个instanceof运算符，验证原型对象与实例对象之间的关系。
		  //判断对象是否是类  的类型
		  
		  console.warn(cat1 instanceof Cat);
		  console.warn(cat2 instanceof Cat);
		  
		  })()*/
/*(function(){
		  
		  function Cat(name,color)
		  {
			 this.name=name;
			 this.color=color;
		  }
		  Cat.prototype.type="猫科动物";
		  Cat.prototype.eat=function(){
			  console.warn("eat mounse");
			  }
		  var cat1=new Cat("大毛","黄色");
		  var cat2=new Cat("二毛","黑色");
		  console.warn(cat1);//
		  console.warn(cat2);//
		  
		  //判断某个prototype对象是否和实例对象有关系。  实例对象是否含有该prototype对象
		  console.warn(Cat.prototype.isPrototypeOf(cat1));//true
		  console.warn(Cat.prototype.isPrototypeOf(cat2));//true
		  
		  //判断实例对象  的属性是否是继承prototype对象的属性
		  console.warn(cat1.hasOwnProperty("name"));//true
		  console.warn(cat1.hasOwnProperty("type"));//false
		  
		  //in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。
		  console.warn("name" in cat1);//true
		  console.warn("type" in cat1);//true
		  //in运算符还可以用来遍历某个对象的所有属性。
		  for(var proto in cat1)
		  {
			console.warn("cat1["+proto+"]="+cat1[proto])  
		  }
		  })()*/
//构造函数的继承   构造函数绑定
/*(function(){
		  function Animal(){
			  this.species = "动物";
			  }
		  function Cat(name,color){
			  //构造函数绑定
			 // Animal.apply(this,arguments);
			  Animal.call(this,arguments);
			  this.name=name;
			  this.color=color;
			  }
			　var cat1 = new Cat("大毛","黄色");
　　		  console.log(cat1.species); // 动物  
			  
		  })()*/

//构造函数的继承   prototype模式
/*(function(){
		  function Animal(){
			  this.species = "动物";
			  }
		  function Cat(name,color){
			  this.name=name;
			  this.color=color;
			  }
			  //Cat的prototype对象指向一个Animal的实例。
		  	  Cat.prototype=new Animal();
			  /*
			  任何一个prototype对象都有一个constructor属性，指向它的构造函数。
			  如果没有"Cat.prototype = new Animal();"这一行，Cat.prototype.constructor是指向Cat的；
			  加了这一行以后，Cat.prototype.constructor指向Animal。
			  */
			  
		/*	  console.warn(Cat.prototype.constructor == Animal); //true
			 
			 
			  Cat.prototype.constructor =Cat;
			 
			　var cat1 = new Cat("大毛","黄色");
			 /*
			  每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性。
			  */
		/*	  console.warn(cat1.constructor==Cat.prototype.constructor);
　　		  console.log(cat1.species); // 动物  
			  
		  })()*/


/*
构造函数的继承   直接继承prototype  对第二种方法的改进
由于Animal对象中，不变的属性都可以直接写入Animal.prototype。所以，我们也可以让Cat()跳过 Animal()，直接继承Animal.prototype。
*/
/*(function(){
		  function Animal(){ }
　　	  Animal.prototype.species = "动物";
		  function Cat(name,color){
			  this.name=name;
			  this.color=color;
			  }
			  //将Cat的prototype对象，然后指向Animal的prototype对象，这样就完成了继承。
		  	 　Cat.prototype = Animal.prototype;
			  /*
			  任何一个prototype对象都有一个constructor属性，指向它的构造函数。
			  如果没有"Cat.prototype = new Animal();"这一行，Cat.prototype.constructor是指向Cat的；
			  加了这一行以后，Cat.prototype.constructor指向Animal。
			  */
			  
	 /*		  console.warn(Cat.prototype.constructor == Animal); //true
			 
			 
			  Cat.prototype.constructor =Cat;
			 
			　var cat1 = new Cat("大毛","黄色");
			 /*
			  每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性。
			  */
	 /*		  console.warn(cat1.constructor==Cat.prototype.constructor);
　　		  console.log(cat1.species); // 动物  
			  
		  })()*/

//构造函数的继承   利用空对象作为中介 弥补直接继承 prototype 的缺点
/*(function(){
		  
		  
		  
		  
		  function Animal(){ }
　　	  Animal.prototype.species = "动物";
		  function Cat(name,color){
			  this.name=name;
			  this.color=color;
			  }

	function extend(Child, Parent) {

　　　　var F = function(){};
　　　　F.prototype = Parent.prototype;
　　　　Child.prototype = new F();
　　　　Child.prototype.constructor = Child;
			//为子对象设一个uber属性，这个属性直接指向父对象的prototype属性。（uber是一个德语词，意思是"向上"、"上一层"。）这等于在子对象上打开一条通道，可以直接调用父对象的方法。这一行放在这里，只是为了实现继承的完备性，纯属备用性质。
　　　　Child.uber = Parent.prototype;
　　}
		extend(Cat,Animal);
　　	var cat1 = new Cat("大毛","黄色");
　　	console.warn(cat1.species); // 动物
		  
		  })()*/
//构造函数的继承   拷贝继承  纯拷贝

/*(function(){
		  　function Animal(){}
　　		Animal.prototype.species = "动物";
			function Cat(name,color){
						  this.name=name;
						  this.color=color;
						  }
//这个函数的作用，就是将父对象的prototype对象中的属性，一一拷贝给Child对象的prototype对象。
		  	function extend(Child, Parent) {
		　　　　var p = Parent.prototype;
		　　　　var c = Child.prototype;
		　　　　for (var i in p) {
		　　　　　　c[i] = p[i];
		　　　　　　}
		　　　　c.uber = p;
		　　}
			extend(Cat, Animal);
			var cat1 = new Cat("大毛","黄色");
　　		console.log(cat1.species); // 动物
		  })()*/

//非构造函数的继承   两个对象都是普通对象，不是构造函数，无法使用构造函数方法实现"继承"。 object()方法
/*(function(){
		  　var Chinese = {
		　　　　nation:'中国'
		　　};
//			var Doctor ={
//	　　　　	career:'医生'
//		　　}
//json格式的发明人Douglas Crockford，提出了一个object()函数，可以做到这一点。		
			function object(o) {
		　　　　function F() {}
		　　　　F.prototype = o;
		　　　　return new F();
		　　}
		    var Doctor = object(Chinese);
			Doctor.career = '医生';
			console.warn(Doctor);
			
			
			Chinese.nation='法国';
			console.warn(Doctor);
			console.warn(Chinese);
			
		  })()
*/


//浅拷贝
/*(function(){
		  　var Chinese = {
		　　　　nation:'中国',
				citype:['香港','澳门','台湾'],
				addr:{
						a:'五环',
						b:'四环'
					
					}
		　　};
		  function extendCopy(o){
			  
			  var c={};
			  for(var i in o){
				  c[i]=o[i]
				  }
			  c.uber=o;
			  return c;
			  }
		  　var Doctor = extendCopy(Chinese);
		　　Doctor.career = '医生';
		　　console.warn(Doctor); // 中国
			
			Doctor.citype.push('北京');
			console.warn('##########################')
			console.warn(Doctor);
			console.warn(Chinese);//父对象的 值被篡改
			Doctor.addr.c='三环';
			console.log('#######################');
			console.warn(Doctor);
			console.warn(Chinese);//父对象的值被篡改
		
		  })()*/

//深拷贝  递归调用 浅拷贝
/*(function(){
		  function deepCopy(p,c){
			  /**	  
			  在js中，这相当于一个赋值语句，如果c的值大于0或为true，那么就把c的值赋给a，否在就把{}的值赋给a
		
			　　布尔值，javascript中以下值会被转换为false
			　　false　　undefined		　　null	　　0		　　-0		　　NaN		　　""		　　''   		  */
			// debugger;
/*			  var c=c||{};
			  for(var i in p)
			  {
				  if(typeof p[i]==='object')//===比较 类型和值   ==只比较值
				  {
				    c[i]=(p[i].constructor==Array?[]:{})
					deepCopy(p[i],c[i]);
				  }else{
					c[i]=p[i];  
				  }
			  }
			  return c;
		  }
		  var Chinese = {
		　　　　nation:'中国',
				citype:['香港','澳门','台湾'],
				addr:{
						a:'五环',
						b:'四环'
					}
		　　};
		  　var Doctor = deepCopy(Chinese);
		　　Doctor.career = '医生';
		　　console.warn(Doctor); // 中国	
			Doctor.citype.push('北京');
			console.warn('##########################')
			console.warn(Doctor);
			console.warn(Chinese);//父对象的 值未被篡改
			Doctor.addr.c='三环';
			console.log('#######################');
			console.warn(Doctor);
			console.warn(Chinese);//父对象的值未被篡改
		  })()*/

(function(){
		// var c=function(){};
		 //console.warn(c.prototype.constructor);//function()
		 //console.warn(c.prototype);Object{}
		 // console.warn(c.constructor);//Function();
		 var c={dd:'d',f:function(){}};
		 console.warn(c.prototype);//undefined
		 console.warn(c.constructor);//Objct();
		  
		  
		  })()










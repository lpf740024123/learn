// JavaScript Document
/*(function(){
		��function Cat() {
		
		��������this.name = "��ë";
		
		����}  		
				
			var cat1 = new Cat();
			alert(cat1.name); // ��ë
			
					��
					
		  
		  })()*/
/*(function(cat){
		  console.warn(cat);
		  var cat1=new cat();
		  //var cat1=new cat();
		  alert(cat1.name);
		  
		  })(function Cat(){this.name="��ë";})

*/

/*
(function(){
		  
		  
		  
		  //�Ͱ汾�����ݵ������
		  ��if (!Object.create) {

		��������Object.create = function (o) {
		
		������������ function F() {}
		
		������������F.prototype = o;
		
		������������return new F();
		
		��������};
		
		����}
		  
		  //
		  var Cat={
			  		name:"��ë",
					makeSound:function(){alert("������")}
			  }
		  var cat1=Object.create(Cat);
		  
		  
		  alert(cat1.name); // ��ë
��		��cat1.makeSound(); // ������
		  
		  
		  
		  })()
*/

//���õķ���
/*
(function(){
		  var Cat ={
			  create:function(){
				  	var cat = {};
					cat.name="��ë";
					cat.makeSound=function(){alert("����")};
					return cat;
				  	
				  }
			  
			  }
		  var cat=Cat.create();
		  cat.makeSound();
		  })()
*/

//�̳�

/*(function(){
		  var Animal={
			  create:function(){
				  var animal={};
				  animal.sleep=function(){alert("˯��")};
				  return animal;
				  }
			  }
		  var Cat={
			  create:function(){
				  var cat=Animal.create();
				  cat.name="��ë";
				  cat.makeSound=function(){alert("����")};
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
		  
		  cat1.name="��ë";
		  cat1.color="��ɫ";
		  
		  var cat2={};
		  
		  cat2.name="��ë";
		  cat2.color="��ɫ";
				
		  
		  
		  })()*/
/*(function(){
		  function Cat(name,color){
			  		return {
						name:name,
						color:color						
						};
			  }
		  var cat1=new Cat("��ë","��ɫ");
		  var cat2=new Cat("��ë","��ɫ");
		  
		  })
*/
/*(function(){
		  function Cat(name,color){
			  this.name=name;
			  this.color=color;
			  }
		  var cat1=new Cat("��ë","��ɫ");
		  var cat2=new Cat("��ë","��ɫ");
		  console.warn(cat1);
		  console.warn(cat2);
		  
		  console.warn(cat1.constructor==Cat)//constructor �Ƕ���ָ��ö���Ĺ��캯��
		  console.warn(cat2.constructor==Cat)//constructor �Ƕ���ָ��ö���Ĺ��캯��
		  
		  //Javascript���ṩ��һ��instanceof���������֤ԭ�Ͷ�����ʵ������֮��Ĺ�ϵ��
		  //�ж϶����Ƿ�����  ������
		  
		  console.warn(cat1 instanceof Cat);
		  console.warn(cat2 instanceof Cat);
		  
		  })()*/
/*(function(){
		  
		  function Cat(name,color)
		  {
			 this.name=name;
			 this.color=color;
		  }
		  Cat.prototype.type="è�ƶ���";
		  Cat.prototype.eat=function(){
			  console.warn("eat mounse");
			  }
		  var cat1=new Cat("��ë","��ɫ");
		  var cat2=new Cat("��ë","��ɫ");
		  console.warn(cat1);//
		  console.warn(cat2);//
		  
		  //�ж�ĳ��prototype�����Ƿ��ʵ�������й�ϵ��  ʵ�������Ƿ��и�prototype����
		  console.warn(Cat.prototype.isPrototypeOf(cat1));//true
		  console.warn(Cat.prototype.isPrototypeOf(cat2));//true
		  
		  //�ж�ʵ������  �������Ƿ��Ǽ̳�prototype���������
		  console.warn(cat1.hasOwnProperty("name"));//true
		  console.warn(cat1.hasOwnProperty("type"));//false
		  
		  //in��������������жϣ�ĳ��ʵ���Ƿ���ĳ�����ԣ������ǲ��Ǳ������ԡ�
		  console.warn("name" in cat1);//true
		  console.warn("type" in cat1);//true
		  //in�������������������ĳ��������������ԡ�
		  for(var proto in cat1)
		  {
			console.warn("cat1["+proto+"]="+cat1[proto])  
		  }
		  })()*/
//���캯���ļ̳�   ���캯����
/*(function(){
		  function Animal(){
			  this.species = "����";
			  }
		  function Cat(name,color){
			  //���캯����
			 // Animal.apply(this,arguments);
			  Animal.call(this,arguments);
			  this.name=name;
			  this.color=color;
			  }
			��var cat1 = new Cat("��ë","��ɫ");
����		  console.log(cat1.species); // ����  
			  
		  })()*/

//���캯���ļ̳�   prototypeģʽ
/*(function(){
		  function Animal(){
			  this.species = "����";
			  }
		  function Cat(name,color){
			  this.name=name;
			  this.color=color;
			  }
			  //Cat��prototype����ָ��һ��Animal��ʵ����
		  	  Cat.prototype=new Animal();
			  /*
			  �κ�һ��prototype������һ��constructor���ԣ�ָ�����Ĺ��캯����
			  ���û��"Cat.prototype = new Animal();"��һ�У�Cat.prototype.constructor��ָ��Cat�ģ�
			  ������һ���Ժ�Cat.prototype.constructorָ��Animal��
			  */
			  
		/*	  console.warn(Cat.prototype.constructor == Animal); //true
			 
			 
			  Cat.prototype.constructor =Cat;
			 
			��var cat1 = new Cat("��ë","��ɫ");
			 /*
			  ÿһ��ʵ��Ҳ��һ��constructor���ԣ�Ĭ�ϵ���prototype�����constructor���ԡ�
			  */
		/*	  console.warn(cat1.constructor==Cat.prototype.constructor);
����		  console.log(cat1.species); // ����  
			  
		  })()*/


/*
���캯���ļ̳�   ֱ�Ӽ̳�prototype  �Եڶ��ַ����ĸĽ�
����Animal�����У���������Զ�����ֱ��д��Animal.prototype�����ԣ�����Ҳ������Cat()���� Animal()��ֱ�Ӽ̳�Animal.prototype��
*/
/*(function(){
		  function Animal(){ }
����	  Animal.prototype.species = "����";
		  function Cat(name,color){
			  this.name=name;
			  this.color=color;
			  }
			  //��Cat��prototype����Ȼ��ָ��Animal��prototype��������������˼̳С�
		  	 ��Cat.prototype = Animal.prototype;
			  /*
			  �κ�һ��prototype������һ��constructor���ԣ�ָ�����Ĺ��캯����
			  ���û��"Cat.prototype = new Animal();"��һ�У�Cat.prototype.constructor��ָ��Cat�ģ�
			  ������һ���Ժ�Cat.prototype.constructorָ��Animal��
			  */
			  
	 /*		  console.warn(Cat.prototype.constructor == Animal); //true
			 
			 
			  Cat.prototype.constructor =Cat;
			 
			��var cat1 = new Cat("��ë","��ɫ");
			 /*
			  ÿһ��ʵ��Ҳ��һ��constructor���ԣ�Ĭ�ϵ���prototype�����constructor���ԡ�
			  */
	 /*		  console.warn(cat1.constructor==Cat.prototype.constructor);
����		  console.log(cat1.species); // ����  
			  
		  })()*/

//���캯���ļ̳�   ���ÿն�����Ϊ�н� �ֲ�ֱ�Ӽ̳� prototype ��ȱ��
/*(function(){
		  
		  
		  
		  
		  function Animal(){ }
����	  Animal.prototype.species = "����";
		  function Cat(name,color){
			  this.name=name;
			  this.color=color;
			  }

	function extend(Child, Parent) {

��������var F = function(){};
��������F.prototype = Parent.prototype;
��������Child.prototype = new F();
��������Child.prototype.constructor = Child;
			//Ϊ�Ӷ�����һ��uber���ԣ��������ֱ��ָ�򸸶����prototype���ԡ���uber��һ������ʣ���˼��"����"��"��һ��"������������Ӷ����ϴ�һ��ͨ��������ֱ�ӵ��ø�����ķ�������һ�з������ֻ��Ϊ��ʵ�ּ̳е��걸�ԣ������������ʡ�
��������Child.uber = Parent.prototype;
����}
		extend(Cat,Animal);
����	var cat1 = new Cat("��ë","��ɫ");
����	console.warn(cat1.species); // ����
		  
		  })()*/
//���캯���ļ̳�   �����̳�  ������

/*(function(){
		  ��function Animal(){}
����		Animal.prototype.species = "����";
			function Cat(name,color){
						  this.name=name;
						  this.color=color;
						  }
//������������ã����ǽ��������prototype�����е����ԣ�һһ������Child�����prototype����
		  	function extend(Child, Parent) {
		��������var p = Parent.prototype;
		��������var c = Child.prototype;
		��������for (var i in p) {
		������������c[i] = p[i];
		������������}
		��������c.uber = p;
		����}
			extend(Cat, Animal);
			var cat1 = new Cat("��ë","��ɫ");
����		console.log(cat1.species); // ����
		  })()*/

//�ǹ��캯���ļ̳�   ������������ͨ���󣬲��ǹ��캯�����޷�ʹ�ù��캯������ʵ��"�̳�"�� object()����
/*(function(){
		  ��var Chinese = {
		��������nation:'�й�'
		����};
//			var Doctor ={
//	��������	career:'ҽ��'
//		����}
//json��ʽ�ķ�����Douglas Crockford�������һ��object()����������������һ�㡣		
			function object(o) {
		��������function F() {}
		��������F.prototype = o;
		��������return new F();
		����}
		    var Doctor = object(Chinese);
			Doctor.career = 'ҽ��';
			console.warn(Doctor);
			
			
			Chinese.nation='����';
			console.warn(Doctor);
			console.warn(Chinese);
			
		  })()
*/


//ǳ����
/*(function(){
		  ��var Chinese = {
		��������nation:'�й�',
				citype:['���','����','̨��'],
				addr:{
						a:'�廷',
						b:'�Ļ�'
					
					}
		����};
		  function extendCopy(o){
			  
			  var c={};
			  for(var i in o){
				  c[i]=o[i]
				  }
			  c.uber=o;
			  return c;
			  }
		  ��var Doctor = extendCopy(Chinese);
		����Doctor.career = 'ҽ��';
		����console.warn(Doctor); // �й�
			
			Doctor.citype.push('����');
			console.warn('##########################')
			console.warn(Doctor);
			console.warn(Chinese);//������� ֵ���۸�
			Doctor.addr.c='����';
			console.log('#######################');
			console.warn(Doctor);
			console.warn(Chinese);//�������ֵ���۸�
		
		  })()*/

//���  �ݹ���� ǳ����
/*(function(){
		  function deepCopy(p,c){
			  /**	  
			  ��js�У����൱��һ����ֵ��䣬���c��ֵ����0��Ϊtrue����ô�Ͱ�c��ֵ����a�����ھͰ�{}��ֵ����a
		
			��������ֵ��javascript������ֵ�ᱻת��Ϊfalse
			����false����undefined		����null	����0		����-0		����NaN		����""		����''   		  */
			// debugger;
/*			  var c=c||{};
			  for(var i in p)
			  {
				  if(typeof p[i]==='object')//===�Ƚ� ���ͺ�ֵ   ==ֻ�Ƚ�ֵ
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
		��������nation:'�й�',
				citype:['���','����','̨��'],
				addr:{
						a:'�廷',
						b:'�Ļ�'
					}
		����};
		  ��var Doctor = deepCopy(Chinese);
		����Doctor.career = 'ҽ��';
		����console.warn(Doctor); // �й�	
			Doctor.citype.push('����');
			console.warn('##########################')
			console.warn(Doctor);
			console.warn(Chinese);//������� ֵδ���۸�
			Doctor.addr.c='����';
			console.log('#######################');
			console.warn(Doctor);
			console.warn(Chinese);//�������ֵδ���۸�
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










const { log, count } = require("console");
const { parseInt, sum } = require("lodash");

const prompt = require("prompt-sync")();

// const prompt = require("readline-sync")


// let a = Number(prompt("enter your date: "))
// let b= (prompt("enter your month: "))
// let c= Number(prompt("enter the year:"))

// console.log(a,b,c);

// let b = Number(prompt("Enter a number"))
// console.log(b);

let a =Number(prompt("enter a number"))
let b = Number(prompt("enter a number"))
 c= (a*b/a)
 d= (a*b/b)
 console.log(c,d);

// let a= Number(prompt("enter a number")) 
// let b= Number(prompt("enter a number"))
// c= (a+b)
// d= (a-b)
// e= (a*b)
// f= (a/b)
// g= (a%b)
// console.log(c,d,e,f,g);

// let a= Number(prompt("enter the number"))
// let b= Number(prompt("enter the number"))
// c= (a/b)
// d= (a%b)
// console.log(c,d);

// let a= Number(prompt("enter the number"))
// b=(a%10)
// console.log(b)

// let p= Number(prompt("enter the number"))
// let r= Number(prompt("enter the number"))
// let t= Number(prompt("enter the number"))
// console.log(ci=(p*r*t)/100);

// let p= Number(prompt("enter the number"))
// let r= Number(prompt("enter the number"))
// let t= Number(prompt("enter the number"))
// console.log(p*(1-r/100)**t);

// let a= Number(prompt("enter the number"))
// let b= Number(prompt("enter the number"))
//  c= Math.floor(a/b)
// d= a-c
// console.log(d);

// let a= Number(prompt("enter the number"))
// let b= Number(prompt("enter the number"))
// if(a>=b){
//     console.log(a)
// }else{
//     console.log(b)
// }

// let a= Number(prompt("enter the number"))
// if(a%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// let a= Number(prompt("enter the number"))
// if (a>0) {
//     console.log("positive");
// }else if (a==0){
//     console.log("zero");
// }
// else{
//     console.log("negative");
// }




// let a= Number(prompt("enter the number"))
// let b= Number(prompt("enter the number"))
// let c= Number(prompt("enter the number"))


// let a= Number(prompt("enter the number"))
// if(a%4==0 && a%100!==0 ||a%400==0){
//     console.log("its a leap year ");
// } else {
//     console.log("its not a leap year");
// }
    

// console.log('happy','birthday','to','you');

// let nums = [1, 2, 3]
// nums[0] = 44
// console.log(nums);


// let a= Number(prompt("enter the number"))
// let b= Number(prompt("enter the number"))
// c = Math.floor(a/b)
// console.log(c);


// math method
// let a= Math.ceil(15.3)   upward value
// console.log(a);



// var a = Math.max(12,34,12,78979,43)
// console.log(a); 

// let a= 5000
// let b= 15000
// let c= 10000

// d= (a*12+b*12+c)
// console.log(d
//     );

// let age= Number(prompt("enter the number"))
// if (age>=18 && age<60){
//     console.log("adult");
// }else if (age>=60){
//     console.log("senior");
// }
// else if (age<18){
//     console.log("Minor");
// }

// let a= Number(prompt("enter the number"))
// if (a%5==0) {
//     console.log("its divisible");
// }
// else{
//     console.log("its not multiple");
// }


// let a= Number(prompt("enter the number"))
// if (a>=80 && a<=100) {
//     console.log("GRADE a");
// } else if(a>=70 && a<=79){
//     console.log("GRADE b");
// }else if (a>=60 && a<=69){
//     console.log("GRADE C");
// }else if (a>=50 && a<=59){
//     console.log("GRADE d");
// }
// else if(a>=0 && a<=49){
//     console.log("GRADE f");
// }


// for (let i = 1; i < 100; i++) {
//     console.log("kaustubh");
    
// }

// let a= Number(prompt("enter the number"))
// let b= Number(prompt("enter the number"))
// let c= Number(prompt("enter the number"))
// if (a>=b && a>=c) {
//     console.log(a);
// }
// else if(b>=a && b>=c) {
// console.log(b);
// }
// else if(c>=a && c>=b){
//     console.log(c);
// }


// let a= Number(prompt("enter the number"))
// let b= Number(prompt("enter the number"))
// let c= Number(prompt("enter the number"))
// let d= Number(prompt("enter the number"))
// if (a>b && a>c && a>d) {
//     console.log(a);
// }
// else if(b>=a && b>=c && b>=d){
//     console.log(b);
// }
// else if (c>=a && c>=b && c>=d){
//     console.log(c);
// }
// else if (d>=a && d>=b && d>=c){
//     console.log(d);
// }



// let b= Number(prompt("enter the number"))
// if (b<=10000) {
//     console.log(b+b*20/100+b*80/100);
// }
// else if (b<=20000){
//     console.log(b+b*25/100+b*90/100);
// }
// else if (b>20000){
//     console.log(b+b*30/100+b*95/100);
// }


// let b= Number(prompt("enter the number"))
// if (b<=50) {
// console.log((b*0.50));    
// }
// else if (b<=150){
//     console.log(((b-50)*0.75+50*0.50));
// }
// else if(b<=250){
//     console.log(((b-100)*1.20+100*0.75+50*0.50));
// }
// else if (b>250){
//     console.log((a-250)*1.50+100*1.20+100*0.75+50*0.50);
// }

// let sum= 0
// let n= Number(prompt("enter the number"))
// for (i=1; i<n; i++) {
//     sum+= (i+1)
// }
// console.log(sum);
// console.log("welcome to amrik sukdev");
// let k = time
// if ( k>=7 && k<=12) {
//     console.log("good morning sir,we have a dilicios breakfast");
// }
// else if (k>12 && k<=16){
// console.log("good afternoon sir,we have a dilicios lunch ");
// }
// else if (k>13 && k<=24){
//     console.log("good evening sir,we have a dilicius dinner ");
// }



// let a =prompt("enter the number")
// if (a%2==0) {
//     console.log("even");
// }                           odd or even check
// else if (a%2!=0){
//     console.log("odd");
// }




// let a= Number(prompt("enter the number"))
// let operator=prompt("enter the operator")
// let b = Number(prompt("enter the number"))

// if(operator=="+"){
//     console.log(a+b)
// }
// else if(operator=="-"){
//     console.log(a-b)
// }
// else if(operator=="*"){
//     console.log(a*b);
// }
// else if(operator=="/"){
//     console.log(a/b);
// }

// let a=prompt("enter the number:-");
// for (let k=1; k<=a; k++){
//     if(k%2==0){
//         console.log(k);
//     }
// }

// let a= prompt("enter the number")
// for (i=1; i<=a; i++){
// if(i%2!==0){
//     console.log("odd=",i);
// }
// }

// for( let  i=1;i<50;i++ ){
//     console.log("hello kaustubh");
// }

// let sum=0
// let a= prompt("enter a number")
// for( i=1; i<=a; i++){
//     sum=sum+i
// }
// console.log("sum=",sum);



// let a=prompt("enter the number:-");
// console.log(a);

// const a=require("readline-sync");
// let b=a.question("enter the number:-");
// console.log(b);


// let sum= 0
// let n= prompt("enter a number")
// for (i=1; i<n ;i++){
//     if (i%2==0) {
//        sum= sum+i
//     }

// }
// console.log(sum);


// let n= prompt("enter a number")
// for(i=1 ;i<=n ;i++){
//     console.log("bedanti");
// }

// let sum = 0
// let a= prompt("enter a number")
// let b= prompt("enter a number")
// for( i=a ; i<=b ; i++){
//     sum=parseInt(sum)+i
//     console.log(sum)

// }

// let sum= 0
// let a= prompt("enter a number")
// let b= prompt("enter a number")
// for(i=a ;i<=b ;i++){
//     sum=parseInt(sum)+i
// }
// console.log(sum)

// let a= prompt("enter a number") //range even
// let b= prompt("enter a number")
// for (i=a ; i<b ; i++){
// if (i%2===0) {
//     console.log(i);
// }
// }

// let a= prompt("enter a number") //range odd
// let b= prompt("enter a number")
// for (i=a ; i<b ; i++){
// if (i%2!=0) {
//     console.log(i);``
// }
// }


// var a= 35;
// let userinput =pompt("enter a number")
// console.log(userinput);
// while (a!= userinput) {     
//     userinput= prompt(" you guess the wrong number")
// }
// console.log("congratulation you won the game ");


// let str = `kaustubh is a king of navgurkul`
// console.log(str[0,1,2])  //string 

// let c=0
// let a= prompt("enter a number")
// for( let i=0; a>0;  a=Math.floor(a/10)){
//     c=c+1
// }
// console.log(c);


// let sum = 0
// let a= prompt("enter a number") 
// for( i=1; a>0; a= Math.floor(a/10)){
//     console.log(a);
// }


// let a=2255
// console.log(Math.PI);

// let a= prompt("enter a number") 
// let b= prompt("enter a number") 
// let c= prompt("enter a number") 
// let d= prompt("enter a number") 

// console.log(Math.max(a,b,c,d));

// let a= prompt("enter a number") 
// let b= prompt("enter a number") 
// let c= prompt("enter a number") 
// let d= prompt("enter a number") 

// console.log(Math.min(a,b,c,d));

// let n= prompt("enter a number") 
// let temp;

// let re = 0
// while(n>0){
//     temp = n%10
//     re+=temp
//     n-=temp
//     n/=10
//     if (n>0){re*=10}

// }
// console.log(re);

// for(let n2=n;n2>0;n2/=10){
//     temp = n2%10
//     re+=temp
//     n2-=temp
//     if(n2>0){
//         re*=10
//     }
// }
// console.log(re);

// let n= prompt("enter a number") 
// if(n>0){
//     console.log("this is positive number");
// }
// else if(n==0){
//     console.log("this is zero");
// }
// else {
//     console.log("this is negative number");
// }

// let n= prompt("enter a number")
// if(n=>0){
//     if(n==0){
//         console.log("this number is zero");
//     }else{
//         console.log("this is positive number");
//     }
// }else{
//     console.log("this is negative mumber");
// }



// let a= prompt("enter a number")        
// let b=a;
// let rem=0;
// while(b>0){
//     rem= (rem*10)+(b%10)
//     b= Math.floor(b/10)
// }
// if(rem==a){
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");
// }

// let a= prompt("enter a number")         
// // let digit=0; 
// let sum =0;
// while (a>0) {
//     sum+=a%10
//     // sum =sum+digit
//     a=Math.floor(a/10)
// }
// console.log(sum);


// let a= prompt("enter a number")
// let c=0;
// let k=0  
// while(a>0){
//    k=a%10
//    c=c+1
//    a=Math.floor(a/10)
// }
// console.log(c);


// let a= Number(prompt("enter the number"))
// if(a%4==0 && a%100!==0|| a%400==0){
//     console.log("leap year");
// }
//  else{
//     console.log("not leap year");
//  }


// let x= Number(prompt("enter the number"))
// let y= Number(prompt("enter the number"))
// console.log(~~(x/y))


// let a= Number(prompt("enter the number: "))
// let b = Number(prompt("enter the value of divider: "))


// let x = Number(prompt("enter the number: "))
// let y = Number(prompt("enter the number: "))

// let a = x%y
// x= x-a
// let f= x/y
// console.log(f);




// let a=[];
// for (let i=0; i<10; i++){
//     let b=Number(prompt("enter the number of array:-"));
//     a.push(b);
// }
// console.log(a);        //[23,45,67,89,12,21,32,23,34,43]
// let p=[]
// for (let i=0; i<a.length; i++){
//     let temp=a[i];
//     let c=0;
//     for (let j=1; j<=temp; j++){
//         if (temp%j==0){
//             c++;
//         }
//     }
//     if (c==2){
//         p.push(temp);
//     }
// }
// console.log(p);



// let a= Number(prompt("enter the number: "))
// let b=a;
// let c=0;
// while(b>0){
//   b= Math.floor(b/10)
//   c++
// }
// console.log(a,c)
// let d=a;
// console.log(d);
// let s=0;
// let rem=0;
// while(d>0){
//     rem=d%10;
//     s+=rem**c;
//     d=Math.floor(d/10)
// }
// if (a==s){
//     console.log("Armstrong")
// }
// else{
//     console.log("NOt Armstrong")
// }
// console.log(s)

// let a= Number(prompt("enter the number:-"));
// let b= Number(prompt("enter the number:-"));           //345  ///123
// for (let i=a; i<=b; i++){
//     let count=0;
//     let save=i;
//     while(save>0){
//         count++;
//         save=Math.floor(save/10);
//     }
//     let secondsave=i;
//     let sum=0;
//     while(secondsave>0){
//         let rem=secondsave%10;
//         sum+=rem**count;
//         secondsave=Math.floor(secondsave/10);
//     }
//     if (sum==i){
//         console.log("number is armstrong:-",i);
//     }
//     else{
//         console.log("number is not armstrong:-",i)
//     }
// }

//26

// let m= prompt("enter the number");
// let n= prompt("enter the number");
// let s=0;
// for(i=m; i<=n; i++){
//  s=Number(s+i)
// }
// console.log(s);


//25

// let a= prompt("enter a number")  
// let b= prompt("enter a number")
// let kum=0;
// let k=0;
// for(i=a; i<b; i++){
//     if(i%2!=0){
//         kum=parseInt(kum+i)
//     }
// }
// console.log(kum);



//28

// let a= prompt("enter a number")  
// let c=0;
// while(a>0){
//  a=Math.floor(a/10)
//  c=c+1
// }
// console.log(c);

//24

// let a= prompt("enter a number")  
// for(i=1; i<a; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


//29


// let a= prompt("enter a number") 
// let d=0;
// let kum=0;
// while(a>0){
//     d=(a%10)
//     a=Math.floor(a/10)
//     kum=parseInt(kum+d)
// }
// console.log(kum);


//31

// let a= prompt("enter a number")
// let d=0;
// let r=0;
// while(a>0){
//     d=(a%10)
//     r= (r*10+d)   
//     a= Math.floor(a/10)
// }
// console.log(r)


//32

// let a =prompt("enter the number")
// let c=0;
// for(i=1; i<=a; i++){
//    if(a%i==0)
//    c=c+1
// }
// if (c==2) {
//     console.log("its a prime number");
// }
// else {
//     console.log("its a not prime number");
// }


//33

// let a =prompt("enter the number")
// let b=a
// let factor=0;
// for(i=1; i<a; i++){
//     if(a%i==0)
//     factor=factor+i
// }
// if (factor==b){
//     console.log("its perfect number");
// }
// else{
//     console.log("its not perfect number");
// }

// let a=null
// a=5
// console.log(a);


// let a=BigInt(9898897437439859)
// console.log(a);

// let a=5
// console.log(++a);


// let  c=35
// {let c=45

// }
// console.log(c);

// let a=5
// if(!a){
//     console.log();
// }a


// /
// if(a>18){
//     console.log("eligible for vote");
// }
// else{
//     console.log("not eligible");
// }

// let a =prompt("enter the number")
// let b =prompt("enter the number")
// for(i=1; i<=b;i++){
//     console.log(a*i);
// }

// let array =[1,5,6]
// console.log(array.length);




                  //array

let arr=[1,4,6,7,8];
numbers.splice(1,2)


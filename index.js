const now = new Date();
const test = new Date();

//1 It s a variable of the Date function
//2 

console.log(typeof now) //Object

//3 The Date is a function
//4

console.log(typeof Date) //Function

//5

console.log(now) //Current date and time

//6

console.log(Date) //[Function: Date]

//7

console.log(new Date()) //same as console.log(now)

//8 Yes it is truthy
//9

console.log(now === test) //It s false because they re different variables, although they have same values

//10

console.log(now === Date) // False. Now s a variable and object and date is a function 

//11

console.log(now === new Date()) //False. 

//12

console.log(new Date() === new Date()) //False.




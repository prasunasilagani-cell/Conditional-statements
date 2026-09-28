///if-else
 //1.3-digit number or not
let num=123
if(num>=100&&num<=999){
    console.log("The given number",num,"3-digit number");
}    
else{
    console.log("The given number",num,"Not a 3-digit number");
    
}

 //2.divisible by 3 and 5 or not
let n=15
if(n%3==0&&n%5==0){
    console.log("The given number",n,"Divisible by 3 and 5");
} 
else{
    console.log("The given number",n,"Not divisible by 3 and 5");
    
}

//3.Triangle is valid or not
let s1=3
let s2=2
let s3=6
if(s1+s2>s3&&s2+s3>s1&&s3+s1>s2){
    console.log("Valid Triangle");
}
else{
    console.log("Invalid Triangle");
}

//4.Multiple of 10 or not
let mul=100
if(mul%10==0){
    console.log("The given number",mul,"is the multiple of 10");
}
else{
    console.log("The given number",mul,"is not multiple of 10");
    
}


///if-elseif-else
//1.Types of triangle
let si1=3
let si2=4
let si3=5
if(si1==si2&&si2==si3){
    console.log("Equilateral triangle");
}
else if(si1==si2||si2==si3||si1==si3){
    console.log("Isoceles triangle"); 
}
else{
    console.log("Scalene triangle");
    
}

//2.Electricity bill
let units=100
if(units>=0&&units<=100){
    bill=units*2
    console.log("The electricity bill is",bill);
}
else if(units>100&&units<=200){
    bill=unts*3
    console.log("The electricity bill is",bill);
}
else if(units>200&&units<=300){
    bill=unts*5
    console.log("The electricity bill is",bill);
}
else {
    bill=unts*7
    console.log("The electricity bill is",bill);
}

//3.display age category
let age=20
if(age<13){
    console.log("Child");
}
else if(age>=13&&age<=19){
    console.log("Teenager");
}
else if(age>=20&&age<=60){
    console.log("Adult");
}
else{
    console.log("Senior Citizen");
}

//4.discount in shopping
let amt=2000
if(amt<1000){
    console.log("No discount is applied and the bill is",amt);
}
else if(amt>=1000&&amt<2000){
    bill=amt*(10/100)
    console.log("10% discount is applied and the bill is",bill);  
}
else if(amt>=2000&&amt<3000){
    bill=amt*(20/100)
    console.log("20% discount is applied and the bill is",bill);  
}
else {
    bill=amt*(30/100)
    console.log("30% discount is applied and the bill is",bill);  
}

//5.Months
let month=100
if(month==12||month==1||month==2){
    console.log("Winter");
}
else if(month>=3&&month<=5){
    console.log("Spring");
}
else if(month>=6&&month<=8){
    console.log("Summer");
}
else if(month>=9&&month<=11){
    console.log("Autumn");
}
else{
    console.log("Enter the numbers between 1 to 12");
}

//6.Leap year
let year=2021
if(year%400==0){
    console.log("Leap year");
}
else if(year%4==0&&year%100!=0){
    console.log("Leap year");
}
else{
    console.log("Not a Leap year");
    
}
////nested if problems
//1.Eligible to donate blood
let age1=17
let weight=60
if(age1>=18&&age1<=60){
    if(weight>50){
        console.log("Eligible to donate blood");
    }
    else{
        console.log("Candidate is underweight.Not eligible to donate blood."); 
    }
}   
else{
    console.log("Candidate is underage.Not eligible to donate blood.");
    
} 

//2.Grade
let m1=40
let m2=30
let m3=60
let m4=45
if(m1>21&&m2>21&&m3>21&&m4>21){
    avg=(m1+m2+m3+m4)/4
    if(avg>90){
        console.log("Grade:O");
    }
    else if(avg>70&&avg<=90){
        console.log("Grade:A");
    }
     else if(avg>50&&avg<=70){
        console.log("Grade:B");
    }
     else if(avg>40&&avg<=50){
        console.log("Grade:C");
    }
     else if(avg>36&&avg<=40){
        console.log("Grade:D");
    }
    else{
        console.log("Fail");
    }
}
else{
    console.log("The candidate is fail in subjects");
    
}

//3.Eligibility for scholarship
let Age=20
let score=90
if(Age>=18){
    if(score>86){
        console.log("The candidate is eligible for scholarship");
    }
    else{
        console.log("The candidate doesnot have sufficient score");
    }
}
else{
    console.log("The candidate is underage not eligible for scholarship");
    
}
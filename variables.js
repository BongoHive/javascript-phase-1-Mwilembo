// you solution should be here
var birth_year = 1996;
var future_year = 2029;
var present_year = 2019;
//Two possible ages
var future_age = future_year - birth_year;
var present_age = present_year - birth_year;
//current age variable
var current_age = 23;
//maximum age variable
var max_age = 120;
//estimated amount variable
var est_amount = 10;
//Calculation of max_age in days
var max_age_days = max_age * 365;
//calculation of max_age_days by estimated amount variable to find out the total eat for the rest of life
var total = max_age_days * est_amount;
console.log("You will need" + total + "to last you until the ripe old age of" + max_age +".");

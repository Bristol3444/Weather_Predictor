var experience = ['casual', 'semi-formal', 'formal'];
var clothingSuggestion = ['comfy', 'polo', 'suit'];
var outerWear = ['coat', 'jacket', 'no jacket'];
 
var eventType = prompt("What is the type of event?");
var tempFahr = prompt("What is the temperature outside?");
 
if (eventType === 'casual' && tempFahr >= 70) {
  var result = ("Since it is " + tempFahr + " degrees out, you can wear something " + clothingSuggestion[0] + " with " + outerWear[2] + ".");
  console.log(result);
}
else if (eventType === 'casual' && (tempFahr > 54 && tempFahr < 70)) {
  var result = ("Wear something " + clothingSuggestion[0] + " but keep a " + outerWear[1] + " handy, because the temperature is " + tempFahr + " degrees outside.");
  console.log(result);
}
else if (eventType === 'casual' && tempFahr <= 54) {
  var result = ("BRRR! Even though it is " + experience[0] + " you will still need a " + outerWear[0] + " for a " + tempFahr + " degree day.");
  console.log(result);
}
if (eventType === 'semi-formal' && tempFahr >= 70) {
  var result = ("You want to wear a " + clothingSuggestion[1] + " but " + outerWear[2] + " because it is " + tempFahr + " degrees.");
  console.log(result);
}
else if (eventType === 'semi-formal' && (tempFahr > 54 && tempFahr < 70)) {
  var result = ("Wear a " + clothingSuggestion[1] + " but bring a " + outerWear[1] + " because it is " + tempFahr + " degrees.");
  console.log(result);
}
else if (eventType === 'semi-formal' && tempFahr <= 54) {
  var result = (tempFahr + " Degrees! Yikes! Wear a nice " + clothingSuggestion[1] + " and bring a " + outerWear[0] + ". It's cold!")
  console.log(result);
}
if (eventType === 'formal' && tempFahr >= 70) {
  var result = ("It's fancy so wear a " + clothingSuggestion[2] + " and " + outerWear[2] + " since it is " + tempFahr + " degrees out.");
  console.log(result);
}
else if (eventType === 'formal' && (tempFahr > 54 && tempFahr < 70)) {
  var result = (" I would wear a " + outerWear[1] + " over your " + clothingSuggestion[2] + " since it is " + tempFahr + " degrees outside.");
  console.log(result);
}
else if (eventType === 'formal' && tempFahr <= 54) {
  var result = ("Looks like it's the Opera at the North Pole. Get out your nicest " + outerWear[0] + " to wear over your " + clothingSuggestion[2] + " . It's only " + tempFahr + " degrees out!")
  console.log(result);
}
if (eventType != 'casual' && eventType != 'semi-formal' && eventType != 'formal') {
	console.log("You're at the wrong party!");
}

var evenType = ['casual', 'semi-formal', 'formal'];
var clothingSuggestion = ['comfy', 'polo', 'suit'];
var outerWear = ['coat', 'jacket', 'no jacket'];
 
var eventType = prompt("What is the type of event?");
var tempFahr = prompt("What is the temperature outside?");
 
if (eventType === 'casual' && tempFahr >= 70) {
  console.log("Since it is " + tempFahr + " degrees out, you can wear something " + clothingSuggestion[0] + " with " + outerWear[2] + ".");
}
else if (eventType === 'casual' && (tempFahr > 54 && tempFahr < 70)) {
  alert("Wear something " + clothingSuggestion[0] + " but keep a " + outerWear[1] + " handy, because the temperature is " + tempFahr + " degrees outside.");
}
else if (eventType === 'casual' && tempFahr <= 54) {
  alert("BRRR! Even though it is " + evenType[0] + " you will still need a " + outerWear[0] + " for a " + tempFahr + " degree day.");
}
if (eventType === 'semi-formal' && tempFahr >= 70) {
  alert("You want to wear a " + clothingSuggestion[1] + " but " + outerWear[2] + " because it is " + tempFahr + " degrees.");
}
else if (eventType === 'semi-formal' && (tempFahr > 54 && tempFahr < 70)) {
  alert("Wear a " + clothingSuggestion[1] + " but bring a " + outerWear[1] + " because it is" + tempFahr + " degrees.");
}
else if (eventType === 'semi-formal' && tempFahr <= 54) {
  alert(tempFahr + " Degrees! Yikes! Wear a nice " + clothingSuggestion[1] + " and bring a " + outerWear[0] + " . It's cold!")
}
if (eventType === 'formal' && tempFahr >= 70) {
  alert("It's fancy so wear a " + clothingSuggestion[2] + " and " + outerWear[2] + " since it is " + tempFahr + " degrees out.");
}
else if (eventType === 'formal' && (tempFahr > 54 && tempFahr < 70)) {
  alert(" I would wear a " + outerWear[1] + "over your " + clothingSuggestion[2] + " since it is " + tempFahr + " degrees outside.")
}
else if (eventType === 'formal' && tempFahr <= 54) {
  alert("Looks like it's the Opera at the North Pole. Get out your nicest " + outerWear[0] + " to wear over your " + clothingSuggestion[2] + " . It's only " + tempFahr + " degrees out!")
}
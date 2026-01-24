//String

let January = "winter";
console.log(January);

let march = "spring";
console.log(march);

let august = `summer`;
console.log(august);

//String Length

let ice = "go home";
console.log(ice.length);

let winter = "I am tired of it";
console.log(winter.length);

const qa = `I'have had enough of bugs`;
console.log(qa.length);

let dog = "bark";
console.log(dog.length);

let cow = "moo";
console.log(cow.length);

let france = "Paris";
console.log(france.length);

let usa = "Washington";
console.log(usa.length);

let italy = "Rome";
console.log(italy.length);

let yellow = "sun";
console.log(yellow.length);

let lemon = "sour";
console.log(lemon.length);

//Accessing characters
let car = "drive";
console.log(car[2]);

let phone = "call";
console.log(phone[1]);

let sun = "hot";
console.log(sun[0]);

let book1 = "read";
console.log(book1[0]);

let music = "sound";
console.log(music[2]);

let fire = "burn";
console.log(fire[1].length);

let water = "drink";
console.log(water[3].length);

let niceflower = "smell";
console.log(niceflower[0]);

let rain = "wet";
console.log(rain[1]);

//Changing case
let city = "New York";
console.log(city.toLocaleLowerCase());

let country = "United States";
console.log(country.toLowerCase());

let color = "Dark blue";
console.log(color.toLowerCase());

let drink = "Green tea";
console.log(drink.toLocaleUpperCase());

let animal = "Black cat";
console.log(animal.toUpperCase());

let place = "Big park";
console.log(place.toLowerCase());

let food = "Hot soup";
console.log(food.toUpperCase());

let coolcar = "fast car";
console.log(coolcar.toUpperCase());

let weather = "Cold rain";
console.log(weather.toLowerCase());

let sound = "Soft sound";
console.log(sound.toUpperCase());

//4. Trimming Spaces

let book = "  old story  ";
console.log(book.trim());

let smile = "   Brighit face  ";
console.log(smile.trim());

let night = "  dark sky ";
console.log(night.trim());

let flower = "  red petal  ";
console.log(flower.trim());

let dream = "  Sweet dream  ";
console.log(dream.trim());

let bigcity = "   big street   ";
console.log(bigcity.trim());

let friend = "   Kind heart   ";
console.log(friend.trim());

let sunset = "   warm light ";
console.log(sunset.trim());

// Slice (start,end)

let name = "AnnaSmith";
console.log(name.slice(0, 4));

let bestcity = "New York";
console.log(bestcity.slice(0, 3));

let redbook = "old Story book";
console.log(redbook.slice(4));

let movie = "Dark Night Movie";
console.log(movie.slice(4, 9));

let title = "Master JavaScript Course";
console.log(title.slice(6));

let address = "221 Baker Street London";
console.log(address.slice(3));

let event = "Summer Music Festival";
console.log(event.slice(6));

let meeting = "Weekly Team Sync";
console.log(meeting.slice(6, 11));

let company = "Global Tech Solutions";
console.log(company.slice(6));

let airport = "Los Angeles Airport";
console.log(airport.slice(11));

// Replace

let greeting = "Hello old friend";
console.log(greeting.replace("Hello old friend", "Hello friend"));

let jobTitle = "Junior QA Engineer";
console.log(jobTitle.replace("Junior", "Senior"));

let statusMessage = "order is not completed";
console.log(statusMessage.replace("not", ""));

let comment = "This test is very slow";
console.log(comment.replace("slow", "fast"));

let errorText = "Error: access denied";
console.log(errorText.replace(":access denied", ""));

let userRole = "User has guest access";
console.log(userRole.replace("guest", "admin"));

let notification = "Your password is week";
console.log(notification.replace("week", "strong"));

let description = "This featcher is outdated";
console.log(description.replace("This", ""));

let response = "Server returned bad response";
console.log(response.replace("bad", ""));

let message = "Please update old version";
console.log(message.replace("old", ""));

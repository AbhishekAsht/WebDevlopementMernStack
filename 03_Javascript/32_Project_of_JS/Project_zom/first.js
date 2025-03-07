const restaurant = [];
const images = ["First","second","third","fourth","fifth","sixth","seventh",'Eigth',"nine","tenth"]
const rest_name = ["The Gourmet Haven",
  "Spice Symphony",
  "Urban Bites",
  "Farm to Table",
  "Ocean Delights",
  "Fusion Fiesta",
  "The Cozy Corner",
  "Sunset Grill",
  "The Green Plate",
  "Golden Wok",
  "Savory Street",
  "Pasta Paradise",
  "Burger Bliss",
  "Sushi Spot",
  "Mediterranean Magic",
  "The Rustic Table",
  "Bistro Bliss",
  "Street Eats",
  "The Chocolate Box",
  "Breakfast Club"];
  const foodTypes = [
    "Italian",
    "Chinese",
    "Mexican",
    "Indian",
    "Japanese",
    "Mediterranean",
    "Thai",
    "American",
    "French",
    "Korean"
  ];
  const delhiLocations = [
    "Connaught Place",
    "Chandni Chowk",
    "Hauz Khas Village",
    "Saket",
    "Karol Bagh",
    "Lajpat Nagar",
    "Rajouri Garden",
    "Khan Market",
    "Vasant Kunj",
    "Dwarka"
  ];

for(let i=0;i<100;i++){
    
    const obj = {};
    obj["image"] = images[Math.floor(Math.random()*10)];
    obj["name"] = rest_name[Math.floor(Math.random()*20)];
    obj['rating'] = Math.floor(Math.random()*5+1);
    obj["food_type"] = foodTypes[Math.floor(Math.random()*10)];
    obj["Price_for_two"] = Math.floor(Math.random()*2401+100);
    obj["location"] =  delhiLocations[Math.floor(Math.random()*10)];
    obj["Distance_from_Customer_house"] = (Math.random()*10+1).toFixed(1);
    obj["offers"] = Math.floor(Math.random()*30);
    obj["alcholol"] = Math.random() > 0.7;
    obj["Restaurant_open_time"] = Math.floor(Math.random()*24);
    obj["Restaurant_close_time"] =  (obj["Restaurant_open_time"]+12)%24;


    restaurant.push(obj);
}

console.log(restaurant);


// Array convert into JSON (Homework);
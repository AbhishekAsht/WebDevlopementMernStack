const fs = require('fs');
const restaurant = [];

for(let i=0;i<100;i++){
    const obj = {};
    obj["image"] = ["First","second","third","fourth","fifth","sixth","seventh","Eigth","nine","tenth"][Math.floor(Math.random()*10)];
    obj["name"] = [
        "Tasty Treats",
        "Spice Symphony",
        "Urban Eatery",
        "The Hungry Fork",
        "Gourmet Delight",
        "Fusion Feast",
        "Crispy Corner",
        "Flavor Junction",
        "Sizzle & Spice",
        "The Rustic Spoon",
        "Golden Plate",
        "Taste Haven",
        "Bistro Bliss",
        "Savory Spot",
        "The Foodie's Hub",
        "Epicurean Escape",
        "Zesty Bites",
        "The Culinary Table",
        "Wholesome Cravings",
        "The Dining Den",
    ][Math.floor(Math.random()*20)];
    obj["rating"] = Math.floor(Math.random()*5+1);
    obj["food_type"] = ["Indian", "Chinese", "Italian", "Mexican", "Japanese", "Thai"][Math.floor(Math.random() * 6)];
    obj["price_for_two"] = Math.floor(Math.random()*2401+100);
    obj['location'] = [
        "Connaught Place",
        "India Gate",
        "Red Fort",
        "Qutub Minar",
        "Humayun's Tomb",
        "Lodi Gardens",
        "Chandni Chowk",
        "Dilli Haat",
        "Akshardham Temple",
        "Lotus Temple",
        "Jama Masjid",
        "Delhi Zoo",
        "Raj Ghat",
        "Purana Qila",
        "Hauz Khas Village",
        "Khan Market",
        "Gurudwara Bangla Sahib",
        "National Museum",
        "ISKCON Temple",
        "Safdarjung Tomb"
    ][Math.floor(Math.random()*20)];

    obj["distance_from_Customer_house"] = (Math.random()*10).toFixed(1);
    obj["offers"] = Math.floor(Math.random()*31);
    obj["alcohol"] = Math.random() > 0.7;
    obj["restaurant_open_time"] = Math.floor(Math.random()*24);
    obj["restaurant_close_time"] = (obj["restaurant_open_time"]+12)%24;

    restaurant.push(obj);
};

console.log(restaurant);

const jsonData = JSON.stringify(restaurant, null, 4);  
fs.writeFileSync('arrayData.json', jsonData, 'utf8');


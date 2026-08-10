function topRatedRestaurant(restaurants) {

    if (Array.isArray(restaurants) === false || restaurants.length <= 0) {
        return "Invalid";
    }
    for (let i = 0; i < restaurants.length; i++) {

        if (typeof restaurants[i] === "number" || typeof restaurants[i] === "string") {
            return "Invalid";
        }
    }
    let topRate = 0;
    let topRestaurant = "";

    for (const restaurant of restaurants) {
        if (restaurant.rating > topRate) {
            topRate = restaurant.rating;
            topRestaurant = restaurant.name;
        }
    }

    return topRestaurant.toUpperCase();
}

console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]))
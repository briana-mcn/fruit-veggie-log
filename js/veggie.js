
var food = {
    "beet": {
        "id": 1,
        "common_name": "Beet",
        "scientific_name": "Beta vulgaris",
        "family": "Amaranthaceae",
        "origin": "Europe",
        "consume_raw": "YES",
        "nutrition": {
            "carbohydrates": "10g",
            "fats": "11g",
            "protein": "12g"
        },
        "image": "pictures/beet.jpeg"
    },

    "brussel_sprout": {
        "id": 2,
        "common_name": "Brussel Sprout",
        "family": "Brassicaceae",
        "scientific_name": "Brassica oleracea gemmifera",
        "origin": " Western Europe",
        "consume_raw": "NO",
        "nutrition": {
            "carbohydrates": "1g",
            "fats": "16g",
            "protein": "15g"
        },
        "image": "pictures/brussel_sprouts.jpg"
    },

    "spinach": {
        "id": 1,
        "common_name": "Spinach",
        "family": " Amaranthaceae",
        "scientific_name": "Spinacia oleracea",
        "origin": "Persia",
        "consume_raw": "YES",
        "nutrition": {
            "carbohydrates": "10g",
            "fats": "10g",
            "protein": "10g"
        },
        "image": "pictures/spinach.jpeg"
    },
    "eggplant": {
        "id": 1,
        "common_name": "Eggplant",
        "scientific_name": "Solanum melongena",
        "family": "Solanaceae",
        "origin": "Eastern Asia",
        "consume_raw": "YES",
        "nutrition": {
            "carbohydrates": "10g",
            "fats": "10g",
            "protein": "10g"
        },
        "image": "pictures/eggplant.jpg"
    },
    "bell_pepper": {
        "id": 1,
        "common_name": "Bell Pepper",
        "scientific_name": "Capsicum annuum",
        "family": "Solanaceae",
        "origin": "Latin America",
        "consume_raw": "YES",
        "nutrition": {
            "carbohydrates": "10g",
            "fats": "10g",
            "protein": "10g"
        },
        "image": "pictures/bell_pepper.jpeg"
    },
    "broccoli": {
        "id": 1,
        "common_name": "Broccoli",
        "scientific_name": "Brassica oleracea italica",
        "family": "Brassicaceae",
        "origin": "Italy",
        "consume_raw": "YES",
        "nutrition": {
            "carbohydrates": "10g",
            "fats": "10g",
            "protein": "10g"
        },
        "image": "pictures/broccoli.jpeg"
    }
};


$(document).ready(function() {

    //readable name
    var readable = function(word) {
        word = word
            .toLowerCase()
            .replace('_', ' ')
            .split(' ')
            .map(function(w) {
                return w[0].toUpperCase() + w.substr(1)
            })
            .join(' ');
        return word
    };


    function foodList() {

        var foodCode = $();
        for (var variable in food) {
            $('ul').append('<li>' + food[variable].common_name + '</li>');
            $('li').addClass('prime');
        }
        for (items in food[variable]) {
            if (items != 'id' && items != 'image'){
                foodCode = foodCode.add('<div>'+ readable(items) +'</div>');
            }
        }
        $('body').append(foodCode);
        console.log(typeof items)
    }
$('button').one( 'click', foodList);


// $('ul').on('click', 'li', function (event) {
//     console.log($(this).text());
// });

});





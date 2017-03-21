
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
    $('body')
        .attr('style', 'background-color : orange')
        .append('<button>Veggie</button>');


    function foodList() {
        for (var variable in food) {
            $('body').append(
                $('<div>' + food[variable].common_name + '</div>')
                    .addClass('prime')
                    .attr('id', function () {
                        return variable;
                    })
            );
        }

        $('.prime:last').append('<div id="placeholder"></div>');


        $('body').on('click', 'div', function (e) {
            var foodCode = $();

            var idClick = e.currentTarget.id;

            for (items in food[idClick]) {
                if (items != 'id' && items != 'image' && items != 'nutrition') {
                    foodCode = foodCode.add('<div>' + readable(items) + ' : ' + food[idClick][items] + '</div>');
                }
            }

            foodCode =  foodCode.add('<div><strong>Nutrition</strong></div>');
            for (var nut in food[idClick].nutrition) {
                foodCode =  foodCode.add('<div>' + readable(nut) + ' : ' + food[idClick].nutrition[nut] +  '</div>');

            }
            
            foodCode = foodCode.add($('<img>').attr({
                src: food[idClick].image,
                width: '100em',
                height: '100em',
                title: function () {
                    return food[idClick].common_name}
                })

            );
            $('#placeholder').html(foodCode)

        });
        
    }
$('button').one( 'click', foodList);

});



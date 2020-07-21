$(document).ready(function() {

    let pet_info = {
        "name": "Benny",
        "happiness": 10,
        "weight": 6,
        "health" : 10,
        "message" : "You are the best friend a pet can have!"
    }

    // $('#treatBtn').click(treat);

    // checkAndUpdatePetInfo();

    $('#name').text(pet_info.name);
    $('#weight').text(pet_info.weight);
    $('#health').text(pet_info.health);
    $('#happiness').text(pet_info.happiness);

});
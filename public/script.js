$(document).ready(function() {

    let pet_info = {
        "name": "Benny",
        "happiness": 10,
        "weight": 30,
        "health" : "good",
    }

    $('#feedBtn').click(feed);
    $('#petBtn').click(pet);
    $('#exerciseBtn').click(exercise);
    
    function feed() {
        pet_info['happiness']++;
        pet_info['weight'] = pet_info['weight'] + 2;

        checkAndUpdatePetInfo();
    }
    
    function pet() {
        pet_info['happiness'] = pet_info['happiness'] + 3;
        checkAndUpdatePetInfo();
    }
    
    function exercise() {
        if(pet_info['happiness'] >=10) {
            pet_info['happiness']--;
        } else {
            pet_info['happiness']++;
        }

        if(pet_info['weight'] >=15){
            pet_info['weight'] = pet_info['weight'] - 3;
        } else if (pet_info['weight'] <=5) {
            pet_info['weight'] = pet_info['weight'] - 1;
        } else {
            pet_info['weight'] = pet_info['weight'] - 2;
        }

        ('#happy-message').append(phone);

        checkAndUpdatePetInfo();
    }

    function weightCheck() {
        if(pet_info['weight'] <= 0) {
            pet_info['weight'] = 1;
            pet_info['happy']
        }
    }
    
    function updatePetInfoHTML() {
        $('#name').text(pet_info.name);
        $('#weight').text(pet_info.weight);
        $('#health').text(pet_info.health);
        $('#happiness').text(pet_info.happiness);
        $('#happy-message').text(pet_info.happy);
        $('#weight-message').text(pet_info['weight message']);
    }

    function checkAndUpdatePetInfo() {
        updatePetInfoHTML();
        weightCheck();
    }
    
    checkAndUpdatePetInfo();

});
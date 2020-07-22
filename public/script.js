$(document).ready(function() {

    let pet_info = {
        "name": "Benny",
        "happiness": 10,
        "weight": 30,
        "health" : "good",
        "weight-message" : "",
        "happy-message" : ""
    }

    $('#feedBtn').click(feed);
    $('#petBtn').click(pet);
    $('#exerciseBtn').click(exercise);
    
    function feed() {
        pet_info['weight'] = pet_info['weight'] + 2;

        if(pet_info['weight'] >= 40) {
            pet_info['happiness'] = pet_info['happiness'] - 3;
        } else if(pet_info['weight'] <=15) {
            pet_info['happiness'] = pet_info['happiness'] + 2;
        } else {
            pet_info['happiness']++;
        }
        checkAndUpdatePetInfo();
    }
    
    function pet() {
        pet_info['happiness'] = pet_info['happiness'] + 3;
        checkAndUpdatePetInfo();
    }
    
    function exercise() {

        if(pet_info['weight'] >=40){
            pet_info['weight'] = pet_info['weight'] - 3;
            pet_info['happiness']++;
        } else if (pet_info['weight'] <=10) {
            pet_info['weight']--;
            pet_info['happiness'] = pet_info['happiness'] -3;
        } else {
            pet_info['weight'] = pet_info['weight'] - 2;
            pet_info['happiness'] = pet_info['happiness'] + 2;
        }
        checkAndUpdatePetInfo();
    }

    function weightCheck() {
        if(pet_info['weight'] <= 0) {
            pet_info['weight'] = 1;
        }

        if(pet_info['weight'] >= 40) {
            pet_info['weight-message'] = "Too Full";
        } else if(pet_info['weight'] < 20) {
            pet_info['weight-message'] = "I'm so hungry, I could eat an elephant!";
        } else {
            pet_info['weight-message'] = "";
        }
    }

    function happinessCheck() {
        if(pet_info['happiness'] >= 25) {
            pet_info['happy-message'] = "You are the best owner ever!";
        } else if(pet_info['happiness'] < 10) {
            pet_info['happy-message'] = "I need some love!";
        } else {
            pet_info['happy-message'] = "";
        }
        console.log(pet_info['happy-message']);
    }
    
    function updatePetInfoHTML() {
        $('#name').text(pet_info.name);
        $('#weight').text(pet_info.weight);
        $('#health').text(pet_info.health);
        $('#happiness').text(pet_info.happiness);
        $('#happy-message').text(pet_info['happy-message']);
        $('#weight-message').text(pet_info['weight-message']);
    }

    function checkAndUpdatePetInfo() {
        weightCheck();
        happinessCheck();
        updatePetInfoHTML();
    }
    
    checkAndUpdatePetInfo();

    const nav = document.querySelector('#main');
    const topOfNav = nav.offsetTop;

    function fixNav() {
        if(window.scrollY >= topOfNav) {
            document.body.style.paddingTop = nav.offsetHeight + 'px';
            document.body.classList.add('fixed-nav');
        } else {
            document.body.style.paddingTop = 0;
            document.body.classList.remove('fixed-nav');
        }
    }
    
    window.addEventListener('scroll', fixNav);

});
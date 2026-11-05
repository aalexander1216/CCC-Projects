 // Write your JavaScript code here! 
  var planets = [ 
        ['Pluto', 0.06], 
        ['Neptune', 1.148], 
        ['Uranus', 0.917], 
        ['Saturn', 1.139], 
        ['Jupiter', 2.640], 
        ['Mars', 0.3895], 
        ['Moon', 0.1655], 
        ['Earth', 1], 
        ['Venus', 0.9032], 
        ['Mercury', 0.377], 
        ['Sun', 27.9] 
    ];
    var planetDropdown = document.getElementById("planets");
    
    function updatePlanetDropdown() {
        var selectedPlanet = planetDropdown.value;

        planetDropdown.innerHTML = "";

        var hidePluto = document.getElementById("remove-pluto").checked;

        planets.forEach(function(planet) {
            if (hidePluto && planet[0] === "Pluto") {
                return; // Skip adding Pluto to the dropdown
            }

            var option = document.createElement("option");
            option.value = planet[0];
            option.textContent = planet[0];
            planetDropdown.appendChild(option);
        });

        if (Array.from(planetDropdown.options).some(function(option) {
            return option.value === selectedPlanet;
        })) {
            planetDropdown.value = selectedPlanet;
        }    
    }

updatePlanetDropdown();

// Update the dropdown when checkbox changes
document.getElementById("remove-pluto").onchange = updatePlanetDropdown;

// Add a custom planet
document.getElementById("add-planet").onclick = function() {
    var name = document.getElementById("custom-planet").value.trim();

    var multiplierText = document.getElementById("custom-multiplier").value;
    var multiplier = Number(multiplierText);

    if (name === "" || multiplierText.trim() === "" ||
        !Number.isFinite(multiplier) || multiplier < 0) {
        alert("Please enter a valid planet name and multiplier.");
        return;
    }

    // Prevent duplicate names
    var exists = planets.some(function(planet) {
        return planet[0].toLowerCase() === name.toLowerCase();
    });

    if (exists) {
        alert("That planet already exists.");
        return;
    }

    planets.push([name, multiplier]);

    updatePlanetDropdown();

    planetDropdown.value = name;

    document.getElementById("custom-planet").value = "";
    document.getElementById("custom-multiplier").value = "";
};
  
    
        // We are going to solve this by breaking the problem into three parts. 
        // Programmers like automating things, we'll populate the HTML drop down options using code, 
        // instead of having to type out all the values. 
        // Create a function that does the some math and gives us the new weight. 
        // Then create a function that responds when the user clicks on the button. 

        // 1. Populate the dropdown element with the data found in the planets array. 
        // The value of each option should be the planet's name. 
        // Use the following built-in methods: 
        // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 


    function calculateWeight(weight, planetName) { 
        var planet = planets.find(function(item) {
            return item[0] === planetName;
        });
        // 2. Write the code to return the correct weight 
        return weight * planet[1];

    } 
    function handleClickEvent(e) {
        var userWeight = document.getElementById("user-weight").value;  
        var planetName = document.getElementById("planets").value;  
        var result = calculateWeight(userWeight, planetName);
        // 3. Declare a variable called userWeight and assign the value of the user's weight. 

        // 4. Delcare a variable called planetName and assign the name of the selected planet from the drop down. 

        // 5. Declare a variable called result and assign the value of the new calculated weight. 

        // 6. Write code to display the message shown in the screenshot. 
        document.getElementById("output").innerText = "If you were on " + planetName + ", you would weigh " + result.toFixed(2) + "lbs!";
    } 

        // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
        document.getElementById("calculate-button").onclick = handleClickEvent;

        // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
        // feel free to add classes and id's to the HTML elements as you need, 
        // import.a google font and use it for some or all of the text on your page. 


        // Bonus Challenges 
        // 8. Reverse the drop down order so that the sun is first.
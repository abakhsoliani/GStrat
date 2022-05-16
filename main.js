//value_type 
//0 - discrete  
//1 - continious

//market size todo


// Saver 2. Savvy 3. High Earner 4. Enthusiast

// Price (1 min, 5 max)
// Comfort (1 min, 5 max)
// Image and Status (1 min, 5 max)
// Durability (1 min, 5 max)
// Design (1 min, 5 max)
// Additional Features (1 min, 5 max)
// Economy (1 min, 5 max)

// random preference range: 0.3

// customer_type: Saver
// importance_ranking: 1. Price 2. Economy 3. Durability 4. Comfort 5. Additional Features 6. Design 7. Image and Status

// Price: 1.8
// Economy: 3.2
// Durability: 2.5
// Comfort: 2
// Additional Features: 1.5
// Design: 1.3
// Image and Status: 1.1


// customer_type: Savvy
// importance_ranking: 1. Economy 2. Durability 3. Price 4. Comfort 5. Additional Features 6. Design 7. Image and Status

// Economy: 3.7
// Durability: 2.5
// Price: 2.3
// Comfort: 2.5
// Additional Features: 2.2
// Design: 1.4
// Image and Status: 1.2


// customer_type: High Earner
// importance_ranking: 1. Image and Status 2. Comfort 3. Design 4. Additional Features 5. Durability 6. Economy 7. Price

// Image and Status: 4
// Comfort: 3.8
// Design: 4.1
// Additional Features: 3.3
// Durability: 3.1
// Economy: 2.5
// Price: 4






// customer_type: Enthusiast
// importance_ranking: 1. Additional Features 2. Design 3. Image and Status 4. Comfort 5. Price 6. Economy 7. Durability

// Additional Features: 4.2
// Design: 4.5
// Image and Status: 3.9
// Comfort: 2
// Price: 4.4
// Economy: 4
// Durability: 2.5

function randn_bm(min, max, skew) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random() //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random()
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
    
    num = num / 10.0 + 0.5 // Translate to 0 -> 1
    if (num > 1 || num < 0) 
      num = randn_bm(min, max, skew) // resample between 0 and 1 if out of range
    
    else{
      num = Math.pow(num, skew) // Skew
      num *= max - min // Stretch to fill range
      num += min // offset to min
    }
    return num
  }




var characteristics = [
    { 
        name:"Price", 
        values:[1, 5], 
        value_type:1
    },
    { 
        name:"Comfort", 
        values:[1, 5], 
        value_type:1
    },
    { 
        name:"Image and Status", 
        values:[1, 5], 
        value_type:1
    },
    { 
        name:"Durability", 
        values:[1, 5], 
        value_type:1
    },
    { 
        name:"Design", 
        values:[1, 5], 
        value_type:1
    },
    { 
        name:"Additional Features", 
        values:[1, 5], 
        value_type:1
    },
    { 
        name:"Economy", 
        values:[1, 5], 
        value_type:1
    }
    
];


var formCharValues = [];
var formCharType = 0;

function renderChars(){
    document.getElementById('chars-list').innerHTML=" ";
    var htmlString = "";
    for(var i = 0; i < characteristics.length; i++){
        var type = 'Discrete';
        if(characteristics[i].value_type==1)type='non-Discrete';
        htmlString+="<div class='chars-item'><h3>"+characteristics[i].name+"</h3><div style='margin-bottom:30px'>"+type+"</div>";
        if(characteristics[i].value_type==0){
            htmlString+="<div class='values-list'>";
            for(var j = 0; j < characteristics[i].value_names.length; j++){
                htmlString+="<p>"+characteristics[i].value_names[j]+"</p>";
            }
            htmlString+="</div>";
        }
        htmlString+="<button class='red full-width' onclick='removeChar("+i+")'>rem</button></div>";

    }
    document.getElementById('chars-list').innerHTML+=htmlString;

}

function removeChar(i){
    characteristics.splice(i, 1); // 2nd parameter means remove one item only
    renderChars();
}


function renderFormCharValues(){
    var htmlString = " ";
    for(var i = 0; i < formCharValues.length; i++){
        htmlString += "<input type='text' value='"+formCharValues[i]+"'><button onclick='removeCharValue("+i+")' class='red'>rem</button><br>";
    }
    document.getElementById("existing-char-values").innerHTML=htmlString;
}

function addCharValue(){
    formCharValues.push(document.getElementById('char-value').value);
    document.getElementById('char-value').value="";
    renderFormCharValues();
}

function removeCharValue(i){
    formCharValues.splice(i, 1); // 2nd parameter means remove one item only
    renderFormCharValues();
}

function toggleCharValues(value){
    if(value==0){
        document.getElementById("char-values").style.display="initial";
    }else{
        document.getElementById("char-values").style.display="none";
    }
}

function addChar(){
    var charValues = [];
    for(var i =0; i<formCharValues.length; i++){
        charValues.push(i);
    }
    var charObj = {
        name:document.getElementById('char-name').value,
        type:document.getElementById('char-type').value,
        value_name:formCharValues,
        values:charValues
    };
    characteristics.push(charObj);
    document.getElementById('char-value').value="";
    document.getElementById('char-name').value="";
    document.getElementById('char-type').value="";

    renderChars();
    formCharValues=[];
    renderFormCharValues();
    
}

renderChars();








var consumerMultiplier = 10;

var consumerPrototypes = [
    {
        amount:35,
        name: "Saver",
        ownershipLeftYears:0,
        acceptanceIndex:.5,
        acceptanceIndexDeviation:[.4,.6],

        awareness:[
            {
                name:"Peugeot 206",
                value:0,
            },
            {
                name:"BMW 525",
                value:0,
            },
            {
                name:"Mercedes C200",
                value:0,
            },
            {
                name:"Toyota Corolla",
                value:0,
            }

        ],
        preferences:[
            {
                name:"Price",
                id:0,
                preference_value:1.8,//marketinglayer
                preference_range:[1.2,2.4],
                range_endings:[0,0],
                weight:1,//marketinglayer
                confidence:1,
                preference_value_deviation:[1.5,2.1],
                weight_deviations:[.8,1],
                confidence_deviations:[.8,1],
            },
            {
                name:"Comfort",
                id:1,
                preference_value:2,
                preference_range:[1.5,2.5],
                range_endings:[0,0],
                weight:0.6,
                confidence:0.5,
                weight_deviations:[.4,.7],
                confidence_deviations:[.3,.7],
                preference_value_deviation:[1.2,2.0],

            },
            {
                name:"Image and Status",
                id:2,
                preference_value:1.1,
                preference_range:[1,5],
                range_endings:[0,0.5],
                weight:0.2,
                confidence:0.2,
                weight_deviations:[0,.3],
                confidence_deviations:[0,.4],
                preference_value_deviation:[1,1.5],

            },
            {
                name:"Durability",
                id:3,
                preference_value:2.5,
                preference_range:[1,5],
                range_endings:[0,1.1],
                weight:0.7,
                confidence:0.7,
                weight_deviations:[.5,.9],
                confidence_deviations:[0.6,.8],
                preference_value_deviation:[2,2.5],
            },
            {
                name:"Design",
                id:4,
                preference_value:1.3,
                preference_range:[1,5],
                range_endings:[0,1.1],
                weight:0.35,
                confidence:0.3,
                weight_deviations:[.15,.45],
                confidence_deviations:[0.1,.6],
                preference_value_deviation:[1,1.6],
            },
            {
                name:"Additional Features",
                id:5,
                preference_value:1.5,
                preference_range:[1,5],
                range_endings:[0,1.1],
                weight:0.4,
                confidence:0.3,
                weight_deviations:[0.2,.6],
                confidence_deviations:[0.1,.6],
                preference_value_deviation:[1,2],
            },
            {
                name:"Economy",
                id:6,
                preference_value:3.2,
                preference_range:[1,5],
                range_endings:[0,1.1],
                weight:0.9,
                confidence:0.9,
                weight_deviations:[0.75,1],
                confidence_deviations:[0.7,1],
                preference_value_deviation:[2,4],
            }
        ]
    },
    {

        // Economy: 3.7
        // Durability: 2.5
        // Price: 2.3
        // Comfort: 2.5
        // Additional Features: 2.2
        // Design: 1.4
        // Image and Status: 1.2
        amount:30,
        name: "Savvy",
        ownershipLeftYears:0,
        acceptanceIndex:.6,
        acceptanceIndexDeviation:[.5,.7],

        awareness:[
            {
                name:"Peugeot 206",
                value:0,
            },
            {
                name:"BMW 525",
                value:0,
            },
            {
                name:"Mercedes C200",
                value:0,
            },
            {
                name:"Toyota Corolla",
                value:0,
            }

        ],
        preferences:[
            {
                name:"Price",
                id:0,
                preference_value:2.3,//marketinglayer
                preference_range:[1.3,3],
                range_endings:[0,0],
                weight:.8,//marketinglayer
                confidence:.5,
                preference_value_deviation:[2,2.6],
                weight_deviations:[.6,1],
                confidence_deviations:[.3,.7],
            },
            {
                name:"Comfort",
                id:1,
                preference_value:2.5,
                preference_range:[1.5,2.5],
                range_endings:[0,0],
                weight:0.75,
                confidence:0.5,
                weight_deviations:[.55,.95],
                confidence_deviations:[.3,.7],
                preference_value_deviation:[1.2,2.0],

            },
            {
                name:"Image and Status",
                id:2,
                preference_value:1.2,
                preference_range:[1,5],
                range_endings:[0,0.5],
                weight:0.2,
                confidence:0.4,
                weight_deviations:[0,.7],
                confidence_deviations:[0.2,.6],
                preference_value_deviation:[1,1.6],

            },
            {
                name:"Durability",
                id:3,
                preference_value:2.5,
                preference_range:[1,5],
                range_endings:[0,1.1],
                weight:0.9,
                confidence:0.8,
                weight_deviations:[.7,1],
                confidence_deviations:[0.6,1],
                preference_value_deviation:[2,2.5],
            },
            {
                name:"Design",
                id:4,
                preference_value:1.4,
                preference_range:[1,5],
                range_endings:[0,1.1],
                weight:0.3,
                confidence:0.5,
                weight_deviations:[0.1,.5],
                confidence_deviations:[0.3,.7],
                preference_value_deviation:[1.1,1.7],
            },
            {
                name:"Additional Features",
                id:5,
                preference_value:2.2,
                preference_range:[1,5],
                range_endings:[0,1.1],
                weight:0.6,
                confidence:0.6,
                weight_deviations:[0.4,.8],
                confidence_deviations:[0.4,.8],
                preference_value_deviation:[1.9,2.5],
            },
            {
                name:"Economy",
                id:6,
                preference_value:3.7,
                preference_range:[1,5],
                range_endings:[0,1.1],
                weight:0.9,
                confidence:0.9,
                weight_deviations:[0.8,1],
                confidence_deviations:[0.7,1],
                preference_value_deviation:[3.4,4],
            }
        ]
    },

    // Image and Status: 4
    // Comfort: 3.8
    // Design: 4.1
    // Additional Features: 3.3
    // Durability: 3.1
    // Economy: 2.5
    // Price: 4`

    {

        amount:20,
        name: "High Earner",
        ownershipLeftYears:0,
        acceptanceIndex:.7,
        acceptanceIndexDeviation:[.6,.8],

        awareness:[
            {
                name:"Peugeot 206",
                value:0,
            },
            {
                name:"BMW 525",
                value:0,
            },
            {
                name:"Mercedes C200",
                value:0,
            },
            {
                name:"Toyota Corolla",
                value:0,
            }

        ],
        preferences:[
            {
                name:"Price",
                id:0,
                preference_value:4,//marketinglayer
                preference_range:[3,5],
                range_endings:[1.1,0],
                weight:.2,//marketinglayer
                confidence:.8,
                preference_value_deviation:[3.7,4.3],
                weight_deviations:[0,.4],
                confidence_deviations:[.6,1],
            },
            {
                name:"Comfort",
                id:1,
                preference_value:3.8,
                preference_range:[3,4.5],
                range_endings:[0,.5],
                weight:1,
                confidence:1,
                weight_deviations:[.8,1],
                confidence_deviations:[.6,1],
                preference_value_deviation:[3.5,4.1],

            },
            {
                name:"Image and Status",
                id:2,
                preference_value:4,
                preference_range:[3,5],
                range_endings:[0,0.5],
                weight:1,
                confidence:1,
                weight_deviations:[.8,1],
                confidence_deviations:[.7,1],
                preference_value_deviation:[3.7,4.3],

            },
            {
                name:"Durability",
                id:3,
                preference_value:3.1,
                preference_range:[2,4.1],
                range_endings:[0,1.1],
                weight:0.6,
                confidence:0.6,
                weight_deviations:[.4,.8],
                confidence_deviations:[.4,.8],
                preference_value_deviation:[2.8,3.4],
            },
            {
                name:"Design",
                id:4,
                preference_value:4.1,
                preference_range:[3.1,5],
                range_endings:[0,1.1],
                weight:0.8,
                confidence:0.8,
                weight_deviations:[.6,1],
                confidence_deviations:[0.5,1],
                preference_value_deviation:[3.8,4.4],
            },
            {
                name:"Additional Features",
                id:5,
                preference_value:3.3,
                preference_range:[2,4.3],
                range_endings:[0,1.1],
                weight:0.75,
                confidence:0.5,
                weight_deviations:[.55,.95],
                confidence_deviations:[0.3,.8],
                preference_value_deviation:[3,3.6],
            },
            {
                name:"Economy",
                id:6,
                preference_value:2.5,
                preference_range:[1.5,3.5],
                range_endings:[0,.5],
                weight:0.4,
                confidence:0.3,
                weight_deviations:[.2,.6],
                confidence_deviations:[.1,.5],
                preference_value_deviation:[2.2,2.8],
            }
        ]
    },

    // Additional Features: 4.2
    // Design: 4.5
    // Image and Status: 3.9
    // Comfort: 2
    // Price: 4.4
    // Economy: 4
    // Durability: 2.5

    {

        amount:15,
        name: "Enthusiast",
        ownershipLeftYears:0,
        acceptanceIndex:.8,
        acceptanceIndexDeviation:[.6,1],

        awareness:[
            {
                name:"Peugeot 206",
                value:0,
            },
            {
                name:"BMW 525",
                value:0,
            },
            {
                name:"Mercedes C200",
                value:0,
            },
            {
                name:"Toyota Corolla",
                value:0,
            }

        ],
        preferences:[
            {
                name:"Price",
                id:0,
                preference_value:4.4,//marketinglayer
                preference_range:[3.4,5],
                range_endings:[1.1,0],
                weight:.5,//marketinglayer
                confidence:.5,
                preference_value_deviation:[4,4.7],
                weight_deviations:[.2,.9],
                confidence_deviations:[.3,.7],
            },
            {
                name:"Comfort",
                id:1,
                preference_value:2,
                preference_range:[1,3],
                range_endings:[0,.5],
                weight:.7,
                confidence:.3,
                weight_deviations:[.4,1],
                confidence_deviations:[.1,.6],
                preference_value_deviation:[1.7,2.3],
            },
            {
                name:"Image and Status",
                id:2,
                preference_value:3.9,
                preference_range:[3,5],
                range_endings:[0,0.5],
                weight:.9,
                confidence:.7,
                weight_deviations:[.75,1],
                confidence_deviations:[.5,.95],
                preference_value_deviation:[3.6,4.2],

            },
            {
                name:"Durability",
                id:3,
                preference_value:2.5,
                preference_range:[1.5,3.5],
                range_endings:[0,1.1],
                weight:0.1,
                confidence:0.1,
                weight_deviations:[0,.3],
                confidence_deviations:[0,.6],
                preference_value_deviation:[2.2,2.8],
            },
            {
                name:"Design",
                id:4,
                preference_value:4.5,
                preference_range:[3.5,5],
                range_endings:[0,1.1],
                weight:0.95,
                confidence:0.9,
                weight_deviations:[.75,1],
                confidence_deviations:[0.7,1],
                preference_value_deviation:[4.2,4.8],
            },
            {
                name:"Additional Features",
                id:5,
                preference_value:4.2,
                preference_range:[3.2,5],
                range_endings:[0,1.1],
                weight:1,
                confidence:0.9,
                weight_deviations:[.8,1],
                confidence_deviations:[0.7,1],
                preference_value_deviation:[3.9,4.5],
            },
            {
                name:"Economy",
                id:6,
                preference_value:4,
                preference_range:[3,5],
                range_endings:[0,.5],
                weight:0.2,
                confidence:0.8,
                weight_deviations:[0,.5],
                confidence_deviations:[0,.5],
                preference_value_deviation:[3.7,4.3],
            }
        ]
    },

    
];

var consumers = [];

function generateConsumers(){
    for(var i = 0; i< consumerPrototypes.length; i++){
        for(var j = 0; j< consumerMultiplier*consumerPrototypes[i].amount; j++){
            var consumer = JSON.parse(JSON.stringify(consumerPrototypes[i]));
            consumer.acceptanceIndex=randn_bm(consumer.acceptanceIndexDeviation[0],consumer.acceptanceIndexDeviation[1],1);
            for(var k =0; k<consumer.preferences.length; k++){
                consumer.preferences[k].confidence=randn_bm(consumer.preferences[k].confidence_deviations[0],consumer.preferences[k].confidence_deviations[1],1);
                consumer.preferences[k].weight=randn_bm(consumer.preferences[k].weight_deviations[0],consumer.preferences[k].weight_deviations[1],1);
                if(characteristics[k].value_type==0){
                    for(var l = 0; l<consumer.preferences[k].preference_values.length;l++){
                        consumer.preferences[k].preference_values[l]=randn_bm(consumer.preferences[k].preference_deviations[l][0],consumer.preferences[k].preference_deviations[l][1],1);
                    }

                }else{
                    consumer.preferences[k].preference_value = randn_bm(consumer.preferences[k].preference_value_deviation[0],consumer.preferences[k].preference_value_deviation[1],1);
                }
            }
            consumers.push(consumer);
        }
    }   
}
generateConsumers();


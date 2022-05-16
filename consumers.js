

var consumers = [
    {
        name: "Middle Class A",
        ownershipLeftYears:0,
        acceptanceIndex:.4,
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
                name:"transmission",
                id:0,
                preference_values:[0,1],//marketinglayer
                weight:1,//marketinglayer
                confidence:1
            },
            {
                name:"emmission",
                id:1,
                preference_value:1.6,
                preference_range:[1.2,2.0],
                range_endings:[0,0],
                weight:0.5,
                confidence:0.4,

            },
            {
                name:"design",
                id:2,
                preference_value:3.5,
                preference_range:[0,5],
                range_endings:[0,0.5],
                weight:0.2,
                confidence:0.8,
                
            },
            {
                name:"parking control",
                id:3,
                preference_values:[0,1],
                weight:0.05,
                confidence:0.6,
            },
            {
                name:"AC",
                id:4,
                preference_values:[-1,1],
                weight:1,
                confidence:0.9,
            },
            {
                name:"price",
                id:5,
                preference_value:3500,
                preference_range:[0,4000],
                range_endings:[1.1,0],
                weight:0.2,
                confidence:0.05,
            }
        ]
    },

    {
        name: "Middle Class B",
        ownershipLeftYears:0,
        acceptanceIndex:.34,

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
                name:"transmission",
                id:0,
                preference_values:[.3,1],//marketinglayer
                weight:.8,//marketinglayer
                confidence:.8
            },
            {
                name:"emmission",
                id:1,
                preference_value:1.9,
                preference_range:[1.8,2.6],
                range_endings:[0,0],
                weight:0.6,
                confidence:0.7,

            },
            {
                name:"design",
                id:2,
                preference_value:3.8,
                preference_range:[0,5],
                range_endings:[0,0.7],
                weight:0.3,
                confidence:0.8,
                
            },
            {
                name:"parking control",
                id:3,
                preference_values:[0,1],
                weight:0.05,
                confidence:0.9,
            },
            {
                name:"AC",
                id:4,
                preference_values:[-1,1],
                weight:1,
                confidence:1,
            },
            {
                name:"price",
                id:5,
                preference_value:4000,
                preference_range:[0,5000],
                range_endings:[1.1,0],
                weight:0.3,
                confidence:.5,
            }
        ]
    },

    {
        name: "Middle Class C",
        ownershipLeftYears:0,
        acceptanceIndex:.44,

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
                name:"transmission",
                id:0,
                preference_values:[1,.6],//marketinglayer
                weight:.5,//marketinglayer
                confidence:.8
            },
            {
                name:"emmission",
                id:1,
                preference_value:2.0,
                preference_range:[1.8,2.9],
                range_endings:[0,0],
                weight:0.5,
                confidence:0.7,
            },
            {
                name:"design",
                id:2,
                preference_value:2,
                preference_range:[0,5],
                range_endings:[0,0.5],
                weight:0.2,
                confidence:0.8,
                
            },
            {
                name:"parking control",
                id:3,
                preference_values:[0,1],
                weight:0.05,
                confidence:0.6,
            },
            {
                name:"AC",
                id:4,
                preference_values:[-1,1],
                weight:1,
                confidence:0.9,
            },
            {
                name:"price",
                id:5,
                preference_value:3200,
                preference_range:[0,3500],
                range_endings:[1.1,0],
                weight:0.2,
                confidence:0.04,
            }
        ]
    },

    {
        name: "Middle Class D",
        ownershipLeftYears:0,
        acceptanceIndex:.5,

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
                name:"transmission",
                id:0,
                preference_values:[0,1],//marketinglayer
                weight:1,//marketinglayer
                confidence:1
            },
            {
                name:"emmission",
                id:1,
                preference_value:1.4,
                preference_range:[1.2,1.7],
                range_endings:[0,0],
                weight:0.8,
                confidence:0.8,

            },
            {
                name:"design",
                id:2,
                preference_value:1.5,
                preference_range:[0,5],
                range_endings:[0,1.1],
                weight:0.8,
                confidence:1,
                
            },
            {
                name:"parking control",
                id:3,
                preference_values:[0,1],
                weight:0.05,
                confidence:1,
            },
            {
                name:"AC",
                id:4,
                preference_values:[-1,1],
                weight:1,
                confidence:0.9,
            },
            {
                name:"price",
                id:5,
                preference_value:2800,
                preference_range:[0,3400],
                range_endings:[1.1,0],
                weight:1,
                confidence:.9,
            }
        ]
    },

    {
        name: "Middle Class E",
        ownershipLeftYears:0,
        acceptanceIndex:.55,

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
                name:"transmission",
                id:0,
                preference_values:[0,1],//marketinglayer
                weight:1,//marketinglayer
                confidence:1
            },
            {
                name:"emmission",
                id:1,
                preference_value:1.6,
                preference_range:[1.4,2.5],
                range_endings:[0,0],
                weight:0.7,
                confidence:0.7,

            },
            {
                name:"design",
                id:2,
                preference_value:2,
                preference_range:[0,5],
                range_endings:[0,1.1],
                weight:0.2,
                confidence:0.8,
                
            },
            {
                name:"parking control",
                id:3,
                preference_values:[0,1],
                weight:0.05,
                confidence:1,
            },
            {
                name:"AC",
                id:4,
                preference_values:[-1,1],
                weight:1,
                confidence:0.9,
            },
            {
                name:"price",
                id:5,
                preference_value:2800,
                preference_range:[0,3700],
                range_endings:[1.1,0],
                weight:0.2,
                confidence:0.5,
            }
        ]
    },


    {
        name: "High Class A",
        ownershipLeftYears:0,
        acceptanceIndex:.55,

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
                name:"transmission",
                id:0,
                preference_values:[0,1],//marketinglayer
                weight:1,//marketinglayer
                confidence:1
            },
            {
                name:"emmission",
                id:1,
                preference_value:2.5,
                preference_range:[2.0,3.2],
                range_endings:[0,0],
                weight:0.6,
                confidence:0.8,

            },
            {
                name:"design",
                id:2,
                preference_value:4,
                preference_range:[0,5],
                range_endings:[0,1.1],
                weight:0.2,
                confidence:0.8,
                
            },
            {
                name:"parking control",
                id:3,
                preference_values:[0,1],
                weight:0.1,
                confidence:0.6,
            },
            {
                name:"AC",
                id:4,
                preference_values:[-1,1],
                weight:1,
                confidence:0.9,
            },
            {
                name:"price",
                id:5,
                preference_value:6000,
                preference_range:[0,7000],
                range_endings:[1.1,0],
                weight:0.2,
                confidence:0.3,
            }
        ]
    },


    {
        name: "High Class B",
        ownershipLeftYears:0,
        acceptanceIndex:.6,

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
                name:"transmission",
                id:0,
                preference_values:[0,1],//marketinglayer
                weight:1,//marketinglayer
                confidence:1
            },
            {
                name:"emmission",
                id:1,
                preference_value:2.3,
                preference_range:[2.0,3.2],
                range_endings:[0,0],
                weight:0.5,
                confidence:0.4,

            },
            {
                name:"design",
                id:2,
                preference_value:4.5,
                preference_range:[0,5],
                range_endings:[0,0.5],
                weight:0.2,
                confidence:0.8,
                
            },
            {
                name:"parking control",
                id:3,
                preference_values:[0,1],
                weight:0.05,
                confidence:0.6,
            },
            {
                name:"AC",
                id:4,
                preference_values:[-1,1],
                weight:1,
                confidence:0.9,
            },
            {
                name:"price",
                id:5,
                preference_value:6500,
                preference_range:[0,7500],
                range_endings:[1.1,0],
                weight:0.2,
                confidence:0.7,
            }
        ]
    },


    {
        name: "High Class C",
        ownershipLeftYears:0,
        
        acceptanceIndex:.62,

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
                name:"transmission",
                id:0,
                preference_values:[0,1],//marketinglayer
                weight:1,//marketinglayer
                confidence:1
            },
            {
                name:"emmission",
                id:1,
                preference_value:3.2,
                preference_range:[2.8,4.1],
                range_endings:[0,0],
                weight:0.5,
                confidence:0.4,

            },
            {
                name:"design",
                id:2,
                preference_value:4.5,
                preference_range:[0,5],
                range_endings:[0,1.1],
                weight:0.8,
                confidence:0.8,
                
            },
            {
                name:"parking control",
                id:3,
                preference_values:[0,1],
                weight:0.1,
                confidence:0.8,
            },
            {
                name:"AC",
                id:4,
                preference_values:[-1,1],
                weight:1,
                confidence:1,
            },
            {
                name:"price",
                id:5,
                preference_value:8500,
                preference_range:[0,10000],
                range_endings:[1.1,0],
                weight:0.2,
                confidence:0.6,
            }
        ]
    },


    {
        name: "High Class D",
        ownershipLeftYears:0,
        acceptanceIndex:.66,

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
                name:"transmission",
                id:0,
                preference_values:[0,1],//marketinglayer
                weight:1,//marketinglayer
                confidence:1
            },
            {
                name:"emmission",
                id:1,
                preference_value:2.3,
                preference_range:[2.2,2.9],
                range_endings:[0,0],
                weight:0.7,
                confidence:0.8,

            },
            {
                name:"design",
                id:2,
                preference_value:3.8,
                preference_range:[0,5],
                range_endings:[0,0.5],
                weight:0.5,
                confidence:0.8,
                
            },
            {
                name:"parking control",
                id:3,
                preference_values:[0,1],
                weight:0.1,
                confidence:0.6,
            },
            {
                name:"AC",
                id:4,
                preference_values:[-1,1],
                weight:1,
                confidence:0.9,
            },
            {
                name:"price",
                id:5,
                preference_value:6500,
                preference_range:[0,8000],
                range_endings:[1.1,0],
                weight:0.2,
                confidence:0.5,
            }
        ]
    },

    {
        name: "High Class E",
        ownershipLeftYears:0,
        acceptanceIndex:.7,

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
                name:"transmission",
                id:0,
                preference_values:[0,1],//marketinglayer
                weight:1,//marketinglayer
                confidence:1
            },
            {
                name:"emmission",
                id:1,
                preference_value:2.2,
                preference_range:[2,2.9],
                range_endings:[0,0],
                weight:0.9,
                confidence:0.8,

            },
            {
                name:"design",
                id:2,
                preference_value:3.9,
                preference_range:[0,5],
                range_endings:[0,0.9],
                weight:0.2,
                confidence:0.8,
                
            },
            {
                name:"parking control",
                id:3,
                preference_values:[0,1],
                weight:0.1,
                confidence:0.9,
            },
            {
                name:"AC",
                id:4,
                preference_values:[-1,1],
                weight:1,
                confidence:0.9,
            },
            {
                name:"price",
                id:5,
                preference_value:5900,
                preference_range:[0,6700],
                range_endings:[1.1,0],
                weight:0.2,
                confidence:0.3,
            }
        ]
    },

    
];







//value_type 
//0 - discrete  
//1 - continious

//market size todo

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



var awarenessMarketing = [
  
    {
        name: "Peugeot 206",
        target: "Savvy",
        amount:3,
    },
    {
        name: "BMW 525",
        target: "Saver",
        amount: 2.5,
    },
    {
        name: "BMW 525",
        target: "Savvy",
        amount: 2.5,
    },
    {
        name: "Peugeot 206",
        target: "Saver",
        amount: 2,
    },
    {
        name: "Mercedes C200",
        target: "Savvy",
        amount: 1,
    },
    {
        name: "Mercedes C200",
        target: "High Earner",
        amount: 1,
    },
    {
        name: "Mercedes C200",
        target: "Enthusiast",
        amount:3,
    },

];


var characteristicsMarketing = [

    {
        name: "Image and Status",
        weight:1,
        value:1.5,
        target:"Saver",
        amount:5,
    },
    {
        name: "Comfort",
        weight:1,
        value:2.8,
        target:"Savvy",
        amount:5,
    }
]




var products = [
    {
        name: "Peugeot 206",
        characteristics:[
            1.8,
            2,
            1.1,
            2,
            1.3,
            1.5,
            3.2
        ],
        buy:0,
        noBuy:0,
        amount:40,
        costs:1.4
    },
    {
        name: "BMW 525",
        characteristics:[
            2.3,
            2.5,
            1.2,
            2.5,
            1.4,
            2.2,
            3.7
        ],
        buy:0,
        noBuy:0,
        amount:30,
        costs:1.6

    },
    {
        name: "Mercedes C200",
        characteristics:[
            4,
            3.8,
            4,
            3.1,
            4.1,
            3.3,
            2.5
        ],
        buy:0,
        noBuy:0,
        amount:20,
        costs:3.1
    },

];



//Awareness marketing layer

function calculateAwaraness(){

for(var i = 0; i < awarenessMarketing.length; i++){
    var item = awarenessMarketing[i];
    var completedMarketing = 0;
    var failedMarketing = 0;
    for(var j = 0; j < consumers.length; j++){
        if(item.target!=consumers[j].name)continue;
        var existsProduct = 0;
        for(var k = 0; k < consumers[j].awareness.length; k++){
            if(item.name==consumers[j].awareness[k].name){
                existsProduct=1;
                if(consumers[j].awareness[k].value!=-1){
                    if(Math.random()>(1-0.05*item.amount)) {
                        consumers[j].awareness[k].value=1;
                        completedMarketing++;
                    } else {
                        failedMarketing++;
                    }
                    

                } else{
                    if(Math.random()>(1-0.1*item.amount)){ 
                        consumers[j].awareness[k].value=1;
                        completedMarketing++;
                    } else {
                        failedMarketing++;
                    }
                }
                // break;
            }
            
        }
        if(existsProduct==0){//დაამატე პროდუქტი
            var value = 0;
            if(Math.random()>(1-0.1*item.amount)){ 
                value=1;
                completedMarketing++;
            } else {
                failedMarketing++;
            }
            consumers[j].awareness.push({name:item.name,value});
        }
    }
    console.log("Awareness Marketing of " + item.name + "on Target " + item.target +" was " + completedMarketing + "/" + failedMarketing);

}

}

// calculateAwaraness();




// console.log(consumers);
// console.log("---------------------------");


//MarketingcLayer


function calculateMarketing(){

for(var i = 0; i< consumers.length; i++){//თითოეული კონსუმერის
    for(var j = 0; j<consumers[i].preferences.length; j++){//თითუეული პრეფერენცია
        for(var k = 0; k<characteristicsMarketing.length;k++){//მახასიათებლების მარკეტინგების ობიექტები
            if(characteristicsMarketing[k].target!=consumers[i].name)continue;//თუ არ ემთხვევა ტარგეტი დავიკიდოთ
            if(characteristicsMarketing[k].name==consumers[i].preferences[j].name){//თუ ემთხვევა მახასიათებლის სახელი გამოვიანგარიშოთ
                if(consumers[i].preferences[j].confidence!=1){//თუ კონფიდენსი არ აქვს 1 გამოვაიანგარიშოთ
                    
                    var rand = Math.random()*(1+characteristicsMarketing[k].amount/15);//რენდომ რიცხვი ავიღოთ
                    if(rand>consumers[i].preferences[j].confidence){//თუ რენდომი მეტია კონფიდენსზე შევუცვალოთ შედეგები
                        var confidenceDifferential = rand-consumers[i].preferences[j].confidence/2;// მარკეტინნგის სიძლიერე(რენდომს-კონფიდენსი)
                        if(characteristics[j].value_type==0){
                            //discrete// change values on the way to new values on differential level
                            
                            for(var l = 0; k<characteristics[j].values.length;l++){//დისკრეტულში გადავუყვეთ და ვცვალოთ
                                var marketingDifference = consumers[i].preferences[j].preference_values[l]-characteristicsMarketing[k].value[l];
                                consumers[i].preferences[j].preference_values[l] = consumers[i].preferences[j].preference_values[l]-marketingDifference*confidenceDifferential
                            }
                            
    
                        }else{
                            //nondiscrete//არადისკრეტულში რეინჯები ვცვალოთ
                            var marketingDifference = consumers[i].preferences[j].preference_value-characteristicsMarketing[k].value;
                            if(marketingDifference<.6){
                                consumers[i].preferences[j].preference_value = consumers[i].preferences[j].preference_value - marketingDifference*confidenceDifferential;
                                consumers[i].preferences[j].preference_range[0] = consumers[i].preferences[j].preference_range[0] - marketingDifference*confidenceDifferential;
                                consumers[i].preferences[j].preference_range[1] = consumers[i].preferences[j].preference_range[1] - marketingDifference*confidenceDifferential;
                            }

                        }
                    }
                }
            }
        }
    }
}

}

// calculateMarketing();


//Simulate Market



// console.log(consumers);
// console.log("---------------------------");



function calculatePurchase(consumer,score){
    var highestPossible = 0;
    var buyValue = false;
    var successValue = false;
    for(var i =0; i<consumer.preferences.length; i++){
        highestPossible+=consumer.preferences[i].weight;
    }
    if(highestPossible*consumer.acceptanceIndex<score){
        buyValue=true;
        if(score/highestPossible>Math.random())successValue=true;
    }
    return {buy:buyValue,success:successValue,result:score/highestPossible};
}





//
function calculateAwareness(consumer,product){
    for(var i = 0; i<consumer.awareness.length; i++){
        if(consumer.awareness[i].name==product.name && consumer.awareness[i].value==1){
            return 1;
        }
    }
    return 0;
}








//
function calculateDiscrete(consumer,product,i){
    var consumerPreferenceValue = consumer.preferences[i].preference_values[[product.characteristics[i]]];
    if(consumerPreferenceValue==-1) return -1;
    var score = consumerPreferenceValue * consumer.preferences[i].weight;
    return score;
}


function calculateNonDiscrete(consumer,product,i){
    var consumerPreferenceValue = consumer.preferences[i].preference_value;
    var consumerPreferenceRange = consumer.preferences[i].preference_range;
    var consumerRangeEndings = consumer.preferences[i].range_endings;
    var productCharValue = product.characteristics[i]


    if(productCharValue > consumerPreferenceRange[1] || productCharValue < consumerPreferenceRange[0]) return -1;


    var difference = productCharValue - consumerPreferenceValue;

    if(difference<0){
        difference*=-1;//get module of difference
        score=1-(difference/(consumerPreferenceValue-consumerPreferenceRange[0]))*(1-consumerRangeEndings[0]);//1 is maximum score, subtract differential (if range is not ended with 0, differential subtraction should be scaled down) 
    } else if(difference>0){
        score=1-(difference/(consumerPreferenceRange[1]-consumerPreferenceValue))*(1-consumerRangeEndings[1]);
    } else{
        score = 1;
    }

    var score=score*consumer.preferences[i].weight;
    return score;
}


function calculateScore(consumer,product){
    var scores = [];
    for(var i = 0; i < characteristics.length; i++){
        var currChar = characteristics[i];
        var score = 0;
        if(currChar.value_type==0){
            score = calculateDiscrete(consumer,product,i);
            scores.push(score);

        } else {

            score = calculateNonDiscrete(consumer,product,i);
            scores.push(score);
        }
        
    }

    return scores;

}






function clearProductCounters(){
    products.forEach(product => {
        product.buy=0;
        product.noBuy=0;
    });
}


function simulateMarket(){

var consumerResults = [];
consumerResults['Saver']={liked:0,notLiked:0};
consumerResults['Savvy']={liked:0,notLiked:0};
consumerResults['High Earner']={liked:0,notLiked:0};
consumerResults['Enthusiast']={liked:0,notLiked:0};


for(var i = 0; i < consumers.length; i++){

    // if(consumers[i].ownershipLeftYears>0)continue;
  
    

    var results = [];
    var result = 0;
    var highest = 0;
    var highestIndex = 0;
    for(var j = 0; j < products.length; j++){
        if(products[j].amount<=products[j].buy)continue;
        if(calculateAwareness(consumers[i],products[j])==0){
            results.push(-1)
            continue;
        }
        var result=calculateScore(consumers[i],products[j]);
        if(result==-1){
            results.push(-1)
        }else{
            var sum = result.reduce((partialSum, a) => partialSum + a, 0);
            if(sum>highest){
                highest=sum;
                highestIndex=j;
            }
            results.push(sum);
        }
        
    }


    // console.log(results);

    var purchaseValue = calculatePurchase(consumers[i],highest);


    if(purchaseValue.buy){

        // console.log(consumers[i].name + "did buy " + products[highestIndex].name + " for " + products[highestIndex].characteristics[0]  + " and it success status is " + purchaseValue.success);
        if(purchaseValue.success==true){
            // consumers[i].ownershipLeftYears=5; 
            //consumers[i].acceptanceIndex=purchaseValue.result;
        }else{
            // consumers[i].ownershipLeftYears=2; 
            consumers[i].awareness[highestIndex].value=-1
            consumers[i].acceptanceIndex=purchaseValue.result;
        }
        products[highestIndex].buy++;
        if(purchaseValue.success){
            consumerResults[consumers[i].name].liked+=1;
        }else{
            consumerResults[consumers[i].name].notLiked+=1;
        }

    }else{
        // console.log(consumers[i].name + " didn't buy " + products[highestIndex].name + " for " + products[highestIndex].characteristics[0]);
        products[highestIndex].noBuy++;
        

    }
    
}


console.log(consumerResults);
consumerResults['Saver']={liked:0,notLiked:0};
consumerResults['Savvy']={liked:0,notLiked:0};
consumerResults['High Earner']={liked:0,notLiked:0};
consumerResults['Enthusiast']={liked:0,notLiked:0};


}






//reports
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------



function getPreferenceReport(charIndex, quality){
    
    var arr = [];
    for(var i = 1; i<5; i++){
        for(var j = 0; j<10; j++){
            arr[i+"."+j]=0;
        }
    }

    for(var i = 0; i < consumers.length; i+=10){
        var randomDirection =1;
        if(Math.random()<.5) randomDirection=-1;
        var result = Math.round(consumers[i].preferences[charIndex].preference_value*(1+randomDirection*Math.random()/(8-(5-quality)))*10)/10;
        if(result==1||result==2||result==3||result==4||result==5)result=result+".0";
        arr[result+""]+=1;
    }
    return arr;
}


function getWeightReport(charIndex, quality){
    
    var arr = [];
    arr["Not Important"]=0;
    arr["Kinda NOT Important"]=0;
    arr["Kinda Important"]=0;
    arr["Important"]=0;
    for(var i = 0; i < consumers.length; i+=10){
        var randomDirection =1;
        if(Math.random()<.5) randomDirection=-1;
        var result = Math.round(consumers[i].preferences[charIndex].weight*(1+randomDirection*Math.random()/(8-(5-quality)))*10)/10;
        if(result < .25){
            arr["Not Important"]+=1;

        } else if(result < .5){
            arr["Kinda NOT Important"]+=1;

        } else if(result < .75){
            arr["Kinda Important"]+=1;

        } else {
            arr["Important"]+=1;

        }
    }

    return arr;
}


function getConfidenceReport(charIndex, quality){
    
    var arr = [];
    arr["Not Sure"]=0;
    arr["Kinda NOT Sure"]=0;
    arr["Kinda Sure"]=0;
    arr["Sure"]=0;

    for(var i = 0; i < consumers.length; i+=10){
        var randomDirection =1;
        if(Math.random()<.5) randomDirection=-1;
        var result = Math.round(consumers[i].preferences[charIndex].confidence*(1+randomDirection*Math.random()/(8-(5-quality)))*10)/10;
        if(result < .25){
            arr["Not Sure"]+=1;

        } else if(result < .5){
            arr["Kinda NOT Sure"]+=1;

        } else if(result < .75){
            arr["Kinda Sure"]+=1;

        } else {
            arr["Sure"]+=1;

        }
    }
    return arr;
}

function getWeightExact(charIndex,target){
    
    var arr = [];
    arr["0"]=0;
    for(var i = 1; i<10; i++){
            arr["0."+i]=0;
    }
    arr["1"]=0;
    for(var i = 0; i < consumers.length; i+=1){
        if(target!="All"){
            if(target!=consumers[i].name)continue;
        }
        arr[Math.round(consumers[i].preferences[charIndex].weight*10)/10+""]+=1;
    }
    console.log(arr);
}


function getPreferenceExact(charIndex,target){
    
    var arr = [];
    for(var i = 1; i<5; i++){
        for(var j = 0; j<10; j++){
            arr[i+"."+j]=0;
        }
    }
    arr["1"]=0;
    arr["2"]=0;
    arr["3"]=0;
    arr["4"]=0;
    arr["5"]=0;
    for(var i = 0; i < consumers.length; i+=1){
        if(target!="All"){
            if(target!=consumers[i].name)continue;
        }
        arr[Math.round(consumers[i].preferences[charIndex].preference_value*10)/10+""]+=1;
    }
    console.log(arr);
}



function getConfidenceExact(charIndex,target){
    
    var arr = [];
    arr["0"]=0;
    for(var i = 1; i<10; i++){
            arr["0."+i]=0;
    }
    arr["1"]=0;
    for(var i = 0; i < consumers.length; i+=1){
        if(target!="All"){
            if(target!=consumers[i].name)continue;
        }
        arr[Math.round(consumers[i].preferences[charIndex].confidence*10)/10+""]+=1;
    }
    console.log(arr);
}









//trends
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------



var trends = [];
trends["Saver"] = [];
trends["Saver"]["Price"]={low:-0.02,high:-0.07};
trends["Saver"]["Comfort"]={low:0.04,high:0.18};
trends["Saver"]["Image and Status"]={low:0.05,high:0.25};
trends["Saver"]["Durability"]={low:0.06,high:0.22};
trends["Saver"]["Additional Features"]={low:0.05,high:0.15};
trends["Saver"]["Economy"]={low:0.05,high:0.15};
trends["Saver"]["Design"]={low:0.05,high:0.15};


trends["Savvy"] = [];
trends["Savvy"]["Price"]={low:-0.04,high:-0.1};
trends["Savvy"]["Comfort"]={low:0.05,high:0.1};
trends["Savvy"]["Image and Status"]={low:0.05,high:0.1};
trends["Savvy"]["Durability"]={low:0.04,high:0.1};
trends["Savvy"]["Additional Features"]={low:0.05,high:0.15};
trends["Savvy"]["Economy"]={low:0.04,high:0.1};
trends["Savvy"]["Design"]={low:0.05,high:0.15};


trends["High Earner"] = [];
trends["High Earner"]["Price"]={low:0.05,high:0.1};
trends["High Earner"]["Comfort"]={low:0.05,high:0.1};
trends["High Earner"]["Image and Status"]={low:0.03,high:0.8};
trends["High Earner"]["Durability"]={low:0.08,high:0.18};
trends["High Earner"]["Additional Features"]={low:0.05,high:0.15};
trends["High Earner"]["Economy"]={low:0.02,high:0.05};
trends["High Earner"]["Design"]={low:0.02,high:0.05};


trends["Enthusiast"] = [];
trends["Enthusiast"]["Price"]={low:0.02,high:0.3};
trends["Enthusiast"]["Comfort"]={low:0.02,high:0.05};
trends["Enthusiast"]["Image and Status"]={low:0.05,high:0.07};
trends["Enthusiast"]["Durability"]={low:0.08,high:0.18};
trends["Enthusiast"]["Additional Features"]={low:0.05,high:0.07};
trends["Enthusiast"]["Economy"]={low:0.04,high:0.08};
trends["Enthusiast"]["Design"]={low:0.02,high:0.05};


function applyTrends(){
    for(var j = 0; j < consumers.length; j++){
        for(var i = 0; i < consumers[j].preferences.length; i++){
            var change = (trends[consumers[j].name][consumers[j].preferences[i].name].high-trends[consumers[j].name][consumers[j].preferences[i].name].low)*Math.random();
            consumers[j].preferences[i].preference_value+=change;
            consumers[j].preferences[i].preference_range[0]+=change;
            consumers[j].preferences[i].preference_range[1]+=change;
        }
    }
}















//reportsGUI

var labels = [];

  var data = {
  };

  var config = {
    
  };

  var myChart;
  var salesChart;
  var totalSalesChart;



function demandReport(id,string){
    if (myChart != undefined || myChart != null) {
        myChart.destroy();

   }

    var quality = parseInt(document.getElementById(string+"-demand").value);
    var arr = getPreferenceReport(id,quality);
    labels=Object.keys(arr);
    var newArr = [];
    for(var i = 1; i<5;i++){
        for(var j = 0; j<10; j++){
            newArr.push(arr[i+"."+j]);
        }
        
    }
    data = {
        labels: labels,
        datasets: [{
          label: string+" demand",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: newArr,
        }]
    };
    config = {
        type: 'line',
        data: data,
        options: {}
    };
    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    
}
function confidenceReport(id,string){
    if (myChart != undefined || myChart != null) {
        myChart.destroy();

   }

    var quality = parseInt(document.getElementById(string+"-demand").value);
    var arr = getConfidenceReport(id,quality);
    labels=Object.keys(arr);
    var newArr = [];
    newArr.push(arr["Not Sure"]);
    newArr.push(arr["Kinda NOT Sure"]);
    newArr.push(arr["Kinda Sure"]);
    newArr.push(arr["Sure"]);

    data = {
        labels: labels,
        datasets: [{
          label: string+" choice confidence",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: newArr,
        }]
    };
    config = {
        type: 'line',
        data: data,
        options: {}
    };
    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}
function weightReport(id,string){
    if (myChart != undefined || myChart != null) {
        myChart.destroy();

   }


    var quality = parseInt(document.getElementById(string+"-demand").value);
    var arr = getWeightReport(id,quality);
    labels=Object.keys(arr);
    var newArr = [];
    newArr.push(arr["Not Important"]);
    newArr.push(arr["Kinda NOT Important"]);
    newArr.push(arr["Kinda Important"]);
    newArr.push(arr["Important"]);

    data = {
        labels: labels,
        datasets: [{
          label: string+" choice confidence",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: newArr,
        }]
    };
    config = {
        type: 'line',
        data: data,
        options: {}
    };
    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}


function awarenessReport(){
    if (myChart != undefined || myChart != null) {
        myChart.destroy();

   }
   carName=document.getElementById("car-report").value;
   var quality = parseInt(document.getElementById("awareness-report").value);

    var arr = [];
    arr["Not Know"]=[0,0,0,0];
    arr["Know"]=[0,0,0,0];
    arr["Don't like"]=[0,0,0,0];

    const labels = ["Saver","Savvy","High Earner", "Enthusiast"];
    
    for(var i = 0; i<consumers.length; i+=(6-quality)){
        for(var j = 0; j<consumers[i].awareness.length; j++){
            if(consumers[i].awareness[j].name==carName){
                var index=0;
                if(consumers[i].name=="Saver"){

                }else if(consumers[i].name=="Savvy"){
                    index=1;
                }else if(consumers[i].name=="High Earner"){
                    index=2;
                }else {
                    index=3;
                }
                if(consumers[i].awareness[j].value==1){
                    arr["Know"][index]+=1;
                }else if(consumers[i].awareness[j].value==0){
                    arr["Not Know"][index]+=1;
                } else{
                    arr["Don't like"][index]+=1;
                }
            }
        }
    }
    
    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Knows',
            data: arr["Know"],
            backgroundColor: 'rgb(0, 255, 0)',
          },
          {
            label: "Don't knows",
            data:  arr["Not Know"],
            backgroundColor: 'rgb(0, 0, 255)',
          },
          {
            label: "Don't like",
            data: arr["Don't like"],
            backgroundColor: 'rgb(255, 0, 0)',
          },
        ]
      };


      const config = {
        type: 'bar',
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: carName+' Awaraness Report'
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
        }
      };

    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}


//productsGUI





function renderProducts(){
    document.getElementById('products').innerHTML=" ";
    var htmlString = "";
    for(var i = 0; i < products.length; i++){
        htmlString+="<div class='chars-item'><h3>"+products[i].name+"</h3>";
        for(var j = 0; j< products[i].characteristics.length; j++){
            htmlString+="<p>"+characteristics[j].name+" - " +products[i].characteristics[j]+"</p>";
        }
        htmlString+="<p>Amount - " +products[i].amount+"</p>";
        htmlString+="<p>Cost/1 - " +products[i].costs+"</p>";
        htmlString+="<p>Costs - " +(products[i].costs*products[i].amount)+"</p>";

        htmlString+="<button class='red full-width' onclick='removeProduct("+i+")'>rem</button><button class='full-width' onclick='editProduct("+i+")'>edit</button></div>";

    }
    document.getElementById('products').innerHTML+=htmlString;

}
function removeProduct(i){
    products.splice(i, 1); // 2nd parameter means remove one item only
    renderProducts();
}

function editProduct(i){
    document.getElementById("name-input").value=products[i].name;
    document.getElementById("price-input").value=products[i].characteristics[0];
    document.getElementById("comfort-input").value=products[i].characteristics[1];
    document.getElementById("image-input").value=products[i].characteristics[2];
    document.getElementById("durability-input").value=products[i].characteristics[3];
    document.getElementById("design-input").value=products[i].characteristics[4];
    document.getElementById("features-input").value=products[i].characteristics[5];
    document.getElementById("economy-input").value=products[i].characteristics[6];
    calculateCosts();
}



function calculateCosts(){
    var costs =(parseFloat(document.getElementById("comfort-input").value)+parseFloat(document.getElementById("image-input").value)+parseFloat(document.getElementById("durability-input").value)+parseFloat(document.getElementById("design-input").value)+parseFloat(document.getElementById("features-input").value)+parseFloat(document.getElementById("economy-input").value))/8;
    document.getElementById("costs").innerHTML=costs;
    document.getElementById("totalCosts").innerHTML=costs*parseFloat(document.getElementById("amount-input").value);

}


function updateProduct(){
    for(var i =0; i<products.length; i++){
        if(document.getElementById("name-input").value==products[i].name){
            products[i].characteristics=[
                document.getElementById("price-input").value,
                document.getElementById("comfort-input").value,
                document.getElementById("image-input").value,
                document.getElementById("durability-input").value,
                document.getElementById("design-input").value,
                document.getElementById("features-input").value,
                document.getElementById("economy-input").value,
            ];
            products[i].amount=document.getElementById("amount-input").value;
            products[i].costs=parseFloat(document.getElementById("costs").innerHTML);
        }
    }
    renderProducts();
}


function addProduct(){
    var product = {
        name : document.getElementById("name-input").value,
        characteristics:[
            document.getElementById("price-input").value,
            document.getElementById("comfort-input").value,
            document.getElementById("image-input").value,
            document.getElementById("durability-input").value,
            document.getElementById("design-input").value,
            document.getElementById("features-input").value,
            document.getElementById("economy-input").value,
        ],
        buy:0,
        noBuy:0,
        amount:document.getElementById("amount-input").value,
        costs:parseFloat(document.getElementById("costs").innerHTML)

    }
    products.push(product);
    renderProducts();
}


renderProducts();




function renderAwareness(){
    document.getElementById('awarenesses').innerHTML=" ";
    var htmlString = "";
    for(var i = 0; i < awarenessMarketing.length; i++){
        htmlString+="<div class='chars-item'><h3>"+awarenessMarketing[i].name+"</h3>";
    
        htmlString+="<p>Target - " +awarenessMarketing[i].target+"</p>";
        htmlString+="<p>Amount - " +awarenessMarketing[i].amount+"</p>";

        htmlString+="<button class='red full-width' onclick='removeAwareness("+i+")'>rem</button></div>";

    }
    document.getElementById('awarenesses').innerHTML+=htmlString;

}
function removeAwareness(i){
    awarenessMarketing.splice(i, 1); // 2nd parameter means remove one item only
    renderAwareness();
}



function addAwareness(){
    var awareness = {
        name : document.getElementById("car-name").value,
        target:document.getElementById("awareness-segment").value,

        amount:document.getElementById("awareness-amount").value

    }
    awarenessMarketing.push(awareness);
    renderAwareness();
}


renderAwareness();





function renderCharMarks(){
    document.getElementById('char-marks').innerHTML=" ";
    var htmlString = "";
    for(var i = 0; i < characteristicsMarketing.length; i++){
        htmlString+="<div class='chars-item'><h3>"+characteristicsMarketing[i].name+"</h3>";
        htmlString+="<p>Target - " +characteristicsMarketing[i].value+"</p>";

        htmlString+="<p>Target - " +characteristicsMarketing[i].target+"</p>";
        htmlString+="<p>Amount - " +characteristicsMarketing[i].amount+"</p>";

        htmlString+="<button class='red full-width' onclick='removeCharMarks("+i+")'>rem</button></div>";

    }
    document.getElementById('char-marks').innerHTML+=htmlString;

}
function removeCharMarks(i){
    characteristicsMarketing.splice(i, 1); // 2nd parameter means remove one item only
    renderCharMarks();
}



function addCharacteristicsMarketing(){
    var charMark = {
        name : document.getElementById("characteristics-name").value,
        target:document.getElementById("characteristics-segment").value,
        weight:1,
        value:document.getElementById("characteristics-value").value,
        amount:document.getElementById("characteristics-amount").value

    }
    characteristicsMarketing.push(charMark);
    renderCharMarks();
}


renderCharMarks();



var turns = [];
var incomesTurns = [];


function runAwareness(){
    calculateAwaraness();
    awarenessMarketing=[];
    renderAwareness();
}

function runCharMarks(){
    calculateMarketing();
    characteristicsMarketing=[];
    renderCharMarks();
}




function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


function playTurn(){
    simulateMarket();
    
    turns.push(JSON.parse(JSON.stringify(products)));
    applyTrends();
    labels = [];
    for(var i = 0; i<turns.length; i++){
        labels.push("Turn #"+i);
    }


    var datasets = [];
    for(var i = 0; i<products.length; i++){
        var dataset = {label: products[i].name}
        var newdata = [];
        for(var j =0; j<turns.length;j++){
            newdata.push(turns[j][i].buy);
        }
        dataset.data=newdata;
        dataset.borderColor=random_rgba();
        datasets.push(dataset);
    }

    data = {
    labels: labels,
    datasets: datasets,
    };

    config = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'გაყიდული მანქანები'
            }
          }
        },
      };


    if (salesChart != undefined || salesChart != null) {
        salesChart.destroy();

    }
      
      salesChart = new Chart(
        document.getElementById('salesChart'),
        config
    );





    var datasets = [];
    for(var i = 0; i<products.length; i++){
        var dataset = {label: products[i].name}
        var newdata = [];
        for(var j =0; j<turns.length;j++){
            newdata.push(turns[j][i].buy*turns[j][i].characteristics[0]);
        }
        dataset.data=newdata;
        dataset.borderColor=random_rgba();
        datasets.push(dataset);
    }

    data = {
    labels: labels,
    datasets: datasets,
    };

    config = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'შემოსული თანხა'
            }
          }
        },
      };


    if (totalSalesChart != undefined || totalSalesChart != null) {
        totalSalesChart.destroy();

    }
      
      totalSalesChart = new Chart(
        document.getElementById('totalSalesChart'),
        config
    );




    products.forEach(product => {
        console.log("Product "+product.name + " was sold " + product.buy + " times, and generated " + product.buy*product.characteristics[0] + " amount of money");
        product.buy=0;
        product.noBuy=0;
        product.amount=0;
        renderProducts();
    });

}
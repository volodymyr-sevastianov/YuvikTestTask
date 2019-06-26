//HARDCODED DATA. Remove when auth possible

const weather = {
    "location":{
       "woeid": 2502265,
       "city":"Sunnyvale",
       "region":" CA",
       "country":"United States",
       "lat":37.371609,
       "long":-122.038254,
       "timezone_id":"America/Los_Angeles"
    },
    "current_observation":{
       "wind":{
          "chill":59,
          "direction":165,
          "speed":8.7
       },
       "atmosphere":{
          "humidity":76,
          "visibility":10,
          "pressure":29.68
       },
       "astronomy":{
          "sunrise":"7:23 am",
          "sunset":"5:7 pm"
       },
       "condition":{
          "text":"Scattered Showers",
          "code":39,
          "temperature":60
       },
       "pubDate":1546992000
    },
    "forecasts":[
       {
          "day":"Tue",
          "date":1546934400,
          "low":52,
          "high":61,
          "text":"Rain",
          "code":12
       },
       {
          "day":"Wed",
          "date":1547020800,
          "low":51,
          "high":62,
          "text":"Scattered Showers",
          "code":39
       },
       {
          "day":"Thu",
          "date":1547107200,
          "low":46,
          "high":60,
          "text":"Mostly Cloudy",
          "code":28
       },
       {
          "day":"Fri",
          "date":1547193600,
          "low":48,
          "high":61,
          "text":"Showers",
          "code":11
       },
       {
          "day":"Sat",
          "date":1547280000,
          "low":47,
          "high":62,
          "text":"Rain",
          "code":12
       },
       {
          "day":"Sun",
          "date":1547366400,
          "low":48,
          "high":58,
          "text":"Rain",
          "code":12
       },
       {
          "day":"Mon",
          "date":1547452800,
          "low":47,
          "high":58,
          "text":"Rain",
          "code":12
       },
       {
          "day":"Tue",
          "date":1547539200,
          "low":46,
          "high":59,
          "text":"Scattered Showers",
          "code":39
       },
       {
          "day":"Wed",
          "date":1547625600,
          "low":49,
          "high":56,
          "text":"Rain",
          "code":12
       },
       {
          "day":"Thu",
          "date":1547712000,
          "low":49,
          "high":59,
          "text":"Scattered Showers",
          "code":39
       }
    ]
 };
export default weather;
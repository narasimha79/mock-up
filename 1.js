let jsonDate = [
    {'id':1,'type':'external'},
    {'id':2,},
    {'id':3, 'type':'internal'}
];

let results = jsonDate.filter(extVal => extVal.type == 'external');
console.log(results);





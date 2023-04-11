const members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);

members.forEach((value)=>console.log('Array loop', value));

const roles = {
    programmer: 'egoing',
    designer: 'k8805',
    manager: 'hoya',
}

console.log(roles);
console.log('Designer is', roles.designer);
console.log('Designer is', roles['designer']);
for (var name in roles){
    console.log('object =>', name, 'value =>', roles[name]);
}
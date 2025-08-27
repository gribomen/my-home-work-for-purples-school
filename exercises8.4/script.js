const roles = ['user','admin','manager','superuser'];

const res = roles.slice(2);//(start,end)
console.log(roles);
console.log(res);

const res2 = roles.slice(2,3);//(start,end)
console.log(roles);
console.log(res2);

const res3 = roles.slice(0,2);//(start,end)
console.log(roles);
console.log(res3);

const res4 = roles.slice(-3);//(start,end)
console.log(roles);
console.log(res4);

const res5 = roles.slice(2,-1);//(start,end)
console.log(roles);
console.log(res5);

const res6 = roles.splice(2);//(start,length)
console.log(res6);
console.log(roles);

const res7 = roles.splice(0,2);//(start,length)
console.log(res7);
console.log(roles);

const roles2 = ['user','admin','manager','superuser']; //refresh

const res8 = roles2.splice(-1);//(start,length)
console.log(res8);
console.log(roles2);

const roles3 = ['user','admin','manager','superuser']; //refresh

roles3.reverse();
console.log(roles3);

const newRoles = ['sysadmin','developer'];
const res9 = roles3.concat(newRoles);
console.log(res9);
console.log(roles3);
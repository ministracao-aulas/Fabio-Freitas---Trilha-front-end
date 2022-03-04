let users = [
    {
        name: "Tiago",
        lastName: "França",
        age: 28,
    },
    {
        name: "Fabio",
        lastName: "Freitas",
        age: 36,
    }
];

//have many methods. And one of them is forEach
//foreach (capital E)
// {} curly brackets
// [] brackets
// () parenthesis

// apesar de 'typeof' retornar 'object' para ambos, objetos e arrays possuem metodos distintos
// even though(~dow) 'typeof' will return 'object'on both(~bouff) cases, arrays and objects have different methods.

// console.log(typeof {});//object
// console.log(typeof []);//object

// console.log(users.length);//2
// console.log(users[0].length);//undefined

users.forEach(function (user, index) {
    console.log(index);
    console.table(user);
});

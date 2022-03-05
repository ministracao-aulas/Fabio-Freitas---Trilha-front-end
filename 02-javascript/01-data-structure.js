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
    },
    {
        name: "Eris",
        lastName: "Alves",
        age: 38,
    },
    {
        name: "Paulo",
        lastName: "Fernandes",
        age: 1,
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

users.forEach((user, index) => {
    //indexOf
    // let message = "Hello " + user.name
    let message = `Hello ${user.name}`  //curly brackets
    console.log(message);
});

// In PHP, the foreach would be like this:
/*
foreach($users as $index => $user)
{
    var_dump($user);
}
*/

// what are we going to learn today?

// (singular)  this person is called 'user'
// (plural) -> these people are called 'users'


/*
nomes = [
    'pedro',
    'paulo',
];

console.log(nomes.indexOf('pedro'))
*/

lessThan30 =  users.filter((user) => {
    return user.age < 30;
})

console.table(lessThan30);

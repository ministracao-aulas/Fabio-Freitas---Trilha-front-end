<?php

$users = [
    [
        'name' =>  "Fabio",
        'lastName' =>  "Freitas",
        'age' =>  36,
    ],
    [
        'name' =>  "Fabio",
        'lastName' =>  "Freitas",
        'age' =>  45,
    ],
    [
        'name' =>  "Fabio",
        'lastName' =>  "Freitas",
        'age' =>  37,
    ],
    [
        'name' =>  "Fabio",
        'lastName' =>  "Freitas",
        'age' =>  38,
    ],
    [
        'name' =>  "Tiago",
        'lastName' =>  "França",
        'age' =>  28,
    ],
];

var_export($users);
echo "\n--------------\n";

// foreach ($users as $index => $user)
// {
//     if($user['age'] >= 30) {
//         unset($users[$index]);
//     }
// }

$filtered = array_filter($users, function ($item) {
    return $item['age'] < 30;
});

// unset($users[0]);

var_export($users);
echo "\n--------------\n";

var_export($filtered);
echo "\n--------------\n";

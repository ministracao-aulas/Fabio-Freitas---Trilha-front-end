let nome = 'Fabio';
console.log('1 - Nome:', nome);

nome = 'Camila';
console.log('2 - Nome:', nome);

function algo()
{
    let nome = 'Pedro';
    console.log('3 - FN Nome:', nome);

    if (true) {
        nome = 'Dentro do IF';
        console.log('3 - FN Nome:', nome);
    }

    // nome = 'tiago';
    console.log('4 - FN Nome:', nome);
}

algo();

console.log('4 - Nome:', nome);

function inflationCalculator() {
    let stopa = document.querySelector('#inflationRate');
    let novac = document.querySelector('#money');
    let godine = document.querySelector('#years');

    stopa = parseFloat(stopa.value);
    novac = parseFloat(novac.value);
    godine = parseFloat(godine.value);


    let vrednost_posle = novac + (novac * (stopa/100));
    
    for(let i = 1; i < godine; i++) {
        vrednost_posle += vrednost_posle * (stopa/100);
    }

    vrednost_posle = vrednost_posle.toFixed(2);

    let newElement = document.createElement('div'); // pravimo novi element tipa div
    newElement.className = 'new-value'; // dodeljujemo nasem elementu klasu
    newElement.innerText = `Danasnjih ${novac} evra ce za ${godine} godina, ako je kamatna stopa ${stopa}, vredeti ${vrednost_posle}`;
    
    document.querySelector('.container').appendChild(newElement);
    

}
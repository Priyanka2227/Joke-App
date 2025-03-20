let totalCount = 0;
let jokeCounts = {};

async function getJoke() { 
    document.getElementById('joke').innerText = '';
    document.getElementById('setup').innerText = '';
    document.getElementById('delivery').innerText = '';

    let jokeType = document.getElementById('jokeType').value; 
    let response = await fetch(`https://v2.jokeapi.dev/joke/${jokeType}`);
    let jokeObject = await response.json();

    totalCount++;

   
    jokeCounts[jokeType] = (jokeCounts[jokeType] || 0) + 1;

   
    if (jokeObject.type == 'single') {
        document.getElementById('joke').innerText = jokeObject.joke;
    } else {
        document.getElementById('setup').innerText = jokeObject.setup;
        document.getElementById('delivery').innerText = jokeObject.delivery;
    }

   
    let jokeSummary = Object.entries(jokeCounts)
        .map(([type, count]) => `${type}: ${count}`)
        .join(' | ');

   
    document.getElementById('count').innerText = `Total jokes read: ${totalCount} | ${jokeSummary}`;
    
    console.log(jokeObject);
}

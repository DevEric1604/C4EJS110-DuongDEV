const result = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
console.log(result);

async function load() {
    const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
    const data = await conn.json();
    console.log(data.moves[0].move.name);
    console.log(data);
    let a = document.getElementById("a");
    for (let i in data.moves[0].move) {
        a.insertAdjacentHTML('beforeend', `${i}`)
    }
}
load();
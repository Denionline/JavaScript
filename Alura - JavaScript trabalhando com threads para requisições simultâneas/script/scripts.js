const graficoDolar = document.querySelector('#graficoDolar');

const grafidoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
  });

async function conectaAPI(){
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    const conectaTraduzido = await conecta.json();
    console.log(conectaTraduzido)
}
conectaAPI()
  
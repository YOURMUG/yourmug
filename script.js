// Array che conterrà i prodotti nel carrello
let carrello = [];

// Funzione per aggiungere un prodotto al carrello
function aggiungiAlCarrello(nome, prezzo) {
  const prodotto = { nome: nome, prezzo: prezzo };
  carrello.push(prodotto);
  aggiornaCarrello();
}

// Funzione per aggiornare la visualizzazione del carrello
function aggiornaCarrello() {
  // Prendi il contenitore della lista del carrello
  const listaCarrello = document.getElementById('lista-carrello');
  
  // Pulisci la lista attuale
  listaCarrello.innerHTML = '';
  
  // Aggiungi ogni prodotto al carrello
  carrello.forEach((prodotto, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${prodotto.nome} - €${prodotto.prezzo}`;
    
    // Aggiungi un bottone per rimuovere il prodotto
    const bottoneRimuovi = document.createElement('button');
    bottoneRimuovi.innerText = 'Rimuovi';
    bottoneRimuovi.onclick = () => rimuoviDalCarrello(index);
    li.appendChild(bottoneRimuovi);
    
    listaCarrello.appendChild(li);
  });
  
  // Aggiorna il totale
  const totale = carrello.reduce((acc, prodotto) => acc + prodotto.prezzo, 0);
  document.getElementById('totale-prezzo').innerText = totale.toFixed(2);
}

// Funzione per rimuovere un prodotto dal carrello
function rimuoviDalCarrello(index) {
  // Rimuovi il prodotto dalla posizione specificata
  carrello.splice(index, 1);
  
  // Rimuovi il prodotto visivamente dalla lista
  aggiornaCarrello();
}


const URL = `https://api.coincap.io/v2/`;

//Definir un ser de funciones
function getAssets() {
  return fetch(`${URL}assets?limit=20`)
    .then((response) => response.json())
    .then((response) => response.data);
}

function getAsset(coin) {
  return fetch(`${URL}assets/${coin}/`)
    .then((response) => response.json())
    .then((response) => response.data);
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  return fetch(
    `${URL}assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((response) => response.json())
    .then((response) => response.data);
}

function getMarkets(coin) {
  return fetch(`${URL}assets/${coin}/markets?limit=5`)
    .then((response) => response.json())
    .then((response) => response.data);
}

function getExchange(id) {
  return fetch(`${URL}exchanges/${id}`)
    .then((response) => response.json())
    .then((response) => response.data);
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory,
};

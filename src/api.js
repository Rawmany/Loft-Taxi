export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({ email, password })
  }).then(res => res.json());
};

export const saveCardData = async (cardData) => {
  return fetch(
    `https://loft-taxi.glitch.me/card`, 
    {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(cardData)
  }).then(res => res.json());
};

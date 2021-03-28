export const serverLogin = async (data) => {
	return fetch(
		`https://loft-taxi.glitch.me/auth`,
		{
			method: 'POST',
			headers: {'Content-Type' : 'application/json;charset=utf-8'},
			body: JSON.stringify(data)
		}
	).then(res => res.json());
}

export const serverRegister = async (data) => {
	return fetch(
		`https://loft-taxi.glitch.me/register`,
		{
			method: "POST",
			headers: {'Content-Type' : 'application/json;charset=utf-8'},
			body: JSON.stringify(data)
		}
	).then(res => res.json());
}

export const serverAddCard = async (data) => {
	return fetch(
		`https://loft-taxi.glitch.me/card`,
		{
			method: "POST",
			headers: {"Content-Type": "application/json;charset=utf-8"},
      		body: JSON.stringify({ data })
		}
	).then(res => res.json())
}

export const serverGetCard = async (token) => {
	return fetch(
		`https://loft-taxi.glitch.me/card?token=${token}`
	).then(res => res.json());
}

export const serverGetRoute = async () => {
	return fetch(
		`https://loft-taxi.glitch.me/addressList`
	).then(res => res.json()).then(data => data)
}

export const serverGetAddress = async (startRoute, endRoute) => {
	return fetch(
		`https://loft-taxi.glitch.me/route?address1=${startRoute}&address2=${endRoute}`
	).then(res => res.json()).then(data => data)
}


async function fetchPlayers() {
  const apiKey = process.env.NEXT_PUBLIC_NBA_API_KEY; // Replace with your actual key

  const response = await fetch('https://api.balldontlie.io/v1/players', {
    method: 'GET',
    headers: {
      'Authorization': `${apiKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok`);
  }

  const data = await response.json();
  // Use the data from the response here
  console.log(data);
  return data;
}

export default fetchPlayers;
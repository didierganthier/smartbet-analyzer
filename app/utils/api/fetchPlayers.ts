async function fetchPlayers(page = 1) {
    const apiKey = process.env.NEXT_PUBLIC_NBA_API_KEY;
  
    const url = `https://api.balldontlie.io/v1/players?page=${page}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
      },
    });
  
    if (!response.ok) {
      throw new Error(`Network response was not ok`);
    }
  
    const data = await response.json();
    return data;
  }

  export default fetchPlayers;
  
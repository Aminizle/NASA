exports.handler = async (event) => {
    const { date } = event.queryStringParameters;
    const NASA_KEY = process.env.NASA_KEY; // From Netlify env vars
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${date}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  };
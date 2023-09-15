const getHotelDetails = async (id) => {
  const url = `${
    import.meta.env.VITE_REACT_APP_API_URL
  }details?hotel_id=${id}&locale=en_US&domain=US`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_REACT_APP_API_HOST,
    },
  };

  try {
    console.log('Fetching');
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default getHotelDetails;

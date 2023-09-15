const getHotels = async () => {
  const key = Math.floor(Math.random() * 50);
  const url = `${
    import.meta.env.VITE_REACT_APP_API_URL
  }search?checkin_date=2023-09-26&adults_number=1&region_id=2872&checkout_date=2023-09-27&locale=en_US&sort_order=REVIEW&domain=US&star_rating_ids=3%2C4%2C5&payment_type=PAY_LATER%2CFREE_CANCELLATION&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&price_max=1000&amenities=WIFI%2CPARKING&children_ages=4%2C0%2C15&page_number=1&price_min=10&guest_rating_min=8&meal_plan=FREE_BREAKFAST&available_filter=SHOW_AVAILABLE_ONLY`;
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
    const properties = await response.json();
    const result = await properties.properties;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default getHotels;

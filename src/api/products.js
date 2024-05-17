import axios from 'axios';

export const getProducts = async (
  selectedTypes,
  selectedBrands,
  selectedSortby,
  searchWord,
  limit,
  current
) => {
  try {
    const body = {
      type: selectedTypes,
      brand: selectedBrands,
      sortby: selectedSortby,
      searchWord: searchWord,
      limit: limit,
      current: current,
    };

    const url = '/api/products';
    const resp = await axios.post(url, body);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

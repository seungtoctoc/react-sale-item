import axios from 'axios';

export async function getProducts(
  selectedTypes,
  selectedBrands,
  selectedSortby
) {
  try {
    const body = {
      selectedTypes: selectedTypes,
      selectedBrands: selectedBrands,
      selectedSortby: selectedSortby,
    };

    const url = '/api/products';
    const resp = await axios.post(url, body);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
}

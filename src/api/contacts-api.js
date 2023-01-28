import axios from 'axios';

axios.defaults.baseURL = 'https://63d2860d06556a0fdd3e5931.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  console.log(data);
  return data;
}

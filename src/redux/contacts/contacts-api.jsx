import axios from 'axios'

axios.defaults.baseURL = 'https://61e7e6c5e32cd90017acbe76.mockapi.io'

export const fetchContacts = () => {
    return axios.get("/contacts").then((response) => response.data);
  };
  
  export const addContact = (contact) => {
    return axios.post("/contacts", contact).then(({ data }) => data);
  };
  
  export const deleteContact = (contactId) => {
    return axios.delete(`/contacts/${contactId}`);
  };
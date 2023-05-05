import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

//   export const getContacts = async () => {
//     const response = await axios.get('/contacts');
//     console.log(response.data)
//     return response.data;
//   };
// export const createContact = async contact => {
//   const response = await axios.post('/contacts', contact);
//   return response.data;
// };
// export const deleteContact = async contactId => {
//   const response = await axios.delete(`/contacts/${contactId}`);
//   return response.data;
// };


// export const createUser = async () => {
//     const response = await axios.post('/users/signup');
//     // console.log(response.data)
//     return response.data;
//   };
// export const loginUser = async login => {
//   const response = await axios.post(`/users/${login}`);
//   return response.data;
// };
// export const logoutUser = async logout => {
//   const response = await axios.post(`/users/${logout}`);
//   return response.data;
// };
// export const currentUsers = async =>{
//     const response = await axios.get(`users/current`)
//     return response.data
// }
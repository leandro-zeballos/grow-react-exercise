import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/';
export const REPRESENTATIVE_SELECTED = 'REPRESENTATIVE_SELECTED';
export const QUERY_REPRESENTATIVES = 'QUERY_REPRESENTATIVES';

export function selectRepresentative(representative) {
 return {
   type: REPRESENTATIVE_SELECTED,
   payload: representative
 }
}

export function queryRepresentatives(typeSearch, state) {
   const PATH = typeSearch === 'rep'? `representatives/${state}` : `senators/${state }`;
   const url = ROOT_URL + PATH;
   const request = axios.get(url);
   return {
    type: QUERY_REPRESENTATIVES,
    payload: request
   }
}

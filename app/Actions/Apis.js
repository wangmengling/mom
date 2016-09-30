/**
 * Created by kee on 15/10/21.
 */
import axios from 'axios';
const host = 'HTTP://localhost:3000' ;

export default function apis({ url, method, ...others }) {
  console.log(host + url)
  return axios({
    url: host + url,
    method: method,
    ...others
  });
}

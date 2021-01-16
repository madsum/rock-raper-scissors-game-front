import axios from 'axios';

export default class CurdApi {

    static postScore(data){
        axios.post('http://localhost:8080/score/add', data)
        .then(res => {
            console.log('res: ' + res.data);
        })
        .catch( error => {
            console.log('err: ' + error);
        })
    }

    static async getScore(){
      try{
        const response = await  axios.get('http://localhost:8080/score/all')
        const data = await response.data;
        return data;  
      } catch (error) {
        console.log('GET error: ' + error.message);
          return error.message; 
      }   
    }
}
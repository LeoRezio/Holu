import http from '../http-common';
import axios from 'axios';

class ListDataService {
    getProduct() {
        return http.get("/");
    }

    postProduct(data) {
        const body = data;
        console.log(body);
        var postData = JSON.stringify(data);
        console.log(postData);
        //let axiosConfig = {  
        //    header: {
        //        "Access-Control-Allow-Origin": "*" 
        //    }
        //  };
          axios.post('http://localhost:8080/add', postData, {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/x-www-form-urlencoded'})
          .then((res) => {
            console.log("RESPONSE RECEIVED: ", res.data);
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          })
    }

    putProduct(data) {
        console.log(data);
        const id = data._id;
        const body = {name: data.name, qnty: data.qnty}
        return http.put(`/${id}`, body );
    }
    
    deleteProduct(data) {
        console.log(data);
        const id = data;
        return http.delete(`/${id}`).then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          });
    }
}

export default new ListDataService();
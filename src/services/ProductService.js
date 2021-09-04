import axios from 'axios';

const COUTNRY_API_KEY_URL="http://localhost:8080/api/v1/countries";

class ProductService {

    getcountries(){
        return axios.get(COUTNRY_API_KEY_URL);
    }
}

export default new ProductService()

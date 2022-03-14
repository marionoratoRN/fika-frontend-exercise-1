import axios from 'axios';
import config from 'react-native-config';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/discover/',
});

const apiKey = config.API_KEY;

class MovieService {
    getMovies = async () => {
        try {
            const response = await instance.get('movie', {
                params: {
                    api_key: apiKey,
                    language: 'en-US',
                    page: '1',
                    include_adult: false
                }
            })
            console.log('response', response);
        } catch(e){
            console.log('error', e)
        }
    }
}

export default new MovieService();

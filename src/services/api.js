import axios from 'axios';


export const getSearchResults = async (query) => {

    try {
        const res = await axios.get('https://search-tool-be.onrender.com/search', {
            params: {
                query: query,
                page: 1
            }
        })
        
        return res.data;
    }catch(err) {
        console.log(err)
        return null;
    }

}

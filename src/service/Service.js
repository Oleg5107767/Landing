import {useHttp} from '../hook/http.hook';


const useService = () => {
    const {request, loading} = useHttp();

    const getAllUser = async (count = 0) => {
    const apiAllUsers =`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`
        const res = await request(apiAllUsers);
 
        return res.users    
    }

    const getPositions = async () => {
        const apiPositions = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
        const res = await request(apiPositions);
        return res.positions
    }
    const getToken = async() => {
        const apiToken = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';
        const res = await request(apiToken);
        return res.token
    }

    const createUser = async (formData) => {
        const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
        const headers ={
        'Token': await getToken(),
       }
        await request(url, 'POST', formData, headers);
    }

    return { getAllUser, createUser, getPositions, getToken, loading }
}

export default useService;





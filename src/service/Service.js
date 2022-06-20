import {useHttp} from '../hook/http.hook';


const useService = () => {
    const {request, loading} = useHttp();

    const getAllUser = async (count = 0) => {
    //    const apiAllUsers ='https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';
    const apiAllUsers =`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`
        const res = await request(apiAllUsers);

        return res.users    
    }

    const getPositions = async () => {
        const apiPositions = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
        const res = await request(apiPositions);
        return res.positions
    }




    return { getAllUser,  getPositions}
}

export default useService;

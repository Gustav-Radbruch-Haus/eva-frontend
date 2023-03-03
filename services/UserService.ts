import {axiosInstance} from './api'
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserService = {
    fetchUserdata: async function () {
        return axiosInstance.get('/users/me').then(res => {
            const user = res.data;
            if (user == undefined) return null;
            AsyncStorage.setItem('user_id', user.userName);
            AsyncStorage.setItem('user_fullname', user.fullName);
            AsyncStorage.setItem('user_mail', user.email);
            AsyncStorage.setItem('user_roles', JSON.stringify(user.roles));
        });
    },


    async whoAmI(): Promise<String> {
        return this.whoAmI();
    },

    async getCurrentUser(): Promise<String> {
        return await AsyncStorage.getItem('user_id');
    },
    async getCurrentUserFullname(): Promise<String> {
        return await AsyncStorage.getItem('user_fullname');
    },
    async getCurrentUserMail(): Promise<String> {
        return await AsyncStorage.getItem('user_mail');
    },
    async getCurrentUserRoles(): Promise<String> {
        return await AsyncStorage.getItem('user_roles');
    }


};


export default UserService;
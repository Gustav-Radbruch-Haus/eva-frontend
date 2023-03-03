import AsyncStorage from '@react-native-async-storage/async-storage';
import {clearAuthTokens, getAccessToken, getRefreshToken, setAuthTokens} from 'react-native-axios-jwt'
import {axiosInstance} from './api'

const baseURL = "http://192.168.88.211:8080/api";

const AuthService = {
    async login(username, password) {
        try {
            let body = {
                "userName": username,
                "password": password,
            };

            return await axiosInstance.post(`${baseURL}/authentication/signin`, JSON.stringify(body), {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(async response => {
                await AsyncStorage.setItem('user_id', response.data.userName);
                await AsyncStorage.setItem('user_fullname', response.data.fullName);
                await AsyncStorage.setItem('user_roles', JSON.stringify(response.data.roles));

                await setAuthTokens({
                    accessToken: response.data.jwtToken,
                    refreshToken: response.data.jwtToken
                })

                return true;
            }).catch(error => {
                alert("Login failed!");
                console.error(error);
                return false;
            });

        } catch (error) {
            console.error(error.toString());
        }
    },

    async logout() {
        await clearAuthTokens();
        await AsyncStorage.clear();
    },

    async register(username, password) {
        try {
            const response = await axiosInstance.post(`${baseURL}/authentication/signup`, {
                username,
                password,
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async getUserInfo() {
        try {
            const response = await axiosInstance.get(`${baseURL}/user`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async isAuthenticated() {
        return await AsyncStorage.getItem('user_id').then((value) => {
            if (value === null) {
                return false;
            }
            return true;
        });
    }
};

const accessToken = getAccessToken().then(accessToken => console.log(accessToken))
const refreshToken = getRefreshToken().then(refreshToken => console.log(refreshToken))

export default AuthService;
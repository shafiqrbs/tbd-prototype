import axios from "axios";

const productsDataStoreIntoLocalStorage = async () => {
    try {
        const user = localStorage.getItem('user');
        const userId = user ? JSON.parse(user).id : null;

        const response = await axios.get(
            `${import.meta.env.VITE_API_GATEWAY_URL}inventory/stock-item`,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "X-Api-Key": import.meta.env.VITE_API_KEY,
                    "X-Api-User": userId
                },
            }
        );

        let { data } = response;

        if (data && data.data) {
            localStorage.setItem('core-products', JSON.stringify(data.data));
        }
    } catch (error) {
        console.error(error);
    }
};

export default productsDataStoreIntoLocalStorage;

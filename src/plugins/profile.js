import { jwtDecode } from "jwt-decode";

const {
    VITE_SARA_INTE_HOST: saraInteHost,
    VITE_SARA_TOKEN_NAME: saraTokenName,
} = import.meta.env;

export const useProfile = () => {
    const saraToken = localStorage.getItem(saraTokenName);
    if (!saraToken) {
        return null;
    }

    try {
        const data = jwtDecode(saraToken);
        if (Date.now() >= data.exp * 1000) {
            throw new Error("sara token expired");
        }
        return data?.user;
    } catch (e) {
        console.warn(e);
        localStorage.removeItem(saraTokenName);
        location.reload();
        return null;
    }
};

export const redirectLogin = (isWithRefer=false) => {
    if (!isWithRefer) {
        location.assign(saraInteHost);
        return;
    }

    const {href: refer} = location;
    const params = new URLSearchParams({refer});
    location.assign(`${saraInteHost}/?${params}`);
};

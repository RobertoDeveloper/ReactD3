export const mockAuthData = (isLoggedIn) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const authData = isLoggedIn ? {token: '123456', name: 'Rob'} : null;
            resolve(authData);
        }, 5000);
    }); 
};

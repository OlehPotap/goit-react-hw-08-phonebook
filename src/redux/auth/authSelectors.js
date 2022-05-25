const getIsLogedIn = state => state.auth.isLogedIn;
const getUserName = state => state.auth.user.name;

const authSelectors = {
    getIsLogedIn,
    getUserName
}
export default authSelectors;
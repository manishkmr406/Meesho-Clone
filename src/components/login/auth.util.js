export function authenticateUser(userName,passWord) {
    if(userName === 'admin@123' && passWord === 'admin') {
        return true;
    }
    return false;
}
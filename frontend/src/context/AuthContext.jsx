import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = sessionStorage.getItem('adminUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (username, password) => {
        if (username === 'gagugagana01@gmail.com' && password === 'gagana12345') {
            const userData = { username, role: 'admin' };
            setUser(userData);
            sessionStorage.setItem('adminUser', JSON.stringify(userData));
            return { success: true };
        }
        return { success: false, message: 'Invalid credentials' };
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('adminUser');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

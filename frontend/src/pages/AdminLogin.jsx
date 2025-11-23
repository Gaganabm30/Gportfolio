import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './AdminLogin.css';

const AdminLogin = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(formData.username, formData.password);
        if (result.success) {
            navigate('/admin/dashboard');
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="admin-login">
            <div className="login-card card">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;

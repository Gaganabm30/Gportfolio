import { useState } from 'react';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaSearch, FaUserShield, FaProjectDiagram, FaTrophy } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ImageUpload from '../components/ImageUpload';
import BackgroundAnimation from '../components/BackgroundAnimation';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const {
        skills, addSkill, updateSkill, deleteSkill,
        projects, addProject, updateProject, deleteProject,
        achievements, addAchievement, updateAchievement, deleteAchievement,
        messages, deleteMessage
    } = useData();
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('skills');
    const [editingItem, setEditingItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const openModal = (item = null) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setEditingItem(null);
        setIsModalOpen(false);
    };

    const handleDelete = (id, type) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            if (type === 'skills') deleteSkill(id);
            if (type === 'projects') deleteProject(id);
            if (type === 'achievements') deleteAchievement(id);
            if (type === 'messages') deleteMessage(id);
        }
    };

    const getFilteredItems = (items) => {
        if (!searchTerm) return items;
        return items.filter(item =>
            (item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (item.message && item.message.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (item.email && item.email.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    };

    const FormModal = () => {
        const [formData, setFormData] = useState(editingItem || {});

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleImageSelect = (base64Image) => {
            setFormData({ ...formData, image: base64Image });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (activeTab === 'skills') {
                editingItem ? updateSkill(editingItem._id, formData) : addSkill(formData);
            } else if (activeTab === 'projects') {
                editingItem ? updateProject(editingItem._id, formData) : addProject(formData);
            } else if (activeTab === 'achievements') {
                editingItem ? updateAchievement(editingItem._id, formData) : addAchievement(formData);
            }
            closeModal();
        };

        return (
            <div className="modal-overlay">
                <motion.div
                    className="modal-content glass-card"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                >
                    <h3>{editingItem ? 'Edit' : 'Add'} {activeTab.slice(0, -1)}</h3>
                    <form onSubmit={handleSubmit}>
                        {activeTab === 'skills' && (
                            <>
                                <input name="name" placeholder="Skill Name" value={formData.name || ''} onChange={handleChange} required />
                                <input name="category" placeholder="Category" value={formData.category || ''} onChange={handleChange} required />
                            </>
                        )}
                        {activeTab === 'projects' && (
                            <>
                                <input name="title" placeholder="Title" value={formData.title || ''} onChange={handleChange} required />
                                <textarea name="description" placeholder="Description" value={formData.description || ''} onChange={handleChange} required />
                                <div className="form-section">
                                    <label>Project Image</label>
                                    <ImageUpload onImageSelect={handleImageSelect} initialImage={formData.image} />
                                </div>
                                <input name="githubLink" placeholder="GitHub Link" value={formData.githubLink || ''} onChange={handleChange} />
                                <input name="demoLink" placeholder="Demo Link" value={formData.demoLink || ''} onChange={handleChange} />
                            </>
                        )}
                        {activeTab === 'achievements' && (
                            <>
                                <input name="title" placeholder="Title" value={formData.title || ''} onChange={handleChange} required />
                                <input name="date" placeholder="Date" value={formData.date || ''} onChange={handleChange} />
                                <textarea name="description" placeholder="Description" value={formData.description || ''} onChange={handleChange} required />
                                <div className="form-section">
                                    <label>Achievement Image</label>
                                    <ImageUpload onImageSelect={handleImageSelect} initialImage={formData.image} />
                                </div>
                            </>
                        )}
                        <div className="modal-actions">
                            <button type="button" onClick={closeModal} className="cancel-btn">Cancel</button>
                            <button type="submit" className="save-btn">Save</button>
                        </div>
                    </form>
                </motion.div>
            </div>
        );
    };

    const currentItems = activeTab === 'skills' ? skills : activeTab === 'projects' ? projects : activeTab === 'achievements' ? achievements : messages;
    const filteredItems = getFilteredItems(currentItems);

    const floatingIcons = [
        { Icon: FaUserShield, delay: 0, position: { top: '10%', left: '5%' } },
        { Icon: FaProjectDiagram, delay: 1, position: { top: '20%', right: '10%' } },
        { Icon: FaTrophy, delay: 2, position: { bottom: '15%', left: '8%' } },
        { Icon: FaEdit, delay: 3, position: { bottom: '25%', right: '5%' } },
    ];

    return (
        <div className="admin-dashboard">
            <BackgroundAnimation icons={floatingIcons} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <header className="dashboard-header">
                    <motion.h1
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        Admin Dashboard
                    </motion.h1>
                    <button onClick={handleLogout} className="logout-btn"><FaSignOutAlt /> Logout</button>
                </header>

                <div className="dashboard-controls">
                    <div className="dashboard-tabs">
                        <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>Skills</button>
                        <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>Projects</button>
                        <button className={activeTab === 'achievements' ? 'active' : ''} onClick={() => setActiveTab('achievements')}>Achievements</button>
                        <button className={activeTab === 'messages' ? 'active' : ''} onClick={() => setActiveTab('messages')}>Messages</button>
                    </div>
                    <div className="search-bar">
                        <FaSearch />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="dashboard-content">
                    {activeTab !== 'messages' && (
                        <motion.button
                            className="add-btn"
                            onClick={() => openModal()}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPlus /> Add New
                        </motion.button>
                    )}

                    <motion.div className="items-grid" layout>
                        <AnimatePresence>
                            {filteredItems.map(item => (
                                <motion.div
                                    key={item._id}
                                    className="dashboard-item glass-card"
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    whileHover={{ y: -5 }}
                                >
                                    {activeTab === 'messages' ? (
                                        <div className="message-item">
                                            <div className="message-header">
                                                <h4>{item.name}</h4>
                                                <span className="message-date">{item.date}</span>
                                            </div>
                                            <p className="message-email">{item.email}</p>
                                            <p className="message-text">{item.message}</p>
                                        </div>
                                    ) : (
                                        <div className="item-info">
                                            {item.image && <img src={item.image} alt={item.title} className="item-thumbnail" />}
                                            <span>{item.name || item.title}</span>
                                        </div>
                                    )}
                                    <div className="actions">
                                        {activeTab !== 'messages' && (
                                            <button onClick={() => openModal(item)} className="edit-btn"><FaEdit /></button>
                                        )}
                                        <button onClick={() => handleDelete(item._id, activeTab)} className="delete-btn"><FaTrash /></button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {isModalOpen && <FormModal />}
        </div>
    );
};

export default AdminDashboard;

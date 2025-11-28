import { createContext, useState, useEffect, useContext } from 'react';
import { skills as initialSkills } from '../data/skills';
import { projects as initialProjects } from '../data/projects';
import { achievements as initialAchievements } from '../data/achievements';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [achievements, setAchievements] = useState([]);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load from localStorage or use initial data
        const loadData = () => {
            const storedSkills = localStorage.getItem('skills');
            const storedProjects = localStorage.getItem('projects');
            const storedAchievements = localStorage.getItem('achievements');
            const storedMessages = localStorage.getItem('messages');

            if (storedSkills) setSkills(JSON.parse(storedSkills));
            else {
                setSkills(initialSkills);
                localStorage.setItem('skills', JSON.stringify(initialSkills));
            }

            if (storedProjects) setProjects(JSON.parse(storedProjects));
            else {
                setProjects(initialProjects);
                localStorage.setItem('projects', JSON.stringify(initialProjects));
            }

            if (storedAchievements) setAchievements(JSON.parse(storedAchievements));
            else {
                setAchievements(initialAchievements);
                localStorage.setItem('achievements', JSON.stringify(initialAchievements));
            }

            if (storedMessages) setMessages(JSON.parse(storedMessages));
            else {
                setMessages([]);
                localStorage.setItem('messages', JSON.stringify([]));
            }
            setLoading(false);
        };

        loadData();
    }, []);

    // Helper to save to localStorage
    const saveToStorage = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    // Skills Operations
    const addSkill = (skill) => {
        const newSkills = [...skills, { ...skill, _id: Date.now().toString() }];
        setSkills(newSkills);
        saveToStorage('skills', newSkills);
    };

    const updateSkill = (id, updatedSkill) => {
        const newSkills = skills.map(s => s._id === id ? { ...updatedSkill, _id: id } : s);
        setSkills(newSkills);
        saveToStorage('skills', newSkills);
    };

    const deleteSkill = (id) => {
        const newSkills = skills.filter(s => s._id !== id);
        setSkills(newSkills);
        saveToStorage('skills', newSkills);
    };

    // Projects Operations
    const addProject = (project) => {
        const newProjects = [...projects, { ...project, _id: Date.now().toString() }];
        setProjects(newProjects);
        saveToStorage('projects', newProjects);
    };

    const updateProject = (id, updatedProject) => {
        const newProjects = projects.map(p => p._id === id ? { ...updatedProject, _id: id } : p);
        setProjects(newProjects);
        saveToStorage('projects', newProjects);
    };

    const deleteProject = (id) => {
        const newProjects = projects.filter(p => p._id !== id);
        setProjects(newProjects);
        saveToStorage('projects', newProjects);
    };

    // Achievements Operations
    const addAchievement = (achievement) => {
        const newAchievements = [...achievements, { ...achievement, _id: Date.now().toString() }];
        setAchievements(newAchievements);
        saveToStorage('achievements', newAchievements);
    };

    const updateAchievement = (id, updatedAchievement) => {
        const newAchievements = achievements.map(a => a._id === id ? { ...updatedAchievement, _id: id } : a);
        setAchievements(newAchievements);
        saveToStorage('achievements', newAchievements);
    };

    const deleteAchievement = (id) => {
        const newAchievements = achievements.filter(a => a._id !== id);
        setAchievements(newAchievements);
        saveToStorage('achievements', newAchievements);
    };

    // Messages Operations
    const addMessage = (message) => {
        const newMessages = [...messages, { ...message, _id: Date.now().toString(), date: new Date().toLocaleDateString() }];
        setMessages(newMessages);
        saveToStorage('messages', newMessages);
    };

    const deleteMessage = (id) => {
        const newMessages = messages.filter(m => m._id !== id);
        setMessages(newMessages);
        saveToStorage('messages', newMessages);
    };

    return (
        <DataContext.Provider value={{
            skills, addSkill, updateSkill, deleteSkill,
            projects, addProject, updateProject, deleteProject,
            achievements, addAchievement, updateAchievement, deleteAchievement,
            messages, addMessage, deleteMessage,
            loading
        }}>
            {children}
        </DataContext.Provider>
    );
};

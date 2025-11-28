import { createContext, useState, useEffect, useContext } from 'react';
import { db } from '../firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [achievements, setAchievements] = useState([]);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribeSkills = onSnapshot(collection(db, 'skills'), (snapshot) => {
            const skillsData = snapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id }));
            setSkills(skillsData);
        });

        const unsubscribeProjects = onSnapshot(collection(db, 'projects'), (snapshot) => {
            const projectsData = snapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id }));
            setProjects(projectsData);
        });

        const unsubscribeAchievements = onSnapshot(collection(db, 'achievements'), (snapshot) => {
            const achievementsData = snapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id }));
            setAchievements(achievementsData);
        });

        const unsubscribeMessages = onSnapshot(collection(db, 'messages'), (snapshot) => {
            const messagesData = snapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id }));
            setMessages(messagesData);
        });

        setLoading(false);

        return () => {
            unsubscribeSkills();
            unsubscribeProjects();
            unsubscribeAchievements();
            unsubscribeMessages();
        };
    }, []);

    // Skills Operations
    const addSkill = async (skill) => {
        await addDoc(collection(db, 'skills'), skill);
    };

    const updateSkill = async (id, updatedSkill) => {
        await updateDoc(doc(db, 'skills', id), updatedSkill);
    };

    const deleteSkill = async (id) => {
        await deleteDoc(doc(db, 'skills', id));
    };

    // Projects Operations
    const addProject = async (project) => {
        await addDoc(collection(db, 'projects'), project);
    };

    const updateProject = async (id, updatedProject) => {
        await updateDoc(doc(db, 'projects', id), updatedProject);
    };

    const deleteProject = async (id) => {
        await deleteDoc(doc(db, 'projects', id));
    };

    // Achievements Operations
    const addAchievement = async (achievement) => {
        await addDoc(collection(db, 'achievements'), achievement);
    };

    const updateAchievement = async (id, updatedAchievement) => {
        await updateDoc(doc(db, 'achievements', id), updatedAchievement);
    };

    const deleteAchievement = async (id) => {
        await deleteDoc(doc(db, 'achievements', id));
    };

    // Messages Operations
    const addMessage = async (message) => {
        await addDoc(collection(db, 'messages'), { ...message, date: new Date().toLocaleDateString() });
    };

    const deleteMessage = async (id) => {
        await deleteDoc(doc(db, 'messages', id));
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

import { useState, useRef } from 'react';
import { FaCloudUploadAlt, FaTimes, FaSpinner } from 'react-icons/fa';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './ImageUpload.css';

const ImageUpload = ({ onImageSelect, initialImage }) => {
    const [preview, setPreview] = useState(initialImage || null);
    const [dragActive, setDragActive] = useState(false);
    const [uploading, setUploading] = useState(false);
    const inputRef = useRef(null);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = async (file) => {
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file');
            return;
        }

        setUploading(true);
        try {
            const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            setPreview(downloadURL);
            onImageSelect(downloadURL);
        } catch (error) {
            console.error("Error uploading image: ", error);
            alert("Failed to upload image.");
        } finally {
            setUploading(false);
        }
    };

    const removeImage = (e) => {
        e.stopPropagation(); // Prevent triggering click on container
        setPreview(null);
        onImageSelect('');
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <div
            className={`image-upload-container ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={onButtonClick}
        >
            <input
                ref={inputRef}
                type="file"
                className="file-input"
                onChange={handleChange}
                accept="image/*"
            />

            {uploading ? (
                <div className="upload-placeholder">
                    <FaSpinner className="upload-icon spinner" />
                    <p>Uploading...</p>
                </div>
            ) : preview ? (
                <div className="image-preview">
                    <img src={preview} alt="Preview" />
                    <button className="remove-btn" onClick={removeImage}>
                        <FaTimes />
                    </button>
                </div>
            ) : (
                <div className="upload-placeholder">
                    <FaCloudUploadAlt className="upload-icon" />
                    <p>Drag & Drop or Click to Upload Image</p>
                    <span className="file-types">Supports: JPG, PNG, GIF</span>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;

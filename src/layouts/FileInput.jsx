import React, { useState } from 'react';

const FileInput = ({ onFileSelect }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    onFileSelect(files);
  };

  return (
    <div
      className={`file-input ${dragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h2>Drag and Select the File</h2>
      <p>Drag and select all the files here and browse it.</p>
    </div>
  );
};

export default FileInput;

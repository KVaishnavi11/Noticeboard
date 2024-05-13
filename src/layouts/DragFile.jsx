import React, {useState} from 'react';
import FileInput from './FileInput';

const DragFile = () => {
    const [files, setFiles] = useState([]);

    const handleFileSelect = (selectedFiles) => {
        setFiles(selectedFiles);
      };
  return (
    <div>
      <FileInput onFileSelect={handleFileSelect} />
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DragFile;

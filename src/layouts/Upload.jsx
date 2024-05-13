import React from 'react'

const upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // You can perform file upload logic here
    // For example, using FormData to send the file to a server
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      // Example: send formData to a server using fetch or Axios
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
     <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>File Size: {selectedFile.size} bytes</p>
        </div>
      )} 
    </div>
  )
}

export default upload

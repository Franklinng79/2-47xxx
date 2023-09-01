import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import { Paper } from '@mui/material';

function YourComponent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

    // Trigger the file input click event when the button is clicked
    const handleUploadClick = () => {
    fileInputRef.current.click();
  };

    // set selected file to uploaded file using usestate
    const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

    // delete selected file
    const handleFileDelete = () => {
    setSelectedFile(null);
  };

  return (
    <div style={{ display: 'inline-block' }}>

      {/* upload button */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<CloudUploadIcon />}
        onClick={handleUploadClick}
        style={{
          backgroundColor: '#726EFF',
          color: 'white',
        }}
      >
        Upload
      </Button>

      {/* input upload file */}
      <input
        type="file"
        accept=".sol"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {/* display file if selected */}
      {selectedFile && (
        <Paper endIcon={<CloseIcon />}
          key={2} elevation={2} sx={{
            mt: '12px',
            mb: '-12px',
            width: '100%',
            padding: '6px',
            borderRadius: 2,
          }}>

            {/* delete file if clicked clode icon */}
          <Button endIcon={<CloseIcon />} onClick={handleFileDelete}
            sx={{
              marginLeft: 'auto',
              color: '#726EFF',
              fontSize: '12px',
            }}
          >
            Selected file: {selectedFile.name}
          </Button>
        </Paper>
      )}


    </div>
  );
}

export default YourComponent;

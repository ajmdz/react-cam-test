import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const App = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: 'environment',
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot({ width: 720, height: 720 });
    setCapturedImage(imageSrc);
  };

  return (
    <div className="App">
      <h1>Camera App</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Webcam
          audio={false}
          height={300}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={300}
          videoConstraints={videoConstraints}
        />
        <button onClick={captureImage}>Capture Image</button>
        {capturedImage && <img src={capturedImage} alt="Captured" style={{ marginTop: '20px', width: '300px', height: '300px', objectFit: 'cover' }} />}
      </div>
    </div>
  );
};

export default App;

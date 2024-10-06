"use client"
import React, { useState } from 'react';
import { Button } from '@mantine/core';

const RecordButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <Button
      onClick={toggleButton}
      style={{
        backgroundColor: isOn ? 'green' : 'red',
        color: 'white',
        borderRadius: '50%',
        width: '60px', // Adjust size as needed
        height: '60px', // Adjust size as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft : '270px',
        transition: 'background-color 0.3s ease',
      }}
    >
      {isOn ? 'On' : 'Off'}
    </Button>
  );
};

export default RecordButton;

// components/WaveformVisualizer.js
import React, { useEffect, useRef } from 'react';

const WaveformVisualizer = ({ audioUrl }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();

        const audio = new Audio(audioUrl);
        const source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        analyser.fftSize = 2048; // Size of FFT

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const draw = () => {
            requestAnimationFrame(draw);
            analyser.getByteTimeDomainData(dataArray); // Get audio data
            ctx.fillStyle = 'rgb(200, 200, 200)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'rgb(0, 0, 0)';
            ctx.beginPath();

            const sliceWidth = (canvas.width * 1.0) / bufferLength;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0; // Normalize the data
                const y = (v * canvas.height) / 2;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
                x += sliceWidth;
            }
            ctx.lineTo(canvas.width, canvas.height / 2);
            ctx.stroke();
        };

        audio.play(); // Start playing audio
        draw(); // Start drawing the waveform

        return () => {
            audio.pause(); // Clean up
            audioContext.close();
        };
    }, [audioUrl]);

    return (
        <canvas ref={canvasRef} width={800} height={200} />
    );
};

export default WaveformVisualizer;

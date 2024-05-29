import React, { useState } from 'react';

function RandomColorGenerator() {
    const [color, setColor] = useState('#000000')
    const [typeOfColor, settypeOfColor] = useState('hex');

    const colorGenerator = () => {
        if (typeOfColor === 'hex') {
            const random = Math.floor(Math.random() * 16777215);
            const hexColor = '#' + random.toString(16).padStart(6,'0')
            setColor(hexColor.toUpperCase());
            document.querySelector('#title').innerText = 'HEX COLOR'
        }
        else if (typeOfColor === 'rgb') {
            const randomRed = Math.floor(Math.random() * 256);
            const randomGreen = Math.floor(Math.random() * 256);
            const randomBlue = Math.floor(Math.random() * 256);
            const rgbColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
            setColor(rgbColor);
            document.querySelector('#title').innerText = 'RGB COLOR'

        }
    }

  return (
    <div className='container'
    style={{
        width:'100vw',
        height: '100vh',
        backgroundColor: color
    }}>
      <button onClick={()=> settypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={()=> settypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={()=> colorGenerator()}>Generate Random Color</button>

        <div id='title' style={{padding: '50px', color: 'white', fontSize:'60px', fontWeight: 'bold'}}>HEX COLOR</div>
        <div style={{padding: '50px', color: 'white', fontSize:'80px', fontWeight: 'bold'}}>{color}</div>
    </div>
  );
}

export default RandomColorGenerator;

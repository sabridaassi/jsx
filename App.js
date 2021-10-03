import React from 'react';
import './App.css';
import './style.css';
import img from './images/img.jpeg';

export default function App() {
    return (<div style={
        {
            display: 'block',
            width: 700,
            padding: 30
        }
    }>
      <div className='cont'>
        <h1 className='title'>Sabri</h1>
        <br/>
        <div/>
        <div className='images'>
<img src="/images/img.jpg" alt="img"/>
<br/>
<img src={img} alt="img" className='img' />
</div>


        </div>
    </div>);
<video classname="video" width="320" height="240" controls>
    <source src="/video.mp4" type="video/mp4"/>
</video>

}
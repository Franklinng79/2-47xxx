import React from 'react';

function Home() {
    return (
        // set background image
    <div style={{ 
        backgroundImage: `url(/home_page.png)`,
        height: '100vh'
    }}>

        <div style={{
            display: 'inline-block',
            marginLeft:'8em',
            marginTop:'8em',
        }}>

        {/* set title and paragraph texts */}
        <h1 style={{
            fontSize:'8em',
            color: '#726EFF'
        }}>2-47</h1>

        <p style={{
            lineHeight:'1.5em'
        }}>Welcome to our smart contract auditing platform, here you can have <br></br>
confidence in your code as our cutting-edge auditing technology will ensure <br></br>
the integrity and security of your blockchain projects.</p>

        </div>

    </div>
    );
}

export default Home;
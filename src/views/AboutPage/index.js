import React from 'react';

function aboutUs() {
    return (
        // set background image
        <div style={{
            backgroundImage: `url(/home_page.png)`,
            height: '90vh'
        }}>

            <div style={{
                display: 'inline-block',
                marginLeft: '8em',
                marginTop: '8em',
            }}>
                {/* set title and paragraph texts */}
                <h1 style={{
                    fontSize: '6em',
                    color: '#726EFF'
                }}>About 2-47</h1>

                <p style={{
                    lineHeight: '1.5em'
                }}>2-47 is an auditing system about you and your blockchain projects, created by <br></br>
                    cybersecurity students, enthusiastic to make a the blockchain accessible to <br></br>
                    more people, taking the security out of deveopers' hands, thus allowing them <br></br>
                    to spend more effort focusing on the development of their technologies</p>
            </div>

        </div>
    );
}

export default aboutUs;

import * as React from 'react';
import ReportList from '../../components/ReportList';

export default function History() {
    return (
        <div style={{
            backgroundImage: `url(/home_page.png)`,
            height: '92vh',
            marginTop: '-1vh'
        }}>
            {/* dummy text  */}
            <p style={{ color: '#FFF' }}>text</p>

            {/* opacity background box */}
            <div style={{
                background: `rgba(255, 255, 255, 0.9)`,
                backgroundBlendMode: 'overlay',
                margin: '30px',
                padding: '36px',
                borderRadius: 20,
            }}>
                <h1 style={{
                    fontSize: '2em',
                    color: '#726EFF',
                    textAlign: 'center',
                    margin: '36px',
                }}>Previously Scanned Contracts</h1>
                {/* call reports list function */}
                <ReportList></ReportList>
            </div>
        </div>
    );
}
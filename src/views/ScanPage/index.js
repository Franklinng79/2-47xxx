import * as React from 'react';
import QuickScanWindow from '../../components/QuickScanWindow';
import VulnerabilitiesWindow from '../../components/VulnerabilitiesWindow';


function Scan() {
    return (
        <div style={{
            backgroundImage: `url(/home_page.png)`,
            height: '100vh'
        }}>
            {/* call quick scan and vulnerabilities window function */}
            <QuickScanWindow />
            <VulnerabilitiesWindow />
        </div>
    );
}

export default Scan;

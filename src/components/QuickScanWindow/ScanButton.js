import * as React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';

export default function ScanButton() {
  return (
    <div style={{ display: 'inline-block' }}>
      <Stack direction="row" spacing={2}>
        {/* start scan button */}
        <Button variant="contained" endIcon={<SearchIcon />} style={{
          backgroundColor: '#726EFF',
          color: 'white',
        }}
        >Start Scan
        </Button>
      </Stack>
    </div>
  );
}


// import * as React from 'react';
// import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';
// import Stack from '@mui/material/Stack';
// import { Document, Page } from 'react-pdf';

// export default function ScanButton() {
//   const [showPdf, setShowPdf] = React.useState(false);

//   const handleButtonClick = () => {
//     setShowPdf(true);
//   };

//   return (
//     <div style={{ display: 'inline-block' }}>
//       {showPdf ? (
//         // Render the PDF viewer if showPdf is true
//         <div>
//           <Document file="/samplereport.pdf">
//             <Page pageNumber={1} />
//           </Document>
//         </div>
//       ) : (
//         // Render the button if showPdf is false
//         <Stack direction="row" spacing={2}>
//           <Button
//             variant="contained"
//             endIcon={<SearchIcon />}
//             style={{
//               backgroundColor: '#726EFF',
//               color: 'white',
//             }}
//             onClick={handleButtonClick}
//           >
//             Start Scan
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

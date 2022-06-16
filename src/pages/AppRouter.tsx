import * as React from 'react';
import { MainContainer } from '../components/pages_blocks/MainContainer';
import { Route, Routes } from 'react-router-dom';

export function AppRouter() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<p>Main</p>} />
        <Route path="/about" element={<p>about</p>} />
        <Route path="/text" element={<p>text</p>} />
        <Route path="/hello" element={<p>hello</p>} />
      </Routes>
    </MainContainer>
  );
}


  // <Grid item xs={12} md={8} lg={9}>
  //   <Paper
  //     sx={{
  //       p: 2,
  //       display: 'flex',
  //       flexDirection: 'column',
  //       height: 240,
  //     }}
  //   >
  //     <Chart />
  //   </Paper>
  // </Grid>
  // <Grid item xs={12} md={4} lg={3}>
  //   <Paper
  //     sx={{
  //       p: 2,
  //       display: 'flex',
  //       flexDirection: 'column',
  //       height: 240,
  //     }}
  //   >
  //     <Deposits />
  //   </Paper>
  // </Grid>
//   <Grid item xs={12}>
//     <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//       <Orders />
//     </Paper>
//   </Grid>
// </Grid> 
/** */

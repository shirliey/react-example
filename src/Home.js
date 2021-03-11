import React, { Suspense } from 'react'
const Home2 = React.lazy(() => import('./Home2'))

class Home extends React.Component {
  render() {
    return (
      <div className="jmain">
        <Suspense fallback={<div>Loading...</div>}>
          <Home2></Home2>
        </Suspense>
      </div>
    );
  }
};
export default Home;
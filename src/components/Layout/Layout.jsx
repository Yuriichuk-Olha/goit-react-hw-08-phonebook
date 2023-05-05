
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';



const Layout =()=> {
       
    return (
      <>
        <AppBar />
        <main>
          <Suspense fallback={<div>Loding...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </>
    );
}

export default Layout;


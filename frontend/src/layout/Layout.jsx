import React from 'react';
import Footer from "../components/footer.jsx";
import Nav from "../components/nav.jsx";

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Nav />
        <div className="flex-1  mx-auto">
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout

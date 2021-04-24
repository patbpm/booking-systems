import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import Sidebar from '../sidebar'

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <main className="flex pt-16">
        <Sidebar />
        {children}
      </main>
    </div>
  )
}

Layout.propTypes ={
  children: PropTypes.node.isRequired,
  displayNav: PropTypes.bool
}

export default Layout;
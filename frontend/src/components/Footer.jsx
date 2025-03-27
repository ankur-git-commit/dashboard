import React from 'react'
import { Link } from 'react-router'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full bg-gray-100 py-2 text-center text-xs text-gray-600 border-t border-gray-300">
      <div className="container mx-auto px-4">
        <p className="mb-1">
          © 2015-{currentYear} | Powered by USZoom.com | 
          <Link to="/terms" className="text-gray-600 hover:underline mx-1">Terms of Service</Link> | 
          <Link to="/privacy" className="text-gray-600 hover:underline mx-1">Privacy Policy</Link> | 
          <Link to="/export" className="text-gray-600 hover:underline mx-1">Export Policy</Link>
        </p>
        <p>
          For support <Link to="/support" className="text-gray-600 hover:underline">Click Here</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
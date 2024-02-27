import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Rental Properties | Find your next home',
    description: 'Find rental properties near you',
    keywords: 'rentals, rental properties, rental properties near you',
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout

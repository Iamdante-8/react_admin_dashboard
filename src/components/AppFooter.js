import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Admin Dashboard
        </a>
        <span className="ms-1">&copy; 2023 DanteLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Dante Softwares &amp; Admin Panel Dashboard
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)

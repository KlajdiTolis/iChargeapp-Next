import React from 'react'

import { useTranslations } from 'next-intl'

const OutlineButton = (props) => {
  return (
    <>
      <div className="outline-button-container"></div>
      <style jsx>
        {`
          .outline-button-container {
            display: flex;
            position: relative;
          }
        `}
      </style>
    </>
  )
}

export default OutlineButton

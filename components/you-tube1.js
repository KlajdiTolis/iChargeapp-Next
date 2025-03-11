import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const YouTube1 = (props) => {
  return (
    <>
      <div className={`you-tube1-you-tube ${props.rootClassName} `}>
        <img
          alt={props.pastedImageAlt}
          src={props.pastedImageSrc}
          className="you-tube1-pasted-image"
        />
      </div>
      <style jsx>
        {`
          .you-tube1-you-tube {
            width: 200px;
            height: 80px;
            display: flex;
            align-items: center;
            border-radius: 24px;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .you-tube1-pasted-image {
            width: var(--dl-size-size-large);
            height: 80px;
          }
          @media (max-width: 479px) {
            .you-tube1-you-tube {
              width: 120px;
              height: 60px;
              align-items: center;
              border-radius: 100px;
            }
            .you-tube1-pasted-image {
              width: 80px;
            }
          }
        `}
      </style>
    </>
  )
}

YouTube1.defaultProps = {
  pastedImageSrc:
    'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
  pastedImageAlt: 'pastedImage',
}

YouTube1.propTypes = {
  pastedImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImageAlt: PropTypes.string,
}

export default YouTube1

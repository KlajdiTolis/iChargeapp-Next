import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Slide1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        data-type="slide"
        className={`slide1-slide slide ${props.rootClassName} `}
      >
        <div className="slide1-max-wdith max-content-container">
          <h1 className="slide1-text1 Heading2">
            {props.heading1 ?? (
              <Fragment>
                <span className="slide1-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_M4tfgO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
        </div>
      </div>
      <style jsx>
        {`
          .slide1-slide {
            align-items: center;
            justify-content: center;
          }
          .slide1-max-wdith {
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
          }
          .slide1-text1 {
            color: var(--dl-color-scheme-white);
          }
          .slide1-text2 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Slide1.defaultProps = {
  rootClassName: '',
  heading1: undefined,
}

Slide1.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Slide1

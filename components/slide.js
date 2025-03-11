import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Slide = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        data-type="slide"
        className={`slide-slide slide ${props.rootClassName} `}
      >
        <div className="slide-max-wdith max-content-container">
          <h1 className="slide-text1 Heading2">
            {props.heading1 ?? (
              <Fragment>
                <span className="slide-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_DULz4s'),
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
          .slide-slide {
            align-items: center;
            justify-content: center;
          }
          .slide-max-wdith {
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
          }
          .slide-text1 {
            color: var(--dl-color-scheme-white);
          }
          .slide-text2 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Slide.defaultProps = {
  rootClassName: '',
  heading1: undefined,
}

Slide.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Slide

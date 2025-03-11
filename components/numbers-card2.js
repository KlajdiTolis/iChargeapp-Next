import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NumbersCard2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="numbers-card2-numbers-card">
        <span className="numbers-card2-number">
          {props.number ?? (
            <Fragment>
              <span className="numbers-card2-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nLgpkV'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="numbers-card2-text1">
          {props.text ?? (
            <Fragment>
              <span className="numbers-card2-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KM7DUw'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .numbers-card2-numbers-card {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .numbers-card2-number {
            color: var(--dl-color-scheme-white);
            font-size: 48px;
            line-height: 1.1;
          }
          .numbers-card2-text1 {
            color: rgba(255, 255, 255, 0.8);
            font-size: 19px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .numbers-card2-text2 {
            display: inline-block;
          }
          .numbers-card2-text3 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

NumbersCard2.defaultProps = {
  text: undefined,
  number: undefined,
}

NumbersCard2.propTypes = {
  text: PropTypes.element,
  number: PropTypes.element,
}

export default NumbersCard2

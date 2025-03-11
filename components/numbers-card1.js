import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NumbersCard1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="numbers-card1-numbers-card">
        <span className="numbers-card1-number">
          {props.number ?? (
            <Fragment>
              <span className="numbers-card1-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gH8vIW'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="numbers-card1-text1">
          {props.text ?? (
            <Fragment>
              <span className="numbers-card1-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xKad4g'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .numbers-card1-numbers-card {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .numbers-card1-number {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 48px;
            line-height: 1.1;
          }
          .numbers-card1-text1 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .numbers-card1-text2 {
            display: inline-block;
          }
          .numbers-card1-text3 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

NumbersCard1.defaultProps = {
  number: undefined,
  text: undefined,
}

NumbersCard1.propTypes = {
  number: PropTypes.element,
  text: PropTypes.element,
}

export default NumbersCard1

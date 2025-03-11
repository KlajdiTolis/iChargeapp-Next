import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NumbersCard = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="numbers-card-numbers-card">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="numbers-card-image"
        />
        <span className="numbers-card-number">
          {props.number1 ?? (
            <Fragment>
              <span className="numbers-card-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5cuiK2'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <span className="numbers-card-text1">
          {props.text1 ?? (
            <Fragment>
              <span className="numbers-card-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7Q2MCn'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .numbers-card-numbers-card {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .numbers-card-image {
            width: 45px;
            height: 45px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .numbers-card-number {
            color: var(--dl-color-scheme-white);
            font-size: 48px;
            text-align: center;
            line-height: 1.1;
          }
          .numbers-card-text1 {
            color: rgba(255, 255, 255, 0.8);
            font-style: normal;
            font-weight: 500;
          }
          .numbers-card-text2 {
            display: inline-block;
          }
          .numbers-card-text3 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

NumbersCard.defaultProps = {
  imageAlt: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  text1: undefined,
  number1: undefined,
}

NumbersCard.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  text1: PropTypes.element,
  number1: PropTypes.element,
}

export default NumbersCard

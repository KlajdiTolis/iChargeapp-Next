import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Card = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`card-card ${props.rootClassName} `}>
        <div className="card-info">
          <span className="card-text1">
            {props.text11 ?? (
              <Fragment>
                <span className="card-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_PU1O8g'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .card-card {
            flex: 0 0 auto;
            width: 32%;
            display: flex;
            padding: 20px;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #efeced;
            min-height: 480px;
            align-items: center;
            border-color: var(--dl-color-scheme-green100);
            border-width: 1px;
            border-radius: 36px;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('https://play.teleporthq.io/static/svg/placeholders/no-image.svg');
          }
          .card-info {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .card-text1 {
            color: var(--dl-color-gray-900);
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.5;
          }
          .card-text2 {
            display: inline-block;
          }
          .cardroot-class-name {
            background-size: cover;
            background-image: bb45c97d-1608-4561-9d60-ecc778159e0e;
          }
          .cardroot-class-name2 {
            background-size: cover;
            background-image: a1363eef-cd5e-4c22-ac3e-c703eb5b7637;
          }
          @media (max-width: 1600px) {
            .card-text1 {
              color: var(--dl-color-gray-900);
              font-style: normal;
              font-weight: 700;
              line-height: 1.5;
            }
          }
          @media (max-width: 767px) {
            .card-card {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Card.defaultProps = {
  text11: undefined,
  rootClassName: '',
}

Card.propTypes = {
  text11: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Card

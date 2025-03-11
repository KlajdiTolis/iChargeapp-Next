import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Offer = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="offer-offer">
        <img alt="image" src={props.image} className="offer-image" />
        <div className="offer-content">
          <div className="offer-details">
            <span className="offer-text1">
              {props.location1 ?? (
                <Fragment>
                  <span className="offer-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_3WinzM'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="offer-text2">
              {props.guides1 ?? (
                <Fragment>
                  <span className="offer-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_tzRcWr'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <span className="offer-text3">
            {props.description1 ?? (
              <Fragment>
                <span className="offer-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_aq-KNW'),
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
          .offer-offer {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .offer-image {
            object-fit: cover;
          }
          .offer-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-direction: column;
          }
          .offer-details {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .offer-text1 {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .offer-text2 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .offer-text3 {
            max-width: 400px;
            line-height: 24px;
          }
          .offer-text4 {
            display: inline-block;
          }
          .offer-text5 {
            display: inline-block;
          }
          .offer-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .offer-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Offer.defaultProps = {
  description1: undefined,
  guides1: undefined,
  location1: undefined,
  image: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

Offer.propTypes = {
  description1: PropTypes.element,
  guides1: PropTypes.element,
  location1: PropTypes.element,
  image: PropTypes.string,
}

export default Offer

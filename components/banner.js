import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div id={props.bannerId} className="banner-banner">
        <div className="banner-container">
          <div className="banner-left">
            <h2 className="banner-text1 title">
              {props.heading ?? (
                <Fragment>
                  <span className="banner-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_uMMcnV'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="banner-text2">
              {props.text ?? (
                <Fragment>
                  <span className="banner-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_CpW2MS'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="banner-image-container">
            <img
              alt={props.cardsImageAlt}
              src={props.cardsImageSrc}
              className="banner-cards-image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .banner-banner {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: #eff0f2;
          }
          .banner-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .banner-left {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .banner-text1 {
            color: var(--dl-color-scheme-green80);
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .banner-text2 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 30px;
          }
          .banner-image-container {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .banner-cards-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .banner-text3 {
            display: inline-block;
          }
          .banner-text4 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .banner-banner {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .banner-container {
              flex-direction: column;
            }
            .banner-left {
              margin-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .banner-text1 {
              align-self: center;
              text-align: center;
            }
            .banner-text2 {
              text-align: center;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Banner.defaultProps = {
  bannerId: '',
  cardsImageSrc: '/karikues2-1200w.webp',
  text: undefined,
  heading: undefined,
  cardsImageAlt: 'pastedImage',
}

Banner.propTypes = {
  bannerId: PropTypes.string,
  cardsImageSrc: PropTypes.string,
  text: PropTypes.element,
  heading: PropTypes.element,
  cardsImageAlt: PropTypes.string,
}

export default Banner

import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const BlogCard = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`blog-card-blog-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="blog-card-image"
        />
        <div className="blog-card-container">
          <button className="blog-card-button button-secondary button">
            <span>
              {props.button1 ?? (
                <Fragment>
                  <span className="blog-card-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_WMkRdp'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <span className="blog-card-text2">
            {props.text11 ?? (
              <Fragment>
                <span className="blog-card-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_QkB01O'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <span className="blog-card-text3">
          <span
            dangerouslySetInnerHTML={{
              __html: translate.raw('text_AAjVmJ'),
            }}
          ></span>
        </span>
      </div>
      <style jsx>
        {`
          .blog-card-blog-card {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-card-image {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .blog-card-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-card-button {
            font-size: 12px;
            text-transform: uppercase;
          }
          .blog-card-text2 {
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
          }
          .blog-card-text3 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-card-text4 {
            display: inline-block;
          }
          .blog-card-text5 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .blog-card-blog-card {
              max-width: 550px;
            }
          }
          @media (max-width: 767px) {
            .blog-card-blog-card {
              max-width: 450px;
            }
          }
          @media (max-width: 479px) {
            .blog-card-blog-card {
              max-width: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogCard.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  text11: undefined,
  button1: undefined,
  imageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e103e61d-c76d-4f0a-a1c8-116985255d0d/97a485c1-12f1-466e-8993-ac95e1ba9e3e?org_if_sml=1&force_format=original',
}

BlogCard.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.element,
  button1: PropTypes.element,
  imageSrc: PropTypes.string,
}

export default BlogCard

import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const StoreBanner = (props) => {
  return (
    <>
      <div className="store-banner-store-banner">
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="store-banner-image1"
        />
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="store-banner-image2"
        />
      </div>
      <style jsx>
        {`
          .store-banner-store-banner {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .store-banner-image1 {
            width: 135px;
            object-fit: cover;
          }
          .store-banner-image2 {
            width: 135px;
            object-fit: cover;
            margin-left: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

StoreBanner.defaultProps = {
  imageAlt: 'image',
  imageSrc1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e8b7f2d3-fd22-4b6f-9d83-0079b721cd48/3defd9b3-b33a-4b91-a40f-1a89e6e8c3da?org_if_sml=1&force_format=original',
  imageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e8b7f2d3-fd22-4b6f-9d83-0079b721cd48/fa5863af-fdbd-439d-8369-bc1fabdcabc5?org_if_sml=1&force_format=original',
  imageAlt1: 'image',
}

StoreBanner.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default StoreBanner

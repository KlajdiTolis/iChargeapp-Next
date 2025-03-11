import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const News = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="news-container1">
        <Head>
          <title>
            News - iCharge.app - Stacione dhe pika karikimi për makina
            elektrike.
          </title>
          <meta
            name="description"
            content="iCharge.app: Zgjidhja inovative për makina elektrike. Zbuloni stacionet dhe pikat më të mira të karikimit me nje sherbim superior ne krahasim me Vega Group."
          />
          <meta
            property="og:title"
            content="News - iCharge.app - Stacione dhe pika karikimi për makina elektrike."
          />
          <meta
            property="og:description"
            content="Zbuloni iCharge.app, platforma juaj për karikimin e makinave elektrike në Shqipëri. "
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d334a72c-d322-4e02-af2f-aa1a000a9ada/f77c7958-1225-4afe-a283-098a54e58587?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <header className="news-header1">
          <header data-thq="thq-navbar" className="news-navbar">
            <div className="news-left">
              <Link href="/">
                <a className="news-link10">
                  <img
                    alt="image"
                    src="/logo_icharge_primary_1%20(1)-200h.webp"
                    loading="eager"
                    className="news-logo"
                  />
                </a>
              </Link>
            </div>
            <div data-thq="thq-navbar-btn-group" className="news-right"></div>
            <div data-thq="thq-burger-menu" className="news-burger-menu">
              <svg viewBox="0 0 1024 1024" className="news-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="news-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="news-nav1"
              >
                <div className="news-container2">
                  <a href="##content" className="news-link11">
                    <img
                      alt="image"
                      src="/logo_icharge_primary_1%20(1)-200h.webp"
                      className="news-image1"
                    />
                  </a>
                  <div data-thq="thq-close-menu" className="news-menu-close">
                    <svg viewBox="0 0 1024 1024" className="news-icon12">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="news-nav2"
                >
                  <Link href="/">
                    <a className="news-link12">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_T2qKr0'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="news-link13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_2pLiaj'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <a
                    href="https://m.icharge.app/#/homepage"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="news-link14"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_pQjumr'),
                      }}
                    ></span>
                  </a>
                  <a href="#footer" className="news-link15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_p6Cgyp'),
                      }}
                    ></span>
                  </a>
                  <Link href="/kontakt">
                    <a className="news-link16">
                      <div className="news-book-btn">
                        <span className="news-text1">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_TRQYsw'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
            <nav className="news-links1">
              <Link href="/">
                <a className="news-link18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_Lb9zA0'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/">
                <a className="news-link20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_c6SMnV'),
                    }}
                  ></span>
                </a>
              </Link>
              <a
                href="https://m.icharge.app/#/homepage"
                target="_blank"
                rel="noreferrer noopener"
                className="news-link21"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Link_ws056J'),
                  }}
                ></span>
              </a>
              <a href="#footer" className="news-link22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Link_XT55fr'),
                  }}
                ></span>
              </a>
            </nav>
          </header>
        </header>
        <section className="news-why">
          <div className="news-header2">
            <div data-aos="fade-right" className="news-heading1">
              <h2 className="news-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Title_Rnz7Um'),
                  }}
                ></span>
              </h2>
            </div>
          </div>
          <div className="news-brands">
            <div className="news-row">
              <div className="news-item">
                <img
                  alt="image"
                  src="/icharge%20web%20(1).svg"
                  className="news-image2"
                />
                <div className="news-details">
                  <p className="news-description">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Description_cvXCUJ'),
                      }}
                    ></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="footer" className="news-footer">
          <div className="news-content">
            <div className="news-information">
              <div className="news-heading2">
                <a href="##content" className="news-link23">
                  <img
                    alt="pastedImage"
                    src="/logo_icharge_primary_page-0002-removebg-preview-200h-200h-200h.webp"
                    loading="lazy"
                    className="news-pasted-image1"
                  />
                </a>
                <span className="news-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_S83g-N'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="news-socials">
                <a
                  href="https://www.instagram.com/icharge.alb/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="news-link24"
                >
                  <div className="news-social1">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="news-icon14"
                    >
                      <circle
                        r="1.44"
                        cx="22.406"
                        cy="9.594"
                        fill="currentColor"
                      ></circle>
                      <path
                        d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.16 6.16 0 0 0 16 9.838M16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16 6.162c3.204 0 3.584.012 4.849.07a6.6 6.6 0 0 1 2.228.413a3.98 3.98 0 0 1 2.278 2.278a6.6 6.6 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.6 6.6 0 0 1-.413 2.228a3.98 3.98 0 0 1-2.278 2.278a6.6 6.6 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.6 6.6 0 0 1-2.228-.413a3.98 3.98 0 0 1-2.278-2.278a6.6 6.6 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.6 6.6 0 0 1 .413-2.228a3.98 3.98 0 0 1 2.278-2.278a6.6 6.6 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.8 8.8 0 0 0-2.912.558a6.14 6.14 0 0 0-3.51 3.51a8.8 8.8 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.8 8.8 0 0 0 .558 2.912a6.14 6.14 0 0 0 3.51 3.51a8.8 8.8 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.8 8.8 0 0 0 2.913-.558a6.14 6.14 0 0 0 3.51-3.51a8.8 8.8 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.8 8.8 0 0 0-.558-2.912a6.14 6.14 0 0 0-3.51-3.51a8.8 8.8 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@icharge.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="news-link25"
                >
                  <div className="news-social2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="news-icon18"
                    >
                      <path
                        d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="news-link26"
                >
                  <div className="news-social3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="news-icon20"
                    >
                      <g fill="currentColor">
                        <path
                          d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path d="M7.2 8.809H4V19.5h3.2z"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/icharge.alb"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="news-link27"
                >
                  <div className="news-social4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="news-icon24"
                    >
                      <path
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z"
                        fill="currentColor"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="news-links2">
              <div className="news-column1">
                <span className="news-header3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_BtUv-s'),
                    }}
                  ></span>
                </span>
                <Link href="/">
                  <a className="news-link29">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_3-Ce5E'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/">
                  <a className="news-link31">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_7ftX7X'),
                      }}
                    ></span>
                  </a>
                </Link>
                <a
                  href="https://m.icharge.app/#/homepage"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="news-link32"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_Ja3lLH'),
                    }}
                  ></span>
                </a>
                <Link href="/kushtet-e-perdorimit">
                  <a className="news-link34">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_beRHr7'),
                      }}
                    ></span>
                  </a>
                </Link>
                <span className="news-link35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_rQg6BF'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="news-column2">
                <span className="news-header4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_XFNQek'),
                    }}
                  ></span>
                </span>
                <a href="tel:+355694080227" className="news-link36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_W3010N'),
                    }}
                  ></span>
                </a>
                <a
                  href="mailto:office@icharge.app?subject="
                  className="news-link37"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_8MNt2n'),
                    }}
                  ></span>
                </a>
              </div>
            </div>
          </div>
          <div className="news-pills">
            <div className="news-container3">
              <div className="news-you-tube1">
                <a
                  href="https://apps.apple.com/lv/app/icharge-app/id6479523452"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="news-link38"
                >
                  <img
                    alt="pastedImage"
                    sizes="(min-width: 768px) 800px, 480px"
                    src="/Icons/download%20(3)-600w.webp"
                    srcSet="/Icons//download%20(3)-600w.webp 800w, /Icons/download%20(3)-mobile.webp 480w"
                    className="news-pasted-image2"
                  />
                </a>
              </div>
              <div className="news-you-tube2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.icharge.mobile.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="news-link39"
                >
                  <img
                    alt="pastedImage"
                    src="/Icons/download%20(4)-200h.webp"
                    className="news-pasted-image3"
                  />
                </a>
              </div>
            </div>
          </div>
          <span className="news-text3">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_j-c1Wb'),
              }}
            ></span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .news-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .news-header1 {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .news-navbar {
            width: 1776px;
            display: flex;
            z-index: 100;
            max-width: 1440px;
            align-items: center;
            justify-content: space-between;
          }
          .news-left {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .news-link10 {
            display: contents;
          }
          .news-logo {
            width: var(--dl-size-size-large);
            height: auto;
            object-fit: cover;
            text-decoration: none;
          }
          .news-right {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .news-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .news-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .news-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 1000;
            position: fixed;
            transform: translateY(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .news-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .news-link11 {
            display: contents;
          }
          .news-image1 {
            width: 78px;
            height: 67px;
            text-decoration: none;
          }
          .news-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .news-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .news-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-link12 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .news-link13 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .news-link14 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .news-link15 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            text-decoration: none;
          }
          .news-link16 {
            display: contents;
          }
          .news-book-btn {
            cursor: pointer;
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 24px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            text-decoration: none;
            background-color: #286263;
          }
          .news-book-btn:hover {
            background-color: var(--dl-color-scheme-green80);
          }
          .news-text1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .news-links1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .news-link18 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 25px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            text-decoration: none;
          }
          .news-link18:hover {
            opacity: 0.5;
          }
          .news-link20 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 25px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            text-decoration: none;
          }
          .news-link20:hover {
            opacity: 0.5;
          }
          .news-link21 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 25px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .news-link21:hover {
            opacity: 0.5;
          }
          .news-link22 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 25px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .news-link22:hover {
            opacity: 0.5;
          }
          .news-why {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .news-header2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .news-heading1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .news-title {
            width: 853px;
            display: flex;
            font-size: 40px;
            align-self: center;
            font-style: normal;
            text-align: center;
            align-items: stretch;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 40px;
            justify-content: flex-start;
          }
          .news-brands {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-row {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .news-item {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-image2 {
            width: 100%;
            height: var(--dl-size-size-xxlarge);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-cardradius);
          }
          .news-details {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .news-description {
            font-size: 18px;
            font-family: 'Poppins';
            line-height: 27px;
          }
          .news-footer {
            gap: var(--dl-space-space-threeunits);
            color: white;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #1b1d21;
          }
          .news-content {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .news-information {
            gap: var(--dl-space-space-unit);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .news-heading2 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .news-link23 {
            display: contents;
          }
          .news-pasted-image1 {
            width: var(--dl-size-size-large);
            text-decoration: none;
          }
          .news-text2 {
            font-size: 20px;
            font-family: Poppins;
            line-height: 21px;
          }
          .news-socials {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .news-link24 {
            display: contents;
          }
          .news-social1 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
            text-decoration: none;
            background-color: rgba(236, 233, 234, 0.2);
          }
          .news-social1:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .news-icon14 {
            width: 18px;
            height: 18px;
          }
          .news-link25 {
            display: contents;
          }
          .news-social2 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            padding-bottom: 16px;
            justify-content: flex-start;
            text-decoration: none;
            background-color: rgba(236, 233, 234, 0.2);
          }
          .news-social2:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .news-icon18 {
            width: 18px;
            height: 18px;
          }
          .news-link26 {
            display: contents;
          }
          .news-social3 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
            text-decoration: none;
            background-color: rgba(236, 233, 234, 0.2);
          }
          .news-social3:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .news-icon20 {
            width: 18px;
            height: 18px;
          }
          .news-link27 {
            display: contents;
          }
          .news-social4 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
            text-decoration: none;
            background-color: rgba(236, 233, 234, 0.2);
          }
          .news-social4:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .news-icon24 {
            width: 18px;
            height: 18px;
          }
          .news-links2 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            z-index: 15;
            align-items: flex-start;
            flex-direction: row;
          }
          .news-column1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .news-header3 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 30px;
            padding-top: var(--dl-space-space-oneandhalfunits);
          }
          .news-link29 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .news-link29:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .news-link31 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .news-link31:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .news-link32 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .news-link32:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .news-link34 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .news-link34:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .news-link35 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
          }
          .news-link35:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .news-column2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .news-header4 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 30px;
            padding-top: var(--dl-space-space-oneandhalfunits);
          }
          .news-link36 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .news-link36:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .news-link37 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .news-link37:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .news-pills {
            width: 100%;
            height: 77px;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            max-width: 1200px;
            align-items: center;
            margin-left: 0px;
            margin-bottom: 0px;
            flex-direction: row;
          }
          .news-container3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .news-you-tube1 {
            width: 154px;
            height: 79px;
            display: flex;
            align-self: flex-end;
            align-items: center;
            border-radius: 24px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0);
          }
          .news-link38 {
            display: contents;
          }
          .news-pasted-image2 {
            width: 533px;
            height: 80px;
            text-decoration: none;
          }
          .news-you-tube2 {
            width: 125px;
            height: 79px;
            display: flex;
            align-self: flex-end;
            align-items: center;
            border-radius: 24px;
            flex-direction: row;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0);
          }
          .news-link39 {
            display: contents;
          }
          .news-pasted-image3 {
            width: 350px;
            height: 80px;
            display: grid;
            text-decoration: none;
          }
          .news-text3 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            max-width: 1200px;
            line-height: 21px;
          }
          @media (max-width: 1600px) {
            .news-logo {
              margin-left: var(--dl-space-space-threeunits);
            }
            .news-book-btn {
              margin-top: var(--dl-space-space-unit);
            }
            .news-links1 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .news-link18 {
              font-size: 25px;
            }
            .news-link20 {
              font-size: 25px;
            }
            .news-link21 {
              font-size: 25px;
            }
            .news-link22 {
              font-size: 25px;
              font-family: Poppins;
            }
            .news-why {
              max-width: 1000px;
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .news-title {
              align-self: flex-start;
              text-align: center;
            }
            .news-description {
              font-family: Poppins;
              line-height: 27px;
            }
            .news-column1 {
              display: grid;
            }
            .news-pills {
              margin-right: var(--dl-space-space-threeunits);
            }
            .news-you-tube1 {
              width: 209px;
              height: 77px;
            }
          }
          @media (max-width: 1200px) {
            .news-link18 {
              text-align: center;
            }
            .news-link20 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              font-size: 25px;
              font-style: normal;
              text-align: center;
              font-family: Poppins;
              font-weight: 500;
            }
            .news-link21 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              font-size: 25px;
              font-style: normal;
              text-align: center;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
              text-decoration: none;
            }
            .news-link22 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
            }
            .news-why {
              max-width: auto;
            }
            .news-title {
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .news-navbar {
              z-index: 1000;
            }
            .news-right {
              display: none;
            }
            .news-burger-menu {
              display: flex;
              padding: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-threeunits);
              border-radius: var(--dl-radius-radius-round);
              background-color: #48787b;
            }
            .news-icon10 {
              fill: white;
            }
            .news-links1 {
              display: none;
            }
            .news-header2 {
              align-self: center;
            }
            .news-title {
              width: auto;
              align-self: center;
            }
            .news-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .news-pills {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .news-navbar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .news-logo {
              margin-left: var(--dl-space-space-twounits);
            }
            .news-burger-menu {
              display: flex;
            }
            .news-image1 {
              width: 76px;
            }
            .news-why {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .news-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .news-title {
              width: 100%;
              font-size: 30px;
              align-self: center;
              line-height: 33px;
              justify-content: center;
            }
            .news-row {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .news-item {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .news-image2 {
              height: 60px;
            }
            .news-details {
              gap: var(--dl-space-space-unit);
            }
            .news-description {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .news-footer {
              gap: var(--dl-space-space-twounits);
            }
            .news-content {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .news-information {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .news-heading2 {
              gap: var(--dl-space-space-halfunit);
            }
            .news-pasted-image1 {
              width: 100px;
            }
            .news-text2 {
              font-size: 12px;
              line-height: 18px;
            }
            .news-socials {
              gap: var(--dl-space-space-halfunit);
            }
            .news-social1 {
              padding: 12px;
            }
            .news-social2 {
              padding: 12px;
            }
            .news-social3 {
              padding: 12px;
            }
            .news-social4 {
              padding: 12px;
            }
            .news-links2 {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              flex-direction: column;
            }
            .news-header3 {
              font-size: 16px;
              line-height: 24px;
            }
            .news-header4 {
              font-size: 16px;
              line-height: 24px;
            }
            .news-pills {
              align-self: flex-end;
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              justify-content: flex-start;
            }
            .news-container3 {
              align-items: flex-start;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .news-navbar {
              padding: var(--dl-space-space-unit);
            }
            .news-logo {
              width: 179px;
              height: 104px;
              margin-left: 0px;
            }
            .news-burger-menu {
              margin-right: 0px;
            }
            .news-mobile-menu {
              padding: 16px;
            }
            .news-nav1 {
              height: 725px;
            }
            .news-container2 {
              height: auto;
              align-self: flex-start;
              margin-bottom: 0px;
              justify-content: space-between;
            }
            .news-image1 {
              width: var(--dl-size-size-medium);
              height: var(--dl-size-size-medium);
              align-self: center;
              margin-left: 0px;
              padding-left: 0px;
              padding-bottom: 0px;
            }
            .news-icon12 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
            }
            .news-nav2 {
              width: 100%;
              height: auto;
              align-self: flex-start;
            }
            .news-link12 {
              font-size: 20px;
              align-self: flex-start;
              font-style: normal;
              text-align: center;
              font-family: Poppins;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-unit);
              text-decoration: none;
            }
            .news-link13 {
              font-size: 20px;
              align-self: flex-start;
              font-style: normal;
              font-family: Poppins;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-unit);
              text-decoration: none;
            }
            .news-link14 {
              font-size: 20px;
              align-self: flex-start;
              font-style: normal;
              text-align: left;
              font-family: Poppins;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-unit);
              text-decoration: none;
            }
            .news-link15 {
              font-size: 20px;
              align-self: flex-start;
              font-style: normal;
              text-align: left;
              font-family: Poppins;
              font-weight: 400;
              text-decoration: none;
            }
            .news-book-btn {
              align-self: flex-start;
              margin-top: var(--dl-space-space-twounits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .news-title {
              width: 100%;
            }
            .news-item {
              width: 100%;
              max-width: auto;
              align-self: center;
            }
            .news-image2 {
              width: 100%;
              height: 100%;
              align-self: flex-start;
            }
            .news-description {
              align-self: center;
            }
            .news-content {
              align-self: center;
            }
            .news-information {
              align-self: center;
            }
            .news-heading2 {
              max-width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .news-pasted-image1 {
              align-self: center;
            }
            .news-text2 {
              color: #c4c4c4;
              font-size: 20px;
              align-self: center;
              text-align: center;
              line-height: 18px;
            }
            .news-socials {
              align-self: center;
              justify-content: center;
            }
            .news-links2 {
              width: 100%;
              align-self: center;
              flex-direction: column;
            }
            .news-column1 {
              align-self: center;
              place-items: center;
            }
            .news-header3 {
              font-size: 24px;
              align-self: center;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .news-link29 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              align-self: center;
              line-height: 21px;
            }
            .news-link31 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              align-self: center;
              line-height: 21px;
            }
            .news-link32 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              align-self: center;
              line-height: 21px;
            }
            .news-link34 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              line-height: 21px;
            }
            .news-link35 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              line-height: 21px;
            }
            .news-column2 {
              align-self: center;
            }
            .news-header4 {
              font-size: 24px;
              align-self: center;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .news-link36 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              align-self: center;
              font-family: Poppins;
              line-height: 21px;
            }
            .news-link37 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              text-align: center;
              font-family: Poppins;
              line-height: 21px;
            }
            .news-pills {
              align-self: center;
              margin-top: var(--dl-space-space-eightunits);
              align-items: stretch;
              margin-left: 0%;
              margin-bottom: var(--dl-space-space-eightunits);
              flex-direction: column;
              justify-content: space-between;
            }
            .news-you-tube1 {
              width: 120px;
              height: 60px;
              align-items: center;
              border-radius: 100px;
            }
            .news-pasted-image2 {
              width: var(--dl-size-size-xlarge);
              height: auto;
            }
            .news-you-tube2 {
              width: 120px;
              height: 60px;
              align-items: center;
              border-radius: 100px;
            }
            .news-pasted-image3 {
              width: var(--dl-size-size-xlarge);
              height: auto;
            }
            .news-text3 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              text-align: center;
              font-family: Poppins;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

export default News

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}

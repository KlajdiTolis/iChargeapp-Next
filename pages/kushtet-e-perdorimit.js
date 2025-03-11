import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const KushtetEPerdorimit = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="kushtet-e-perdorimit-container1">
        <Head>
          <title>
            Kushtet-e-perdorimit - iCharge.app - Stacione dhe pika karikimi për
            makina elektrike.
          </title>
          <meta
            name="description"
            content="iCharge.app: Zgjidhja inovative për makina elektrike. Zbuloni stacionet dhe pikat më të mira të karikimit me nje sherbim superior ne krahasim me Vega Group."
          />
          <meta
            property="og:title"
            content="Kushtet-e-perdorimit - iCharge.app - Stacione dhe pika karikimi për makina elektrike."
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
        <header className="kushtet-e-perdorimit-header1">
          <header data-thq="thq-navbar" className="kushtet-e-perdorimit-navbar">
            <div className="kushtet-e-perdorimit-left">
              <Link href="/">
                <a className="kushtet-e-perdorimit-link10">
                  <img
                    alt="image"
                    src="/logo_icharge_primary_1%20(1)-200h.webp"
                    loading="eager"
                    className="kushtet-e-perdorimit-logo"
                  />
                </a>
              </Link>
            </div>
            <div
              data-thq="thq-navbar-btn-group"
              className="kushtet-e-perdorimit-right"
            ></div>
            <div
              data-thq="thq-burger-menu"
              className="kushtet-e-perdorimit-burger-menu"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="kushtet-e-perdorimit-icon10"
              >
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="kushtet-e-perdorimit-mobile-menu"
            >
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="kushtet-e-perdorimit-nav1"
              >
                <div className="kushtet-e-perdorimit-container2">
                  <Link href="/">
                    <a className="kushtet-e-perdorimit-link11">
                      <img
                        alt="image"
                        src="/logo_icharge_primary_1%20(1)-200h.webp"
                        className="kushtet-e-perdorimit-image"
                      />
                    </a>
                  </Link>
                  <div
                    data-thq="thq-close-menu"
                    className="kushtet-e-perdorimit-menu-close"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="kushtet-e-perdorimit-icon12"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="kushtet-e-perdorimit-nav2"
                >
                  <Link href="/">
                    <a className="kushtet-e-perdorimit-link12">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_4wNxjM'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="kushtet-e-perdorimit-link13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_F_D_zW'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <a
                    href="https://m.icharge.app/#/homepage"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="kushtet-e-perdorimit-link14"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_NWo9wB'),
                      }}
                    ></span>
                  </a>
                  <Link href="/">
                    <a className="kushtet-e-perdorimit-link15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_H6nyBr'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <Link href="/kontakt">
                    <a className="kushtet-e-perdorimit-link16">
                      <div className="kushtet-e-perdorimit-book-btn">
                        <span className="kushtet-e-perdorimit-text1">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_7jCKAc'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
            <nav className="kushtet-e-perdorimit-links1">
              <Link href="/">
                <a className="kushtet-e-perdorimit-link18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_eP1Bw6'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/">
                <a className="kushtet-e-perdorimit-link20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_m_-hza'),
                    }}
                  ></span>
                </a>
              </Link>
              <a
                href="https://m.icharge.app/#/homepage"
                target="_blank"
                rel="noreferrer noopener"
                className="kushtet-e-perdorimit-link21"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Link_nEa8Zz'),
                  }}
                ></span>
              </a>
              <a href="#footer" className="kushtet-e-perdorimit-link22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Link_QuUTX-'),
                  }}
                ></span>
              </a>
            </nav>
          </header>
        </header>
        <div className="kushtet-e-perdorimit-container3 thq-section-padding">
          <div className="kushtet-e-perdorimit-max-width thq-section-max-width">
            <div className="kushtet-e-perdorimit-content7 thq-flex-column">
              <ul className="kushtet-e-perdorimit-ul thq-flex-column">
                <li className="thq-flex-column list-item">
                  <h2 className="kushtet-e-perdorimit-heading1 thq-heading-2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading1_r-mqyZ'),
                      }}
                    ></span>
                  </h2>
                  <h3 className="kushtet-e-perdorimit-heading21 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading2_fge3Fk'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content1 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content1_GPYUgr'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading22 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading2_sa5x3H'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content2 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content2__bdAg1'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading3 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading3_I_rqDi'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content3 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content3_5Stw1Y'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading4 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading4_82yVDj'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content4 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content4_A3SpRZ'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading5 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading5_iEoNHK'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content5 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content5_kwD1it'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading610 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_CHxLN1'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content610 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_j0_Wil'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading611 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_-GemTE'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content611 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_Ap1Iga'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading612 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_Ygl7Sj'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content612 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_cXrHot'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading613 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_9GH7ZV'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content613 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_lu5D_v'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading614 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_AxXlMA'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content614 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_3PTUKp'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading615 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_5n1fR7'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content615 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_Mv3--J'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading616 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_UcMAdF'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content616 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_Q8GT8Z'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading617 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_mYtqce'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content617 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_vKPtQN'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading618 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_W7RoTF'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content618 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_3nHQ4g'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading619 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_9ogpsS'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content619 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_My1MBB'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading620 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_cyJzJ-'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content620 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_8BPlg6'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading621 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_sg4XvN'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content621 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_2fpDAD'),
                      }}
                    ></span>
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="kushtet-e-perdorimit-heading622 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading6_uWxgNN'),
                      }}
                    ></span>
                  </h3>
                  <p className="kushtet-e-perdorimit-content622 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Content6_ytOHh0'),
                      }}
                    ></span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="footer" className="kushtet-e-perdorimit-footer">
          <div className="kushtet-e-perdorimit-content8">
            <div className="kushtet-e-perdorimit-information">
              <div className="kushtet-e-perdorimit-heading">
                <a href="##content" className="kushtet-e-perdorimit-link23">
                  <img
                    alt="pastedImage"
                    src="/logo_icharge_primary_page-0002-removebg-preview-200h-200h-200h.webp"
                    loading="lazy"
                    className="kushtet-e-perdorimit-pasted-image1"
                  />
                </a>
                <span className="kushtet-e-perdorimit-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Zcp2aL'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="kushtet-e-perdorimit-socials">
                <a
                  href="https://www.instagram.com/icharge.alb/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kushtet-e-perdorimit-link24"
                >
                  <div className="kushtet-e-perdorimit-social1">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="kushtet-e-perdorimit-icon14"
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
                  className="kushtet-e-perdorimit-link25"
                >
                  <div className="kushtet-e-perdorimit-social2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="kushtet-e-perdorimit-icon18"
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
                  className="kushtet-e-perdorimit-link26"
                >
                  <div className="kushtet-e-perdorimit-social3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="kushtet-e-perdorimit-icon20"
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
                  className="kushtet-e-perdorimit-link27"
                >
                  <div className="kushtet-e-perdorimit-social4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="kushtet-e-perdorimit-icon24"
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
            <div className="kushtet-e-perdorimit-links2">
              <div className="kushtet-e-perdorimit-column1">
                <span className="kushtet-e-perdorimit-header2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_PUNOzP'),
                    }}
                  ></span>
                </span>
                <Link href="/">
                  <a className="kushtet-e-perdorimit-link29">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_keow8q'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/">
                  <a className="kushtet-e-perdorimit-link31">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_HB1BOD'),
                      }}
                    ></span>
                  </a>
                </Link>
                <a
                  href="https://m.icharge.app/#/homepage"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kushtet-e-perdorimit-link32"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_ZcQv2Y'),
                    }}
                  ></span>
                </a>
                <Link href="/kushtet-e-perdorimit">
                  <a className="kushtet-e-perdorimit-link34">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_PGBv8z'),
                      }}
                    ></span>
                  </a>
                </Link>
                <span className="kushtet-e-perdorimit-link35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_oPcwBd'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="kushtet-e-perdorimit-column2">
                <span className="kushtet-e-perdorimit-header3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_NNp2wv'),
                    }}
                  ></span>
                </span>
                <a
                  href="tel:+355694080227"
                  className="kushtet-e-perdorimit-link36"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_oAPpmz'),
                    }}
                  ></span>
                </a>
                <a
                  href="mailto:office@icharge.app?subject="
                  className="kushtet-e-perdorimit-link37"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_6msrP6'),
                    }}
                  ></span>
                </a>
              </div>
            </div>
          </div>
          <div className="kushtet-e-perdorimit-pills">
            <div className="kushtet-e-perdorimit-container4">
              <div className="kushtet-e-perdorimit-you-tube1">
                <a
                  href="https://apps.apple.com/lv/app/icharge-app/id6479523452"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kushtet-e-perdorimit-link38"
                >
                  <img
                    alt="pastedImage"
                    sizes="(min-width: 768px) 800px, 480px"
                    src="/Icons/download%20(3)-600w.webp"
                    srcSet="/Icons//download%20(3)-600w.webp 800w, /Icons/download%20(3)-mobile.webp 480w"
                    className="kushtet-e-perdorimit-pasted-image2"
                  />
                </a>
              </div>
              <div className="kushtet-e-perdorimit-you-tube2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.icharge.mobile.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kushtet-e-perdorimit-link39"
                >
                  <img
                    alt="pastedImage"
                    src="/Icons/download%20(4)-200h.webp"
                    className="kushtet-e-perdorimit-pasted-image3"
                  />
                </a>
              </div>
            </div>
          </div>
          <span className="kushtet-e-perdorimit-text3">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_W_16HE'),
              }}
            ></span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .kushtet-e-perdorimit-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .kushtet-e-perdorimit-header1 {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .kushtet-e-perdorimit-navbar {
            width: 1776px;
            display: flex;
            z-index: 100;
            max-width: 1440px;
            align-items: center;
            justify-content: space-between;
          }
          .kushtet-e-perdorimit-left {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .kushtet-e-perdorimit-link10 {
            display: contents;
          }
          .kushtet-e-perdorimit-logo {
            width: var(--dl-size-size-large);
            height: auto;
            object-fit: cover;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-right {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .kushtet-e-perdorimit-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .kushtet-e-perdorimit-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .kushtet-e-perdorimit-mobile-menu {
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
          .kushtet-e-perdorimit-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .kushtet-e-perdorimit-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .kushtet-e-perdorimit-link11 {
            display: contents;
          }
          .kushtet-e-perdorimit-image {
            width: 78px;
            height: 67px;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .kushtet-e-perdorimit-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .kushtet-e-perdorimit-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .kushtet-e-perdorimit-link12 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .kushtet-e-perdorimit-link13 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .kushtet-e-perdorimit-link14 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .kushtet-e-perdorimit-link15 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-link16 {
            display: contents;
          }
          .kushtet-e-perdorimit-book-btn {
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
          .kushtet-e-perdorimit-book-btn:hover {
            background-color: var(--dl-color-scheme-green80);
          }
          .kushtet-e-perdorimit-text1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .kushtet-e-perdorimit-links1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .kushtet-e-perdorimit-link18 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 25px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-link18:hover {
            opacity: 0.5;
          }
          .kushtet-e-perdorimit-link20 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 25px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-link20:hover {
            opacity: 0.5;
          }
          .kushtet-e-perdorimit-link21 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 25px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .kushtet-e-perdorimit-link21:hover {
            opacity: 0.5;
          }
          .kushtet-e-perdorimit-link22 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 25px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .kushtet-e-perdorimit-link22:hover {
            opacity: 0.5;
          }
          .kushtet-e-perdorimit-container3 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .kushtet-e-perdorimit-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .kushtet-e-perdorimit-content7 {
            align-self: stretch;
            align-items: center;
          }
          .kushtet-e-perdorimit-ul {
            max-width: 1000px;
            align-items: flex-start;
          }
          .kushtet-e-perdorimit-heading1 {
            font-size: 40px;
            align-self: flex-start;
            font-family: 'Poppins';
          }
          .kushtet-e-perdorimit-heading21 {
            align-self: flex-start;
            text-align: left;
            font-family: 'Poppins';
          }
          .kushtet-e-perdorimit-content1 {
            display: block;
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading22 {
            font-family: 'Poppins';
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content2 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading3 {
            font-family: 'Poppins';
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content3 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading4 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content4 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading5 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content5 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading610 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content610 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading611 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content611 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading612 {
            font-family: 'Poppins';
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content612 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading613 {
            font-family: 'Poppins';
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content613 {
            font-size: 18px;
          }
          .kushtet-e-perdorimit-heading614 {
            font-family: 'Poppins';
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content614 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading615 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content615 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading616 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content616 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading617 {
            font-family: 'Poppins';
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content617 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading618 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content618 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading619 {
            font-family: 'Poppins';
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content619 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading620 {
            font-family: 'Poppins';
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content620 {
            font-size: 18px;
          }
          .kushtet-e-perdorimit-heading621 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content621 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-heading622 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .kushtet-e-perdorimit-content622 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.15;
          }
          .kushtet-e-perdorimit-footer {
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
          .kushtet-e-perdorimit-content8 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .kushtet-e-perdorimit-information {
            gap: var(--dl-space-space-unit);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .kushtet-e-perdorimit-heading {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .kushtet-e-perdorimit-link23 {
            display: contents;
          }
          .kushtet-e-perdorimit-pasted-image1 {
            width: var(--dl-size-size-large);
            text-decoration: none;
          }
          .kushtet-e-perdorimit-text2 {
            font-size: 20px;
            font-family: Poppins;
            line-height: 21px;
          }
          .kushtet-e-perdorimit-socials {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .kushtet-e-perdorimit-link24 {
            display: contents;
          }
          .kushtet-e-perdorimit-social1 {
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
          .kushtet-e-perdorimit-social1:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .kushtet-e-perdorimit-icon14 {
            width: 18px;
            height: 18px;
          }
          .kushtet-e-perdorimit-link25 {
            display: contents;
          }
          .kushtet-e-perdorimit-social2 {
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
          .kushtet-e-perdorimit-social2:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .kushtet-e-perdorimit-icon18 {
            width: 18px;
            height: 18px;
          }
          .kushtet-e-perdorimit-link26 {
            display: contents;
          }
          .kushtet-e-perdorimit-social3 {
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
          .kushtet-e-perdorimit-social3:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .kushtet-e-perdorimit-icon20 {
            width: 18px;
            height: 18px;
          }
          .kushtet-e-perdorimit-link27 {
            display: contents;
          }
          .kushtet-e-perdorimit-social4 {
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
          .kushtet-e-perdorimit-social4:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .kushtet-e-perdorimit-icon24 {
            width: 18px;
            height: 18px;
          }
          .kushtet-e-perdorimit-links2 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            z-index: 15;
            align-items: flex-start;
            flex-direction: row;
          }
          .kushtet-e-perdorimit-column1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .kushtet-e-perdorimit-header2 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 30px;
            padding-top: var(--dl-space-space-oneandhalfunits);
          }
          .kushtet-e-perdorimit-link29 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-link29:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .kushtet-e-perdorimit-link31 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-link31:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .kushtet-e-perdorimit-link32 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-link32:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .kushtet-e-perdorimit-link34 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-link34:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .kushtet-e-perdorimit-link35 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
          }
          .kushtet-e-perdorimit-link35:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .kushtet-e-perdorimit-column2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .kushtet-e-perdorimit-header3 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 30px;
            padding-top: var(--dl-space-space-oneandhalfunits);
          }
          .kushtet-e-perdorimit-link36 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-link36:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .kushtet-e-perdorimit-link37 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-link37:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .kushtet-e-perdorimit-pills {
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
          .kushtet-e-perdorimit-container4 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .kushtet-e-perdorimit-you-tube1 {
            width: 154px;
            height: 79px;
            display: flex;
            align-self: flex-end;
            align-items: center;
            border-radius: 24px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0);
          }
          .kushtet-e-perdorimit-link38 {
            display: contents;
          }
          .kushtet-e-perdorimit-pasted-image2 {
            width: 533px;
            height: 80px;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-you-tube2 {
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
          .kushtet-e-perdorimit-link39 {
            display: contents;
          }
          .kushtet-e-perdorimit-pasted-image3 {
            width: 350px;
            height: 80px;
            display: grid;
            text-decoration: none;
          }
          .kushtet-e-perdorimit-text3 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            max-width: 1200px;
            line-height: 21px;
          }
          @media (max-width: 1600px) {
            .kushtet-e-perdorimit-logo {
              margin-left: var(--dl-space-space-threeunits);
            }
            .kushtet-e-perdorimit-book-btn {
              margin-top: var(--dl-space-space-unit);
            }
            .kushtet-e-perdorimit-links1 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .kushtet-e-perdorimit-link18 {
              font-size: 25px;
            }
            .kushtet-e-perdorimit-link20 {
              font-size: 25px;
            }
            .kushtet-e-perdorimit-link21 {
              font-size: 25px;
            }
            .kushtet-e-perdorimit-link22 {
              font-size: 25px;
              font-family: Poppins;
            }
            .kushtet-e-perdorimit-container3 {
              padding-left: 140px;
              padding-right: 140px;
            }
            .kushtet-e-perdorimit-heading1 {
              font-size: 40px;
            }
            .kushtet-e-perdorimit-column1 {
              display: grid;
            }
            .kushtet-e-perdorimit-pills {
              margin-right: var(--dl-space-space-threeunits);
            }
            .kushtet-e-perdorimit-you-tube1 {
              width: 209px;
              height: 77px;
            }
          }
          @media (max-width: 1200px) {
            .kushtet-e-perdorimit-link18 {
              text-align: center;
            }
            .kushtet-e-perdorimit-link20 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              font-size: 25px;
              font-style: normal;
              text-align: center;
              font-family: Poppins;
              font-weight: 500;
            }
            .kushtet-e-perdorimit-link21 {
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
            .kushtet-e-perdorimit-link22 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 991px) {
            .kushtet-e-perdorimit-navbar {
              z-index: 1000;
            }
            .kushtet-e-perdorimit-right {
              display: none;
            }
            .kushtet-e-perdorimit-burger-menu {
              display: flex;
              padding: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-threeunits);
              border-radius: var(--dl-radius-radius-round);
              background-color: #48787b;
            }
            .kushtet-e-perdorimit-icon10 {
              fill: white;
            }
            .kushtet-e-perdorimit-links1 {
              display: none;
            }
            .kushtet-e-perdorimit-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .kushtet-e-perdorimit-pills {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .kushtet-e-perdorimit-navbar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .kushtet-e-perdorimit-logo {
              margin-left: var(--dl-space-space-twounits);
            }
            .kushtet-e-perdorimit-burger-menu {
              display: flex;
            }
            .kushtet-e-perdorimit-image {
              width: 76px;
            }
            .kushtet-e-perdorimit-container3 {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .kushtet-e-perdorimit-footer {
              gap: var(--dl-space-space-twounits);
            }
            .kushtet-e-perdorimit-content8 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .kushtet-e-perdorimit-information {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .kushtet-e-perdorimit-heading {
              gap: var(--dl-space-space-halfunit);
            }
            .kushtet-e-perdorimit-pasted-image1 {
              width: 100px;
            }
            .kushtet-e-perdorimit-text2 {
              font-size: 12px;
              line-height: 18px;
            }
            .kushtet-e-perdorimit-socials {
              gap: var(--dl-space-space-halfunit);
            }
            .kushtet-e-perdorimit-social1 {
              padding: 12px;
            }
            .kushtet-e-perdorimit-social2 {
              padding: 12px;
            }
            .kushtet-e-perdorimit-social3 {
              padding: 12px;
            }
            .kushtet-e-perdorimit-social4 {
              padding: 12px;
            }
            .kushtet-e-perdorimit-links2 {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              flex-direction: column;
            }
            .kushtet-e-perdorimit-header2 {
              font-size: 16px;
              line-height: 24px;
            }
            .kushtet-e-perdorimit-header3 {
              font-size: 16px;
              line-height: 24px;
            }
            .kushtet-e-perdorimit-pills {
              align-self: flex-end;
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              justify-content: flex-start;
            }
            .kushtet-e-perdorimit-container4 {
              align-items: flex-start;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .kushtet-e-perdorimit-navbar {
              padding: var(--dl-space-space-unit);
            }
            .kushtet-e-perdorimit-logo {
              width: 179px;
              height: 104px;
              margin-left: 0px;
            }
            .kushtet-e-perdorimit-burger-menu {
              margin-right: 0px;
            }
            .kushtet-e-perdorimit-mobile-menu {
              padding: 16px;
            }
            .kushtet-e-perdorimit-nav1 {
              height: 725px;
            }
            .kushtet-e-perdorimit-container2 {
              height: auto;
              align-self: flex-start;
              margin-bottom: 0px;
              justify-content: space-between;
            }
            .kushtet-e-perdorimit-image {
              width: var(--dl-size-size-medium);
              height: var(--dl-size-size-medium);
              display: flex;
              align-self: center;
              margin-left: 0px;
              padding-left: 0px;
              padding-bottom: 0px;
            }
            .kushtet-e-perdorimit-icon12 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
            }
            .kushtet-e-perdorimit-nav2 {
              width: 100%;
              height: auto;
              align-self: flex-start;
              margin-top: 0px;
              margin-left: 14px;
            }
            .kushtet-e-perdorimit-link12 {
              font-size: 20px;
              align-self: flex-start;
              font-style: normal;
              text-align: left;
              font-family: Poppins;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-unit);
              text-decoration: none;
            }
            .kushtet-e-perdorimit-link13 {
              font-size: 20px;
              align-self: flex-start;
              font-style: normal;
              text-align: left;
              font-family: Poppins;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-unit);
              text-decoration: none;
            }
            .kushtet-e-perdorimit-link14 {
              font-size: 20px;
              align-self: flex-start;
              font-style: normal;
              font-family: Poppins;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-unit);
              text-decoration: none;
            }
            .kushtet-e-perdorimit-link15 {
              font-size: 20px;
              align-self: flex-start;
              font-style: normal;
              text-align: left;
              font-family: Poppins;
              font-weight: 400;
              text-decoration: none;
            }
            .kushtet-e-perdorimit-book-btn {
              align-self: flex-start;
              margin-top: var(--dl-space-space-unit);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .kushtet-e-perdorimit-container3 {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .kushtet-e-perdorimit-content8 {
              align-self: center;
            }
            .kushtet-e-perdorimit-information {
              align-self: center;
            }
            .kushtet-e-perdorimit-heading {
              max-width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .kushtet-e-perdorimit-pasted-image1 {
              align-self: center;
            }
            .kushtet-e-perdorimit-text2 {
              color: #c4c4c4;
              font-size: 20px;
              align-self: center;
              text-align: center;
              line-height: 18px;
            }
            .kushtet-e-perdorimit-socials {
              align-self: center;
              justify-content: center;
            }
            .kushtet-e-perdorimit-links2 {
              width: 100%;
              align-self: center;
              flex-direction: column;
            }
            .kushtet-e-perdorimit-column1 {
              align-self: center;
              place-items: center;
            }
            .kushtet-e-perdorimit-header2 {
              font-size: 24px;
              align-self: center;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .kushtet-e-perdorimit-link29 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              align-self: center;
              line-height: 21px;
            }
            .kushtet-e-perdorimit-link31 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              align-self: center;
              line-height: 21px;
            }
            .kushtet-e-perdorimit-link32 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              align-self: center;
              line-height: 21px;
            }
            .kushtet-e-perdorimit-link34 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              line-height: 21px;
            }
            .kushtet-e-perdorimit-link35 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              line-height: 21px;
            }
            .kushtet-e-perdorimit-column2 {
              align-self: center;
            }
            .kushtet-e-perdorimit-header3 {
              font-size: 24px;
              align-self: center;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .kushtet-e-perdorimit-link36 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              align-self: center;
              font-family: Poppins;
              line-height: 21px;
            }
            .kushtet-e-perdorimit-link37 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              text-align: center;
              font-family: Poppins;
              line-height: 21px;
            }
            .kushtet-e-perdorimit-pills {
              align-self: center;
              margin-top: var(--dl-space-space-eightunits);
              align-items: stretch;
              margin-left: 0%;
              margin-bottom: var(--dl-space-space-eightunits);
              flex-direction: column;
              justify-content: space-between;
            }
            .kushtet-e-perdorimit-you-tube1 {
              width: 120px;
              height: 60px;
              align-items: center;
              border-radius: 100px;
            }
            .kushtet-e-perdorimit-pasted-image2 {
              width: var(--dl-size-size-xlarge);
              height: auto;
            }
            .kushtet-e-perdorimit-you-tube2 {
              width: 120px;
              height: 60px;
              align-items: center;
              border-radius: 100px;
            }
            .kushtet-e-perdorimit-pasted-image3 {
              width: var(--dl-size-size-xlarge);
              height: auto;
            }
            .kushtet-e-perdorimit-text3 {
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

export default KushtetEPerdorimit

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

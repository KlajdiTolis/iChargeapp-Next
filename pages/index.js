import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import OutlineButton from '../components/outline-button'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>
            iCharge.app - Stacione dhe pika karikimi për makina elektrike.
          </title>
          <meta
            name="description"
            content="iCharge.app: Zgjidhja inovative për makina elektrike. Zbuloni stacionet dhe pikat më të mira të karikimit me nje sherbim superior ne krahasim me Vega Group."
          />
          <meta
            property="og:title"
            content="iCharge.app - Stacione dhe pika karikimi për makina elektrike."
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
        <section className="home-hero">
          <header className="home-header1">
            <header data-thq="thq-navbar" className="home-navbar">
              <div className="home-left1">
                <a href="#content" className="home-link10">
                  <img
                    alt="image"
                    sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                    src="/logo_icharge_primary_page-0002-removebg-preview-200h-200h-1500w.webp"
                    loading="eager"
                    srcSet="/logo_icharge_primary_page-0002-removebg-preview-200h-200h-1500w.webp 1200w, /logo_icharge_primary_page-0002-removebg-preview-200h-200h-tablet.webp 800w, /logo_icharge_primary_page-0002-removebg-preview-200h-200h-mobile.webp 480w"
                    className="home-logo"
                  />
                </a>
              </div>
              <div
                data-thq="thq-navbar-btn-group"
                className="home-right1"
              ></div>
              <div data-thq="thq-burger-menu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav1"
                >
                  <div className="home-container11">
                    <a href="#content" className="home-link11">
                      <img
                        alt="image"
                        src="/logo_icharge_primary_1%20(1)3-200h.webp"
                        className="home-image10"
                      />
                    </a>
                    <div className="home-container12">
                      <div
                        data-thq="thq-close-menu"
                        className="home-menu-close"
                      ></div>
                      <svg viewBox="0 0 1024 1024" className="home-icon12">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="home-nav2"
                  >
                    <a href="#content" className="home-link12">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5emypk'),
                        }}
                      ></span>
                    </a>
                    <a href="#banner" className="home-link13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_NVjR43'),
                        }}
                      ></span>
                    </a>
                    <a
                      href="https://m.icharge.app/#/homepage"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link14"
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_DjscAt'),
                        }}
                      ></span>
                    </a>
                    <a href="#footer" className="home-link15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Tft9Kz'),
                        }}
                      ></span>
                    </a>
                    <Link href="/kontakt">
                      <a className="home-link16">
                        <div className="home-book-btn1">
                          <span className="home-text10">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_g7x65a'),
                              }}
                            ></span>
                          </span>
                        </div>
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
              <nav className="home-links1">
                <a href="#content" className="home-link17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_GPHYZ1'),
                    }}
                  ></span>
                </a>
                <a href="#banner" className="home-link18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_nirMcx'),
                    }}
                  ></span>
                </a>
                <a
                  href="https://m.icharge.app/#/homepage"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link19"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_ahgayi'),
                    }}
                  ></span>
                </a>
                <a href="#footer" className="home-link20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_1eRqGy'),
                    }}
                  ></span>
                </a>
              </nav>
            </header>
          </header>
          <div className="home-main1">
            <div id="content" className="home-content1">
              <div className="home-center">
                <div className="home-heading1">
                  <h1 className="home-header2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_tvGGIk'),
                      }}
                    ></span>
                  </h1>
                </div>
                <span className="home-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_17o3mc'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-pills1">
                <div className="home-container13">
                  <div className="home-you-tube1">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.icharge.mobile.app&amp;pli=1"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link21"
                    >
                      <img
                        alt="pastedImage"
                        src="/play-store-badge.svg"
                        className="home-pasted-image1"
                      />
                    </a>
                  </div>
                  <div className="home-you-tube2">
                    <a
                      href="https://apps.apple.com/lv/app/icharge-app/id6479523452"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link22"
                    >
                      <img
                        alt="pastedImage"
                        src="/apple.svg"
                        className="home-pasted-image2"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tours" className="home-quick-view">
          <div className="home-services">
            <div className="home-container14">
              <div className="home-container15">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M512 86q124 0 211 87t87 211q0 150-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                </svg>
              </div>
              <h1 className="home-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_w7UGdx'),
                  }}
                ></span>
              </h1>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jBVUGA'),
                  }}
                ></span>
              </span>
            </div>
            <div className="home-container16">
              <div className="home-container17">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
                </svg>
              </div>
              <h1 className="home-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JpfAth'),
                  }}
                ></span>
              </h1>
              <span className="home-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xKr29k'),
                  }}
                ></span>
              </span>
            </div>
            <div className="home-container18">
              <div className="home-container19">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M726 726v-172h-86v172h86zM554 726v-428h-84v428h84zM384 726v-300h-86v300h86zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"></path>
                </svg>
              </div>
              <h1 className="home-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DEZho6'),
                  }}
                ></span>
              </h1>
              <span className="home-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Q2hCCl'),
                  }}
                ></span>
              </span>
            </div>
          </div>
        </section>
        <div className="home-speakers section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-speakers-container">
              <div className="home-speaker-card1">
                <div className="home-image-container1">
                  <img
                    alt="image"
                    sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                    src="/untitled%20design%20(22)-2600h.webp"
                    loading="lazy"
                    srcSet="/untitled%20design%20(22)-2600h.webp 1200w, /untitled%20design%20(22)-tablet.webp 800w, /untitled%20design%20(22)-mobile.webp 480w"
                    className="home-image11"
                  />
                  <div className="home-read-more-container1">
                    <span className="home-hint1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('hint_u9-jqV'),
                        }}
                      ></span>
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon20">
                      <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                    </svg>
                  </div>
                </div>
                <span className="home-first-name1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('firstName_B4GSME'),
                    }}
                  ></span>
                </span>
                <span className="home-last-name1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('lastName_cr5S2g'),
                    }}
                  ></span>
                </span>
                <span className="home-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_2pCJ2X'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-speaker-card2">
                <div className="home-image-container2">
                  <img
                    alt="image"
                    sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                    src="/untitled%20design%20(23)-2600h.webp"
                    srcSet="/untitled%20design%20(23)-2600h.webp 1200w, /untitled%20design%20(23)-tablet.webp 800w, /untitled%20design%20(23)-mobile.webp 480w"
                    className="home-image12"
                  />
                  <div className="home-read-more-container2">
                    <span className="home-hint2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('hint_Hrxk7Z'),
                        }}
                      ></span>
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon22">
                      <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                    </svg>
                  </div>
                </div>
                <span className="home-first-name2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('firstName_b2fq1b'),
                    }}
                  ></span>
                </span>
                <span className="home-last-name2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('lastName_bvDCWe'),
                    }}
                  ></span>
                </span>
                <span className="home-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Yb1yz6'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-speaker-card3">
                <div className="home-image-container3">
                  <img
                    alt="image"
                    sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                    src="/untitled%20design%20(24)-2600h.webp"
                    srcSet="/untitled%20design%20(24)-2600h.webp 1200w, /untitled%20design%20(24)-tablet.webp 800w, /untitled%20design%20(24)-mobile.webp 480w"
                    className="home-image13"
                  />
                  <div className="home-read-more-container3">
                    <span className="home-hint3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('hint__RoLph'),
                        }}
                      ></span>
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon24">
                      <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                    </svg>
                  </div>
                </div>
                <span className="home-first-name3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('firstName_wtxwdT'),
                    }}
                  ></span>
                </span>
                <span className="home-last-name3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('lastName_vTjV5k'),
                    }}
                  ></span>
                </span>
                <span className="home-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_DOsrq2'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-speaker-card4">
                <div className="home-image-container4">
                  <img
                    alt="image"
                    sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                    src="/karikuesac3-2600h.webp"
                    srcSet="/karikuesac3-2600h.webp 1200w, /karikuesac3-tablet.webp 800w, /karikuesac3-mobile.webp 480w"
                    className="home-image14"
                  />
                  <div className="home-read-more-container4">
                    <span className="home-hint4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('hint_4ZTuhF'),
                        }}
                      ></span>
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon26">
                      <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                    </svg>
                  </div>
                </div>
                <span className="home-first-name4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('firstName_nmdxx4'),
                    }}
                  ></span>
                </span>
                <span className="home-last-name4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('lastName_ZkLyIN'),
                    }}
                  ></span>
                </span>
                <span className="home-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lVNqi2'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-speaker-card5">
                <div className="home-image-container5">
                  <img
                    alt="image"
                    sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                    src="/karikuesac2-2600h.webp"
                    srcSet="/karikuesac2-2600h.webp 1200w, /karikuesac2-tablet.webp 800w, /karikuesac2-mobile.webp 480w"
                    className="home-image15"
                  />
                  <div className="home-read-more-container5">
                    <span className="home-hint5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('hint_H8UBcw'),
                        }}
                      ></span>
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon28">
                      <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                    </svg>
                  </div>
                </div>
                <span className="home-first-name5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('firstName_gn-Bqg'),
                    }}
                  ></span>
                </span>
                <span className="home-last-name5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('lastName_U2lYgz'),
                    }}
                  ></span>
                </span>
                <span className="home-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5Wc8tj'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-speaker-card6">
                <div className="home-image-container6">
                  <img
                    alt="image"
                    sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                    src="/karikuesac-2600h.webp"
                    srcSet="/karikuesac-2600h.webp 1200w, /karikuesac-tablet.webp 800w, /karikuesac-mobile.webp 480w"
                    className="home-image16"
                  />
                  <div className="home-read-more-container6">
                    <span className="home-hint6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('hint_o2yAgP'),
                        }}
                      ></span>
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon30">
                      <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                    </svg>
                  </div>
                </div>
                <span className="home-first-name6">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('firstName_zGJZ6O'),
                    }}
                  ></span>
                </span>
                <span className="home-last-name6">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('lastName_y-5dNC'),
                    }}
                  ></span>
                </span>
                <span className="home-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XU2jN5'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="banner" className="home-banner1">
          <div className="home-container20">
            <div className="home-left2">
              <h2 className="home-text24 title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_D-ZXY-'),
                  }}
                ></span>
              </h2>
              <span className="home-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wghZpb'),
                  }}
                ></span>
              </span>
            </div>
            <div className="home-image-container7">
              <img
                alt="pastedImage"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/untitled%20design%20(15)1-1200w.webp"
                loading="lazy"
                srcSet="/untitled%20design%20(15)1-1200w.webp 1200w, /untitled%20design%20(15)1-tablet.webp 800w, /untitled%20design%20(15)1-mobile.webp 480w"
                className="home-cards-image1"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container">
            <div className="home-image-container8">
              <img
                alt="pastedImage"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/white%20label%20mobile%20application-1200w.webp"
                loading="lazy"
                srcSet="/white%20label%20mobile%20application-1200w.webp 1200w, /white%20label%20mobile%20application-tablet.webp 800w, /white%20label%20mobile%20application-mobile.webp 480w"
                className="home-cards-image2"
              />
            </div>
            <div className="home-right2">
              <h2 className="home-text26 title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6tlkvl'),
                  }}
                ></span>
              </h2>
              <div className="home-category">
                <span className="home-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NsaDRQ'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner2">
          <div className="home-container21">
            <div className="home-left3">
              <h2 className="home-text28 title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vRLr1Y'),
                  }}
                ></span>
              </h2>
              <span className="home-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mLUiUD'),
                  }}
                ></span>
              </span>
            </div>
            <div className="home-image-container9">
              <img
                alt="pastedImage"
                src="/untitled%20design%20(1)1.svg"
                loading="lazy"
                className="home-pasted-image3"
              />
            </div>
            <a
              href="https://m.icharge.app/#/homepage"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link23"
            >
              <div className="home-book-btn2">
                <span className="home-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Uy5ApD'),
                    }}
                  ></span>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="home-container22 max-content-container">
          <div className="home-heading-container1">
            <h1 className="home-text31">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_j8JWq9'),
                }}
              ></span>
            </h1>
          </div>
          <div className="home-numbers-container">
            <div className="home-numbers-card1">
              <span className="home-number1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('number_fwPEnn'),
                  }}
                ></span>
              </span>
              <span className="home-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vjq_FA'),
                  }}
                ></span>
              </span>
            </div>
            <div className="home-numbers-card2">
              <span className="home-number2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('number_7aJISY'),
                  }}
                ></span>
              </span>
              <span className="home-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ozDGw4'),
                  }}
                ></span>
              </span>
            </div>
            <div className="home-numbers-card3">
              <span className="home-number3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('number_OY7d2r'),
                  }}
                ></span>
              </span>
              <span className="home-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_N-Pot-'),
                  }}
                ></span>
              </span>
            </div>
            <div className="home-numbers-card4">
              <span className="home-number4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('number_Gx8JYU'),
                  }}
                ></span>
              </span>
              <span className="home-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WoQjl-'),
                  }}
                ></span>
              </span>
            </div>
            <div className="home-numbers-card5">
              <span className="home-number5">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('number_scZgns'),
                  }}
                ></span>
              </span>
              <span className="home-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gYmLu9'),
                  }}
                ></span>
              </span>
            </div>
            <div className="home-numbers-card6">
              <span className="home-number6">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('number_qWrHBm'),
                  }}
                ></span>
              </span>
              <span className="home-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rmQt63'),
                  }}
                ></span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-section section-container">
          <div id="main-section" className="home-main2">
            <h2 className="home-text38">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_00NMAZ'),
                }}
              ></span>
            </h2>
            <div className="home-cards-container1">
              <div className="home-container23">
                <img
                  alt="image"
                  src="/logo%20step%201.svg"
                  loading="lazy"
                  className="home-image17"
                />
                <div className="home-container24">
                  <span className="home-text39">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_aLZ2CD'),
                      }}
                    ></span>
                  </span>
                  <OutlineButton button1="Discover place"></OutlineButton>
                </div>
              </div>
              <div className="home-container25">
                <img
                  alt="image"
                  src="/logo%20step%202.svg"
                  loading="lazy"
                  className="home-image18"
                />
                <div className="home-container26">
                  <span className="home-text40">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_hKbzlQ'),
                      }}
                    ></span>
                  </span>
                  <OutlineButton button1="Discover place"></OutlineButton>
                </div>
              </div>
              <div className="home-container27">
                <img
                  alt="image"
                  src="/logo%20step%203%20(2).svg"
                  loading="lazy"
                  className="home-image19"
                />
                <div className="home-container28">
                  <span className="home-text41">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_yb0LfW'),
                      }}
                    ></span>
                  </span>
                  <OutlineButton button1="Discover place"></OutlineButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-content-container">
            <h2 className="home-text42">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_oyKjeJ'),
                }}
              ></span>
            </h2>
            <span className="home-text43">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_pZKaQG'),
                }}
              ></span>
            </span>
            <div className="home-blog-cards-container">
              <div className="home-blog-card1">
                <img
                  alt="image"
                  src="/icharge%20edar-400w.webp"
                  className="home-image20"
                />
                <div className="home-container29">
                  <span className="home-text44">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_lMME-Q'),
                      }}
                    ></span>
                  </span>
                  <span className="home-text45">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_3s7_bm'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="home-blog-card2">
                <img
                  alt="image"
                  src="/icharge%20teg1-400w.webp"
                  className="home-image21"
                />
                <div className="home-container30">
                  <span className="home-text46">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_CaILk_'),
                      }}
                    ></span>
                  </span>
                  <span className="home-text47">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_4N2Cbc'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="home-blog-card3">
                <img
                  alt="image"
                  sizes="(min-width: 768px) 800px, 480px"
                  src="/icharge%20rubik-600w.webp"
                  srcSet="/icharge%20rubik-600w.webp 800w, /icharge%20rubik-mobile.webp 480w"
                  className="home-image22"
                />
                <div className="home-container31">
                  <span className="home-text48">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_am6Nw9'),
                      }}
                    ></span>
                  </span>
                  <span className="home-text49">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_5Qepmu'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home-sponsors">
          <div className="home-header3">
            <div data-aos="fade-right" className="home-heading2">
              <h2 className="home-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Title_bWn2aZ'),
                  }}
                ></span>
              </h2>
            </div>
          </div>
          <div className="home-brands">
            <div className="brand home-brand1">
              <img
                alt="image"
                src="/usembassy-200h.webp"
                loading="lazy"
                className="home-image23"
              />
            </div>
            <div className="brand home-brand2">
              <img
                alt="image"
                src="/balfin-200h.webp"
                loading="lazy"
                className="home-image24"
              />
            </div>
            <div className="brand home-brand3">
              <img
                alt="image"
                src="/kurumpng1-200h.webp"
                loading="lazy"
                className="home-image25"
              />
            </div>
            <div className="home-brand4 brand">
              <img
                alt="image"
                src="/aiba-200h.webp"
                loading="lazy"
                className="home-image26"
              />
            </div>
            <div className="home-brand5 brand">
              <img
                alt="image"
                src="/greentaxi-200h.webp"
                loading="lazy"
                className="home-image27"
              />
            </div>
            <div className="home-brand6 brand">
              <img
                alt="image"
                src="/beetaxi-200h.webp"
                loading="lazy"
                className="home-image28"
              />
            </div>
            <div className="home-brand7 brand">
              <img
                alt="image"
                src="/kingtaxipng-200h.webp"
                loading="lazy"
                className="home-image29"
              />
            </div>
            <div className="home-brand8 brand">
              <img
                alt="image"
                src="/unnamed-200h.webp"
                loading="lazy"
                className="home-image30"
              />
            </div>
          </div>
        </section>
        <div className="home-section-five section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-heading-container2">
              <h2 className="home-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xDSyXJ'),
                  }}
                ></span>
              </h2>
            </div>
            <div className="home-cards-container2">
              <div className="home-grid-card1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon32"
                >
                  <path
                    d="M8.314 5.059L9 3h6l.686 2.059A4 4 0 0 1 19 9v3a2 2 0 0 1 2 2v5a2 2 0 1 1-4 0H7a2 2 0 1 1-4 0v-5a2 2 0 0 1 2-2V9a4 4 0 0 1 3.314-3.941M9 7a2 2 0 0 0-2 2v3h10V9a2 2 0 0 0-2-2zm-3 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m12 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                    fill="currentColor"
                  ></path>
                </svg>
                <path d="M214 470h596l-64-192h-468zM746 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM808 256l88 256v342q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-44h-512v44q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-342l88-256q12-42 62-42h106v-86h256v86h106q50 0 62 42z"></path>
                <span className="home-text51">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Jw0SfC'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-grid-card2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="home-icon35"
                >
                  <path
                    d="M7.5 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM4.9 1A2.9 2.9 0 0 0 2 3.9V6h-.5a.5.5 0 0 0 0 1H2v6.7A1.3 1.3 0 0 0 3.3 15h1.4A1.3 1.3 0 0 0 6 13.7V13h4v.7a1.3 1.3 0 0 0 1.3 1.3h1.4a1.3 1.3 0 0 0 1.3-1.3V7h.5a.5.5 0 0 0 0-1H14V3.9A2.9 2.9 0 0 0 11.1 1zM13 3.9V8H3V3.9C3 2.85 3.85 2 4.9 2h6.2c1.05 0 1.9.85 1.9 1.9m0 9.1v.7a.3.3 0 0 1-.3.3h-1.4a.3.3 0 0 1-.3-.3V13zm-8 0v.7a.3.3 0 0 1-.3.3H3.3a.3.3 0 0 1-.3-.3V13zm1.5-2.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m3.75.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-text52">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9Sd3id'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-grid-card3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon37"
                >
                  <path
                    d="M17.3 5C19 6.5 20 8.6 20 11c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.4 1.1-4.5 2.7-6zm.7-2H6l-.6.5C3.2 5.4 2 8.1 2 11c0 5.5 4.5 10 10 10s10-4.5 10-10c0-2.9-1.2-5.6-3.4-7.5zm-5 4.5c0 .8.7 1.5 1.5 1.5S16 8.3 16 7.5S15.3 6 14.5 6S13 6.7 13 7.5m-5 0C8 8.3 8.7 9 9.5 9S11 8.3 11 7.5S10.3 6 9.5 6S8 6.7 8 7.5M7 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4.5 2c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2m.5-2c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4.5 2c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2m2.5-4c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-text53">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_YP4jHd'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-grid-card4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon39"
                >
                  <path
                    d="m19.77 7.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 0 1-1 1a1 1 0 0 1-1-1V14a2 2 0 0 0-2-2h-1V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0 0 18 21a2.5 2.5 0 0 0 2.5-2.5V9c0-.69-.28-1.32-.73-1.77M18 10a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1M8 18v-4.5H6L10 6v5h2z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-text54">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7xn24K'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-previous-events1 section-container">
          <div className="home-previous-events2 section-container">
            <div className="home-max-width4 max-content-container">
              <div className="home-heading-container3">
                <h1 className="home-text55">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mqsDtU'),
                    }}
                  ></span>
                </h1>
              </div>
            </div>
            <div data-type="slider" className="home-slider">
              <div data-type="slide" className="home-slide1 slide"></div>
              <div data-type="slide" className="home-slide2 slide"></div>
              <div data-type="slide" className="home-slide3 slide"></div>
              <div data-type="slide" className="home-slide4 slide"></div>
              <div data-type="slide" className="home-slide5 slide"></div>
            </div>
            <div className="home-slider-controls">
              <div data-action="previousSlide" className="home-go-left">
                <svg viewBox="0 0 1024 1024" className="home-icon41">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
              <div data-action="nextSlide" className="home-go-right">
                <svg viewBox="0 0 1024 1024" className="home-icon43">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <section className="home-faq">
          <div className="home-heading3">
            <span className="home-text56">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_zDvL13'),
                }}
              ></span>
            </span>
          </div>
          <div className="home-accordion">
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header4">
                <span className="home-text57">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_S_GdoK'),
                    }}
                  ></span>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="accordionIcon home-icon45"
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text58">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Q_rz5e'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
            <div className="accordionContainer">
              <div className="home-header5">
                <span className="home-text59">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_f6GeAi'),
                    }}
                  ></span>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="accordionIcon home-icon47"
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text60">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_I3Bueu'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header6">
                <span className="home-text61">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_sB4DRd'),
                    }}
                  ></span>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="accordionIcon home-icon49"
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text62">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dktsof'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header7">
                <span className="home-text63">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MzU2uG'),
                    }}
                  ></span>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="accordionIcon home-icon51"
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text64">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VoFqS6'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="home-container33">
              <Script
                html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
              ></Script>
            </div>
          </div>
        </section>
        <section className="home-news">
          <div className="home-heading4">
            <h1 className="home-text65">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_bOAgqV'),
                }}
              ></span>
            </h1>
            <p className="home-text66">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_Z1WUx8'),
                }}
              ></span>
            </p>
          </div>
          <div className="home-list">
            <div className="home-item1">
              <div className="home-image31">
                <img
                  alt="image"
                  src="/logoicharge-removebg-preview%20(1)-200h.webp"
                  className="home-image32"
                />
              </div>
              <div className="home-content6">
                <div className="home-details1">
                  <span className="home-date1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Date_4Ugar0'),
                      }}
                    ></span>
                  </span>
                  <p className="home-quick-description1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('QuickDescription__5bD-0'),
                      }}
                    ></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="home-item2">
              <div className="home-image33">
                <img
                  alt="image"
                  src="/icharge%20web%20news.svg"
                  className="home-image34"
                />
              </div>
              <div className="home-content7">
                <div className="home-details2">
                  <span className="home-date2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Date_mRConw'),
                      }}
                    ></span>
                  </span>
                  <span className="home-text67">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_p0BNOX'),
                      }}
                    ></span>
                  </span>
                  <p className="home-quick-description2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('QuickDescription_XY9PcW'),
                      }}
                    ></span>
                  </p>
                </div>
                <Link href="/news">
                  <a className="home-link24">
                    <div className="home-more read-more">
                      <span className="home-text68">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_PtXXPB'),
                          }}
                        ></span>
                      </span>
                      <img
                        alt="image"
                        src="/external/arrow-2.svg"
                        className="home-image35"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="home-cta">
          <div className="home-container34">
            <div className="home-container35">
              <h2 className="home-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BlFLsS'),
                  }}
                ></span>
              </h2>
              <span className="home-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SemabB'),
                  }}
                ></span>
              </span>
              <Link href="/kontakt">
                <a className="home-link25">
                  <div className="home-book-btn3">
                    <span className="home-text71">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_G7au6x'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </Link>
            </div>
            <div className="home-container36">
              <img
                alt="image"
                src="/icharge.app%20office.svg"
                image_src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image36"
              />
            </div>
          </div>
        </div>
        <div id="footer" className="home-footer">
          <div className="home-content8">
            <div className="home-information">
              <div className="home-heading5">
                <a href="##content" className="home-link26">
                  <img
                    alt="pastedImage"
                    sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                    src="/logo_icharge_primary_page-0002-removebg-preview-200h-200h-1500w.webp"
                    loading="lazy"
                    srcSet="/logo_icharge_primary_page-0002-removebg-preview-200h-200h-1500w.webp 1200w, /logo_icharge_primary_page-0002-removebg-preview-200h-200h-tablet.webp 800w, /logo_icharge_primary_page-0002-removebg-preview-200h-200h-mobile.webp 480w"
                    className="home-pasted-image4"
                  />
                </a>
                <span className="home-text72">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_FhNUyK'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-socials">
                <a
                  href="https://www.instagram.com/icharge.alb/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link27"
                >
                  <div className="home-social1">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="home-icon53"
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
                  className="home-link28"
                >
                  <div className="home-social2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="home-icon57"
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
                  className="home-link29"
                >
                  <div className="home-social3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="home-icon59"
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
                  className="home-link30"
                >
                  <div className="home-social4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="home-icon63"
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
            <div className="home-links2">
              <div className="home-column1">
                <span className="home-header8">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_frdYbI'),
                    }}
                  ></span>
                </span>
                <a href="#content" className="home-link31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_oSbKPo'),
                    }}
                  ></span>
                </a>
                <a href="#banner" className="home-link32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_J7iJcD'),
                    }}
                  ></span>
                </a>
                <a
                  href="https://m.icharge.app/#/homepage"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link33"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_RI7m2t'),
                    }}
                  ></span>
                </a>
                <Link href="/kushtet-e-perdorimit">
                  <a className="home-link35">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_QQxiSO'),
                      }}
                    ></span>
                  </a>
                </Link>
                <span className="home-link36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_tHEerm'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="home-column2">
                <span className="home-header9">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_IPl1qq'),
                    }}
                  ></span>
                </span>
                <a href="tel:+355694080227" className="home-link37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_g8es1P'),
                    }}
                  ></span>
                </a>
                <a
                  href="mailto:office@icharge.app?subject="
                  className="home-link38"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_Ov1kZt'),
                    }}
                  ></span>
                </a>
              </div>
            </div>
          </div>
          <div className="home-pills2">
            <div className="home-container37">
              <div className="home-you-tube3">
                <a
                  href="https://apps.apple.com/lv/app/icharge-app/id6479523452"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link39"
                >
                  <img
                    alt="pastedImage"
                    sizes="(min-width: 768px) 800px, 480px"
                    src="/Icons/download%20(3)-600w.webp"
                    srcSet="/Icons//download%20(3)-600w.webp 800w, /Icons/download%20(3)-mobile.webp 480w"
                    className="home-pasted-image5"
                  />
                </a>
              </div>
              <div className="home-you-tube4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.icharge.mobile.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link40"
                >
                  <img
                    alt="pastedImage"
                    src="/Icons/download%20(4)-200h.webp"
                    className="home-pasted-image6"
                  />
                </a>
              </div>
            </div>
          </div>
          <span className="home-text73">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_LdtFP1'),
              }}
            ></span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 819px;
            display: flex;
            align-items: center;
            border-radius: 24px;
            flex-direction: column;
            background-size: cover;
            background-image: url('/web%20banner%20%20(4)-900h.webp');
            background-repeat: no-repeat;
            background-position: top;
            border-top-left-radius: var(--dl-radius-radius-radius2);
            border-top-right-radius: var(--dl-radius-radius-radius2);
          }
          .home-header1 {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-navbar {
            width: 1776px;
            display: flex;
            z-index: 100;
            max-width: 1440px;
            align-items: center;
            justify-content: space-between;
          }
          .home-left1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-link10 {
            display: contents;
          }
          .home-logo {
            width: 100%;
            height: 100px;
            object-fit: cover;
            text-decoration: none;
          }
          .home-right1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
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
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-link11 {
            display: contents;
          }
          .home-image10 {
            width: 78px;
            height: 67px;
            text-decoration: none;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link12 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link13 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link14 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link15 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            text-decoration: none;
          }
          .home-link16 {
            display: contents;
          }
          .home-book-btn1 {
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
          .home-book-btn1:hover {
            background-color: var(--dl-color-scheme-green80);
          }
          .home-text10 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-links1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-link17 {
            color: var(--dl-color-scheme-white);
            font-size: 25px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-link17:hover {
            opacity: 0.5;
          }
          .home-link18 {
            color: var(--dl-color-scheme-white);
            font-size: 25px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-link18:hover {
            opacity: 0.5;
          }
          .home-link19 {
            color: var(--dl-color-scheme-white);
            font-size: 25px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-link19:hover {
            opacity: 0.5;
          }
          .home-link20 {
            color: var(--dl-color-scheme-white);
            font-size: 25px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-link20:hover {
            opacity: 0.5;
          }
          .home-main1 {
            width: 100%;
            height: 760px;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-content1 {
            gap: var(--dl-space-space-unitandahalfunit);
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .home-center {
            width: 100%;
            height: 220px;
            display: flex;
            z-index: 100;
            max-width: 900px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-sevenunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header2 {
            color: rgb(255, 255, 255);
            width: 663px;
            font-size: 45px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 60px;
          }
          .home-text11 {
            fill: var(--dl-color-scheme-white);
            color: var(--dl-color-scheme-white);
            font-size: 20px;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: left;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-pills1 {
            width: 100%;
            height: 77px;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            max-width: 1200px;
            align-self: flex-start;
            align-items: center;
            margin-left: 0px;
            margin-bottom: 0px;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container13 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .home-you-tube1 {
            width: 154px;
            height: 79px;
            display: flex;
            align-self: flex-end;
            align-items: center;
            border-radius: 24px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0);
          }
          .home-link21 {
            display: contents;
          }
          .home-pasted-image1 {
            width: 100%;
            height: 80px;
            text-decoration: none;
          }
          .home-you-tube2 {
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
          .home-link22 {
            display: contents;
          }
          .home-pasted-image2 {
            width: 148px;
            height: 100px;
            text-decoration: none;
          }
          .home-quick-view {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-services {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 30%;
            height: auto;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-color: rgba(16, 87, 73, 0.49);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(30, 89, 92, 0.81);
          }
          .home-icon14 {
            fill: var(--dl-color-secondary-100);
            width: 24px;
            height: 24px;
          }
          .home-text12 {
            color: var(--dl-color-gray-black);
            font-size: 20px;
            margin-top: var(--dl-space-space-unitandhalf);
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text13 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 20px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
            font-family: 'Poppins';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container16 {
            flex: 0 0 auto;
            width: 30%;
            height: auto;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-color: rgba(16, 87, 73, 0.49);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(30, 89, 92, 0.81);
          }
          .home-icon16 {
            width: 24px;
            height: 24px;
          }
          .home-text14 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 20px;
            margin-top: var(--dl-space-space-unitandhalf);
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text15 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 20px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
            font-family: 'Poppins';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 30%;
            height: auto;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-color: rgba(16, 87, 73, 0.49);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container19 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(30, 89, 92, 0.81);
          }
          .home-icon18 {
            width: 24px;
            height: 24px;
          }
          .home-text16 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 20px;
            margin-top: var(--dl-space-space-unitandhalf);
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text17 {
            color: var(--dl-color-gray-black);
            font-size: 20px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
            font-family: 'Poppins';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-speakers {
            display: none;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            grid-template-rows: 1fr 1fr 1fr;
          }
          .home-max-width1 {
            width: 853px;
            display: grid;
            align-self: center;
            padding-right: 4px;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-speakers-container {
            width: 100%;
            height: auto;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-speaker-card1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-width: 255px;
            min-height: 255px;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-image11 {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-read-more-container1 {
            flex: 1;
            width: 100%;
            cursor: pointer;
            display: flex;
            opacity: 0;
            z-index: 1;
            transition: 0.3s;
            align-items: flex-end;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 18px;
            justify-content: flex-end;
            background-color: rgba(16, 87, 73, 0.68);
          }
          .home-read-more-container1:hover {
            opacity: 1;
          }
          .home-hint1 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.3;
            margin-right: 11px;
          }
          .home-icon20 {
            fill: var(--dl-color-scheme-white);
            width: 21px;
            height: 21px;
          }
          .home-first-name1 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.1;
          }
          .home-last-name1 {
            color: var(--dl-color-scheme-green80);
            font-size: 30px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text18 {
            font-size: 14px;
            font-family: 'Poppins';
          }
          .home-speaker-card2 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-width: 255px;
            min-height: 255px;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-image12 {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-read-more-container2 {
            flex: 1;
            width: 100%;
            cursor: pointer;
            display: flex;
            opacity: 0;
            z-index: 1;
            transition: 0.3s;
            align-items: flex-end;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 18px;
            justify-content: flex-end;
            background-color: rgba(16, 87, 73, 0.68);
          }
          .home-read-more-container2:hover {
            opacity: 1;
          }
          .home-hint2 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.3;
            margin-right: 11px;
          }
          .home-icon22 {
            fill: var(--dl-color-scheme-white);
            width: 21px;
            height: 21px;
          }
          .home-first-name2 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.1;
          }
          .home-last-name2 {
            fill: var(--dl-color-scheme-green80);
            color: var(--dl-color-scheme-green80);
            font-size: 30px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text19 {
            font-size: 14px;
          }
          .home-speaker-card3 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image-container3 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-width: 255px;
            min-height: 255px;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-image13 {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-read-more-container3 {
            flex: 1;
            width: 100%;
            cursor: pointer;
            display: flex;
            opacity: 0;
            z-index: 1;
            transition: 0.3s;
            align-items: flex-end;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 18px;
            justify-content: flex-end;
            background-color: rgba(16, 87, 73, 0.68);
          }
          .home-read-more-container3:hover {
            opacity: 1;
          }
          .home-hint3 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.3;
            margin-right: 11px;
          }
          .home-icon24 {
            fill: var(--dl-color-scheme-white);
            width: 21px;
            height: 21px;
          }
          .home-first-name3 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.1;
          }
          .home-last-name3 {
            fill: var(--dl-color-scheme-green80);
            color: var(--dl-color-scheme-green80);
            font-size: 30px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text20 {
            font-size: 14px;
          }
          .home-speaker-card4 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image-container4 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-width: 255px;
            min-height: 255px;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-image14 {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-read-more-container4 {
            flex: 1;
            width: 100%;
            cursor: pointer;
            display: flex;
            opacity: 0;
            z-index: 1;
            transition: 0.3s;
            align-items: flex-end;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 18px;
            justify-content: flex-end;
            background-color: rgba(16, 87, 73, 0.68);
          }
          .home-read-more-container4:hover {
            opacity: 1;
          }
          .home-hint4 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.3;
            margin-right: 11px;
          }
          .home-icon26 {
            fill: var(--dl-color-scheme-white);
            width: 21px;
            height: 21px;
          }
          .home-first-name4 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.1;
          }
          .home-last-name4 {
            fill: var(--dl-color-scheme-green80);
            color: var(--dl-color-scheme-green80);
            font-size: 30px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text21 {
            font-size: 14px;
          }
          .home-speaker-card5 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image-container5 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-width: 255px;
            min-height: 255px;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-image15 {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-read-more-container5 {
            flex: 1;
            width: 100%;
            cursor: pointer;
            display: flex;
            opacity: 0;
            z-index: 1;
            transition: 0.3s;
            align-items: flex-end;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 18px;
            justify-content: flex-end;
            background-color: rgba(16, 87, 73, 0.68);
          }
          .home-read-more-container5:hover {
            opacity: 1;
          }
          .home-hint5 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.3;
            margin-right: 11px;
          }
          .home-icon28 {
            fill: var(--dl-color-scheme-white);
            width: 21px;
            height: 21px;
          }
          .home-first-name5 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.1;
          }
          .home-last-name5 {
            fill: var(--dl-color-scheme-green80);
            color: var(--dl-color-scheme-green80);
            font-size: 30px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text22 {
            font-size: 14px;
          }
          .home-speaker-card6 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image-container6 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-width: 255px;
            min-height: 255px;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-image16 {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-read-more-container6 {
            flex: 1;
            width: 100%;
            cursor: pointer;
            display: flex;
            opacity: 0;
            z-index: 1;
            transition: 0.3s;
            align-items: flex-end;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 18px;
            justify-content: flex-end;
            background-color: rgba(16, 87, 73, 0.68);
          }
          .home-read-more-container6:hover {
            opacity: 1;
          }
          .home-hint6 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.3;
            margin-right: 11px;
          }
          .home-icon30 {
            fill: var(--dl-color-scheme-white);
            width: 21px;
            height: 21px;
          }
          .home-first-name6 {
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.1;
          }
          .home-last-name6 {
            fill: var(--dl-color-scheme-green80);
            color: var(--dl-color-scheme-green80);
            font-size: 30px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text23 {
            font-size: 14px;
          }
          .home-banner1 {
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
            background-color: var(--dl-color-scheme-white);
          }
          .home-container20 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-left2 {
            flex: 1;
            height: 427px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text24 {
            fill: #1a6466;
            color: #1a6466;
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text25 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 40px;
          }
          .home-image-container7 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-cards-image1 {
            width: 100%;
            height: 100%;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 0px 0px 0px 0px #d4d4d4;
            object-fit: contain;
            border-radius: var(--dl-radius-radius-cardradius);
          }
          .home-banner-advanced-analytics {
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: #fefefe;
          }
          .home-centered-container {
            width: 1380px;
            display: flex;
            max-width: 1200px;
            align-items: center;
            justify-content: center;
          }
          .home-image-container8 {
            flex: 1;
            display: flex;
          }
          .home-cards-image2 {
            width: 100%;
            height: 100%;
            box-shadow: 0px 0px 0px 0px #d4d4d4;
            object-fit: contain;
          }
          .home-right2 {
            flex: 1;
            display: flex;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text26 {
            fill: #1a6466;
            color: #1a6466;
            font-size: 40px;
            font-style: normal;
            text-align: right;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-category {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text27 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            text-align: right;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 40px;
          }
          .home-banner2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .home-container21 {
            width: 100%;
            height: 504px;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-left3 {
            flex: 1;
            height: 460px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text28 {
            fill: #1a6466;
            color: #1a6466;
            font-size: 40px;
            font-style: normal;
            text-align: left;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 55px;
          }
          .home-text29 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 35px;
          }
          .home-image-container9 {
            flex: 1;
            width: 743px;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-pasted-image3 {
            top: -31px;
            right: -84px;
            width: 100%;
            height: auto;
            position: absolute;
            border-radius: 24px;
          }
          .home-link23 {
            display: contents;
          }
          .home-book-btn2 {
            left: 1px;
            bottom: -14px;
            cursor: pointer;
            display: flex;
            position: absolute;
            align-self: flex-end;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
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
            background-color: #1a6466;
          }
          .home-book-btn2:hover {
            background-color: var(--dl-color-scheme-green80);
          }
          .home-text30 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-container22 {
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-scheme-white);
          }
          .home-heading-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text31 {
            fill: #1a6466;
            color: #1a6466;
            font-size: 42px;
            font-style: normal;
            font-family: 'Lexend';
            font-weight: 600;
            line-height: 1.3;
            text-transform: none;
            text-decoration: none;
          }
          .home-numbers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
          .home-numbers-card1 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.18);
            border-width: 1px;
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .home-number1 {
            color: var(--dl-color-gray-black);
            font-size: 48px;
            line-height: 1.1;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text32 {
            color: var(--dl-color-gray-black);
            font-size: 19px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-numbers-card2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.18);
            border-width: 1px;
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .home-number2 {
            color: var(--dl-color-gray-black);
            font-size: 48px;
            font-family: 'Poppins';
            line-height: 1.1;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text33 {
            color: var(--dl-color-gray-black);
            font-size: 19px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-numbers-card3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.18);
            border-width: 1px;
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .home-number3 {
            color: var(--dl-color-gray-black);
            font-size: 48px;
            line-height: 1.1;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text34 {
            color: var(--dl-color-gray-black);
            font-size: 19px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-numbers-card4 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.18);
            border-width: 1px;
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .home-number4 {
            color: var(--dl-color-gray-black);
            font-size: 48px;
            font-family: 'Poppins';
            line-height: 1.1;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text35 {
            color: var(--dl-color-gray-black);
            font-size: 19px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-numbers-card5 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.18);
            border-width: 1px;
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .home-number5 {
            color: var(--dl-color-gray-black);
            font-size: 48px;
            font-family: 'Poppins';
            line-height: 1.1;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text36 {
            color: var(--dl-color-gray-black);
            font-size: 19px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-numbers-card6 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-number6 {
            color: var(--dl-color-gray-black);
            font-size: 48px;
            font-family: 'Poppins';
            line-height: 1.1;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text37 {
            color: var(--dl-color-gray-black);
            font-size: 19px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-section {
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-main2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-quadruple);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-quadruple);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-text38 {
            fill: #1a6466;
            color: #1a6466;
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-cards-container1 {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-doubleunit);
            flex-wrap: wrap;
            max-width: 1200px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container23 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image17 {
            width: 100%;
            height: 423px;
            object-fit: cover;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
          }
          .home-container24 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .home-text39 {
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-container25 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image18 {
            width: 400px;
            height: 400px;
            object-fit: cover;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
          }
          .home-container26 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .home-text40 {
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-container27 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image19 {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
          }
          .home-container28 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .home-text41 {
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-max-width2 {
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text42 {
            fill: #1a6466;
            color: rgb(26, 100, 102);
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text43 {
            color: var(--dl-color-scheme-black80);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: 'Poppins';
            line-height: 26px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-blog-cards-container {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .home-blog-card1 {
            width: 373px;
            display: flex;
            max-width: 400px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            padding-top: 0px;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
          }
          .home-image20 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-container29 {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text44 {
            font-size: 20px;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-oneandhalfunits);
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text45 {
            fill: #6b7294;
            color: #535969;
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-blog-card2 {
            width: 373px;
            display: flex;
            max-width: 400px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            padding-top: 0px;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
          }
          .home-image21 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-container30 {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text46 {
            font-size: 20px;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: left;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.3;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text47 {
            fill: #535969;
            color: rgb(83, 89, 105);
            font-size: 18px;
            font-style: normal;
            text-align: left;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 26px;
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-blog-card3 {
            width: 373px;
            display: flex;
            max-width: 400px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            padding-top: 0px;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
          }
          .home-image22 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-container31 {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text48 {
            font-size: 20px;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text49 {
            fill: rgb(83, 89, 105);
            color: rgb(83, 89, 105);
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-sponsors {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-header3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: auto;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title {
            fill: #1a6466;
            color: #1a6466;
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 100px;
          }
          .home-brands {
            width: 100%;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(4, 1fr);
          }
          .home-image23 {
            width: var(--dl-size-size-xlarge);
            object-fit: cover;
          }
          .home-image24 {
            width: var(--dl-size-size-xlarge);
            object-fit: cover;
          }
          .home-image25 {
            width: var(--dl-size-size-xlarge);
            object-fit: cover;
          }
          .home-brand4 {
            border-right-width: 0px;
          }
          .home-image26 {
            object-fit: cover;
          }
          .home-brand5 {
            border-top-width: 1px;
          }
          .home-image27 {
            width: var(--dl-size-size-xlarge);
            object-fit: cover;
          }
          .home-brand6 {
            border-top-width: 1px;
          }
          .home-image28 {
            width: var(--dl-size-size-xlarge);
            object-fit: cover;
          }
          .home-brand7 {
            border-top-width: 1px;
          }
          .home-image29 {
            width: var(--dl-size-size-xlarge);
            object-fit: cover;
          }
          .home-brand8 {
            border-top-width: 1px;
            border-right-width: 0px;
          }
          .home-image30 {
            width: var(--dl-size-size-xlarge);
            object-fit: cover;
          }
          .home-section-five {
            display: none;
            padding-top: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #eff0f2;
          }
          .home-max-width3 {
            flex-direction: column;
            justify-content: center;
          }
          .home-heading-container2 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text50 {
            fill: #1a6466;
            color: #1a6466;
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-cards-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-grid-card1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 36px;
            align-items: flex-start;
            border-radius: 24px;
            flex-direction: column;
            background-color: var(--dl-color-grays-white100);
          }
          .home-icon32 {
            width: 60px;
            height: 60px;
            align-self: center;
          }
          .home-text51 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.3;
          }
          .home-grid-card2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 36px;
            align-items: flex-start;
            border-radius: 24px;
            flex-direction: column;
            background-color: var(--dl-color-grays-white100);
          }
          .home-icon35 {
            width: 60px;
            height: 60px;
            align-self: center;
          }
          .home-text52 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.3;
          }
          .home-grid-card3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 36px;
            align-items: flex-start;
            border-radius: 24px;
            flex-direction: column;
            background-color: var(--dl-color-grays-white100);
          }
          .home-icon37 {
            width: 60px;
            height: 60px;
            align-self: center;
          }
          .home-text53 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.3;
          }
          .home-grid-card4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 36px;
            align-items: flex-start;
            border-radius: 24px;
            flex-direction: column;
            background-color: var(--dl-color-grays-white100);
          }
          .home-icon39 {
            width: 60px;
            height: 60px;
            align-self: center;
          }
          .home-text54 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.3;
          }
          .home-previous-events1 {
            display: flex;
            position: relative;
            padding-top: 0px;
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-previous-events2 {
            height: 998px;
            display: none;
            position: relative;
            flex-direction: column;
            padding-bottom: 150px;
          }
          .home-max-width4 {
            flex-direction: column;
          }
          .home-heading-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text55 {
            fill: #1a6466;
            color: #1a6466;
            font-size: 40px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
            padding-bottom: 0px;
          }
          .home-slider {
            flex: 0 0 auto;
            width: 100%;
            height: 600px;
            display: flex;
            position: relative;
            transition: 0.5s;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .home-slide1 {
            height: 600px;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            border-radius: 24px;
            background-size: cover;
            justify-content: center;
            background-image: url('/external/icharge-stacioni-qender-shkoder-600w-1200w.webp');
          }
          .home-slide2 {
            height: 600px;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            border-radius: 24px;
            background-size: cover;
            justify-content: center;
            background-image: url('/external/icharge-stacion-terminali-juglindor1234-600w-1200w.webp');
          }
          .home-slide3 {
            width: var(--dl-size-size-medium);
            height: 600px;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            border-radius: 24px;
            background-size: cover;
            justify-content: center;
            background-image: url('/external/icharge-stacioni-qender-shkoder-1500w-1200w.webp');
          }
          .home-slide4 {
            height: 600px;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            border-radius: 24px;
            background-size: cover;
            justify-content: center;
            background-image: url('/icharge-rubik-news-web%20(1)-1200w.webp');
          }
          .home-slide5 {
            height: 600px;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            border-radius: 24px;
            background-size: cover;
            justify-content: center;
            background-image: url('/external/icharge-stacioni-qender-shkoder-1500w-1200w.webp');
          }
          .home-slider-controls {
            top: 550px;
            width: 100%;
            height: auto;
            display: flex;
            position: absolute;
            align-self: center;
            justify-content: space-between;
          }
          .home-go-left {
            flex: 0 0 auto;
            width: 48px;
            cursor: pointer;
            height: 48px;
            display: flex;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(144, 149, 167, 0.24);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }

          .home-icon41 {
            width: 24px;
            height: 24px;
            transform: rotate(180deg);
          }
          .home-go-right {
            flex: 0 0 auto;
            width: 48px;
            cursor: pointer;
            height: 48px;
            display: flex;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(144, 149, 167, 0.24);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }

          .home-icon43 {
            width: 24px;
            height: 24px;
          }
          .home-faq {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: #ffffff;
          }
          .home-heading3 {
            width: 100%;
            display: flex;
            align-items: center;
            user-select: none;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text56 {
            fill: #1a6466;
            color: #1a6466;
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-accordion {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header4 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text57 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-text58 {
            font-size: 18px;
            font-family: 'Poppins';
          }
          .home-header5 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text59 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-text60 {
            font-size: 18px;
            font-family: 'Poppins';
            font-weight: 400;
          }
          .home-header6 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text61 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-text62 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
          }
          .home-header7 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text63 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-text64 {
            font-size: 18px;
            font-family: 'Poppins';
          }
          .home-container33 {
            display: contents;
          }
          .home-news {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 200px;
          }
          .home-heading4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text65 {
            fill: #1a6466;
            color: #1a6466;
            font-size: 40px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
            padding-bottom: 0px;
          }
          .home-text66 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            font-family: 'Poppins';
            line-height: 27px;
          }
          .home-list {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: row;
          }
          .home-item1 {
            width: 100%;
            height: 640px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
            background-color: #addfbc;
          }
          .home-image31 {
            width: 100%;
            height: 275px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #addfbc;
          }
          .home-image32 {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-xlarge);
            object-fit: cover;
          }
          .home-content6 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
            background-color: #addfbc;
          }
          .home-details1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-date1 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            line-height: 24px;
          }
          .home-quick-description1 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-item2 {
            width: 100%;
            height: 640px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
            background-color: #f5f5f7;
          }
          .home-image33 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image34 {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .home-content7 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-details2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-date2 {
            color: rgb(0, 0, 0);
            font-size: 16px;
            font-family: 'Poppins';
          }
          .home-text67 {
            font-size: 24px;
          }
          .home-quick-description2 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
          }
          .home-link24 {
            display: contents;
          }
          .home-more {
            text-decoration: none;
          }
          .home-text68 {
            color: rgb(0, 0, 0);
            font-family: 'Poppins';
          }
          .home-image35 {
            width: 12px;
            object-fit: cover;
          }
          .home-cta {
            width: 100%;
            height: 408px;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(51, 175, 87, 0.4);
          }
          .home-container34 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container35 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text69 {
            font-size: 48px;
            font-family: 'Poppins';
            font-weight: 800;
            text-transform: none;
            text-decoration: none;
          }
          .home-text70 {
            font-size: 18px;
            max-width: 500px;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Poppins';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link25 {
            display: contents;
          }
          .home-book-btn3 {
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
          .home-book-btn3:hover {
            background-color: var(--dl-color-scheme-green80);
          }
          .home-text71 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-container36 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image36 {
            top: -466px;
            left: -32px;
            width: 557px;
            height: 716px;
            position: absolute;
            object-fit: cover;
          }
          .home-footer {
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
          .home-content8 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-information {
            gap: var(--dl-space-space-unit);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading5 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link26 {
            display: contents;
          }
          .home-pasted-image4 {
            width: var(--dl-size-size-large);
            text-decoration: none;
          }
          .home-text72 {
            font-size: 20px;
            font-family: Poppins;
            line-height: 21px;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link27 {
            display: contents;
          }
          .home-social1 {
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
          .home-social1:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .home-icon53 {
            width: 18px;
            height: 18px;
          }
          .home-link28 {
            display: contents;
          }
          .home-social2 {
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
          .home-social2:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .home-icon57 {
            width: 18px;
            height: 18px;
          }
          .home-link29 {
            display: contents;
          }
          .home-social3 {
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
          .home-social3:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .home-icon59 {
            width: 18px;
            height: 18px;
          }
          .home-link30 {
            display: contents;
          }
          .home-social4 {
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
          .home-social4:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .home-icon63 {
            width: 18px;
            height: 18px;
          }
          .home-links2 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            z-index: 15;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-column1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header8 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 30px;
            padding-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-link31 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .home-link31:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .home-link32 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .home-link32:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .home-link33 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .home-link33:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .home-link35 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .home-link35:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .home-link36 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
          }
          .home-link36:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .home-column2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header9 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 30px;
            padding-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-link37 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .home-link37:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .home-link38 {
            color: rgb(196, 196, 196);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 21px;
            text-decoration: none;
          }
          .home-link38:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .home-pills2 {
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
          .home-container37 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .home-you-tube3 {
            width: 154px;
            height: 79px;
            display: flex;
            align-self: flex-end;
            align-items: center;
            border-radius: 24px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0);
          }
          .home-link39 {
            display: contents;
          }
          .home-pasted-image5 {
            width: 533px;
            height: 80px;
            text-decoration: none;
          }
          .home-you-tube4 {
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
          .home-link40 {
            display: contents;
          }
          .home-pasted-image6 {
            width: 350px;
            height: 80px;
            display: grid;
            text-decoration: none;
          }
          .home-text73 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            max-width: 1200px;
            line-height: 21px;
          }
          @media (max-width: 1600px) {
            .home-hero {
              width: 100%;
              height: 868px;
              background-size: cover;
            }
            .home-logo {
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-book-btn1 {
              margin-top: var(--dl-space-space-unit);
            }
            .home-links1 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .home-link17 {
              font-size: 25px;
            }
            .home-link18 {
              font-size: 25px;
            }
            .home-link19 {
              font-size: 25px;
            }
            .home-link20 {
              font-size: 25px;
              font-family: Poppins;
            }
            .home-content1 {
              height: auto;
            }
            .home-heading1 {
              max-width: 900px;
            }
            .home-header2 {
              color: rgb(255, 255, 255);
              width: 663px;
              font-size: 45px;
              max-width: 900px;
              align-self: flex-start;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 60px;
            }
            .home-pills1 {
              margin-left: -16px;
            }
            .home-you-tube1 {
              width: 209px;
              height: 77px;
            }
            .home-pasted-image1 {
              width: 166px;
              height: 47px;
            }
            .home-container14 {
              width: 30%;
              height: 250px;
            }
            .home-text13 {
              color: var(--dl-color-gray-black);
              text-align: center;
              font-family: Poppins;
            }
            .home-container16 {
              height: 251px;
            }
            .home-text15 {
              color: var(--dl-color-gray-black);
              font-size: 20px;
              font-family: Poppins;
            }
            .home-container18 {
              width: 30%;
              height: 249px;
            }
            .home-speakers {
              display: none;
            }
            .home-last-name1 {
              color: var(--dl-color-scheme-green80);
              font-size: 30px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 1.1;
            }
            .home-last-name4 {
              fill: var(--dl-color-scheme-green80);
              color: var(--dl-color-scheme-green80);
            }
            .home-last-name5 {
              fill: var(--dl-color-scheme-green80);
              color: var(--dl-color-scheme-green80);
            }
            .home-last-name6 {
              fill: var(--dl-color-scheme-green80);
              color: var(--dl-color-scheme-green80);
            }
            .home-banner1 {
              background-color: var(--dl-color-scheme-white);
            }
            .home-text25 {
              color: rgb(0, 0, 0);
              font-size: 20px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 400;
              line-height: 35px;
            }
            .home-cards-image1 {
              border-radius: var(--dl-radius-radius-cardradius);
            }
            .home-right2 {
              height: 434px;
            }
            .home-text27 {
              color: rgb(0, 0, 0);
              line-height: 35px;
            }
            .home-banner2 {
              background-color: var(--dl-color-scheme-white);
            }
            .home-text28 {
              fill: #1a6466;
              color: #1a6466;
              font-size: 40px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 1.15;
            }
            .home-text29 {
              color: rgb(0, 0, 0);
              font-size: 20px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 400;
              line-height: 30px;
            }
            .home-image-container9 {
              width: 100%;
            }
            .home-pasted-image3 {
              top: -14px;
              right: -66px;
              width: 483px;
              height: 515px;
            }
            .home-book-btn2 {
              left: -4px;
              width: auto;
              bottom: -2px;
              height: auto;
            }
            .home-text30 {
              color: rgb(255, 255, 255);
            }
            .home-text32 {
              text-align: center;
            }
            .home-text34 {
              font-family: Poppins;
            }
            .home-text35 {
              font-family: Poppins;
            }
            .home-text36 {
              font-family: Poppins;
            }
            .home-text37 {
              text-align: center;
            }
            .home-section {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text38 {
              fill: #1a6466;
              color: #1a6466;
              font-size: 40px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-text43 {
              color: var(--dl-color-scheme-black80);
              font-size: 20px;
              font-family: Poppins;
            }
            .home-blog-cards-container {
              align-items: stretch;
            }
            .home-blog-card1 {
              max-width: 400px;
            }
            .home-text44 {
              text-align: left;
            }
            .home-blog-card2 {
              max-width: 400px;
            }
            .home-text46 {
              align-self: flex-start;
              text-align: left;
            }
            .home-text47 {
              text-align: left;
            }
            .home-blog-card3 {
              max-width: 400px;
            }
            .home-text48 {
              align-self: flex-start;
              text-align: left;
            }
            .home-text49 {
              text-align: left;
            }
            .home-title {
              fill: #1a6466;
              color: #1a6466;
            }
            .home-previous-events2 {
              height: 838px;
            }
            .home-slide1 {
              height: 500px;
              border-width: 0px;
            }
            .home-slide2 {
              height: 500px;
              border-width: 0px;
            }
            .home-slide3 {
              height: 500px;
            }
            .home-slide4 {
              height: 500px;
              border-width: 0px;
            }
            .home-slide5 {
              height: 500px;
              border-width: 0px;
            }
            .home-slider-controls {
              top: 500px;
              width: 100%;
              height: auto;
            }
            .home-icon45 {
              fill: rgba(30, 89, 92, 0.81);
            }
            .home-icon47 {
              fill: rgba(30, 89, 92, 0.81);
            }
            .home-icon49 {
              fill: rgba(30, 89, 92, 0.81);
            }
            .home-icon51 {
              fill: rgba(30, 89, 92, 0.81);
            }
            .home-quick-description2 {
              font-size: 20px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 400;
            }
            .home-more {
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-cta {
              background-color: rgba(51, 175, 87, 0.4);
            }
            .home-text70 {
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-family: Poppins;
              font-weight: 400;
              line-height: 1.6;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-book-btn3 {
              margin-top: var(--dl-space-space-unit);
            }
            .home-column1 {
              display: grid;
            }
            .home-pills2 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .home-you-tube3 {
              width: 209px;
              height: 77px;
            }
          }
          @media (max-width: 1200px) {
            .home-hero {
              height: 730px;
              background-size: cover;
              background-image: url('/web%20banner%20%20(1200%20x%20608%20px)%20(1)-900h.webp');
            }
            .home-link17 {
              text-align: center;
            }
            .home-link18 {
              color: var(--dl-color-scheme-white);
              font-size: 25px;
              font-style: normal;
              text-align: center;
              font-family: Poppins;
              font-weight: 500;
            }
            .home-link19 {
              color: var(--dl-color-scheme-white);
              font-size: 25px;
              font-style: normal;
              text-align: center;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
              text-decoration: none;
            }
            .home-link20 {
              color: var(--dl-color-scheme-white);
            }
            .home-content1 {
              height: auto;
            }
            .home-header2 {
              font-family: Poppins;
            }
            .home-quick-view {
              padding-left: 13px;
              padding-right: 13px;
            }
            .home-container14 {
              height: 275px;
            }
            .home-text12 {
              text-align: center;
            }
            .home-text13 {
              text-align: center;
            }
            .home-container16 {
              width: 30%;
              height: 275px;
            }
            .home-text15 {
              color: var(--dl-color-gray-black);
              font-size: 20px;
              font-family: Poppins;
            }
            .home-container18 {
              width: 30%;
              height: 275px;
            }
            .home-text25 {
              color: rgb(0, 0, 0);
              line-height: 30px;
            }
            .home-text27 {
              color: rgb(0, 0, 0);
              line-height: 30px;
            }
            .home-text28 {
              color: var(--dl-color-scheme-green80);
              font-size: 40px;
              align-self: flex-start;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-text29 {
              color: rgb(0, 0, 0);
              font-size: 20px;
              font-family: Poppins;
              line-height: 25px;
            }
            .home-image-container9 {
              margin-top: var(--dl-space-space-sevenunits);
            }
            .home-pasted-image3 {
              top: -56px;
              left: -12px;
              width: 452px;
              height: 507px;
            }
            .home-book-btn2 {
              left: -2px;
              bottom: -12px;
            }
            .home-text32 {
              text-align: center;
            }
            .home-text35 {
              text-align: center;
            }
            .home-text39 {
              text-align: center;
            }
            .home-container26 {
              margin-top: var(--dl-space-space-unit);
            }
            .home-text40 {
              text-align: center;
            }
            .home-container28 {
              margin-top: var(--dl-space-space-unit);
            }
            .home-text41 {
              text-align: center;
            }
            .home-previous-events2 {
              height: 757px;
            }
            .home-slide1 {
              height: 400px;
              border-width: 0px;
            }
            .home-slide2 {
              height: 400px;
              border-width: 0px;
            }
            .home-slide3 {
              height: 400px;
            }
            .home-slide4 {
              height: 400px;
              border-width: 0px;
            }
            .home-slide5 {
              height: 400px;
              border-width: 0px;
            }
            .home-slider-controls {
              top: 250px;
              width: 100%;
              bottom: var(--dl-space-space-fourunits);
              height: auto;
              margin: auto;
            }
            .home-list {
              gap: 0;
              align-items: stretch;
              justify-content: space-between;
            }
          }
          @media (max-width: 991px) {
            .home-navbar {
              z-index: 1000;
            }
            .home-right1 {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              padding: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-threeunits);
              border-radius: var(--dl-radius-radius-round);
              background-color: #48787b;
            }
            .home-icon10 {
              fill: white;
            }
            .home-links1 {
              display: none;
            }
            .home-content1 {
              height: auto;
            }
            .home-header2 {
              font-family: Poppins;
            }
            .home-pills1 {
              align-self: center;
            }
            .home-pasted-image2 {
              width: 166px;
              height: 47px;
            }
            .home-quick-view {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-services {
              align-items: center;
              flex-direction: column;
            }
            .home-container14 {
              width: 100%;
              margin-bottom: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container16 {
              width: 100%;
              margin-bottom: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container18 {
              width: 100%;
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-max-width1 {
              width: 773px;
              height: auto;
              align-self: center;
            }
            .home-speakers-container {
              width: 100%;
              height: 796px;
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-left2 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .home-text25 {
              color: rgb(0, 0, 0);
              font-size: 18px;
              align-self: center;
              font-family: Poppins;
              line-height: 29px;
            }
            .home-banner-advanced-analytics {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-right2 {
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-text26 {
              color: var(--dl-color-scheme-green80);
              font-size: 40px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-text27 {
              font-size: 18px;
              line-height: 29px;
            }
            .home-banner2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-left3 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .home-text28 {
              color: var(--dl-color-scheme-green80);
              width: 401px;
              height: 157px;
              font-size: 40px;
              align-self: flex-start;
              font-style: normal;
              text-align: left;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-text29 {
              font-size: 18px;
            }
            .home-image-container9 {
              width: 50%;
              height: 493px;
            }
            .home-pasted-image3 {
              top: -32px;
              left: -34px;
            }
            .home-book-btn2 {
              left: -2px;
              bottom: -7px;
            }
            .home-numbers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-text38 {
              text-align: center;
            }
            .home-cards-container1 {
              justify-content: center;
            }
            .home-blog-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-blog-card1 {
              max-width: 550px;
            }
            .home-blog-card2 {
              max-width: 550px;
            }
            .home-blog-card3 {
              max-width: 550px;
            }
            .home-brands {
              grid-template-rows: repeat(4, 1fr);
              grid-template-columns: repeat(2, 1fr);
            }
            .home-brand2 {
              border-right-width: 0px;
            }
            .home-brand3 {
              border-top-width: 1px;
            }
            .home-brand4 {
              border-top-width: 1px;
            }
            .home-brand6 {
              border-right-width: 0px;
            }
            .home-slider-controls {
              width: calc(75% + 48px);
            }
            .home-text56 {
              text-align: center;
            }
            .home-accordion {
              width: 100%;
              max-width: 1200px;
            }
            .home-list {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-item1 {
              height: auto;
            }
            .home-image31 {
              height: 280px;
            }
            .home-content6 {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: flex-start;
            }
            .home-quick-description1 {
              font-size: 18px;
            }
            .home-item2 {
              height: auto;
            }
            .home-image33 {
              height: 280px;
            }
            .home-content7 {
              gap: var(--dl-space-space-twounits);
              padding: var(--dl-space-space-twounits);
              justify-content: flex-start;
            }
            .home-quick-description2 {
              font-size: 18px;
            }
            .home-container36 {
              display: none;
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-pills2 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-logo {
              margin-left: var(--dl-space-space-twounits);
            }
            .home-burger-menu {
              display: flex;
            }
            .home-image10 {
              width: 76px;
            }
            .home-main1 {
              padding-left: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fiveunits);
            }
            .home-content1 {
              height: auto;
              flex-direction: column;
            }
            .home-center {
              padding-bottom: 0px;
            }
            .home-heading1 {
              gap: var(--dl-space-space-halfunit);
              flex-direction: row;
            }
            .home-header2 {
              width: 100%;
              height: auto;
              align-self: flex-end;
              text-align: left;
              font-family: Poppins;
              line-height: 70px;
            }
            .home-pills1 {
              align-self: flex-end;
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              justify-content: flex-start;
            }
            .home-container13 {
              align-items: flex-start;
              justify-content: center;
            }
            .home-quick-view {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-max-width1 {
              width: 487px;
              height: 1701px;
            }
            .home-speakers-container {
              height: auto;
              grid-template-columns: 1fr 1fr;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container20 {
              flex-direction: column;
            }
            .home-left2 {
              margin-right: 0px;
            }
            .home-text24 {
              align-self: center;
              text-align: center;
            }
            .home-banner-advanced-analytics {
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-centered-container {
              flex-direction: column-reverse;
            }
            .home-right2 {
              margin-left: 0px;
            }
            .home-text26 {
              color: var(--dl-color-scheme-green80);
              font-size: 40px;
              align-self: center;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text27 {
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-banner2 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container21 {
              flex-direction: column;
            }
            .home-left3 {
              margin-right: 0px;
            }
            .home-text28 {
              height: 120px;
              align-self: center;
            }
            .home-text29 {
              align-self: center;
              text-align: center;
            }
            .home-pasted-image3 {
              top: -107px;
              right: -104px;
            }
            .home-numbers-container {
              grid-template-columns: 1fr 1fr;
            }
            .home-main2 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container23 {
              width: 200px;
            }
            .home-container25 {
              width: 200px;
            }
            .home-container27 {
              width: 200px;
            }
            .home-text42 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-blog-card1 {
              max-width: 450px;
            }
            .home-blog-card2 {
              max-width: 450px;
            }
            .home-blog-card3 {
              max-width: 450px;
            }
            .home-sponsors {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading2 {
              gap: var(--dl-space-space-unit);
            }
            .home-title {
              font-size: 30px;
              line-height: 33px;
            }
            .home-text50 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-cards-container2 {
              grid-template-columns: 1fr;
            }
            .home-previous-events1 {
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-previous-events2 {
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-slider-controls {
              width: calc(80% + 48px);
            }
            .home-faq {
              padding: var(--dl-space-space-fourunits);
            }
            .home-heading3 {
              width: 100%;
            }
            .home-text56 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-news {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading4 {
              gap: var(--dl-space-space-unit);
            }
            .home-text66 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-date1 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-date2 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-footer {
              gap: var(--dl-space-space-twounits);
            }
            .home-content8 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-information {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading5 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-pasted-image4 {
              width: 100px;
            }
            .home-text72 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-socials {
              gap: var(--dl-space-space-halfunit);
            }
            .home-social1 {
              padding: 12px;
            }
            .home-social2 {
              padding: 12px;
            }
            .home-social3 {
              padding: 12px;
            }
            .home-social4 {
              padding: 12px;
            }
            .home-links2 {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              flex-direction: column;
            }
            .home-header8 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-header9 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-pills2 {
              align-self: flex-end;
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              justify-content: flex-start;
            }
            .home-container37 {
              align-items: flex-start;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              width: 100%;
              height: 100%;
              max-width: auto;
              background-size: cover;
              background-image: url('/mobile%20banner%20%20%20(2)-900h.webp');
            }
            .home-navbar {
              width: 100%;
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .home-logo {
              width: 179px;
              height: 104px;
              margin-left: 0px;
            }
            .home-burger-menu {
              margin-right: 0px;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-nav1 {
              height: 725px;
            }
            .home-container11 {
              height: auto;
              align-self: flex-start;
              margin-bottom: 0px;
              justify-content: space-between;
            }
            .home-image10 {
              width: var(--dl-size-size-medium);
              height: var(--dl-size-size-medium);
              display: flex;
              align-self: center;
              margin-left: 0px;
              padding-left: 0px;
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .home-menu-close {
              align-items: center;
              justify-content: flex-end;
            }
            .home-icon12 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              display: flex;
              justify-content: flex-end;
            }
            .home-nav2 {
              width: 100%;
              height: auto;
              align-self: flex-start;
              margin-top: 0px;
              margin-left: 14px;
            }
            .home-link12 {
              font-size: 20px;
              align-self: flex-start;
              font-style: normal;
              text-align: center;
              font-family: Poppins;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-unit);
              text-decoration: none;
            }
            .home-link13 {
              font-size: 20px;
              align-self: flex-start;
              font-style: normal;
              font-family: Poppins;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-unit);
              text-decoration: none;
            }
            .home-link14 {
              font-size: 20px;
              align-self: flex-start;
              font-style: normal;
              font-family: Poppins;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-unit);
              text-decoration: none;
            }
            .home-link15 {
              font-size: 20px;
              align-self: flex-start;
              font-style: normal;
              font-family: Poppins;
              font-weight: 400;
              text-decoration: none;
            }
            .home-book-btn1 {
              align-self: flex-start;
              margin-top: var(--dl-space-space-unit);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .home-main1 {
              height: auto;
              min-height: 760px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: 0px;
            }
            .home-content1 {
              width: 100%;
              height: 100%;
              justify-content: center;
            }
            .home-center {
              height: auto;
              margin: 0px0;
              display: flex;
              max-width: 900px;
              min-width: auto;
              margin-top: 0px;
              align-items: flex-start;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
              flex-direction: column;
              padding-bottom: 0px;
              justify-content: flex-end;
            }
            .home-heading1 {
              height: var(--dl-size-size-small);
              max-width: 900px;
              align-items: stretch;
              flex-direction: column-reverse;
              justify-content: flex-start;
            }
            .home-header2 {
              color: rgb(255, 255, 255);
              width: 100%;
              height: auto;
              display: grid;
              font-size: 40px;
              max-width: 900px;
              align-self: center;
              font-style: normal;
              margin-top: 0px;
              text-align: center;
              font-family: Poppins;
              font-weight: 400;
              line-height: 70px;
              margin-left: 0px;
              place-items: start center;
              margin-right: 0px;
              margin-bottom: 0px;
              padding-bottom: 0px;
            }
            .home-text11 {
              color: var(--dl-color-scheme-white);
              font-size: 20px;
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
              font-family: Poppins;
              font-weight: 500;
              line-height: 1.3;
              margin-bottom: 0px;
            }
            .home-pills1 {
              height: auto;
              display: flex;
              align-self: center;
              margin-top: 120px;
              align-items: stretch;
              margin-left: 0px;
              margin-bottom: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .home-container13 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-you-tube1 {
              width: 120px;
              height: 60px;
              align-items: center;
              border-radius: 100px;
            }
            .home-pasted-image1 {
              width: var(--dl-size-size-xlarge);
              height: auto;
            }
            .home-you-tube2 {
              width: 120px;
              height: 60px;
              align-items: center;
              border-radius: 100px;
            }
            .home-pasted-image2 {
              width: 132px;
              height: 43px;
            }
            .home-container14 {
              height: 230px;
              margin-bottom: var(--dl-space-space-unitandhalf);
            }
            .home-container15 {
              background-color: #48787b;
            }
            .home-text12 {
              text-align: center;
            }
            .home-text13 {
              font-size: 15px;
              text-align: center;
            }
            .home-container16 {
              height: 230px;
              margin-bottom: var(--dl-space-space-unitandhalf);
            }
            .home-text15 {
              font-size: 15px;
            }
            .home-container18 {
              height: 230px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-text17 {
              font-size: 15px;
            }
            .home-max-width1 {
              width: 362px;
              height: auto;
            }
            .home-speakers-container {
              width: 330px;
              height: 2513px;
              place-items: center;
              grid-template-columns: 1fr;
            }
            .home-text24 {
              align-self: center;
              text-align: center;
            }
            .home-text25 {
              text-align: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-banner-advanced-analytics {
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text26 {
              fill: #1a6466;
              color: #1a6466;
              font-size: 40px;
              text-align: center;
              font-family: Outfit;
            }
            .home-text27 {
              text-align: center;
            }
            .home-banner2 {
              width: 100%;
              height: 1150px;
              padding-top: 0px;
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container21 {
              width: 433px;
              height: 979px;
            }
            .home-left3 {
              width: 268px;
              height: 437px;
            }
            .home-text28 {
              fill: #1a6466;
              color: #1a6466;
              width: 331px;
              height: 118px;
              align-self: center;
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text29 {
              color: rgb(0, 0, 0);
              width: auto;
              font-size: 20px;
              align-self: center;
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              font-family: Poppins;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-image-container9 {
              width: 365px;
              height: 359px;
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-pasted-image3 {
              width: auto;
              height: 319px;
              position: static;
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-book-btn2 {
              right: -3px;
              width: 100%;
              bottom: -69px;
              height: auto;
              margin: 0px;
              position: static;
              align-self: center;
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              margin-right: 0px;
              margin-bottom: 0px;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text31 {
              text-align: center;
            }
            .home-number1 {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-numbers-card6 {
              border-color: rgba(0, 0, 0, 0.18);
              border-width: 1px;
              border-top-width: 0px;
              border-left-width: 0px;
              border-bottom-width: 0px;
            }
            .home-main2 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-text38 {
              fill: #1a6466;
              color: rgb(26, 100, 102);
              font-size: 40px;
              align-self: center;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              text-align: center;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-container23 {
              width: 300px;
            }
            .home-text39 {
              text-align: center;
            }
            .home-container25 {
              width: 300px;
            }
            .home-image18 {
              width: 100%;
            }
            .home-text40 {
              text-align: center;
            }
            .home-container27 {
              width: 300px;
            }
            .home-text41 {
              text-align: center;
            }
            .home-text42 {
              color: rgb(26, 100, 102);
              font-size: 40px;
              font-style: normal;
              text-align: center;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-blog-cards-container {
              height: auto;
            }
            .home-blog-card1 {
              max-width: 350px;
            }
            .home-text44 {
              text-align: center;
            }
            .home-text45 {
              text-align: center;
            }
            .home-blog-card2 {
              max-width: 350px;
            }
            .home-text46 {
              text-align: center;
            }
            .home-blog-card3 {
              width: 100%;
              max-width: 350px;
            }
            .home-text48 {
              text-align: center;
            }
            .home-sponsors {
              width: 450px;
              height: 672px;
              padding: 0px;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-brands {
              width: 409px;
              height: 592px;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-brand1 {
              width: 216px;
              height: 179px;
            }
            .home-image23 {
              width: 133px;
              height: 134px;
            }
            .home-brand2 {
              width: 193px;
              height: 125px;
            }
            .home-image24 {
              width: 150px;
              height: auto;
            }
            .home-brand3 {
              width: 216px;
              height: 121px;
            }
            .home-image25 {
              width: 150px;
              height: 106px;
            }
            .home-brand4 {
              width: 216px;
            }
            .home-image26 {
              width: 140px;
              height: 106px;
            }
            .home-brand5 {
              width: 216px;
              height: 180px;
              border-top-width: 1px;
            }
            .home-image27 {
              width: 140px;
              height: 106px;
            }
            .home-brand6 {
              width: 216px;
              height: 176px;
            }
            .home-image28 {
              width: 95px;
            }
            .home-brand7 {
              width: 216px;
            }
            .home-image29 {
              width: 140px;
              height: 106px;
            }
            .home-brand8 {
              width: 216px;
            }
            .home-image30 {
              width: 140px;
              height: 106px;
            }
            .home-heading-container2 {
              align-items: center;
            }
            .home-text50 {
              text-align: center;
            }
            .home-text51 {
              text-align: center;
            }
            .home-text52 {
              text-align: center;
            }
            .home-text53 {
              text-align: center;
            }
            .home-previous-events1 {
              height: 685px;
              display: none;
              padding-bottom: 0px;
            }
            .home-previous-events2 {
              padding-bottom: 0px;
            }
            .home-slide1 {
              border-width: 0px;
            }
            .home-slide2 {
              border-width: 0px;
              background-position: top;
            }
            .home-slide3 {
              background-position: top left;
            }
            .home-slide4 {
              border-width: 0px;
              background-position: top;
            }
            .home-slide5 {
              border-width: 0px;
            }
            .home-slider-controls {
              top: var(--dl-space-space-sevenunits);
              left: 0px;
              right: 0px;
              width: 100%;
              bottom: 10px;
              margin: auto;
              position: absolute;
              align-items: center;
              flex-direction: row;
            }
            .home-faq {
              padding: var(--dl-space-space-fourunits);
            }
            .home-text56 {
              align-self: center;
              text-align: center;
            }
            .home-icon45 {
              fill: #1a6466;
            }
            .home-icon47 {
              fill: #1a6466;
            }
            .home-icon49 {
              fill: #1a6466;
            }
            .home-icon51 {
              fill: #1a6466;
            }
            .home-cta {
              height: auto;
              overflow: visible;
            }
            .home-text69 {
              text-align: center;
            }
            .home-text70 {
              align-self: center;
              text-align: center;
            }
            .home-book-btn3 {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
            }
            .home-content8 {
              align-self: center;
            }
            .home-information {
              align-self: center;
            }
            .home-heading5 {
              max-width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .home-pasted-image4 {
              align-self: center;
            }
            .home-text72 {
              color: #c4c4c4;
              font-size: 20px;
              align-self: center;
              text-align: center;
              line-height: 18px;
            }
            .home-socials {
              align-self: center;
              justify-content: center;
            }
            .home-links2 {
              width: 100%;
              align-self: center;
              flex-direction: column;
            }
            .home-column1 {
              align-self: center;
              place-items: center;
            }
            .home-header8 {
              font-size: 24px;
              align-self: center;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .home-link31 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              align-self: center;
              line-height: 21px;
            }
            .home-link32 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              align-self: center;
              line-height: 21px;
            }
            .home-link33 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              align-self: center;
              line-height: 21px;
            }
            .home-link35 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              line-height: 21px;
            }
            .home-link36 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              line-height: 21px;
            }
            .home-column2 {
              align-self: center;
            }
            .home-header9 {
              font-size: 24px;
              align-self: center;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .home-link37 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              align-self: center;
              font-family: Poppins;
              line-height: 21px;
            }
            .home-link38 {
              color: rgb(196, 196, 196);
              font-size: 20px;
              text-align: center;
              font-family: Poppins;
              line-height: 21px;
            }
            .home-pills2 {
              align-self: center;
              margin-top: var(--dl-space-space-eightunits);
              align-items: stretch;
              margin-left: 0%;
              margin-bottom: var(--dl-space-space-eightunits);
              flex-direction: column;
              justify-content: space-between;
            }
            .home-you-tube3 {
              width: 120px;
              height: 60px;
              align-items: center;
              border-radius: 100px;
            }
            .home-pasted-image5 {
              width: var(--dl-size-size-xlarge);
              height: auto;
            }
            .home-you-tube4 {
              width: 120px;
              height: 60px;
              align-items: center;
              border-radius: 100px;
            }
            .home-pasted-image6 {
              width: var(--dl-size-size-xlarge);
              height: auto;
            }
            .home-text73 {
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

export default Home

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

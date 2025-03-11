import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Kontakt = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="kontakt-container1">
        <Head>
          <title>
            Kontakt - iCharge.app - Stacione dhe pika karikimi për makina
            elektrike.
          </title>
          <meta
            name="description"
            content="iCharge.app: Zgjidhja inovative për makina elektrike. Zbuloni stacionet dhe pikat më të mira të karikimit me nje sherbim superior ne krahasim me Vega Group."
          />
          <meta
            property="og:title"
            content="Kontakt - iCharge.app - Stacione dhe pika karikimi për makina elektrike."
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
        <div className="kontakt-contact">
          <form
            action="https://formsubmit.co/office@icharge.app"
            method="POST"
            enctype="application/x-www-form-urlencoded"
            className="kontakt-form"
          >
            <h1 className="kontakt-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_yQg5He'),
                }}
              ></span>
            </h1>
            <div className="kontakt-container2">
              <div className="kontakt-input1">
                <input
                  type="text"
                  id="contact-form-6-first-name"
                  name="first_name"
                  placeholder="First Name"
                  className="kontakt-text-input1 thq-input"
                />
              </div>
              <div className="kontakt-input2">
                <input
                  type="text"
                  id="contact-form-6-last-name"
                  name="first_name"
                  placeholder="Last Name"
                  className="kontakt-text-input2 thq-input"
                />
              </div>
            </div>
            <div className="kontakt-container3">
              <div className="kontakt-input3">
                <input
                  type="email"
                  id="contact-form-6-email"
                  name="email"
                  required="true"
                  placeholder="Email"
                  className="kontakt-text-input3 thq-input"
                />
              </div>
              <div className="kontakt-input4">
                <input
                  type="tel"
                  id="contact-form-6-phone"
                  name="phone_number"
                  placeholder="Number"
                  className="kontakt-text-input4 thq-input"
                />
              </div>
            </div>
            <textarea
              cols="80"
              name="message"
              rows="4"
              placeholder="Type a message"
              className="kontakt-textarea"
            ></textarea>
            <button type="submit" className="kontakt-button button">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_I5aIse'),
                }}
              ></span>
            </button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .kontakt-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #286263;
          }
          .kontakt-contact {
            display: flex;
            margin-top: var(--dl-space-space-sevenunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sevenunits);
            flex-direction: column;
          }
          .kontakt-form {
            flex: 0 0 auto;
            width: 100%;
            height: 387px;
            display: flex;
            max-width: 700px;
            margin-top: 0px;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: var(--dl-space-space-twoandhalf);
            margin-right: 0px;
            padding-left: var(--dl-space-space-twoandhalf);
            border-radius: var(--dl-radius-radius-inputradius);
            margin-bottom: 0px;
            padding-right: var(--dl-space-space-twoandhalf);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twoandhalf);
            background-color: var(--dl-color-scheme-white);
          }
          .kontakt-text {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 28px;
            align-self: center;
            font-family: 'Poppins';
          }
          .kontakt-container2 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: row;
          }
          .kontakt-input1 {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .kontakt-text-input1 {
            fill: rgba(148, 163, 184, 1);
            color: rgba(148, 163, 184, 1);
            border-color: #addfbc;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-scheme-white);
          }
          .kontakt-input2 {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .kontakt-text-input2 {
            fill: rgba(148, 163, 184, 1);
            color: rgba(148, 163, 184, 1);
            border-color: #addfbc;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-scheme-white);
          }
          .kontakt-container3 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .kontakt-input3 {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .kontakt-text-input3 {
            fill: rgba(148, 163, 184, 1);
            color: rgba(148, 163, 184, 1);
            box-shadow: 0px 2px 0px 0px undefined, 0px 3px 0px 0px #000000;
            border-color: #addfbc;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-scheme-white);
          }
          .kontakt-input4 {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .kontakt-text-input4 {
            fill: rgba(148, 163, 184, 1);
            color: rgba(148, 163, 184, 1);
            border-color: #addfbc;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-scheme-white);
          }
          .kontakt-textarea {
            color: rgba(148, 163, 184, 1);
            width: 100%;
            outline: 0;
            padding: var(--dl-space-space-triplequarter);
            font-size: 0.87rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.25;
            border-color: #addfbc;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            text-decoration: none;
          }
          .kontakt-button {
            color: white;
            cursor: pointer;
            font-size: 18px;
            align-self: center;
            font-style: normal;
            margin-top: 40px;
            text-align: left;
            transition: 0.3s;
            font-family: 'Poppins';
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .kontakt-button:hover {
            fill: var(--dl-color-scheme-white);
            color: var(--dl-color-scheme-white);
            background-color: #286263;
          }
          @media (max-width: 1600px) {
            .kontakt-text-input1 {
              fill: rgba(148, 163, 184, 1);
              color: rgba(148, 163, 184, 1);
            }
            .kontakt-text-input3 {
              fill: rgba(148, 163, 184, 1);
              color: rgba(148, 163, 184, 1);
            }
            .kontakt-text-input4 {
              fill: rgba(148, 163, 184, 1);
              color: rgba(148, 163, 184, 1);
            }
            .kontakt-textarea {
              height: auto;
            }
          }
          @media (max-width: 1200px) {
            .kontakt-contact {
              margin-top: var(--dl-space-space-eightunits);
              margin-bottom: var(--dl-space-space-eightunits);
            }
          }
          @media (max-width: 991px) {
            .kontakt-container2 {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .kontakt-input1 {
              width: 50%;
            }
            .kontakt-input2 {
              width: 50%;
              flex-direction: column;
            }
            .kontakt-container3 {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .kontakt-input3 {
              width: 50%;
            }
            .kontakt-input4 {
              width: 50%;
            }
          }
          @media (max-width: 767px) {
            .kontakt-contact {
              margin-top: var(--dl-space-space-sevenunits);
            }
          }
          @media (max-width: 479px) {
            .kontakt-contact {
              width: 100%;
              height: auto;
              margin-left: 0px;
              margin-right: 0px;
            }
            .kontakt-form {
              height: auto;
              max-width: auto;
            }
            .kontakt-text {
              text-align: left;
            }
            .kontakt-container2 {
              align-items: stretch;
              flex-direction: column;
            }
            .kontakt-input1 {
              width: 100%;
            }
            .kontakt-input2 {
              width: 100%;
            }
            .kontakt-container3 {
              align-items: stretch;
              flex-direction: column;
            }
            .kontakt-input3 {
              width: 100%;
            }
            .kontakt-input4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Kontakt

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

import React from 'react'

import styles from './styles.module.css'

import BackgroundImage from './BackgroundImage'

export default function Intro() {
  return (
    <div className={styles.root}>
      <BackgroundImage />

      <div className={styles.border}>
        <h1 className={styles.title}>The Fire Within Us</h1>

        <div className={styles.subhead}>
          A collection
          <br />
          of personal reflections on Jewish teachings that inspire and animate
          our lives
        </div>

        <div className={styles.descriptor}>
          How do teachings of the Bible, Talmud and other Jewish works come to
          life? In the lives of people who learn and live Torah. In this book,
          contemporary teachers from across the Jewish spectrum share words of
          tradition that inform and inspire their lives.
        </div>

        <div className={styles.editors}>
          Edited by
          <br />
          Rabbi Ron Muroff
          <br />
          Lara and Ezra Match
        </div>

        <div className={styles.illustrator}>
          with Illustrations by Lara Match
        </div>

        <div className={styles.publisher}>
          A publication of Chisuk Emuna Congregation
        </div>
      </div>
    </div>
  )
}

function BuyBook() {
  return (
    <a
      href="https://www.blurb.com/b/8983561-the-fire-within-us"
      title="Buy The Fire Within Us book"
      className={styles.buy}
    >
      Buy the book
    </a>
  )
}

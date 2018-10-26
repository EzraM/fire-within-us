import React from 'react'

import styles from './styles.module.css'

export default function UponYourHeart() {
  return (
    <div className={styles.root}>
      <div className={styles.line}>
        "These words, which I command you this day,
      </div>
      <div className={styles.line}>
        shall be <em>upon</em> your heart."
      </div>
      <div className={styles.source}>(Deuteronomy 6:6)</div>

      <div className={styles.teaching}>
        The Rebbe of Kotzk said that the words are placed <em>upon</em> the
        heart so that, at the right time, a time when the heart is open, they
        will be able to enter.
      </div>
    </div>
  )
}

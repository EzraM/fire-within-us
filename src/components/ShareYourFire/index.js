import React from 'react'

import styles from './styles.module.css'

const airtableEmbed = `<script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrdWzW0h4UANKoNh?backgroundColor=orange" frameborder="0" onmousewheel="" width="100%" height="1598" style="background: transparent; border: 1px solid #ccc;"></iframe>`

export default function ShareYourFire() {
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <h2>Share the Fire Within You</h2>

        <div className={styles.prompt}>
          <p>
            In gratitude for sharing 25 years with Chisuk Emuna Congregation and
            the Greater Harrisburg Community, I present you with a gift and a
            challenge.
          </p>

          <p>
            <em>The Fire Within Us</em> is a gift of Torah/wisdom/guidance
            written by some of my teachers/colleagues/family.
          </p>

          <p>
            <em>The Fire Within Us</em> is a challenge and an invitation for all
            of us to discern and manifest our unique sparks.
          </p>

          <p>
            Please send us your contribution so we can continue studying Torah
            together.
          </p>

          <p>Thank you!</p>

          <p>&mdash;Ron Muroff</p>
        </div>

        <div dangerouslySetInnerHTML={{ __html: airtableEmbed }} />
      </div>
    </div>
  )
}

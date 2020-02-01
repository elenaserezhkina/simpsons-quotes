import React from "react";
import styles from "./QuoteCard.module.css";

function QuoteCard(props) {
  return (
    <figure className="QuoteCard" className={styles.QuoteCard}>
      <img
        className={styles.CardImage}
        src={props.image}
        alt={props.character}
      />
      <figcaption>
        <blockquote>{props.quote}</blockquote>
        <cite>{props.character}</cite>
      </figcaption>
    </figure>
  );
}

export default QuoteCard;

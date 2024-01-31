import React from "react";
import ReactHtmlParser from "react-html-parser";
import styles from "./HtmlContentParser.module.scss";

const HtmlContentParser = ({ htmlContent }: { htmlContent: string }) => {
  return (
    <div className={styles.customHtmlStyle}>{ReactHtmlParser(htmlContent)}</div>
  );
};

export default HtmlContentParser;

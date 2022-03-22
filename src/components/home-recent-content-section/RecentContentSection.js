import { useState } from "react";

import classes from "./RecentContentSection.module.css";
import RecentContentHeader from "./RecentContentHeader";
import RecentContentGrid from "./RecentContentGrid";

const RecentContentSection = () => { 
  const [contentType, setContentType] = useState('photo');

  const changeContentTypeHandler = (type) => {
    console.log("changeContentTypeHandler", type);
    setContentType(type);
  }

  return (
    <section className={classes["recent-section"]}>
      <div className={classes.container}>
        <RecentContentHeader onChangeContentType={changeContentTypeHandler} />
      </div>
      <RecentContentGrid contentType={contentType}/>
    </section>
  );
};

export default RecentContentSection;

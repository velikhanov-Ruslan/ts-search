import React from 'react';

import classes from "./index.module.scss"
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.title}>GitHub search</div>
      <span className={classes.links}>
        <Link to={`/`}>Home</Link>
        <Link to={`favorites`}>Favorites</Link>
      </span>
    </div>
  );
};

export default Navigation;

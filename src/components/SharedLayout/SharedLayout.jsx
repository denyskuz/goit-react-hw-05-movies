import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import classes from "./SharedLayout.module.css";

 const SharedLayout = () => {
  return (
      <div className={classes.container}>
        <header className={classes.header}>
              <nav className={classes.nav}>
                <NavLink
                    to="/"
                    className={classes.link}
                >Home</NavLink>
                <NavLink
                    to="/movies"
                    className={classes.link}
                >Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
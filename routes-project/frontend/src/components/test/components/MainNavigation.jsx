import { NavLink } from "react-router-dom";

import classes from "./main-navigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Events Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              New Event Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/e1"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Event Detail Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/e1/edit"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              EditEvent Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import React, { Fragment } from 'react';
import { SidebarNav, Brand, TextContainer } from './Sidebar.styles';
import { auth } from './../../firebase/firebase.utils';
import SidebarLink from './sidebar-link/sidebarLink';
import { connect } from 'react-redux';

const Sidebar = ({ menuHidden, setMenuHidden, currentUser }) => {
  return (
    <SidebarNav menuHidden={menuHidden}>
      <Brand>
        <span className="gold">MOVIE</span> HUB
      </Brand>

      <TextContainer>
        <ul>
          {currentUser ? (
            <Fragment>
              <SidebarLink
                setMenuHidden={setMenuHidden}
                category="favorites"
                pathname="/movies/favorites"
                text="My Favorites"
              />
              <SidebarLink
                setMenuHidden={setMenuHidden}
                category="reviews"
                pathname="/movies/reviews"
                text="Reviews"
              />
              <li onClick={() => auth.signOut()}>Sign Out</li>
            </Fragment>
          ) : (
            <Fragment>
              <SidebarLink
                setMenuHidden={setMenuHidden}
                category="signin"
                pathname="/signin"
                text="Log in"
              />
              <SidebarLink
                setMenuHidden={setMenuHidden}
                category="signup"
                pathname="/signup"
                text="Sign up"
              />
            </Fragment>
          )}
          <p className="gold">Movies</p>
          <SidebarLink
            setMenuHidden={setMenuHidden}
            category="popular"
            pathname="/movies/popular/1"
            text="Popular"
          />
          <SidebarLink
            setMenuHidden={setMenuHidden}
            category="now_playing"
            pathname="/movies/now_playing/1"
            text="Now Playing"
          />
          <SidebarLink
            setMenuHidden={setMenuHidden}
            category="upcoming"
            pathname="/movies/upcoming/1"
            text="Upcoming"
          />
          <SidebarLink
            setMenuHidden={setMenuHidden}
            category="top_rated"
            pathname="/movies/top_rated/1"
            text="Top Rated"
          />
          <SidebarLink
            setMenuHidden={setMenuHidden}
            category="search"
            pathname="/movies/search"
            text="Search"
          />
        </ul>
      </TextContainer>
    </SidebarNav>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Sidebar);

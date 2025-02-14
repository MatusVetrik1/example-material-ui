import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import NavBar from './NavBar'
import TopBar from './TopBar'
// import * as  netlifyIdentity from "netlify-identity-widget"

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  // netlifyIdentity.init();

  return (
    <div className={classes.root}>
      {/* // @ts/ignore */}
      {/* <TopBar className="" onMobileNavOpen={() => setMobileNavOpen(true)} netlifyIdentity={netlifyIdentity} /> */}
      <TopBar className="" onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

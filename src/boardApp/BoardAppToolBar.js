import React from 'react';
import { 
  AppBar, 
  Button,
  Typography,
  Toolbar,
  InputBase,
} from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CachedIcon from '@material-ui/icons/Cached';
import SettingsIcon from '@material-ui/icons/Settings';
import SortIcon from '@material-ui/icons/Sort';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    marginRight: '10px',
  },
  search: {
    marginLeft: 'auto !important',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  actionButton: {
    marginLeft: '5px',
    color: '#000',
    backgroundColor: '#EEEEEE',
  },
  actionButton__isActive: {
    marginLeft: '5px',
    color: '#fff',
    backgroundColor: '#4CAF50',
  },
  page_indicator: {
    marginLeft: '10px',
    marginRight: '5px',
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#FFF">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Tickets
          </Typography>
          <Button variant="contained" className={classes.actionButton__isActive}>
            All
          </Button>
          <Button variant="contained" className={classes.actionButton}>
            ONLY MY TICKETS
          </Button>
          <Button variant="contained" className={classes.actionButton}>
            RECENTLY UPDATED
          </Button>
          <Button variant="contained" className={classes.actionButton}>
           <SortIcon />
          </Button>
          <Button variant="contained" className={classes.actionButton}>
           <CachedIcon />
          </Button>
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button variant="contained" className={classes.actionButton}>
            <SettingsIcon /> Configuration
          </Button>
          <Typography className={classes.page_indicator}>
            (0 - 30)
          </Typography>
          <Button variant="contained" className={classes.actionButton}>
           <ArrowBackIosIcon />
          </Button>
          <Button variant="contained" className={classes.actionButton}>
           <ArrowForwardIosIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
 	



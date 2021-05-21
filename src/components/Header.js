import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {IconButton, Typography} from "@material-ui/core";
import {InputBase} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

// We are setting the styles using useStyles
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    menuButton:{
        marginRight: theme.spacing(2),
    },
    title:{
        flexGrow: 1,
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display: "block",
        },
    },
    search:{
        position:'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover':{
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft:0,
        width: '100%',
        [theme.breakpoints.up('sm')]:{
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0,2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1,1,1,0),
    //    Vertical Padding + Font size from SearchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]:{
            width: '20ch',
            '&:focus':{
                width: '25ch',
            }
        }
    }
}));

function Header() {
    // Calling useStyles and assign it to classes to access the styling
    const classes = useStyles();

    // Writing the actual Navbar code
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        My Anime List
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="search" classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                               inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
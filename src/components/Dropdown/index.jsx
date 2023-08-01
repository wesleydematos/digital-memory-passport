import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { getDoc, doc, updateDoc } from "firebase/firestore";
import db from '../../database/firebase.config'
import { BsPersonLinesFill, BsWallet2 } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import {BiCubeAlt} from "react-icons/bi"
import { saveAs } from 'file-saver';
import CircularProgress from '@material-ui/core/CircularProgress';
import SocialsMemorie from "../SocialsMemorie";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
  
function ProfileDropdown({user,email}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [minted, setMinted] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleCloseDialog = React.useCallback(() => setOpen(false), []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNfts = async () => {
        setOpen(true)
        setAnchorEl(null);
        setLoading(true);
        const docSnap = await getDoc(doc(db, "wallets", email))
        if(docSnap.exists()){
            setMinted(docSnap.data().minted)
        }
        setLoading(false);
    };

    const handleWallet = async () => {
        const docSnap = await getDoc(doc(db, "wallets", email))
        let address = ""
        let privateKey = ""
        if(docSnap.exists()){
            address = docSnap.data().address
            privateKey = atob(docSnap.data().privateKey);
        }else{
            alert("You haven't made any mints yet.")
            return
        }

        const content = 'Address Wallet = '+address+'\nPrivate Key Wallet = '+privateKey;
        const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
        saveAs(file, 'Information Wallet.txt');
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        setAnchorEl(null);
        location.reload();
    };

    const options = {
        position: 'bottom center',
        timeout: 5000,
        offset: '30px',
        transition: 'scale'
    }

    return (
        <>
            <Button
                color="inherit"
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={handleClick}
                startIcon={<BsPersonLinesFill size={50} color="white"/>}
            >
                <p style={{paddingRight:'10px',color:'white',fontSize:'1.3rem',fontWeight:'900'}}>{user.toUpperCase()}</p>
            </Button>
            <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleNfts}><BiCubeAlt style={{paddingRight:'10px'}} size={30}/>VIEW NFT's</MenuItem>
                <MenuItem onClick={handleWallet}><BsWallet2 style={{paddingRight:'10px'}} size={30}/>GET WALLET</MenuItem>
                <MenuItem onClick={handleLogout}><MdLogout style={{paddingRight:'10px'}} size={30}/>LOGOUT</MenuItem>
            </Menu>
            <AlertProvider template={AlertTemplate} {...options}>
            <Dialog open={open} onClose={handleCloseDialog}>
                    <DialogTitle style={{backgroundColor:'#FFD9A0'}}><span style={{ fontWeight:'bold', fontFamily:'Barrio', color:'white', fontSize:'25px'}}>Your Nfts</span></DialogTitle>
                    <DialogContent style={{backgroundColor:'#FFD9A0'}}>
                        {loading ? 
                            <CircularProgress/>
                                :
                            <div>
                                {
                                    minted.length == 0 ?
                                    <span style={{ fontWeight:'bold', fontFamily:'Barrio', color:'white', fontSize:'20px'}}>You still don't have nfts.</span>
                                        :
                                    minted?.map((data) => (
                                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
                                            <span style={{ fontWeight:'bold', fontFamily:'Barrio', color:'white', fontSize:'20px'}}>{data.nome}</span>
                                            <img style={{height:'300px',width:'300px',borderRadius:'5%',margin:'20px'}} src={data.image}/>
                                            <div ><SocialsMemorie link={data.image} nome={data.nome}/></div>
                                            <br/><br/>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </DialogContent>
                    <DialogActions style={{backgroundColor:'#FFD9A0'}}>
                        <Button onClick={handleCloseDialog}><span style={{ fontSize:'17px', color:'white'}}>Close</span></Button>
                    </DialogActions>
                </Dialog> 
            </AlertProvider>
        </>
    );
}

export default ProfileDropdown;
  
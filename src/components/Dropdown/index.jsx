import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { BsPersonLinesFill, BsWallet2 } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import {BiCubeAlt} from "react-icons/bi"
import { saveAs } from 'file-saver';
  
function ProfileDropdown({user,email}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

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
        let address = ""
        let privateKey = ""
        if(docSnap.exists()){
            address = docSnap.data().address
            privateKey = atob(docSnap.data().privateKey);
        }

        const content = 'Address Wallet = '+address+'\nPrivate Key Wallet = '+privateKey;
        const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
        saveAs(file, 'Information Wallet.txt');
        setAnchorEl(null);
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

    return (
        <div>
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
        <Dialog open={open} onClose={handleCloseDialog}>
            <DialogTitle><span style={{ fontWeight:'bold', fontFamily:'Barrio'}}>Your Nfts</span></DialogTitle>
            <DialogContent>
                
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialog}><span style={{ fontSize:'12px'}}>Close</span></Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default ProfileDropdown;
  
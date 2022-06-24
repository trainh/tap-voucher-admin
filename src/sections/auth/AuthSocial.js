import { authentica } from 'src/fire/fireBaseConfi';
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
// material
import { Stack, Button, Divider, Typography } from '@mui/material';
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

export default function AuthSocial() {

  const signInWithGoogle = ()=> {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentica, provider)
    .then((re)=>{
      console.log(re);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button onClick={signInWithGoogle} fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}

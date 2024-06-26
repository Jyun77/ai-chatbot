import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div style={{display: 'flex',marginRight: "auto", alignItems: 'center', gap: '15px'}}>
        <Link to='/'>
            <img src="/openai.png" alt="open ai" style={{width: '32px', height: '32px'}} className= "image-inverted"/>
            
        </Link>
        <Typography sx={{display: {md:"block", sm: 'none', xs: 'none'}, mr:"auto", fontWeight:"800", textShadow:"2px 2px 20px #000"}}>
                <span style={{fontSize:"20px"}}>Sus</span>- GPT
            </Typography>
    </div>
  )
};

export default Logo;
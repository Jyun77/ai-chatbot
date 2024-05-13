import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { CustomizedInput } from "../components/shared/CustomizedInput";
import { IoLogIn } from "react-icons/io5";
import {toast} from 'react-hot-toast'
import { useAuth } from "../context/AuthContext";


const Login = () => {
    const auth= useAuth();
    const handleisSubmit = async (e:React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const formData= new FormData(e.currentTarget);
        const email= formData.get('email') as string;
        const password= formData.get('password') as string;
        try{
            toast.loading('Logging in...', {id:'login'});
            await auth?.login(email, password);
            toast.success('Signed in successfully', {id:'login'});
        }
        catch(err){
            console.log(err);
            toast.error('Something went wrong', {id:'login'});
        }
    };
  return (
    <div>
      <Box
        sx={{ display: "flex", flex: "1", height: "100vh" }}
        width="100%"
        height="100%"
      >
        <Box
          padding={8}
          mt={8}
          display={{ md: "flex", sm: "none", xs: "none" }}
        >
          <img src="airobot.png" alt="Robot" style={{ width: "400px" }} />
        </Box>
        <Box
          display={"flex"}
          flex={{ xs: 1, md: 0.5 }}
          justifyContent={"center"}
          alignItems={"center"}
          padding={2}
          ml={"auto"}
          mt={16}
        >
          <form
            onSubmit={handleisSubmit}
            style={{
              margin: "auto",
              padding: "30px",
              boxShadow: "10px 10px 20px #000",
              borderRadius: "10px",
              border: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                textAlign={"center"}
                padding={2}
                fontWeight={600}
              >
                Login
              </Typography>
              <CustomizedInput name="email" type="email" label="Email" />
              <CustomizedInput name="password" type="password" label="Password" />
              <Button type="submit" sx={{px:2, py:1, mt:2, width: "400px", borderRadius:2, bgcolor:"#00fffc", ":hover": {bgcolor: "white", color:"black"}}} endIcon={<IoLogIn/>}>Login
                
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Login;

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function NotFound(){
    return (
        <Box sx={{ margin: 10 }}>
            <Alert severity="error">
                <AlertTitle>Not Found</AlertTitle>
                Pls check with admin
            </Alert>
        </Box>
        
    )
}

export default NotFound

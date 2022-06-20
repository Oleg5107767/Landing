import AppHeader from '../appHeader/AppHeader';

import UsersList from '../userList/UserList';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    typography: {
      fontFamily: "Nunito",
      fontStyle: 'Regular 400',
    },
  });
  
const LayOut = () => {

    return(
        <>
            <MuiThemeProvider theme={theme}>
                <AppHeader/>
                <UsersList/>
            </MuiThemeProvider>
        </>
    )
}

export default LayOut;
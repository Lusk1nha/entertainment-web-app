import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContextProvider';
import { Home } from './pages/Home/Home';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignUpPage } from './pages/LoginPage/SignUpPage';

import './styles/app.scss';

export default function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <AuthContextProvider >
               <Routes>
                  <Route path="/" element={<Home />}>

                  </Route>
                  <Route path="login" element={<LoginPage />} />
                  <Route path="signUp" element={<SignUpPage />} />

                  <Route path="*" />
               </Routes>
            </AuthContextProvider>
         </BrowserRouter>
      </div>
   );
}

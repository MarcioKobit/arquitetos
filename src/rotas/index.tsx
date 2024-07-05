import React from 'react';


import { userAuth } from '../AuthProvider/userAuth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Router: React.FC = () => {
    const auth = userAuth();

    return auth.id ? <AppRoutes /> : <AuthRoutes />;

}

export default Router;
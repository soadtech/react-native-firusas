import Signin from '../screens/Signin';
import Signup from '../screens/SignUp';
import Onboarding from '../screens/Onboarding';
import Home from '../screens/Home';

export default [
  {
    path: 'onboarding',
    component: Onboarding,
  },
  {
    path: 'signin',
    component: Signin,
  },
  {
    path: 'signup',
    component: Signup,
  },
  {
    path: 'home',
    component: Home,
  },
];

import HelloWorld from  './components/HelloWorld.vue'
import SignUp from './components/Sign-up.vue'
import LoginPage from './components/login.vue'
import ErrorPage from './components/Error.vue'
import ProfilePage from './components/Profile.vue'
import MyGround from './components/MyGround.vue'
import ChangeProfileDetails from './components/ChangeProfile.vue'
import ThankYou from './components/Thankyou.vue'
import { createRouter,createWebHistory } from 'vue-router'

 // const user = localStorage.getItem('User-Data')
// console.log("Routes",user);
const routes = [
    { 
        name :"Home",
         component : HelloWorld,
         meta : {
            isAuth : true
         },
        path : '/home'
    },
    {
        name :"Sign-Up",
        component : SignUp,
        path : '/sign-up',
        meta : {
            isAuth : false
         },
    },
    {
        name: "Login",
        component:LoginPage,
        path : '/',
        meta : {
            isAuth : false
         }
    },
    {
        name : "Profile",
        component : ProfilePage,
        path : '/profile',
        meta : {
            isAuth : true
        }
    },
    {
        name : "Change Profile Details",
        component : ChangeProfileDetails,
        path : '/changeProfileDetails/:id',
        meta : {
            isAuth : true
        }
    },
    {
        name : "MyGround",
        component : MyGround,
        path : '/myground',
        meta : {
            isAuth : true
        }
    },
     {
        name : "Thankyou Page",
        component : ThankYou,
        meta : {
            isAuth : true
        },
        path : '/thankyou'
     },
    {
        name : "Error",
        path: '/:pathMatch(.*)*',
        component : ErrorPage
    }
   
]
const isLoggedIn =()=>
{
    const token = localStorage.getItem('User-Data');
    if(token)
    return true;
    else
    return false
}
 const router = createRouter({

    history:createWebHistory(),
    routes
 })
 
 router.beforeEach((to,from,next)=>{
   
    if(to.meta.isAuth){
        console.log("Routes",to,from)
        console.log("Token",isLoggedIn())
       if(isLoggedIn())
       {
         next();
       }
       else
       next('/')
    }
    else
    {
        console.log("Auth",to.meta.isAuth)
        next()
    }
 }
 )
 export default router

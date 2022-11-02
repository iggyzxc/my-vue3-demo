import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCVnZbCmACfXDCsZp7a-L8_PW7ZILAO9sg",
    authDomain: "my-vue3-demo.firebaseapp.com",
    projectId: "my-vue3-demo",
    storageBucket: "my-vue3-demo.appspot.com",
    messagingSenderId: "972634674304",
    appId: "1:972634674304:web:73063a9b774d1cbcf4c265"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
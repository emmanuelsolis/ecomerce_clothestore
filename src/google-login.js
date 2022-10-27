import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from "./firebase/firebase.utils";
const googleButton = document.querySelector(`#google-login`)


googleButton.addEventListener(`click`, async() => {

    const provider = new GoogleAuthProvider();

    try {

    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials)
    } catch (error) {
        console.log(error)
    }
})
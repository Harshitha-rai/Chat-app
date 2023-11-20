import { useState, React} from 'react';
import Add from '../image/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
    const [error, setError] = useState(false);
    const  handleSubmit = async(e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

           
            uploadTask.on(
                (error) => {
                    setError(true);
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                        await updateProfile(res.user,{
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });
                    });
                }
                );


        } catch (error) {
            setError(true);
        }  
    }
  return (
    <div>
        <div className="form-container">
            <div className="form-wrapper">
                <span className='reg-logo'>ChitChat</span>
                <span className='reg-title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Username' required/>
                    <input type='email' placeholder='Email address' required/>
                    <input type='Password' placeholder='Password' required/>
                    <input style={{display:'none'}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt='avatar'/>
                        <span>Add an profile picture</span>
                    </label>
                    <button className='wrapper-btn'>Sign up</button>
                    {error && <span>Something went wrong</span>}
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>

    </div>
  )
}

export default Register
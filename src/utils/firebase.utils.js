// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  GoogleAuthProvider,
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteField,
  doc,
  getDoc,
  getFirestore, 
  onSnapshot, 
  setDoc, 
  updateDoc
} from 'firebase/firestore'
import { store } from "../store/store";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEsiB8MhK4CJf0s-_o8hNFwX3aP_W87Ic",
  authDomain: "freechat-5f726.firebaseapp.com",
  projectId: "freechat-5f726",
  storageBucket: "freechat-5f726.appspot.com",
  messagingSenderId: "920398831811",
  appId: "1:920398831811:web:af47b4dad9b21275d08276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore()

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const signUpUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return
  return await createUserWithEmailAndPassword( auth, email, password )
}

export const signInUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return
  return await signInWithEmailAndPassword( auth, email, password )
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      user => {
        unsubscribe()
        resolve(user)
      },
      reject
    )
  })
}

export const signOutUserSession = async () => await signOut(auth) 

export const checkDocExist = async (docKey, collectionKey) => {
  let doesExist = false
  const docRef = doc(db, collectionKey, docKey)
  const snapshot = await getDoc(docRef)
  if(snapshot.exists())
    doesExist = true

  return doesExist
}

export const getDocument = async (docKey, collectionKey) => {
  let data = {}
  const docRef = doc(db, collectionKey, docKey)
  await getDoc(docRef).then(doc => {
    data = doc.data()
  })
  console.log(`${docKey} doc retrieved`) //temp
  return data
}

export const createDoc = async (docKey, collectionKey, objectData) => {
  const docRef = doc(db, collectionKey, docKey)
  await setDoc(
    docRef,
    objectData
  )

  console.log(`${docKey} doc created at ${collectionKey}`) //temp
  const snapshot = await getDoc(docRef)
  return snapshot
}

export const createDocWithoutDocKey = async (collectionKey, objectData) => {
  console.log('DOC WITHOUT KEY: ', collectionKey, objectData)
  const b = await addDoc(collection(db, collectionKey), objectData).then(doc => doc.id)
  console.log('DOC WITHOUT KEY: ', b)
  return b
}

export const updateField = async (docKey, collectionKey, fieldKey, fieldValue) => {
  const docRef = doc(db, collectionKey, docKey)
  await updateDoc(docRef, {
    [fieldKey]: fieldValue
  })
  console.log(`${fieldKey} updated`) //temp
}

export const updateArrayElements = async (docKey, collectionKey, fieldKey, fieldValue) => {
  const docRef = doc(db, collectionKey, docKey)
  await updateDoc(docRef, {
    [fieldKey] : arrayUnion(fieldValue)
  })
  console.log(`${fieldKey} array updated`) //temp
}

export const removeArrayElements = async (docKey, collectionKey, fieldKey, fieldValue) => {
  const docRef = doc(db, collectionKey, docKey)
  await updateDoc(docRef, {
    [fieldKey]: arrayRemove(fieldValue)
  })
  console.log(`${fieldKey} array removed element ${fieldValue}`) //temp
}

export const removeField = async (docKey, collectionKey, fieldKey) => {
  const docRef = doc(db, collectionKey, docKey)
  await updateDoc(docRef, {
    [fieldKey]: deleteField()
  })
  console.log(`${fieldKey} removed`) //temp
}

let listeners = {}

export const addDynamicListener = async (docKey, collectionKey, actionFunction) => {
  const docRef = doc(db, collectionKey, docKey)

  listeners[`${collectionKey}-${docKey}`] = onSnapshot( docRef, snapshot => {
    store.dispatch(actionFunction(snapshot.data()))
  })
  console.log(`Listener to ${collectionKey} - ${docKey} added`) //temp
}

export const removeDynamicListener = (docKey, collectionKey) => {
  const listenerKey = `${collectionKey}-${docKey}`
  const listener = listeners[listenerKey]
  if(listener) {
    listener()
    delete listeners[listenerKey]
    console.log('listener deleted') //temp
  }
}

export const removeAllDynamicListeners = () => {
  Object.keys(listeners).forEach((key) => {
    const listener = listeners[key]
    listener()
  })
  console.log('Turn off all listeners successful') //temp
}
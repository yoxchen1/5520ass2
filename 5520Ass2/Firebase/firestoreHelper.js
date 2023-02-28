import { collection, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function writeToDB(dataToWrite) {
    try {
        await addDoc(collection(db, "entries"), dataToWrite);
    } catch (err) {
        console.log(err);
    }
}

async function deleteFromDBById(id) {
    try {
        await deleteDoc(doc(db, "entries", id));
    } catch (err) {
        console.log(err);
    }
}

async function updateToDBById(id) {
    try {
        await updateDoc(doc(db, "entries", id), {
            over: false
        })
    } catch (err) {
        console.log(err);
    }
}

export { writeToDB, deleteFromDBById, updateToDBById }
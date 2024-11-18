import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const userItemsRef = collection(db, `users/${userId}/items`);
    const querySnapshot = await getDocs(userItemsRef);
    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });
    return items;
}

export async function addItem(userId, item) {
    const userItemsRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(userItemsRef, item);
    return docRef.id;
}

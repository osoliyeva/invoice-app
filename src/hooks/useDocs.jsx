import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";

export default function useDocs() {
  const navigate = useNavigate();
  async function firebaseGetDocs() {
    const docs = [];
    const querySnapshot = await getDocs(collection(db, "invoices"));
    querySnapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });
    return docs;
  }

  async function firebaseGetDocByCode(code) {
    const docRef = doc(db, "invoices", code);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      navigate("/");
    }
  }

  async function firebaseAddDoc(data) {
    await addDoc(collection(db, "invoices"), data);
  }

  async function firebaseDeleteDoc(id) {
    await deleteDoc(doc(db, "invoices", id));
  }

  async function firebaseMarkAsPaidDoc(id) {
    const docSnap = doc(db, "invoices", id);
    await updateDoc(docSnap, { status: "paid" });
  }

  async function firebaseUpdateDoc(id, data) {
    const docSnap = doc(db, "invoices", id);
    await updateDoc(docSnap, data);
  }

  return {
    firebaseGetDocs,
    firebaseGetDocByCode,
    firebaseAddDoc,
    firebaseDeleteDoc,
    firebaseMarkAsPaidDoc,
    firebaseUpdateDoc,
  };
}

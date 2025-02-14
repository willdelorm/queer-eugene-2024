import { initializeApp } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { nanoid } from "nanoid";

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo-9Oocuk7JO7pSu6cXopNADFkVDzOtM0",
  authDomain: "qe-website-c271e.firebaseapp.com",
  projectId: "qe-website-c271e",
  storageBucket: "qe-website-c271e.appspot.com",
  messagingSenderId: "107903849929",
  appId: "1:107903849929:web:9807288710aee2fbfdc418",
  measurementId: "G-R8P2739LVL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const createResourceDocument = async (collectionKey, resourceToAdd) => {
  if (!collectionKey || !resourceToAdd) return;

  if (resourceToAdd.id === "") {
    resourceToAdd.id = nanoid();
  }

  try {
    await setDoc(doc(db, collectionKey, resourceToAdd.id), resourceToAdd);
  } catch (err) {
    return {
      message: `Error adding document: ${err}`,
    };
  }
};

export const getDocumentFromCollection = async (collection, docId) => {
  const docRef = doc(db, collection, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return undefined;
  }
};

export const getAllDocumentsFromCollection = async (collectionId) => {
  const querySnapshot = await getDocs(collection(db, collectionId));
  const resourceArray = [];
  querySnapshot.forEach((doc) =>
    resourceArray.push({ id: doc.id, ...doc.data() })
  );
  return resourceArray;
};

export const deleteDocumentFromCollection = async (collection, docId) => {
  try {
    await deleteDoc(doc(db, collection, docId));
    return { status: 204 };
  } catch (err) {
    console.log(err);
    return { status: 500 };
  }
};

export const getResourceTypes = async (type) => {
  const q = query(
    collection(db, "categories"),
    where("type", "==", type),
  );

  const querySnapshot = await getDocs(q);
  const types = [];
  querySnapshot.forEach((doc) => types.push({ id: doc.id, ...doc.data() }));

  return types;
};

export const getResourceTags = async () => {
  const q = query(collection(db, "categories"), where("type", "==", "tag"));

  const querySnapshot = await getDocs(q);
  const tags = [];
  querySnapshot.forEach((doc) => tags.push({ id: doc.id, ...doc.data() }));

  return tags;
};

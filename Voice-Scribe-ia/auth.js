const firebaseConfig = {
  apiKey: "AIzaSyB0dJnP2J7D4rakmEDWSeCXHxU8HSaXefM",
  authDomain: "gen-lang-client-0682285993.firebaseapp.com",
  projectId: "gen-lang-client-0682285993",
  storageBucket: "gen-lang-client-0682285993.firebasestorage.app",
  messagingSenderId: "836490666976",
  appId: "1:836490666976:web:12c6f765e1a1eedd39c185"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Persistencia entre pestañas y la extensión
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('email');
  provider.addScope('profile');
  try {
    const result = await auth.signInWithPopup(provider);
    await createOrUpdateUser(result.user);
    return result.user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
}

async function createOrUpdateUser(user) {
  const userRef = db.collection('users').doc(user.uid);
  await userRef.set({
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
    plan: 'free'
  }, { merge: true });

  // Crear preferencias por defecto si no existen
  const prefsRef = userRef.collection('preferences').doc('settings');
  const prefsSnap = await prefsRef.get();
  if (!prefsSnap.exists) {
    await prefsRef.set({
      language: 'en',
      theme: 'light',
      summaryStyle: 'bullets',
      summaryLanguage: 'en',
      sidebarEnabled: true
    });
  }
}

async function signOutUser() {
  await auth.signOut();
}

function getCurrentUser() {
  return auth.currentUser;
}

// Exportar al scope global para que script.js pueda usarlo
window.VoiceScribeAuth = {
  signInWithGoogle,
  signOutUser,
  getCurrentUser,
  onAuthStateChanged: (callback) => auth.onAuthStateChanged(callback)
};

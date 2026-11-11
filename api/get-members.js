import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",
    authDomain: "deptmoney-6682a.firebaseapp.com",
    projectId: "deptmoney-6682a",
    storageBucket: "deptmoney-6682a.firebasestorage.app",
    messagingSenderId: "6714403201",
    appId: "1:6714403201:web:a98a2cefcebef5c63b6080"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        const snap = await getDocs(collection(db, 'members'));
        const members = snap.docs
            .map(d => {
                const data = d.data();
                return data.name ? data.name.trim() : null;
            })
            .filter(Boolean)
            .sort((a, b) => a.localeCompare(b, 'th'));

        return res.status(200).json({
            success: true,
            count: members.length,
            members: members
        });
    } catch (err) {
        console.error('Error fetching members:', err);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch members: ' + err.message
        });
    }
}

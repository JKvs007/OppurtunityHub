// Firebase Configuration
const firebaseConfig = {
  projectId: "opportunity-hub-jk",
  appId: "1:1040514138471:web:bcb492a0ce8f2e71a8efc2",
  storageBucket: "opportunity-hub-jk.firebasestorage.app",
  apiKey: "AIzaSyAtBp_y4feyvwThE2_ydfp7vVAaSBykw88",
  authDomain: "opportunity-hub-jk.firebaseapp.com",
  messagingSenderId: "1040514138471",
  projectNumber: "1040514138471"
};

// Initialize Firebase
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = typeof firebase !== 'undefined' ? firebase.auth() : null;
const db = typeof firebase !== 'undefined' ? firebase.firestore() : null;

// Fallback Default Opportunities
const DEFAULT_OPPORTUNITIES = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "UST",
    category: "engineering",
    mode: "remote",
    comp: "paid",
    location: "remote",
    salary: "₹12L - ₹15L/yr",
    closes: "Closes in 5 days",
    posted: "Posted 2h ago",
    description: "We are looking for an experienced frontend engineer to lead the development of our next-generation analytics dashboard using React and Tailwind CSS.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTURm5-BAHhzUMp6j1FViotUolW2QXvoNsaxTr5wvVAVqnu5dh0f0l6UEdKcAw2Nfm5BG9IeEdU9z7KwJZ7WPIjmbWWsyLazMwWHStmBTXyC3yms4vTm0YDDtqmiOmQCW1Nmzb55t2FRGfpQiqjwni7QUMJ50L8JmXom1lHiuRCbfUryTgrORVN4-zEnjkpS6TtF6OK_LYZ5Im7kUpvW_mGs1FdILKX6F2SmKvMwqlwjxu8SjEir3pEL6gN2w8jHadRoelhiWuuo8"
  },
  {
    id: "2",
    title: "UX/UI Product Designer",
    company: "IBS Software",
    category: "design",
    mode: "hybrid",
    comp: "paid",
    location: "kochi",
    locationText: "Kochi, Kerala",
    salary: "₹9L - ₹11L/yr",
    closes: "",
    posted: "Posted 1d ago",
    description: "Join our core product team in Kochi. You'll be designing intuitive interfaces for complex enterprise software, working closely with engineering and product management.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj_mAnpMREnEsQSTHSETT5LTA2w-V8QuU_0fvWn2Wu7nTFxWIbXZiPI19DRf7CJLiKmFJNP0Ir7O_BFLs6fzzqRQMgzC1oaaRO632QtnxgLAyXCYCLyZtH3aCrNFV4rYlnbSK_lcgSWvGsyXGbNiuD_6X2RFD760pKoZBQgOAxRFzp1O2V6DbzjmJ9_BxZdj5vq0vEIZrVPfBHLmiKAUWx5rHmtGeh45lYIx5yrJALoNcsewqIyD0gVwjSayEvIDn-YZQ7ZW7VMUU"
  },
  {
    id: "3",
    title: "Machine Learning Engineer",
    company: "TCS",
    category: "engineering",
    mode: "hybrid",
    comp: "paid",
    location: "thiruvananthapuram",
    locationText: "Thiruvananthapuram, Kerala",
    salary: "₹10L - ₹18L/yr",
    closes: "",
    posted: "Posted 2 days ago",
    description: "Shape the future of AI interfaces. Work with cutting-edge ML models and design interfaces for data scientists and developers.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-ISoaFO0qW6Rd1BjboQ2IACosLCe2OOTFf7M_BD2OC7b8PA1jkClwWZQEArAC2XT3ZJ16EAaQF8q8Qd9GPZtTaIWt0a-xsFuxa1iT5fUqydDAeJwlwmu7jkcn67vG_Bv91Ou6qMqOFr9Ye711AN4q66r8s7dzcceai6GEXBToF2fv13pRnY6YCVc28h69dq9PUsxQMqni8UkkgLXtBzaCZeOJASiouIf031qwZpC5q-K6tIz5F2D3rs6zAk466yuAy13zdWe2TA0"
  },
  {
    id: "4",
    title: "Senior UX Designer",
    company: "Infosys",
    category: "design",
    mode: "remote",
    comp: "paid",
    location: "remote",
    salary: "₹600 - ₹900 / hr",
    closes: "",
    posted: "Posted 5 hours ago",
    description: "Design premium brand and marketing campaign interfaces for international SaaS and tech clients.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmKInZbH0yIKPcxyemOYzA2ZQTxdwxTDsbHPKIJMwgbL4mbXJuhrjpM3J2jKSmLFrjP61K-Csnpyr8Y_Ue9YSQxguATx6BhjJ5olSMTfaVumpuovC2Nsp-aA9SIzDmqSUCpyemH5A4V5N9eQaRwTEnztRkWE1DP9xsPU07nJjNXnwkcEnccD69Tcom4y9N0tbQbi2TdHDSNLTaTP7F-Da_ou13yuEMtpLKDh1LY1P5mwyQFvlFLzy_RHVcJsqc1_TJLbbw9xAXvFg"
  },
  {
    id: "5",
    title: "Quantitative Analyst Intern",
    company: "Wipro",
    category: "product",
    mode: "onsite",
    comp: "unpaid",
    location: "kochi",
    locationText: "Kochi, Kerala",
    salary: "Summer 2024",
    closes: "",
    posted: "Posted 1 day ago",
    description: "Analyze market data and build mathematical models for risk analysis. Summer 2024 cohort. Academic credit available.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-Bb6WXiYHVBVBP-vecpL4YbJAcOXmQNChbxL0GbV11xfvw_-zHR-AkmdLvSeWMv4oBXVN0Buj8UamnPPTGTCzXvbBtgXMZ1B4nWc0ZPvJP36CeX0CDrVwOSY4dopFWj6HcDBlL2vxXEGmhzt6GhLeKlmgrAyScWVnRf5Sqg9JJqt21B9uLi5LqR45oKSq5kuCa3vGNq6O6kZmnPVx2Pg9srP9JSa_HBSk_2s1hnSBMN5H1r5EcTfa2mvr8rozxy4dpCcnsWNy8gM"
  }
];

// Helper to check if Firestore is active and usable
async function isFirestoreWorking() {
    if (!db) return false;
    try {
        // Quick read check on a dummy doc or opportunities collection
        await db.collection('opportunities').limit(1).get();
        return true;
    } catch (e) {
        console.warn("Firestore is not enabled or accessible. Falling back to localStorage database.", e);
        return false;
    }
}

// Get all active opportunities
async function getOpportunities() {
    const working = await isFirestoreWorking();
    if (working) {
        try {
            const snapshot = await db.collection('opportunities').get();
            if (snapshot.empty) {
                // Seed database if empty
                await seedOpportunities();
                return DEFAULT_OPPORTUNITIES;
            }
            const list = [];
            snapshot.forEach(doc => {
                list.push({ id: doc.id, ...doc.data() });
            });
            return list;
        } catch (e) {
            console.error("Error fetching from Firestore, falling back to LocalStorage:", e);
        }
    }
    
    // LocalStorage fallback database
    let localList = localStorage.getItem('local_opportunities');
    if (!localList) {
        localStorage.setItem('local_opportunities', JSON.stringify(DEFAULT_OPPORTUNITIES));
        localList = JSON.stringify(DEFAULT_OPPORTUNITIES);
    }
    
    const parsed = JSON.parse(localList);
    const removed = JSON.parse(localStorage.getItem('removed_opportunities') || '[]');
    return parsed.filter(opp => !removed.includes(opp.id));
}

// Seed initial default opportunities to Firestore
async function seedOpportunities() {
    if (!db) return;
    try {
        const batch = db.batch();
        DEFAULT_OPPORTUNITIES.forEach(opp => {
            const docRef = db.collection('opportunities').doc(opp.id);
            batch.set(docRef, opp);
        });
        await batch.commit();
        console.log("Firestore successfully seeded with default opportunities.");
    } catch (e) {
        console.error("Failed to seed Firestore:", e);
    }
}

// Delete an opportunity (admin action)
async function deleteOpportunity(id) {
    const working = await isFirestoreWorking();
    if (working) {
        try {
            await db.collection('opportunities').doc(id).delete();
            console.log(`Document ${id} successfully deleted from Firestore.`);
            return true;
        } catch (e) {
            console.error("Error deleting from Firestore:", e);
        }
    }
    
    // LocalStorage fallback deletion
    const removed = JSON.parse(localStorage.getItem('removed_opportunities') || '[]');
    if (!removed.includes(id)) {
        removed.push(id);
        localStorage.setItem('removed_opportunities', JSON.stringify(removed));
    }
    return true;
}

// Add a new opportunity (recruiter action)
async function addOpportunity(opp) {
    const working = await isFirestoreWorking();
    if (working) {
        try {
            await db.collection('opportunities').doc(opp.id).set(opp);
            console.log(`Document ${opp.id} successfully added to Firestore.`);
            return true;
        } catch (e) {
            console.error("Error adding to Firestore:", e);
        }
    }
    
    // LocalStorage fallback addition
    let localList = JSON.parse(localStorage.getItem('local_opportunities') || '[]');
    localList.push(opp);
    localStorage.setItem('local_opportunities', JSON.stringify(localList));
    return true;
}

// ============================================================
// Environment Configuration (js/env.js)
// Dedicated Firebase Project Configuration for NEW Website
// Project ID: web1-781b3
// ============================================================

const ENV_CONFIG = {
    // Site & Contact Config
    SITE_NAME: "A7 SATTA",
    WHATSAPP_PHONE: "917027405875",
    WHATSAPP_URL: "https://wa.me/message/WTOZYC4GBMWNC1",

    // REAL NEW Firebase Web App Configuration (web1-781b3)
    VITE_FIREBASE_API_KEY: "AIzaSyCWCfT2AIdqjx0gqizLCIzavcNo4DUS-5Q",
    VITE_FIREBASE_AUTH_DOMAIN: "web1-781b3.firebaseapp.com",
    VITE_FIREBASE_PROJECT_ID: "web1-781b3",
    VITE_FIREBASE_STORAGE_BUCKET: "web1-781b3.firebasestorage.app",
    VITE_FIREBASE_MESSAGING_SENDER_ID: "612077814429",
    VITE_FIREBASE_APP_ID: "1:612077814429:web:756b291896832e8264ca74",
    VITE_FIREBASE_DATABASE_URL: "https://web1-781b3-default-rtdb.firebaseio.com/",

    // Compatibility Mappings
    FIREBASE_API_KEY: "AIzaSyCWCfT2AIdqjx0gqizLCIzavcNo4DUS-5Q",
    FIREBASE_DATABASE_URL: "https://web1-781b3-default-rtdb.firebaseio.com/",
    FIREBASE_PROJECT_ID: "web1-781b3",
    FIREBASE_AUTH_DOMAIN: "web1-781b3.firebaseapp.com",
    FIREBASE_STORAGE_BUCKET: "web1-781b3.firebasestorage.app",
    FIREBASE_MESSAGING_SENDER_ID: "612077814429",
    FIREBASE_APP_ID: "1:612077814429:web:756b291896832e8264ca74"
};

// Make available globally
if (typeof window !== 'undefined') {
    window.ENV_CONFIG = ENV_CONFIG;
}

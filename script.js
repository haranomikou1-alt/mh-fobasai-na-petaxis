// DOM Elements
const panicBtn = document.getElementById('panicBtn');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const responseArea = document.getElementById('responseArea');
const breathingContainer = document.getElementById('breathingContainer');
const closeBreathingBtn = document.getElementById('closeBreathingBtn');
const breathingText = document.getElementById('breathingText');
const breathingInstructions = document.getElementById('breathingInstructions');
const flightPrepBadge = document.getElementById('flightPrepBadge');
const flightPrepPanel = document.getElementById('flightPrepPanel');
const closePrepBtn = document.getElementById('closePrepBtn');
const supportContent = document.getElementById('supportContent');
const breathingQuickBtn = document.getElementById('breathingQuickBtn');
const techniqueBtn = document.getElementById('techniqueBtn');
const factsBtn = document.getElementById('factsBtn');

// AI Responses Database - CBT-based psychological advice
const aiResponses = {
    'κουνάει': {
        trigger: ['κουνάει', 'κουνιέται', 'κίνηση', 'κουνάμε', 'τρέμει'],
        response: `Η κίνηση του αεροπλάνου είναι εντελώς φυσιολογική! Τα αεροπλάνα είναι σχεδιασμένα για να χειρίζονται τυρβώδη σενάρια. Αυτό που νιώθεις είναι παρόμοιο με τις αναταράξεις ενός αυτοκινήτου, αλλά είναι απολύτως ασφαλές.

Δοκίμασε αυτή την τεχνική: Εστίασε στην αναπνοή σου και ενώ εισπνέεις, σκέψου 5 πράγματα που βλέπεις γύρω σου. Αυτό θα σε βοηθήσει να επιστρέψεις στο παρόν.`
    },
    'φοβάμαι': {
        trigger: ['φοβάμαι', 'φοβερό', 'τρομάζω', 'τρόμος', 'φοβισμένος'],
        response: `Ο φόβος σου είναι φυσικός, και είμαι εδώ για να σε υποστηρίξω. Θυμήσου: το αεροπλάνο είναι ένα από τα ασφαλέστερα μέσα μεταφοράς. Τα πιλότοι είναι εξαιρετικά εκπαιδευμένοι και η τεχνολογία είναι προηγμένη.

Ας δουμε το φόβο σου σαν ένα συναγερμό που δεν είναι απαραίτητος. Μπορούμε να αντιδράσουμε σε αυτό χωρίς να το θεωρούμε κίνδυνο. Πνέε αργά και βαθιά. Είσαι ασφαλής.`
    },
    'θόρυβος': {
        trigger: ['θόρυβος', 'ήχος', 'κρακ', 'βουητό', 'ακούω', 'ακούγεται'],
        response: `Οι ήχοι του αεροπλάνου μπορεί να είναι αναπάντεχοι, αλλά είναι σημάδια ότι όλα λειτουργούν σωστά! Τα σύστηματα υδραυλικά, οι κινητήρες, τα flaps - όλα κάνουν ήχους που είναι τυπικοί και ασφαλείς.

Δοκίμασε να ονοματοποιήσεις τους ήχους που ακούς. Αυτό θα μετατρέψει τον άγνωστο φόβο σε κάτι γνωστό και λιγότερο απειλητικό.`
    },
    'δυσκολία': {
        trigger: ['δυσκολία', 'δύσπνοια', 'αναπνοή', 'δύσκολα', 'στενοχώρια'],
        response: `Η δυσκολία στην αναπνοή συχνά προέρχεται από άγχος και την ενδοστραφή προσοχή. Το καλό νέο; Μπορείς να ελέγξεις αυτό!

Δοκίμασε τη μέθοδο 4-7-8: Εισπνοή για 4 δευτερόλεπτα, κράτησε για 7, εκπνοή για 8. Αυτό ενεργοποιεί το νευρικό σύστημά σου να ηρεμήσει. Κάνε το 3-4 φορές. Ο φυσικός αέρας που ανακυκλώνεται στο αεροπλάνο είναι αρκετός.`
    },
    'καρδιά': {
        trigger: ['καρδιά', 'χτύπος', 'ταχυκαρδία', 'σφίγγει', 'χτυπάει'],
        response: `Το αυξημένο καρδιακό ρυθμό είναι μια φυσιολογική ανταπόκριση του σώματός σου στο άγχος. ΑΥΤΟ ΔΕΝ είναι επικίνδυνο - αυτό είναι ο φόβος στο έργο.

Πρόσεξε το παράδοξο: όσο περισσότερο συγκεντρώνεσαι στον παλμό της καρδιάς σου, τόσο πιο έντονος νιώθει. Ας απορρίψουμε αυτή την προσοχή. Κοίταξε έξω από το παράθυρο ή μίλησε με κάποιον. Η προσοχή αλλού = λιγότερη ενόχληση.`
    },
    'αεροσκάφος': {
        trigger: ['αεροσκάφος', 'αεροπλάνο', 'πτήση', 'πετά'],
        response: `Τα σύγχρονα αεροπλάνα έχουν πολλαπλά συστήματα πλεονασμού. Κάθε όργανο ελέγχου είναι εφοδιασμένο με ένα ή περισσότερα εφεδρικά συστήματα. Η ασφάλεια αεροσκαφών είναι εγνωσμένη παγκοσμίως.

Εσύ έχεις ήδη κάνει το σημαντικότερο βήμα: ανέβηκες στο αεροπλάνο παρά τον φόβό σου. Αυτό είναι ήρωικό. Πάρε δύναμη από αυτό.`
    },
    'ασφάλεια': {
        trigger: ['ασφάλεια', 'ασφαλές', 'κίνδυνος', 'έκτακτη', 'προσγείωση'],
        response: `Το αεροπλάνο είναι σχεδιασμένο να ταξιδεύει με ασφάλεια ακόμα και όταν παρουσιαστούν τεχνικά προβλήματα. Τα πιλότοι είναι εκπαιδευμένοι να χειρίζονται κάθε κατάσταση. Πραγματοποιούνται τακτικές ελέγχοι και συντηρήσεις.

Στατιστικά: Η πτήση είναι 44 φορές ασφαλέστερη από την οδήγηση. Περισσότεροι άνθρωποι τραυματίζονται από φωτιές σε ξενοδοχεία παρά από ατυχήματα αεροπλάνων.`
    },
    'πανικό': {
        trigger: ['πανικό', 'πανικός', 'πανικώ', 'χάνω'],
        response: `Κατανοώ τα συναισθήματα του πανικού. Το καλό νέα είναι ότι το πανικό περνάει και μπορούμε να το ελέγξουμε μαζί.

Δοκίμασε τώρα: Πάτησε το κουμπί "Έχω Πανικό" για μια οδηγούμενη άσκηση αναπνοής 4-4-4. Ή εστίασε σε 5 πράγματα που βλέπεις, 4 που ακούς, 3 που αγγίζεις, 2 που μυρίζεις, 1 που γεύεσαι.`
    },
    'default': `Καταλαβαίνω ότι νιώθεις άγχος. Είμαι εδώ για να σε ακούσω. Μπορεί να μιλήσεις μαζί μου για ό,τι νιώθεις, και θα κάνουμε αυτό το ταξίδι αν είναι δυνατόν. Θυμήσου: το άγχος που αισθάνεσαι είναι προσωρινό και θα περάσει. Πνέε αργά.`
};

// Safety Facts
const safetyFacts = [
    "✈️ Η αεροπορία είναι το ασφαλέστερο μέσο μεταφοράς στον κόσμο",
    "🛡️ Τα αεροπλάνα έχουν πολλαπλά αντιπαγωτικά συστήματα και έλεγχοι",
    "👨‍✈️ Οι πιλότοι εκπαιδεύονται εκτενώς για κάθε κατάσταση",
    "🔧 Κάθε αεροπλάνο ελέγχεται κάθε 24 ώρες πτήσης",
    "📊 1 ατύχημα σε 10 εκατ. πτήσεις (σπανίοτατο)"
];

// Relaxation Techniques
const relaxationTechniques = [
    "🧘 Προοδευτική Χαλάρωση Μυών: Τεντώστε κάθε μυ για 5 δευτερόλεπτα, μετά χαλαρώστε",
    "🎧 Ακούστε μουσική ή ένα χαλαρωτικό podcast",
    "📱 Κάντε ένα παιχνίδι ή διαβάστε κάτι που σας αποσπά",
    "🤝 Μιλήστε με κάποιον δίπλα σας ή το πλήρωμα",
    "✌️ Δοκιμάστε τη τεχνική 5-4-3-2-1: 5 πράγματα που βλέπετε, 4 που ακούτε..."
];

// Breathing Exercise Function
function startBreathingExercise() {
    breathingContainer.style.display = 'flex';
    const breathingSteps = [
        { text: 'Εισπνοή', instruction: 'Εισπνοή: 4 δευτερόλεπτα', duration: 4000 },
        { text: 'Κράτησε', instruction: 'Κράτησε: 4 δευτερόλεπτα', duration: 4000 },
        { text: 'Εκπνοή', instruction: 'Εκπνοή: 4 δευτερόλεπτα', duration: 4000 },
        { text: 'Ξεκούρασου', instruction: 'Ξεκούρασου: 2 δευτερόλεπτα', duration: 2000 }
    ];

    let stepIndex = 0;
    let cycleCount = 0;
    const totalCycles = 4;

    function executeStep() {
        if (cycleCount >= totalCycles) {
            breathingContainer.style.display = 'none';
            showAIResponse('Μπράβο! Έκανες μια ωραία άσκηση αναπνοής. Νιώθεις καλύτερα; Θυμήσου ότι μπορείς να το κάνεις αυτό οποιαδήποτε στιγμή.');
            updateRealTimeSupport('✅ Άσκηση αναπνοής ολοκληρώθηκε με επιτυχία!');
            return;
        }

        const step = breathingSteps[stepIndex];
        breathingText.textContent = step.text;
        breathingInstructions.textContent = step.instruction;

        setTimeout(() => {
            stepIndex++;
            if (stepIndex === breathingSteps.length) {
                stepIndex = 0;
                cycleCount++;
            }
            executeStep();
        }, step.duration);
    }

    executeStep();
}

// Close Breathing Exercise
closeBreathingBtn.addEventListener('click', () => {
    breathingContainer.style.display = 'none';
});

// Show AI Response
function showAIResponse(message) {
    responseArea.innerHTML = `<div class="ai-response">${message}</div>`;
}

// Update Real-Time Support
function updateRealTimeSupport(message) {
    supportContent.innerHTML = message;
}

// Show Random Safety Fact
function showSafetyFact() {
    const randomFact = safetyFacts[Math.floor(Math.random() * safetyFacts.length)];
    updateRealTimeSupport(randomFact);
}

// Show Random Relaxation Technique
function showRelaxationTechnique() {
    const randomTechnique = relaxationTechniques[Math.floor(Math.random() * relaxationTechniques.length)];
    updateRealTimeSupport(randomTechnique);
}

// AI Response Logic
function getAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    for (const [key, data] of Object.entries(aiResponses)) {
        if (key !== 'default' && Array.isArray(data.trigger)) {
            for (const trigger of data.trigger) {
                if (lowerMessage.includes(trigger)) {
                    return data.response;
                }
            }
        }
    }

    return aiResponses.default;
}

// Send Message Handler
function handleSendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;

    chatInput.value = '';
    const aiResponse = getAIResponse(message);
    showAIResponse(aiResponse);
    updateRealTimeSupport('💬 Έχω λάβει το μήνυμά σου και είμαι εδώ για να βοηθήσω.');
}

// Flight Preparation Panel Toggle
flightPrepBadge.addEventListener('click', () => {
    if (flightPrepPanel.style.display === 'none') {
        flightPrepPanel.style.display = 'block';
        updateRealTimeSupport('📋 Διαβάστε τις συμβουλές για να προετοιμαστείτε');
    } else {
        flightPrepPanel.style.display = 'none';
    }
});

closePrepBtn.addEventListener('click', () => {
    flightPrepPanel.style.display = 'none';
});

// Event Listeners
panicBtn.addEventListener('click', () => {
    startBreathingExercise();
});

sendBtn.addEventListener('click', handleSendMessage);

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSendMessage();
    }
});

// Quick Action Buttons
breathingQuickBtn.addEventListener('click', () => {
    startBreathingExercise();
});

techniqueBtn.addEventListener('click', () => {
    showRelaxationTechnique();
});

factsBtn.addEventListener('click', () => {
    showSafetyFact();
});

// Focus input field on load
window.addEventListener('load', () => {
    chatInput.focus();
    updateRealTimeSupport('🟢 Σύστημα ενεργό και έτοιμο να σας βοηθήσει');
});

// Show initial tip every 30 seconds (optional)
setInterval(() => {
    if (document.hidden === false && Math.random() > 0.7) {
        showSafetyFact();
    }
}, 30000);

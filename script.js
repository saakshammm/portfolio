// ============================================
// CUSTOM CURSOR
// ============================================
const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
document.body.appendChild(cursorDot);

let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
function animateCursor() {
    dotX += (mouseX - dotX) * 0.2;
    dotY += (mouseY - dotY) * 0.2;
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();
const hoverElements = document.querySelectorAll('a, button, .project-card, .stack-item');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => { cursorDot.style.transform = 'scale(2)'; });
    el.addEventListener('mouseleave', () => { cursorDot.style.transform = 'scale(1)'; });
});

// ============================================
// STICKY HEADER
// ============================================
const stickyHeader = document.getElementById('sticky-header');
const heroName = document.getElementById('hero-name');
const terminalTrigger = document.querySelector('.terminal-trigger-wrapper');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 600) {
        if (heroName) heroName.classList.add('fade-out');
        if (stickyHeader) { stickyHeader.classList.remove('hidden'); stickyHeader.classList.add('visible'); }
    } else {
        if (heroName) heroName.classList.remove('fade-out');
        if (stickyHeader) { stickyHeader.classList.remove('visible'); stickyHeader.classList.add('hidden'); }
    }
    if (footer && terminalTrigger) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const footerVisibleHeight = windowHeight - footerRect.top;
        terminalTrigger.style.bottom = footerVisibleHeight > 0 ? `calc(2rem + ${footerVisibleHeight}px)` : '2rem';
        terminalTrigger.style.opacity = '1';
        terminalTrigger.style.pointerEvents = 'all';
    }
});

// ============================================
// PROJECT DATA
// ============================================
const projects = [
        {
        title: "broreadtheterms — T&C Roast Machine",
        description: "Terms & Conditions translator that exposes what you actually agreed to",
        tags: ["FastAPI", "NVIDIA NIM", "Python", "Docker"],
        metric: "Live on HF Spaces",
        details: {
            problem: "Companies hide the sketchiest stuff behind walls of legalese. You click 'I agree' and forget about it. Built a tool that rips apart privacy policies, terms of service, and subscription traps, then tells you what they actually mean — in the funniest, most savage way possible.",
            approach: "Built a web app that takes pasted legal text or uploaded .txt, .pdf, or .docx files. The AI translates everything into brutally honest Gen‑Z language, detects red flags like data selling and forced arbitration, and assigns a 0–100 Cooked Score so you know exactly how screwed you are. Includes a validation layer that refuses to analyze non‑legal texts.",
            model: "Python + FastAPI backend. Vanilla HTML/CSS/JS frontend with Space Grotesk font and hand‑crafted responsive design. NVIDIA NIM API (Llama 3.1 8B) for AI‑powered analysis. PyPDF2 and python‑docx for document parsing. Docker deployment on Hugging Face Spaces. Zero‑cost AI using free tier API — no credit card required.",
            results: "Live on Hugging Face Spaces. Features instant roast with file upload support, Cooked Score with animated count‑up, red flag detection across 5+ categories, honest translation of full documents, phrase‑by‑phrase breakdown of what they really mean, privacy risk meter, subscription trap warnings, and validation layer. Scored labels like HIGH, GOVERNMENT EXPERIMENT, and DARK SOULS LEVEL.",
            github: "https://github.com/saakshammm/broreadtheterms",
            demo: "https://saakshammm-broreadtheterms.hf.space/"
        }
    },
    {
        title: "cooked — Chat Roast Analyzer",
        description: "WhatsApp chat analyzer that roasts you with your own messages",
        tags: ["FastAPI", "NVIDIA NIM", "Python", "HTML/CSS/JS"],
        metric: "Live on Render",
        details: {
            problem: "Built a hilarious web app that takes your exported WhatsApp chat and roasts every embarrassing thing you've ever sent. Counts double texts, measures reply gaps, detects 3am crashouts, and generates a shareable report card that destroys your friends with their own words — all while being privacy-first with zero data storage.",
            approach: "Built two analysis engines: 'kitchen' mode (rule-based Python analysis, completely offline, still painfully accurate) and 'chef mode' (powered by NVIDIA NIM + Llama 3.1 8B for AI-generated roasts with maximum disrespect). Vanilla HTML/CSS/JS frontend with html2canvas for shareable screenshot report cards. FastAPI backend processes uploaded chat files in memory with zero storage — reads, laughs, forgets.",
            model: "Python + FastAPI backend with dual analysis engines. Vanilla HTML/CSS/JS frontend with html2canvas for report card screenshots. Rule-based local analyzer (kitchen) for offline use. Optional NVIDIA NIM integration (Llama 3.1 8B) for AI-powered insults in chef mode. Privacy-first architecture: chats processed in memory and immediately discarded. Red/black premium dark theme branding.",
            results: "Fully functional web app deployed on Render at cooked-lf32.onrender.com. Generates roast-grade analytics including emotional dependency scores, double texting addiction metrics, attachment issue detection, and reply gap tracking. Shareable report cards via screenshot export. Works completely offline with kitchen mode. Free NVIDIA API key enables chef mode for AI-powered roasts. Branded with fried egg logo and 'your chat just ended you' tagline.",
            github: "https://github.com/saakshammm/cooked",
            demo: "https://cooked-lf32.onrender.com/"
        }
    },
    {
        title: "Morbus - AI Spotify Companion",
        description: "AI music companion built entirely using prompt engineering",
        tags: ["AI", "Prompt Engineering", "Spotify API"],
        metric: "Live on Render",
        details: {
            problem: "Built a personal AI music companion that connects to Spotify, reads your recent tracks, top artists, and top songs, then talks to you like a friend who knows your music taste inside-out. Includes Music-Only Mode where responses use only your actual songs and artists — no fake recommendations, no random tracks.",
            approach: "Leveraged prompt engineering and AI tools to build the entire app. Implemented Spotify OAuth for secure login and data access. Integrated OpenAI API for conversational AI. Built Music-Only Mode that constrains all responses to the user's real Spotify library. Managed sessions with Flask-Session for smooth user context.",
            model: "Flask backend (Python) with Spotify Web API integration. OpenAI GPT for natural language understanding and music-driven conversation. Flask-Session for user context management. python-dotenv for secure API key handling. gunicorn for production deployment on Render.",
            results: "Fully functional web app deployed on Render at morbus-7gvq.onrender.com. Reads listening history, generates personalized music conversations, and provides smart Spotify recommendations. Clean .env configuration for all secrets. Demonstrates strong prompt engineering and full-stack AI integration skills.",
            github: "https://github.com/saakshammm/morbus",
            demo: "https://morbus-7gvq.onrender.com/"
        }
    },
    {
        title: "Emotion Detection System",
        description: "Real-time facial emotion recognition using custom CNN",
        tags: ["CV", "Deep Learning", "OpenCV"],
        metric: "6 emotions detected",
        details: {
            problem: "Built a system to detect human emotions (Angry, Fear, Happy, Neutral, Sad, Surprise) from facial expressions in real-time webcam feeds. Needed a lightweight, completely local solution with no external API dependencies — everything had to run on-device.",
            approach: "Trained a custom CNN from scratch using TensorFlow/Keras on two combined datasets (Face Expression Recognition Dataset + FER2013). No transfer learning — the model was built and trained entirely from the ground up. Used OpenCV's Haarcascade for real-time face detection, preprocessing each face into 48×48 grayscale images before classification. Built a Streamlit frontend for live webcam demo with emotion labels and confidence scores.",
            model: "Custom CNN architecture: 3 Conv2D layers (32→64→128 filters) with MaxPooling2D, followed by Flatten → Dense(128)+ReLU → Dropout(0.5) → Dense(6)+Softmax. Adam optimizer (lr=1e-3), categorical crossentropy loss. Trained on 48×48 grayscale facial images. Generates training accuracy/loss curves and confusion matrix for evaluation.",
            results: "Real-time emotion classification at 6 classes with live webcam feed. Generates training_plot.png (accuracy & loss curves) and confusion_matrix.png for model evaluation. Completely local deployment — no internet APIs required. Streamlit dark minimal UI. Lightweight and fast inference suitable for real-time use.",
            github: "https://github.com/saakshammm/emotion-detection"
        }
    },
    {
        title: "Movie Recommendation System",
        description: "Content-based movie recommender with live poster fetching",
        tags: ["Recommender", "ML", "Streamlit"],
        metric: "Deployed on HF",
        details: {
            problem: "Created a content-based movie recommendation system that suggests 8 similar movies based on user selection from a dropdown. Needed a clean, responsive UI with live poster fetching from TMDB and fast, pre-computed recommendations.",
            approach: "Built content-based filtering using scikit-learn and NLTK for NLP feature extraction from movie metadata (genres, cast, crew, keywords, overview). Pre-computed cosine similarity matrix from the TMDB 5000 movies dataset and stored as pickle files for instant loading. Integrated TMDB API for live poster fetching. Designed a clean 2-row, 4-column Streamlit layout.",
            model: "Content-based filtering with cosine similarity on TF-IDF vectorized movie metadata. Pre-computed similarity matrix and movie list stored as pickle artifacts. Uses TMDB 5000 movies + credits datasets. NLP feature extraction from genres, cast, crew, keywords, and overview text. All artifacts hosted publicly on Hugging Face datasets.",
            results: "Deployed on Hugging Face Spaces at saakshammm-movie-rec-sys.hf.space. Dropdown movie selection with instant 8-movie recommendations and live poster previews. Secure API key management via environment variables. Clean, responsive Streamlit interface. Built and deployed despite working on a 5-year-old tablet while laptop was broken.",
            github: "https://github.com/saakshammm/movie-rec-sys",
            demo: "https://saakshammm-movie-rec-sys.hf.space/"
        }
    },
    {
        title: "Jarvis AI Assistant",
        description: "Voice-activated desktop assistant with Hugging Face AI",
        tags: ["NLP", "AI", "Speech"],
        metric: "Zephyr 7B powered",
        details: {
            problem: "Developed a voice-controlled desktop assistant that listens to your voice, thinks using Hugging Face AI, and talks back like a real human assistant. Needed to handle both system-level actions (opening apps and websites) and general AI-powered conversation in a single interface.",
            approach: "Integrated speech_recognition library for microphone input capture. Connected to Hugging Face's Zephyr-7B-beta model for intelligent natural language responses. Used Windows built-in TTS engine for voice output. Built a command parser that routes system-level actions (opening YouTube, Google, Wikipedia, Spotify, Discord, telling time) separately from AI-generated answers.",
            model: "Hugging Face Zephyr 7B Beta (zephyr-7b-beta) for natural language understanding and generation. Python speech_recognition library for voice input. Windows built-in TTS (pywin32) for spoken responses. API key managed via config.py for secure Hugging Face access. Requirements include speechrecognition, requests, pywin32.",
            results: "Fully functional voice assistant with microphone input and spoken responses. Opens websites (YouTube, Google, Wikipedia) and desktop apps (Spotify, Discord) on command. Answers general knowledge questions using Hugging Face AI. Tells current time. Secure API key management with config.py and .gitignore. All processing done locally.",
            github: "https://github.com/saakshammm/Jarvis-AI"
        }
    }
];

// ============================================
// HERO TERMINAL CONTROLS
// ============================================
function closeHeroTerminal() {
    document.getElementById('hero-terminal').classList.add('hidden');
    document.querySelector('.hero-grid').classList.add('terminal-hidden');
}
function minimizeHeroTerminal() {
    const t = document.getElementById('hero-terminal');
    if (t.classList.contains('maximized')) t.classList.remove('maximized');
}
function maximizeHeroTerminal() {
    const t = document.getElementById('hero-terminal');
    t.classList.toggle('maximized');
}

// ============================================
// TERMINAL ANIMATION
// ============================================
const scenarios = [
    {
        name: "movie-rec",
        lines: [
            "$ python train.py",
            "loading dataset from data/tmdb_5000_movies.csv",
            "dataset loaded: 4803 movies, 20 features",
            "preprocessing data...",
            "removing null values: 127 rows affected",
            "extracting keywords and genres",
            "building tfidf vectors",
            "computing cosine similarity matrix (4803x4803)",
            "matrix computation: 47.2s",
            "saving model to models/similarity.pkl",
            "model size: 180.4 MB",
            "done.",
            "",
            "$ streamlit run app.py",
            "starting streamlit server...",
            "server running on http://localhost:8501",
            "app deployed at saakshammm-movie-rec-sys.hf.space"
        ]
    },
    {
        name: "emotion-detect",
        lines: [
            "$ python detect.py",
            "loading haarcascade classifier",
            "loading tensorflow lite model",
            "model input shape: (1, 48, 48, 1)",
            "classes: 7 emotions",
            "initializing camera feed",
            "camera 0 detected",
            "",
            "frame 1: no faces",
            "frame 24: face detected (230, 120, 450, 450)",
            "preprocessing: grayscale -> resize(48x48) -> normalize",
            "inference: happy (98.4%)",
            "inference: neutral (89.2%)",
            "inference: surprised (76.1%)",
            "running at 30 fps"
        ]
    },
    {
        name: "jarvis-ai",
        lines: [
            "$ python jarvis.py",
            "initializing speech recognition",
            "loading huggingface model: zephyr-7b-beta",
            "model size: 4.2GB (4-bit quantized)",
            "gpu detected: nvidia rtx 3060",
            "vram usage: 4.2GB / 12GB",
            "model loaded successfully",
            "",
            "listening for wake word 'jarvis'...",
            "wake word detected",
            "user: open spotify and play lofi",
            "processing command",
            "action: launch_app",
            "target: spotify.exe",
            "command executed",
            "ready."
        ]
    }
];

let scenarioIndex = 0, currentLineIndex = 0;
const terminalLinesContainer = document.getElementById('terminal-lines');

function addTerminalLine() {
    const currentScenario = scenarios[scenarioIndex].lines;
    if (currentLineIndex === 0) { terminalLinesContainer.innerHTML = ''; }
    if (currentLineIndex < currentScenario.length) {
        const lineContent = currentScenario[currentLineIndex];
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.classList.add(
            lineContent.startsWith('$') ? 'term-command' :
            (lineContent.includes('done') || lineContent.includes('ready') || lineContent.includes('deployed')) ? 'term-success' : 'term-info'
        );
        line.textContent = lineContent;
        terminalLinesContainer.appendChild(line);
        currentLineIndex++;
        setTimeout(addTerminalLine, Math.random() * 800 + 400);
    } else {
        setTimeout(() => {
            currentLineIndex = 0;
            scenarioIndex = (scenarioIndex + 1) % scenarios.length;
            addTerminalLine();
        }, 4000);
    }
}
setTimeout(addTerminalLine, 1000);

// ============================================
// RENDER PROJECTS
// ============================================
const projectsGrid = document.getElementById('projects-grid');
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.innerHTML = `
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
        <div class="project-metric">${project.metric}</div>
    `;
    card.addEventListener('click', () => openProjectModal(project));
    projectsGrid.appendChild(card);
});

// ============================================
// PROJECT MODAL
// ============================================
function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    let demoLink = project.details.demo ? `<a href="${project.details.demo}" target="_blank" class="modal-link" style="margin-right:1rem;">Live Demo →</a>` : '';
    modalBody.innerHTML = `
        <h2 class="modal-title">${project.title}</h2>
        <div class="project-tags" style="margin-bottom:2rem;">${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
        <div class="modal-section"><div class="modal-section-title">Problem</div><div class="modal-section-content">${project.details.problem}</div></div>
        <div class="modal-section"><div class="modal-section-title">Approach</div><div class="modal-section-content">${project.details.approach}</div></div>
        <div class="modal-section"><div class="modal-section-title">Model</div><div class="modal-section-content">${project.details.model}</div></div>
        <div class="modal-section"><div class="modal-section-title">Results</div><div class="modal-section-content">${project.details.results}</div><div class="project-metric" style="margin-top:1rem;">${project.metric}</div></div>
        ${demoLink}
        <a href="${project.details.github}" target="_blank" class="modal-link">View on GitHub →</a>
    `;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('project-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// ============================================
// TERMINAL EASTER EGG
// ============================================
const terminalCommands = {
    help: `Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  projects    List all ML experiments
  stack       Show technology stack
  contact     Get contact information
  about       About me
  clear       Clear terminal screen
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

    projects: `ML Experiments:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${projects.map((p, i) => `  [${i + 1}] ${p.title}\n      → ${p.metric}`).join('\n\n')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

    stack: `Tech Stack:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Languages       Python, C, SQL
  Frameworks      PyTorch, TensorFlow, OpenCV,
                  Pandas, NumPy, Scikit-learn,
                  Streamlit, Hugging Face
  Tools           Git, API Integration
  Concepts        Prompt Engineering
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

    contact: `Contact:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  GitHub      → github.com/saakshammm
  LinkedIn    → linkedin.com/in/saakshammm
  Instagram   → instagram.com/saksham.cooked
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

    about: `About Me:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  I build stuff like a WhatsApp roast machine,
  a T&C translator, a Spotify companion,
  emotion detectors, and voice assistants.
  If it doesn't work yet, I'm probably still
  debugging it.
  
  Currently studying AI at Manipal University.
  Always shipping. Ask me about cooked.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
};

function openTerminal() {
    const overlay = document.getElementById('terminal-overlay');
    overlay.classList.remove('hidden');
    document.getElementById('terminal-input').focus();
    document.getElementById('terminal-output').innerHTML = `<div class="terminal-line term-welcome">Terminal</div><div class="terminal-line">Type 'help' for available commands</div><div class="terminal-line"></div>`;
}
function closeTerminal() {
    document.getElementById('terminal-overlay').classList.add('hidden');
}

document.getElementById('terminal-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const input = this.value.trim().toLowerCase();
        const output = document.getElementById('terminal-output');
        const cmd = document.createElement('div'); cmd.className = 'terminal-line'; cmd.textContent = `$ ${input}`; output.appendChild(cmd);
        if (input === 'clear') output.innerHTML = '';
        else if (terminalCommands[input]) {
            const res = document.createElement('div'); res.style.whiteSpace = 'pre-wrap'; res.textContent = terminalCommands[input]; output.appendChild(res);
        } else if (input) {
            const err = document.createElement('div'); err.className = 'terminal-line'; err.textContent = `Command not found: ${input}. Type 'help' for available commands.`; output.appendChild(err);
        }
        const blank = document.createElement('div'); blank.className = 'terminal-line'; output.appendChild(blank);
        document.querySelector('.terminal-body').scrollTop = document.querySelector('.terminal-body').scrollHeight;
        this.value = '';
    }
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeTerminal(); } });

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
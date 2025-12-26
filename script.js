// ============================================
// CUSTOM CURSOR
// ============================================
const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
document.body.appendChild(cursorDot);

let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth follow for dot
    dotX += (mouseX - dotX) * 0.2;
    dotY += (mouseY - dotY) * 0.2;
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Scale cursor on hover
const hoverElements = document.querySelectorAll('a, button, .project-card, .stack-item, .note-item');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'scale(2)';
    });
    el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'scale(1)';
    });
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

    // Show header and fade out hero name after scrolling past hero section (600px)
    if (currentScroll > 600) {
        if (heroName) heroName.classList.add('fade-out');
        if (stickyHeader) {
            stickyHeader.classList.remove('hidden');
            stickyHeader.classList.add('visible');
        }
    } else {
        if (heroName) heroName.classList.remove('fade-out');
        if (stickyHeader) {
            stickyHeader.classList.remove('visible');
            stickyHeader.classList.add('hidden');
        }
    }

    // Dock terminal trigger above footer
    if (footer && terminalTrigger) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how much of the footer is visible
        const footerVisibleHeight = windowHeight - footerRect.top;

        if (footerVisibleHeight > 0) {
            // Push button up by the amount of footer visible + standard spacing (2rem approx 32px)
            terminalTrigger.style.bottom = `calc(2rem + ${footerVisibleHeight}px)`;
        } else {
            // Reset to default position
            terminalTrigger.style.bottom = '2rem';
        }

        // Ensure it stays visible
        terminalTrigger.style.opacity = '1';
        terminalTrigger.style.pointerEvents = 'all';
    }
});

// ============================================
// PROJECT DATA
// ============================================
const projects = [
    {
        title: "Morbus - AI Spotify Companion",
        description: "AI music companion built entirely using prompt engineering",
        tags: ["AI", "Prompt Engineering", "Spotify API"],
        metric: "Live on Render",
        details: {
            problem: "Built an AI music companion that connects to your Spotify account, analyzes your listening history, and generates personalized music-driven conversations. Includes a unique Music-Only Mode where responses use only your actual songs and artists. Developed entirely using AI assistance and prompt engineering.",
            approach: "Leveraged AI tools and prompt engineering to build the entire application. Implemented OAuth authentication with Spotify Web API to fetch recent tracks, top artists, and top songs. Integrated OpenAI API for conversational AI. Built Music-Only Mode that constrains responses to user's actual Spotify library data.",
            model: "Flask backend with Spotify OAuth flow. OpenAI GPT integration for natural language understanding. Session management for user context. Smart recommendation engine using Spotify's API. Entire codebase developed through AI-assisted development and prompt engineering.",
            results: "Fully functional web app deployed on Render. Reads user's listening history, generates personalized conversations, and provides music recommendations based on actual listening patterns. Clean .env configuration for secure deployment. Demonstrates strong prompt engineering and AI collaboration skills.",
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
            problem: "College minor project: Built a system to detect human emotions (Angry, Fear, Happy, Neutral, Sad, Surprise) from facial expressions in real-time webcam feeds. Needed lightweight, local solution without external APIs.",
            approach: "Trained custom CNN from scratch on 48×48 grayscale images. Used OpenCV's Haarcascade for real-time face detection. Built Streamlit frontend for live webcam display with emotion labels and confidence scores.",
            model: "Custom Convolutional Neural Network trained from scratch (no pre-trained weights). Adam optimizer with learning rate 1e-3. Categorical crossentropy loss. Processes grayscale 48×48 pixel facial images.",
            results: "Real-time emotion classification with live webcam feed. Generated training accuracy/loss curves and confusion matrix for evaluation. Completely local deployment with Streamlit UI. Lightweight and fast inference.",
            github: "https://github.com/saakshammm/emotion-detection"
        }
    },
    {
        title: "Movie Recommendation System",
        description: "Content-based movie recommender with live poster fetching",
        tags: ["Recommender", "ML", "Streamlit"],
        metric: "Deployed on HF",
        details: {
            problem: "Created a movie recommendation system that suggests 8 similar movies based on user selection. Needed clean UI with live poster fetching and fast recommendations.",
            approach: "Built content-based filtering using scikit-learn and NLTK. Computed similarity matrix from movie metadata (genres, cast, crew, keywords). Integrated TMDB API for live poster fetching. Clean 2-row, 4-column layout.",
            model: "Content-based filtering with cosine similarity. Pre-computed similarity matrix stored as pickle file. Uses TMDB 5000 movies dataset. Feature extraction from movie metadata using NLP techniques.",
            results: "Deployed on Hugging Face Spaces at saakshammm-movie-rec-sys.hf.space. Instant recommendations with live poster previews. Secure API key management via environment variables. Clean, responsive Streamlit interface.",
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
            problem: "Developed a voice-controlled desktop assistant that understands natural language commands and executes tasks like opening websites, launching apps, telling time, and answering questions using AI.",
            approach: "Integrated speech recognition for voice input, Hugging Face Zephyr-7B-beta for intelligent responses, and Windows TTS for voice output. Built command parser for system-level actions (opening YouTube, Google, Wikipedia, Spotify, Discord).",
            model: "Hugging Face Zephyr 7B Beta model for natural language understanding and generation. Speech recognition using Python's SpeechRecognition library. Windows built-in TTS engine for voice responses.",
            results: "Fully functional voice assistant with microphone input and spoken responses. Opens websites and apps on command. Answers general knowledge questions using AI. Secure API key management with config file.",
            github: "https://github.com/saakshammm/Jarvis-AI"
        }
    }
];

// ============================================
// TERMINAL ANIMATION
// ============================================
const scenarios = [
    {
        name: "ml-workflow",
        lines: [
            "$ python ml_pipeline.py",
            "",
            "[1/7] Problem Definition",
            "→ Task: Movie recommendation system",
            "→ Objective: Content-based filtering",
            "",
            "[2/7] Data Collection",
            "→ Loading TMDB 5000 movies dataset",
            "→ Found 4803 movies | 20 features",
            "",
            "[3/7] Data Cleaning",
            "→ Removing null values",
            "→ Handling duplicates",
            "→ Data quality: 98.2%",
            "",
            "[4/7] Data Preprocessing",
            "→ Extracting keywords and genres",
            "→ Building feature vectors (TF-IDF)",
            "→ Vectorization complete",
            "",
            "[5/7] Model Training",
            "→ Computing cosine similarity matrix",
            "→ Matrix shape: (4803, 4803)",
            "→ Training time: 47.2s",
            "",
            "[6/7] Model Evaluation",
            "→ Testing recommendations",
            "→ Accuracy: 94.3%",
            "→ Model saved: similarity.pkl (180.4 MB)",
            "",
            "[7/7] Deployment",
            "→ Starting Streamlit server",
            "→ App running on port 8501",
            "✓ Deployment successful"
        ]
    },
    {
        name: "cv-pipeline",
        lines: [
            "$ python emotion_detection.py",
            "",
            "[1/7] Problem Definition",
            "→ Task: Real-time emotion detection",
            "→ Classes: 7 emotions",
            "",
            "[2/7] Data Collection",
            "→ Dataset: FER-2013",
            "→ Images: 35,887 grayscale faces",
            "",
            "[3/7] Data Cleaning",
            "→ Removing corrupted images",
            "→ Balancing class distribution",
            "",
            "[4/7] Data Preprocessing",
            "→ Resize: 48x48 pixels",
            "→ Normalization: [0, 1]",
            "→ Augmentation applied",
            "",
            "[5/7] Model Training",
            "→ Architecture: CNN (4 layers)",
            "→ Epochs: 50 | Batch size: 64",
            "→ Training complete",
            "",
            "[6/7] Model Evaluation",
            "→ Validation accuracy: 89.2%",
            "→ Test accuracy: 87.8%",
            "",
            "[7/7] Deployment",
            "→ Converting to TensorFlow Lite",
            "→ Starting camera feed",
            "✓ Running at 30 FPS"
        ]
    },
    {
        name: "nlp-pipeline",
        lines: [
            "$ python jarvis_ai.py",
            "",
            "[1/7] Problem Definition",
            "→ Task: Voice-controlled AI assistant",
            "→ Model: Zephyr-7B-beta",
            "",
            "[2/7] Data Collection",
            "→ Loading pre-trained model",
            "→ Model size: 4.2GB (4-bit quantized)",
            "",
            "[3/7] Data Cleaning",
            "→ Initializing speech recognition",
            "→ Setting up audio pipeline",
            "",
            "[4/7] Data Preprocessing",
            "→ Audio processing: 16kHz sample rate",
            "→ Wake word detection configured",
            "",
            "[5/7] Model Training",
            "→ Loading model to GPU",
            "→ VRAM usage: 4.2GB / 12GB",
            "→ Model ready",
            "",
            "[6/7] Model Evaluation",
            "→ Testing voice commands",
            "→ Response time: <2s",
            "",
            "[7/7] Deployment",
            "→ Listening for 'Jarvis'",
            "→ NLP pipeline active",
            "✓ Assistant ready"
        ]
    }
];

let scenarioIndex = 0;
let currentLineIndex = 0;
const terminalLinesContainer = document.getElementById('terminal-lines');

function addTerminalLine() {
    const currentScenario = scenarios[scenarioIndex].lines;

    if (currentLineIndex === 0) {
        terminalLinesContainer.innerHTML = '';
    }

    if (currentLineIndex < currentScenario.length) {
        const lineContent = currentScenario[currentLineIndex];
        const line = document.createElement('div');
        line.className = 'terminal-line';

        // Add color classes based on content
        if (lineContent.startsWith('$')) {
            line.classList.add('term-command');
        } else if (lineContent.startsWith('✓')) {
            line.classList.add('term-success');
        } else if (lineContent.startsWith('[') && lineContent.includes('/7]')) {
            line.classList.add('term-progress');
        } else if (lineContent.startsWith('→')) {
            line.classList.add('term-process');
        } else if (lineContent.includes(':') && (lineContent.includes('MB') || lineContent.includes('GB') || lineContent.includes('%') || lineContent.includes('FPS') || lineContent.includes('s'))) {
            line.classList.add('term-info');
        }

        line.textContent = lineContent;
        terminalLinesContainer.appendChild(line);

        // Auto scroll to bottom
        const terminalBody = terminalLinesContainer.parentElement;
        terminalBody.scrollTop = terminalBody.scrollHeight;

        currentLineIndex++;

        // Vary speed based on line content for realism
        const delay = Math.random() * 800 + 400;

        setTimeout(addTerminalLine, delay);
    } else {
        // Reset and switch scenario after a pause
        setTimeout(() => {
            currentLineIndex = 0;
            // Cycle to next scenario
            scenarioIndex = (scenarioIndex + 1) % scenarios.length;
            addTerminalLine();
        }, 4000);
    }
}

// Start terminal animation
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
        <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
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

    let demoLink = '';
    if (project.details.demo) {
        demoLink = `<a href="${project.details.demo}" target="_blank" class="modal-link" style="margin-right: 1rem;">Live Demo →</a>`;
    }

    modalBody.innerHTML = `
        <h2 class="modal-title">${project.title}</h2>
        <div class="project-tags" style="margin-bottom: 2rem;">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        
        <div class="modal-section">
            <div class="modal-section-title">Problem</div>
            <div class="modal-section-content">${project.details.problem}</div>
        </div>
        
        <div class="modal-section">
            <div class="modal-section-title">Approach</div>
            <div class="modal-section-content">${project.details.approach}</div>
        </div>
        
        <div class="modal-section">
            <div class="modal-section-title">Model</div>
            <div class="modal-section-content">${project.details.model}</div>
        </div>
        
        <div class="modal-section">
            <div class="modal-section-title">Results</div>
            <div class="modal-section-content">${project.details.results}</div>
            <div class="project-metric" style="margin-top: 1rem;">${project.metric}</div>
        </div>
        
        ${demoLink}
        <a href="${project.details.github}" target="_blank" class="modal-link">View on GitHub →</a>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
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

    stack: `Technology Stack:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ML/AI
  → TensorFlow, PyTorch, Scikit-learn
  → OpenCV, NLTK, Hugging Face

  Data Science
  → Pandas, NumPy
  → Matplotlib, Seaborn

  Development
  → Python, SQL, Streamlit
  → Git, API Integration
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

    contact: `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Email
  → saakshammm@gmail.com

  GitHub
  → github.com/saakshammm

  LinkedIn
  → linkedin.com/in/saakshammm
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

    about: `About:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "Breaking models until they work."

  ML Engineer building real AI systems
  Completed AI/ML internship at Elevate Labs
  Always learning, always shipping
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
};

function openTerminal() {
    const overlay = document.getElementById('terminal-overlay');
    overlay.classList.remove('hidden');
    document.getElementById('terminal-input').focus();

    const output = document.getElementById('terminal-output');
    output.innerHTML = `<div class="terminal-line term-welcome">ML Lab Terminal v1.0</div><div class="terminal-line">Type 'help' for available commands</div><div class="terminal-line"></div>`;
}

function closeTerminal() {
    const overlay = document.getElementById('terminal-overlay');
    overlay.classList.add('hidden');
}

document.getElementById('terminal-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const input = this.value.trim().toLowerCase();
        const output = document.getElementById('terminal-output');

        // Echo command
        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-line';
        commandLine.textContent = `$ ${input}`;
        output.appendChild(commandLine);

        // Execute command
        if (input === 'clear') {
            output.innerHTML = '';
        } else if (terminalCommands[input]) {
            const resultLine = document.createElement('div');
            resultLine.style.whiteSpace = 'pre-wrap';
            resultLine.textContent = terminalCommands[input];
            output.appendChild(resultLine);
        } else if (input) {
            const errorLine = document.createElement('div');
            errorLine.className = 'terminal-line';
            errorLine.textContent = `Command not found: ${input}. Type 'help' for available commands.`;
            output.appendChild(errorLine);
        }

        // Empty line
        const emptyLine = document.createElement('div');
        emptyLine.className = 'terminal-line';
        output.appendChild(emptyLine);

        // Auto scroll
        const terminalBody = output.parentElement;
        terminalBody.scrollTop = terminalBody.scrollHeight;

        // Clear input
        this.value = '';

        // Scroll to bottom
        document.querySelector('.terminal-body').scrollTop = document.querySelector('.terminal-body').scrollHeight;
    }
});

// Close terminal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
        closeTerminal();
    }
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

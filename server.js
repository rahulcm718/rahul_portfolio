const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Email configuration (optional - for sending emails)
const nodemailer = require('nodemailer');

// Create transporter (using Gmail as example - update with your email)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Routes

// Serve HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact form API endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    try {
        // Send email (if configured)
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `New Contact Form Submission from ${name}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                `
            });

            // Send confirmation email to user
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'I received your message',
                html: `
                    <h2>Thank you for contacting me!</h2>
                    <p>Hi ${name},</p>
                    <p>I've received your message and will get back to you soon.</p>
                    <p>Best regards,<br>Rahul CM</p>
                `
            });
        }

        // Log submission (in production, save to database)
        console.log('Contact Form Submission:', { name, email, message, timestamp: new Date() });

        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        // Still return success to user even if email fails
        res.json({ success: true, message: 'Message received!' });
    }
});

// API endpoint to get portfolio data
app.get('/api/portfolio', (req, res) => {
    const portfolioData = {
        name: 'Rahul C M',
        title: 'Cricket Analyst',
        description: 'Data-Driven Sports Analytics Expert',
        skills: [
            { category: 'Data Analysis', items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'] },
            { category: 'Databases', items: ['SQL'] },
            { category: 'Visualization', items: ['Power BI', 'Excel', 'Matplotlib', 'Seaborn'] },
            { category: 'Cricket Analytics', items: ['Win Probability Modeling', 'Player Rating Systems'] }
        ],
        projects: [
            {
                title: 'IPL Performance Analytics',
                description: 'Comprehensive analysis of 2008–2025 IPL data',
                tags: ['Python', 'Pandas', 'Power BI']
            },
            {
                title: 'T20 Win Probability Model',
                description: 'ML model predicting match outcomes',
                tags: ['Machine Learning', 'Scikit-learn', 'Python']
            },
            {
                title: 'Player Impact Rating System',
                description: 'Custom performance metrics',
                tags: ['Custom Metrics', 'Excel', 'Data Visualization']
            }
        ]
    };
    res.json(portfolioData);
});

// Projects endpoint with details and screenshots
app.get('/api/projects', (req, res) => {
    const projects = [
        {
            id: 1,
            title: 'Performance Dashboard — Match & Player Insights',
            short: 'Interactive performance dashboard showing player & team KPIs',
            long: `Built an interactive performance dashboard that visualises match- and player-level KPIs (runs, strike rate, economy, phase contributions). The dashboard combines summary KPI tiles, trend charts and player-comparison views to quickly spot form, role impact, and match-level anomalies. Screenshot shows the main KPI overview and player trend widgets.`,
            screenshots: ['/assets/Performance dashboard/Russell Stats (Assignment).jpeg'],
            screenshotCaptions: ['Russell Stats (Assignment) - KPI overview'],
            tech: ['Tableau','Power BI','Python','Data Cleaning']
        },
        {
            id: 2,
            title: 'Scouting Analysis & Role Benchmarking',
            short: 'Scouting tools for player selection and role-specific benchmarking',
            long: `Created scouting analysis tools that rank players by role using multi-metric benchmarks (strike rate, boundary %, dot-ball %, economy, consistency). Implemented filters, radar charts and export-ready scouting tables to assist selection decisions. Screenshots include scouting tables and visual comparison charts used in talent identification.`,
            screenshots: [
                '/assets/Scouting analysis/Screenshot 2026-02-23 090404.png',
                '/assets/Scouting analysis/Screenshot 2026-02-23 090510.png'
            ],
            screenshotCaptions: [
                'Scouting analysis — player comparison table',
                'Scouting analysis — radar & comparison chart'
            ],
            tech: ['Excel','Python','Data Analysis','Visualization']
        },
        {
            id: 3,
            title: 'Win Prediction Model — Real-time Probability',
            short: 'Ball-by-ball win probability model with visualisation',
            long: `Developed a real-time win probability model using historical ball-by-ball data and engineered features (current run-rate, wickets in hand, partnership momentum, recent over-by-over form). Built an interactive visualisation that plots win probability through the match and shows feature importance and example predictions. Screenshots show the model UI, probability time-series, feature importance and sample match prediction outputs.`,
            screenshots: [
                '/assets/Win prediction model/Screenshot 2026-02-23 091403.png',
                '/assets/Win prediction model/Screenshot 2026-02-23 091418.png',
                '/assets/Win prediction model/Screenshot 2026-02-23 091431.png',
                '/assets/Win prediction model/Screenshot 2026-02-23 091445.png'
            ],
            screenshotCaptions: [
                'Model input & control panel (example match parameters)',
                'Win probability time-series across the match',
                'Feature importance visualization (top predictors)',
                'Match prediction summary and numeric outputs'
            ],
            tech: ['Python','Scikit-learn','Feature Engineering','D3/Plotly']
        }
    ];

    res.json(projects);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Cricket Analyst Portfolio is live!`);
});

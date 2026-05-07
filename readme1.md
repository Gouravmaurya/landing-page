# Veraqon — AI Platform for Human Intelligence

> Match top-tier verified talent with the right companies using AI-driven interviews, skills assessments, and reference checks.

Veraqon eliminates the repetitive hiring cycle. Candidates interview once with Rachel, our AI interviewer, and get verified. Enterprises receive only pre-screened, ranked profiles — no more weeks of manual screening.

---

## What We Do

**For candidates:** Interview once. Get verified. Let companies come to you.

**For enterprises:** Query for talent. Receive ranked, pre-interviewed profiles. Hire immediately.

---

## Platform Overview

Veraqon serves two user types — Talent (job seekers) and Enterprise (employers) — each with a dedicated flow.

---

## Candidate Journey

### 1. Onboarding
- Create account via email, Google, or LinkedIn
- Fill personal & professional details (name, LinkedIn, portfolio)
- Upload resume — AI parses and analyzes skills, experience, and education
- Set job preferences (contract type, location type, salary range, notice period)

### 2. Pre-Assessment
- 45-question screening covering technical and behavioral domains
- Questions categorized by difficulty: Easy, Medium, Hard
- Camera-proctored session for integrity
- 60-second timer per question
- Instant pass/fail result with breakdown by category and difficulty

### 3. AI Interview with Rachel
- One-on-one voice interview with Rachel, Veraqon's AI interviewer
- Real-time speech recognition (Deepgram) + AI voice responses (ElevenLabs TTS)
- Questions personalized based on uploaded resume and role type
- Camera-on session with integrity monitoring
- Covers technical depth, behavioral patterns, and role-specific knowledge

### 4. Interview Results & Feedback
- Final score with verdict (pass/fail)
- Strengths and weaknesses breakdown
- Category-by-category scoring breakdown
- Candidate feedback form (confidential, does not affect score)

### 5. Reference Check
- AI analyzes interview performance and work history
- Identifies the most relevant previous employer for reference
- Candidate provides referee contact (must be corporate email)
- System validates and sends reference request
- Eligibility check prevents invalid or personal-email references

### 6. Talent Pool & Verification
- Verified candidates are added to the Veraqon talent pool
- Searchable summary generated from assessment results
- Profile visible to matched enterprises
- No repeat interviews for new job opportunities

### 7. Active Jobs & Applications
- Browse active job posts matched to your profile
- Apply with existing verified profile
- Job-specific pre-assessment per application
- Job-specific AI interview with Rachel
- Track application stages (pre-assessment → interview → hired/rejected)

### 8. Progress Dashboard
- Full pipeline view: Profile → Pre-Assessment → AI Interview → Reference Check
- Assessment scores, interview results, and reference status in one place
- Enterprise interaction history (who contacted you, at what stage)

### 9. Profile Management
- Edit personal details, LinkedIn, portfolio
- View and update job preferences
- Access uploaded resume

---

## Enterprise Journey

### 1. Company Setup
- Create enterprise account
- Set company profile: name, website, industry, company size, location, description
- Supports all major industries (Technology, Healthcare, Finance, etc.)

### 2. Enterprise Dashboard
- Overview of all hiring interactions
- Active job queries and job posts at a glance
- Recent candidate interactions with stage indicators
- Quick access to create queries or job posts

### 3. Job Posts
- **Create Job Post:** Upload a job description document (PDF/DOCX) — AI parses and extracts:
  - Role title and description
  - Required skills
  - Experience range
  - Work mode (Remote / Hybrid / On-site)
  - Employment type (Full-time / Part-time / Contract / Freelance)
  - Salary range and currency
  - Location
  - Candidate count target
  - Job category (Technology, Marketing, Sales, Finance, Design, etc.)
- **Edit Job Post:** Modify any field after creation
- **Job Post Detail:** Full view of a published job post
- **Talent Match:** View pre-interviewed candidates matched to this job post, filter by search

### 4. Talent Queries
- Create enterprise queries specifying role requirements
- System matches against verified talent pool instantly
- View matched candidate profiles ranked by assessment scores

### 5. Talent Profiles
- Full candidate profile: name, summary, skills, experience years
- Assessment breakdown with category scores
- Work experience and education history
- Resume access and LinkedIn/portfolio links
- Technical score and AI-generated recommendations
- Shortlist candidates directly from profile
- Send interaction message to initiate contact

### 6. Hiring Pipeline
- Track all candidate interactions by stage:
  - **Requested** — initial contact initiated
  - **Contacted** — candidate engaged
  - **Hired** — offer extended and accepted
  - **Rejected** — not moving forward
- Full interaction history per candidate

### 7. Pool Profiles
- Browse verified talent pool profiles across the platform
- Filter by role, skills, availability

### 8. Application Talent Pool
- View candidates who applied through specific job posts
- Manage applicants through their assessment and interview stages

---

## AI Features

| Feature | Description |
|---|---|
| **Rachel — AI Interviewer** | Real-time voice AI conducting personalized interviews via WebSocket, ElevenLabs TTS, and Deepgram STT |
| **Resume Intelligence** | Automated parsing, skill extraction, experience scoring, and role-fit analysis |
| **Job Description Parser** | Upload any JD document — AI extracts all role parameters automatically |
| **Talent Matching** | AI matches verified candidates to job posts based on skills, experience, and assessment scores |
| **Reference Check AI** | Analyzes interview performance and work history to identify and validate the optimal reference |
| **Pre-Assessment Engine** | Adaptive MCQ screening with difficulty levels and category breakdowns |
| **Integrity Monitoring** | Camera-proctored sessions with screen activity awareness |

---

## Public Pages

| Page | Description |
|---|---|
| `/` | Landing page — dual mode for Talent and Enterprise |
| `/jobs/:jobPostId` | Public job post view — shareable link for candidates |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/cookies` | Cookie policy |
| `/contact` | Contact page |

---

## Tech Stack

### Frontend
| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router v7 |
| Server State | TanStack Query |
| Global State | Zustand |
| HTTP Client | Axios |
| Real-time | Socket.io Client |
| UI Components | Headless UI / shadcn |

### Backend (separate service)
| Layer | Technology |
|---|---|
| Runtime | Node.js v20+ (TypeScript) |
| Framework | Express.js |
| Database | PostgreSQL + Prisma ORM |
| Auth | JWT + bcrypt |
| Validation | Zod |
| Real-time | Socket.io |
| Queue | Redis + BullMQ |
| File Storage | R2 / S3 |
| AI Inference | Python FastAPI (separate microservice) |
| Hosting | EC2 with Docker |

---

## User Roles

| Role | Access |
|---|---|
| `talent` | Full candidate flow — onboarding, assessments, interviews, job applications |
| `enterprise` | Full enterprise flow — job posts, queries, talent matching, hiring pipeline |
| `hr` | Same access as enterprise, scoped to their organization |

---

## Getting Started

### Prerequisites
- Node.js v20+
- pnpm

### Install & Run

```bash
pnpm install
pnpm dev
```

### Build

```bash
pnpm build
```

### Docker

```bash
docker-compose up
```

---

## Environment

Configure the required environment variables before running:

```env
VITE_API_URL=          # Backend API base URL
VITE_SOCKET_URL=       # WebSocket server URL
```

---

## Key Flows at a Glance

```
Candidate
  Sign up → Onboard (resume) → Pre-Assessment → AI Interview (Rachel)
  → Feedback → Reference Check → Verified in Pool
  → Browse Jobs → Apply → Job Pre-Assessment → Job Interview → Hired

Enterprise
  Sign up → Company Setup → Create Job Post / Query
  → AI Talent Match → View Profiles → Shortlist → Hire
```

---

*Veraqon — Verify once. Hire with confidence.*
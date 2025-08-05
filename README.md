# ClientBench Application

A full-stack financial performance analysis and benchmarking tool for comparing client companies against their competitors. Features secure authentication through Neudesic's Azure Active Directory.

## Features

- **Secure Authentication**: Azure AD integration requiring Neudesic credentials
- **Comprehensive Financial Analysis**: Track and compare 6 categories of financial metrics
  - Basic Financials (Revenue, Margins, EPS)
  - Capital Efficiency (ROE, ROA, ROIC)
  - Cost Structure (COGS, SG&A, R&D as % of revenue)
  - Growth Metrics (Revenue growth, Net income growth)
  - Liquidity & Solvency (Current ratio, Debt-to-equity)
  - Valuation Metrics (P/E, EV/EBITDA, Market cap)

- **Interactive Dashboard**: Modern UI with sidebar navigation and responsive design
- **Data Management**: Manual financial data entry with refresh tracking
- **Competitor Analysis**: Support for up to 5 competitors per client
- **Historical Data**: Up to 5 years of historical financial data

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Router** for navigation
- **Lucide React** for icons
- **Recharts** for data visualization
- **Azure Static Web Apps** for hosting with authentication

### Backend
- **Python FastAPI** for REST API
- **Pydantic** for data validation
- **Uvicorn** ASGI server
- **PostgreSQL** database (planned)
- **Alpha Vantage API** integration (planned)

### Authentication & Security
- **Azure Active Directory** (Entra ID) integration
- **Azure Static Web Apps** authentication
- Neudesic organizational directory access control

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── layout/       # Layout components
│   │   └── AuthButton.tsx # Authentication component
│   ├── contexts/
│   │   └── AuthContext.tsx # Authentication context
│   ├── pages/            # Page components
│   ├── types/            # TypeScript type definitions
│   │   ├── financial.ts  # Financial data types
│   │   └── auth.ts       # Authentication types
│   ├── data/             # Mock data and utilities
│   └── lib/              # Utility functions
├── backend/
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
├── public/
│   └── staticwebapp.config.json # Azure SWA configuration
├── staticwebapp.config.local.json # Local development config
├── swa-cli.config.json     # SWA CLI configuration
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.8+
- npm or yarn
- Azure Static Web Apps CLI (`@azure/static-web-apps-cli`)
- Access to Neudesic's Azure Active Directory

### Development Setup

#### Option 1: Mock Authentication (Quick Start)

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server with mock auth:**
```bash
# Uses mock authentication for local development
npm run dev
```

The app will be available at `http://localhost:5173` with a mock user.

#### Option 2: Real Azure Authentication (Testing Production Auth)

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
Create `.env.swa` file with:
```bash
AAD_CLIENT_ID=9ecaba66-363e-48f6-9016-c541a5eb6652
AAD_CLIENT_SECRET=your-client-secret-here
```

3. **Configure mock auth setting:**
In `.env.local`, set:
```bash
VITE_MOCK_AUTH=false
```

4. **Start development server with real auth:**
```bash
# Requires environment variables to be set in terminal session
$env:AAD_CLIENT_ID="9ecaba66-363e-48f6-9016-c541a5eb6652"
$env:AAD_CLIENT_SECRET="your-client-secret-here"
npm run dev:auth
```

The app will be available at `http://localhost:4280` with real Azure AD authentication.

### Backend Setup

1. **Navigate to the backend directory:**
```bash
cd backend
```

2. **Create a virtual environment:**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies:**
```bash
pip install -r requirements.txt
```

4. **Start the FastAPI server:**
```bash
python main.py
```

The API will be available at `http://localhost:8000`
API documentation: `http://localhost:8000/docs`

## Available Scripts

### Frontend Development
- `npm run dev` - Start development server with mock authentication
- `npm run dev:auth` - Start development server with real Azure AD authentication
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Deployment
- `npm run deploy` - **Build and deploy to Azure in one command** 🚀
- `npm run swa:build` - Build only
- `npm run swa:deploy` - Deploy only (assumes already built)

### Backend
- `python main.py` - Start FastAPI server
- `uvicorn main:app --reload` - Start with auto-reload

## Deployment to Azure

### Prerequisites
- Azure subscription access
- Azure Static Web Apps CLI installed
- App Registration configured in Neudesic's Azure AD

### Quick Deployment

**Single command to build and deploy:**
```bash
npm run deploy
```

This command will:
1. Build the React application
2. Deploy to Azure Static Web Apps
3. Apply authentication configuration

### Manual Deployment

1. **Build the application:**
```bash
npm run build
```

2. **Deploy to Azure:**
```bash
swa deploy ./dist --subscription-id 84ea2871-4923-4a42-96a7-5b44d005cad6 --resource-group rg-inno-demos --app-name ClientBench
```

### Azure Configuration

The application is configured with:
- **Subscription**: `84ea2871-4923-4a42-96a7-5b44d005cad6`
- **Resource Group**: `rg-inno-demos`
- **App Name**: `ClientBench`
- **Location**: `eastus2`

## Authentication Details

### Azure AD Configuration
- **Tenant ID**: `a2a056bc-ad26-403c-8a65-4cf11b90761b`
- **Client ID**: `9ecaba66-363e-48f6-9016-c541a5eb6652`
- **Access**: All authenticated Neudesic users
- **Login Provider**: Azure Active Directory (Entra ID)
- **App Registration**: [View in Azure Portal](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/~/Overview/appId/9ecaba66-363e-48f6-9016-c541a5eb6652/objectId/29e307c8-8d44-4d66-a394-d582a59bbdb2/isMSAApp~/false/defaultBlade/Overview/appSignInAudience/AzureADMyOrg/servicePrincipalCreated~/true)

### Redirect URIs
- **Production**: `https://clientbench.azurestaticapps.net/.auth/login/aad/callback`
- **Local Development**: `http://localhost:4280/.auth/login/aad/callback`

### Authentication Flow
1. User accesses the application
2. Automatic redirect to Azure AD login
3. User signs in with Neudesic credentials
4. Redirect back to application with authentication
5. User information displayed in header

## Environment Configuration

### Production (`staticwebapp.config.json`)
- Uses `clientId` directly in configuration
- Deployed to Azure Static Web Apps
- Real Azure AD authentication

### Local Development (`staticwebapp.config.local.json`)
- Uses environment variables for secrets
- SWA CLI emulator for local testing
- Supports both mock and real authentication

### Environment Variables
- `VITE_MOCK_AUTH` - Enable/disable mock authentication
- `AAD_CLIENT_ID` - Azure AD Application ID (for local testing)
- `AAD_CLIENT_SECRET` - Azure AD Client Secret (for local testing)

## Troubleshooting

### Common Issues

1. **"Connection refused" on localhost:4280**
   - Ensure SWA CLI is properly started
   - Check that environment variables are set
   - Try `npm run dev:auth`

2. **Schema validation errors**
   - Ensure `clientId` is inside the `registration` object
   - Check `staticwebapp.config.json` format

3. **Authentication not working**
   - Verify redirect URIs in App Registration
   - Check tenant and client IDs
   - Ensure user has access to Neudesic directory

### Support
- Check Azure portal for deployment logs
- Review SWA CLI output for errors
- Verify App Registration configuration in Azure AD
├── backend/
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.8+
- npm or yarn

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Start the FastAPI server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`
API documentation: `http://localhost:8000/docs`

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `python main.py` - Start FastAPI server
- `uvicorn main:app --reload` - Start with auto-reload

## Current Implementation Status

### ✅ Completed

- [x] Frontend project setup with Vite + React + TypeScript
- [x] Tailwind CSS and shadcn/ui integration
- [x] Basic UI components (Button, Card, etc.)
- [x] Sidebar navigation and layout
- [x] Page structure (Summary, Financial Performance, News, Industry KPIs)
- [x] TypeScript type definitions for financial data
- [x] Mock data structure with sample companies
- [x] Basic FastAPI backend setup
- [x] CORS configuration for frontend-backend communication
- [x] **Azure Active Directory authentication integration**
- [x] **Production deployment to Azure Static Web Apps**
- [x] **Local development with real Azure authentication**

### 🚧 In Progress

- [ ] Interactive data visualizations with Recharts
- [ ] Financial data entry forms
- [ ] Company and competitor management
- [ ] Data refresh functionality

### 📋 Planned

- [ ] PostgreSQL database integration
- [ ] Alpha Vantage API integration
- [ ] News and events data
- [ ] Industry KPI calculations
- [ ] Export functionality
- [ ] Role-based access control
- [ ] Advanced authentication features

## API Endpoints

### Current Endpoints

- `GET /api/companies` - Get all companies
- `GET /api/companies/clients` - Get client companies
- `GET /api/companies/competitors` - Get competitor companies
- `GET /api/financial-data` - Get all financial data
- `GET /api/financial-data/{ticker}` - Get financial data by ticker
- `POST /api/financial-data/{ticker}` - Update financial data

### Authentication Endpoints (Azure SWA)

- `GET /.auth/me` - Get current user information
- `GET /.auth/login/aad` - Initiate Azure AD login
- `GET /.auth/logout` - Logout current user

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Submit a pull request

## Security Notes

- Never commit `.env.swa` or client secrets to version control
- Client secret expires on **February 1, 2026** - renewal required
- All routes require authentication except Azure auth endpoints
- Production uses Azure Static Web Apps built-in authentication

## License

This project is licensed under the MIT License.

---

## Quick Reference

### 🚀 One-Command Deploy
```bash
npm run deploy
```

### 🔐 Test Real Auth Locally
```bash
$env:AAD_CLIENT_ID="9ecaba66-363e-48f6-9016-c541a5eb6652"
$env:AAD_CLIENT_SECRET="your-secret-here"
npm run dev:auth
```

### 🛠️ Quick Development Start
```bash
npm install
npm run dev
```

**Production URL**: [https://clientbench.azurestaticapps.net](https://clientbench.azurestaticapps.net)

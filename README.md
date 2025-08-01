# ClientBench Application

A full-stack financial performance analysis and benchmarking tool for comparing client companies against their competitors.

## Features

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
- **Recharts** for data visualization (to be implemented)

### Backend
- **Python FastAPI** for REST API
- **Pydantic** for data validation
- **Uvicorn** ASGI server
- **PostgreSQL** database (planned)
- **Alpha Vantage API** integration (planned)

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # shadcn/ui components
│   │   │   └── layout/       # Layout components
│   │   ├── pages/            # Page components
│   │   ├── types/            # TypeScript type definitions
│   │   ├── data/             # Mock data and utilities
│   │   └── lib/              # Utility functions
│   └── ...
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
- [ ] User authentication
- [ ] Deployment to Azure

## API Endpoints

### Current Endpoints
- `GET /api/companies` - Get all companies
- `GET /api/companies/clients` - Get client companies
- `GET /api/companies/competitors` - Get competitor companies
- `GET /api/financial-data` - Get all financial data
- `GET /api/financial-data/{ticker}` - Get financial data by ticker
- `POST /api/financial-data/{ticker}` - Update financial data

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

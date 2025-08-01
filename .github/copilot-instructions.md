# Copilot Instructions for ClientBench Application

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a full-stack ClientBench application that helps analyze and compare financial performance data between clients and their competitors.

## Frontend Architecture
- **Framework**: React with TypeScript, built with Vite
- **UI Framework**: shadcn/ui components with Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React hooks (Context API for global state when needed)
- **Charts**: Recharts library for data visualization

## Backend Architecture (To be implemented)
- **Framework**: Python FastAPI
- **Database**: PostgreSQL (currently using mock JSON data)
- **API**: RESTful API design
- **Data Sources**: Alpha Vantage API integration (planned)

## Code Conventions
- Use TypeScript for type safety
- Follow React functional component patterns with hooks
- Use shadcn/ui components consistently
- Implement proper error handling and loading states
- Follow the established folder structure:
  - `/src/components/ui/` - Reusable UI components
  - `/src/components/layout/` - Layout components
  - `/src/pages/` - Page components
  - `/src/types/` - TypeScript type definitions
  - `/src/data/` - Mock data and data utilities
  - `/src/lib/` - Utility functions

## Financial Data Structure
- Companies can be either clients or competitors
- Financial metrics are organized into categories: Basic Financials, Capital Efficiency, Cost Structure, Growth Metrics, Liquidity & Solvency, and Valuation
- Support for historical data (up to 5 years)
- All financial data should include proper TypeScript types

## Visualization Requirements
- Use Recharts for all chart implementations
- Support multiple chart types: line charts, bar charts, scatter plots, area charts
- Include interactive features like tooltips, filters, and drill-down capabilities
- Implement responsive design for all visualizations
- Color coding for positive/negative changes (green/red)

## Features to Implement
- Manual financial data entry forms
- Company and competitor management
- Data refresh functionality with timestamps
- Comprehensive financial metric calculations
- Interactive charts and comparisons
- Export functionality (future enhancement)
- News and events integration (future enhancement)

## Best Practices
- Always use proper TypeScript types
- Implement proper error boundaries
- Use consistent naming conventions
- Add loading states for async operations
- Ensure accessibility (ARIA labels, keyboard navigation)
- Follow responsive design principles
- Write clean, maintainable code with proper comments

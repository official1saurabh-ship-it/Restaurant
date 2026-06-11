# RestaurantMitra — Restaurant Management Software

A marketing landing website for **RestaurantMitra**, a SaaS restaurant management platform built for Indian restaurants, dhabas, cafes, and cloud kitchens.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4 with PostCSS
- **Routing:** React Router DOM 7
- **Linting:** ESLint 9

## Getting Started

```bash
npm install
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Features (Marketing Site)

The site showcases the RestaurantMitra platform modules:

- POS Billing with GST compliance
- Kitchen Display System (KDS)
- Table Management with visual grid
- Inventory Management with auto stock deduction
- CRM & Loyalty Programs
- Reports & Analytics
- Staff & HR Management

All CTA buttons link to the live application at [restaurants.biosoftech.in](https://restaurants.biosoftech.in).

## Project Structure

```
src/
  main.jsx                          # Entry point
  App.jsx                           # Router with 11 routes
  index.css                         # Design system (Tailwind + custom tokens)
  Restaurants.jsx                   # Landing page
  components/
    Layout.jsx                      # Shared layout (navbar, footer, toast)
  pages/
    POSBillingPage.jsx              # /pos
    KitchenDisplayPage.jsx          # /kds
    TableManagementPage.jsx         # /tables
    InventoryPage.jsx               # /inventory
    CRM-LayoutPage.jsx              # /crm
    ReportsPage.jsx                 # /reports
    ContactPage.jsx                 # /contact
    PrivacyPolicyPage.jsx           # /privacy
    TermsofServicePage.jsx          # /terms
    RefundPolicyPage.jsx            # /refund
    SecurityPage.jsx                # /security
```

## License

Proprietary — © RestaurantMitra Technologies Pvt. Ltd.

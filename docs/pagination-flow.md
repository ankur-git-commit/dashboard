# Pagination Flow: Frontend to Backend with Supabase

## Overview
The pagination system combines React-based frontend (@tanstack/react-table) with Supabase backend, using a controller layer in between.

## Flow

1. **Frontend Initialization (`OrderSearchForm.jsx`)**
   - Maintains pagination state:
     ```javascript
     const [currentPage, setCurrentPage] = useState(0);
     const [perPage, setPerPage] = useState(20);
     ```

2. **API Call (`OrderSearchForm.jsx`)**
   - When fetching orders, sends pagination parameters:
     ```javascript
     queryParams.append("page", page);
     queryParams.append("per_page", perPage);
     ```

3. **Backend Controller (`ordersController.js`)**
   - Processes pagination parameters:
     ```javascript
     const page = parseInt(req.query.page, 10) || 0;
     const per_page = parseInt(req.query.per_page, 10) || 20;
     const from = page * per_page;
     const to = from + per_page - 1;
     ```
   - Uses Supabase range-based pagination:
     ```javascript
     let query = supabase.from("orders").select("*")
     query = applyFilters(query)
     const paginatedQuery = query.range(from, to).limit(per_page);
     ```

4. **Results Display (`OrderResults.jsx`)**
   - Receives paginated data and metadata:
     ```javascript
     {
       data: [], // Current page records
       currentPage: 0,
       totalPages: 0,
       totalRecords: 0
     }
     ```
   - Handles navigation through:
     - Next/Previous buttons
     - Direct page input
     - Page size selection

## Key Components

1. **Supabase Range Pagination**
   - Uses SQL LIMIT/OFFSET internally
   - Range-based selection: `range(from, to)`
   - Returns exact count of total records

2. **TanStack Table Integration**
   - Handles data display and client-side operations
   - Provides table structure and row management
   - Supports custom pagination controls

3. **State Management**
   - Page number (0-based)
   - Records per page
   - Total records count
   - Total pages calculation

## Navigation Controls

- Previous Page: `currentPage - 1`
- Next Page: `currentPage + 1`
- Direct Page Input: Validates and converts to 0-based index
- Disabled States:
  - Previous: when `currentPage === 0`
  - Next: when `currentPage >= totalPages - 1`
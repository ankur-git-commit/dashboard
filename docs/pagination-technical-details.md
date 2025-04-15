# Detailed Pagination Implementation Guide

## 1. Frontend State Management

### Core Pagination State (`OrderSearchForm.jsx`)
```javascript
// Primary pagination state
const [currentPage, setCurrentPage] = useState(0);  // 0-based page index
const [perPage, setPerPage] = useState(20);        // Records per page
const [isLoading, setIsLoading] = useState(false); // Loading state

// Results state
const [resultData, setResultData] = useState({
    data: [],           // Current page records
    count: 0,          // Total records
    page: 0,           // Current page
    per_page: 20,      // Records per page
    total_pages: 0     // Total available pages
});
```

### API Request Formation
```javascript
const fetchOrders = async (page) => {
    setIsLoading(true);
    const queryParams = new URLSearchParams();
    
    // Pagination parameters
    queryParams.append("page", page);
    queryParams.append("per_page", perPage);
    
    // Filter parameters (if any)
    if (orderId) queryParams.append("id", orderId);
    if (recipientSearch) queryParams.append("customers", recipientSearch);
    // ... other filters

    try {
        const response = await axios.get(`/api/orders/?${queryParams.toString()}`);
        setResultData(response.data);
        setCurrentPage(response.data.page);
    } catch (error) {
        // Error handling
    } finally {
        setIsLoading(false);
    }
};
```

## 2. Backend Implementation

### Controller Logic (`ordersController.js`)
```javascript
const orderLookup = expressAsyncHandler(async (req, res) => {
    // Parse pagination parameters
    const page = parseInt(req.query.page, 10) || 0;
    const per_page = parseInt(req.query.per_page, 10) || 20;
    
    // Calculate range for Supabase
    const from = page * per_page;
    const to = from + per_page - 1;

    // Build query with filters
    let query = supabase.from("orders").select("*");
    query = applyFilters(query);  // Apply any search filters

    // Apply pagination
    const paginatedQuery = query.range(from, to).limit(per_page);

    // Get total count for pagination metadata
    let countQuery = supabase.from("orders")
        .select("*", { count: "exact", head: true });
    countQuery = applyFilters(countQuery);
    const { count } = await countQuery;

    // Execute paginated query
    const { data, error } = await paginatedQuery;

    // Return response with pagination metadata
    res.status(200).json({
        success: true,
        count: count || 0,
        page: Number(page),
        per_page: Number(per_page),
        total_pages: Math.ceil((count || 0) / per_page),
        data: data || []
    });
});
```

## 3. TanStack Table Integration (`OrderResults.jsx`)

### Table Configuration
```javascript
const table = useReactTable({
    data,                           // Current page data
    columns,                        // Column definitions
    getCoreRowModel: getCoreRowModel(),
});
```

### Pagination Controls
```javascript
// Previous Page Button
<button
    onClick={() => onPageChange(currentPage - 1)}
    disabled={currentPage === 0 || isLoading}
    className="rounded border px-2 py-1 disabled:opacity-50"
>
    {"<"}
</button>

// Page Input
<input
    type="number"
    min="1"
    max={totalPages || 1}
    defaultValue={currentPage + 1}
    onChange={(e) => {
        const page = e.target.value ? Number(e.target.value) - 1 : 0;
        if (page >= 0 && page < totalPages) {
            onPageChange(page);
        }
    }}
    className="w-16 rounded border text-center"
/>

// Next Page Button
<button
    onClick={() => onPageChange(currentPage + 1)}
    disabled={currentPage >= totalPages - 1 || isLoading}
    className="rounded border px-2 py-1 disabled:opacity-50"
>
    {">"}
</button>
```

## 4. Example Request/Response Flow

### Request
```http
GET /api/orders/?page=2&per_page=20&customers=John&products=Storage
```

### Response
```json
{
    "success": true,
    "count": 156,          // Total records matching filters
    "page": 2,            // Current page (0-based)
    "per_page": 20,       // Records per page
    "total_pages": 8,     // Total available pages
    "data": [             // Page records
        {
            "id": "41",
            "customers": "John Doe",
            "products": "Storage",
            "order_total": "150.00",
            "date_purchased": "2024-03-15",
            "order_status": "Paid"
        },
        // ... more records
    ]
}
```

## 5. Supabase Pagination Details

Supabase uses PostgreSQL's LIMIT/OFFSET pagination under the hood, but exposes it through a more convenient range API:

```javascript
// This Supabase query:
.range(from, to).limit(per_page)

// Translates to SQL:
SELECT * FROM orders
OFFSET ${from}
LIMIT ${per_page}
```

### Benefits of Range-based Pagination
- More intuitive API for calculating ranges
- Automatic handling of LIMIT/OFFSET
- Built-in support for counting total records
- Efficient query execution

### Limitations
- Performance can degrade with large offsets
- Should consider implementing cursor-based pagination for very large datasets

const services = [
    {
      "products": "Scan (up to 10 pages)",
      "count": 130
    },
    {
      "products": "Green Plan 30",
      "count": 6
    },
    {
      "products": "Storage",
      "count": 161
    },
    {
      "products": "Business Blue Plan 60",
      "count": 4
    },
    {
      "products": "Business Green Plan 30 Renewal, Storage",
      "count": 1
    },
    {
      "products": "Business Green Plan 30 Renewal (Prestige)",
      "count": 16
    },
    {
      "products": "Green Plan 30 Yearly",
      "count": 3
    },
    {
      "products": "Consolidate Item(s)",
      "count": 24
    },
    {
      "products": "Green Plan 30 (Prestige)",
      "count": 1
    },
    {
      "products": "Shred (from bundle of 5)",
      "count": 4
    },
    {
      "products": "Business Green Plan 30",
      "count": 16
    },
    {
      "products": "Scan and Shred (up to 10 pages)",
      "count": 3
    },
    {
      "products": "Office 60 Renewal",
      "count": 8
    },
    {
      "products": "Business Green Plan 30 Yearly",
      "count": 26
    },
    {
      "products": "Green Plan 30",
      "count": 110
    },
    {
      "products": "Green Plan 30 Yearly Renewal",
      "count": 1
    },
    {
      "products": "Consolidation With Removal Of Invoice",
      "count": 1
    },
    {
      "products": "Business Green Plan 30 Renewal",
      "count": 417
    },
    {
      "products": "Office 60",
      "count": 4
    },
    {
      "products": "Ship Item(s)",
      "count": 64
    },
    {
      "products": "Shred (from bundle of 20)",
      "count": 3
    },
    {
      "products": "Shred (up to 10 pages)",
      "count": 14
    },
    {
      "products": "Scan (from bundle of 20)",
      "count": 10
    },
    {
      "products": "Scan (from bundle of 5)",
      "count": 22
    },
    {
      "products": "Office 60 Yearly",
      "count": 1
    },
    {
      "products": "Green Plan 30 Renewal",
      "count": 283
    },
    {
      "products": "Business Blue Plan 60 Renewal",
      "count": 2
    },
    {
      "products": "Green Plan 30 Yearly",
      "count": 15
    },
    {
      "products": "Business Green Plan 30 Yearly",
      "count": 4
    },
    {
      "products": "Schedule Pickup",
      "count": 40
    },
    {
      "products": "Business Green Plan 30 Yearly Renewal",
      "count": 4
    },
    {
      "products": "Shred Page(s)",
      "count": 15
    },
    {
      "products": "One Time Payment For Services Rendered",
      "count": 1
    },
    {
      "products": "Business Green Plan 30",
      "count": 90
    }
  ]


let products = []

services.map(item => {
  products.push({product: item.products})
})

export default products
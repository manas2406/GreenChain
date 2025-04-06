"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, ArrowUpDown, Leaf } from "lucide-react"

// Mock data for carbon credits
const carbonCredits = [
  {
    id: "1",
    title: "Reforestation Project",
    organization: "Green Earth Initiative",
    location: "Brazil",
    type: "Forestry",
    price: 25,
    available: 500,
    verified: true,
    description:
      "This project focuses on reforestation of degraded lands in the Amazon rainforest, helping to sequester carbon and restore biodiversity.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Solar Energy Farm",
    organization: "Renewable Future",
    location: "India",
    type: "Renewable Energy",
    price: 30,
    available: 350,
    verified: true,
    description:
      "A large-scale solar farm that replaces fossil fuel electricity generation, reducing greenhouse gas emissions and providing clean energy.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Wind Power Project",
    organization: "Clean Air Alliance",
    location: "Germany",
    type: "Renewable Energy",
    price: 28,
    available: 200,
    verified: true,
    description:
      "This wind power project generates clean electricity, displacing fossil fuel-based power generation and reducing carbon emissions.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "Methane Capture",
    organization: "Sustainable Solutions",
    location: "United States",
    type: "Methane Reduction",
    price: 22,
    available: 150,
    verified: true,
    description:
      "This project captures methane from landfills and converts it into clean energy, preventing this potent greenhouse gas from entering the atmosphere.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    title: "Mangrove Restoration",
    organization: "Coastal Conservation Group",
    location: "Indonesia",
    type: "Blue Carbon",
    price: 35,
    available: 100,
    verified: true,
    description:
      "Restoration of mangrove ecosystems that sequester carbon at rates up to four times higher than tropical forests while protecting coastal communities.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    title: "Improved Cookstoves",
    organization: "Community Development Initiative",
    location: "Kenya",
    type: "Energy Efficiency",
    price: 18,
    available: 300,
    verified: true,
    description:
      "Distribution of efficient cookstoves that reduce fuel consumption and greenhouse gas emissions while improving indoor air quality for families.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 50])
  const [sortBy, setSortBy] = useState("price-asc")
  const [filterType, setFilterType] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  // Filter and sort the carbon credits
  const filteredCredits = carbonCredits
    .filter((credit) => {
      // Search term filter
      const matchesSearch =
        credit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        credit.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        credit.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        credit.type.toLowerCase().includes(searchTerm.toLowerCase())

      // Price range filter
      const matchesPrice = credit.price >= priceRange[0] && credit.price <= priceRange[1]

      // Type filter
      const matchesType = filterType === "all" || credit.type === filterType

      return matchesSearch && matchesPrice && matchesType
    })
    .sort((a, b) => {
      // Sort by price or availability
      if (sortBy === "price-asc") return a.price - b.price
      if (sortBy === "price-desc") return b.price - a.price
      if (sortBy === "available-asc") return a.available - b.available
      if (sortBy === "available-desc") return b.available - a.available
      return 0
    })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Carbon Credit Marketplace</h1>
          <p className="text-muted-foreground">Browse and purchase verified carbon credits</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects, organizations, or locations..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="md:w-auto" onClick={() => setShowFilters(!showFilters)}>
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-[180px]">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="available-asc">Availability: Low to High</SelectItem>
            <SelectItem value="available-desc">Availability: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {showFilters && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filter Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Project Type</h3>
              <Tabs value={filterType} onValueChange={setFilterType}>
                <TabsList className="grid grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="all">All Types</TabsTrigger>
                  <TabsTrigger value="Forestry">Forestry</TabsTrigger>
                  <TabsTrigger value="Renewable Energy">Renewable Energy</TabsTrigger>
                  <TabsTrigger value="Energy Efficiency">Energy Efficiency</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Price Range ($ per credit)</h3>
                <span className="text-sm text-muted-foreground">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <Slider defaultValue={[0, 50]} max={50} step={1} value={priceRange} onValueChange={setPriceRange} />
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCredits.map((credit) => (
          <Card key={credit.id} className="overflow-hidden">
            <img src={credit.image || "/placeholder.svg"} alt={credit.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{credit.title}</CardTitle>
                  <CardDescription>{credit.organization}</CardDescription>
                </div>
                {credit.verified && (
                  <div className="flex items-center text-green-600">
                    <Leaf className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Location:</span>
                  <span>{credit.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Type:</span>
                  <span>{credit.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Price per Credit:</span>
                  <span className="font-medium">${credit.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Available:</span>
                  <span>{credit.available} credits</span>
                </div>
                <p className="text-sm mt-4 line-clamp-3">{credit.description}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/marketplace/${credit.id}`}>
                <Button variant="outline">View Details</Button>
              </Link>
              <Button>Purchase</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredCredits.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No carbon credits found</h3>
          <p className="text-muted-foreground">Try adjusting your filters or search term</p>
        </div>
      )}
    </div>
  )
}


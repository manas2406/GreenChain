"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Leaf, MapPin, Calendar, Building, FileText, Check } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

// Mock data for a single carbon credit project
const projectData = {
  id: "1",
  title: "Reforestation Project",
  organization: "Green Earth Initiative",
  location: "Brazil",
  type: "Forestry",
  price: 25,
  available: 500,
  verified: true,
  verificationStandard: "Verified Carbon Standard (VCS)",
  startDate: "2020-01-15",
  endDate: "2050-01-15",
  description:
    "This project focuses on reforestation of degraded lands in the Amazon rainforest, helping to sequester carbon and restore biodiversity. The project involves planting native tree species and working with local communities to ensure sustainable forest management practices.",
  longDescription:
    "The Amazon Reforestation Project aims to restore 5,000 hectares of degraded forest land in the Brazilian Amazon. By planting a diverse mix of native tree species, the project will sequester carbon dioxide from the atmosphere, helping to mitigate climate change while also restoring vital habitat for endangered species.\n\nThe project works closely with local communities, providing sustainable livelihoods and training in forest management. This ensures the long-term success of the reforestation efforts and creates positive social impacts alongside the environmental benefits.\n\nEach carbon credit represents one metric ton of CO2 equivalent that has been sequestered through the growth of these trees. The project is verified under the Verified Carbon Standard (VCS), ensuring that the carbon sequestration is real, additional, and permanent.",
  impact:
    "Environmental Impact: Restoration of biodiversity, improved water quality, soil conservation, and carbon sequestration.\n\nSocial Impact: Employment for local communities, training in sustainable forestry practices, and improved livelihoods.\n\nClimate Impact: Each credit represents 1 metric ton of CO2 equivalent sequestered from the atmosphere.",
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  documents: [
    { name: "Project Design Document", url: "#" },
    { name: "Verification Report", url: "#" },
    { name: "Monitoring Report", url: "#" },
  ],
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("overview")
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  const totalPrice = quantity * projectData.price

  const handlePurchase = () => {
    if (!user) {
      setShowLoginDialog(true)
    } else if (user.type === "company") {
      // Handle purchase logic for company
      alert(`Purchase successful! You've bought ${quantity} credits for $${totalPrice.toFixed(2)}`)
      router.push("/dashboard/company")
    } else {
      // NGOs can't purchase
      alert("Only companies can purchase carbon credits.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/marketplace">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Marketplace
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="relative">
              <img
                src={projectData.images[activeImageIndex] || "/placeholder.svg"}
                alt={projectData.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              {projectData.verified && (
                <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center">
                  <Leaf className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Verified</span>
                </div>
              )}
            </div>
            <div className="flex mt-4 space-x-2 overflow-x-auto">
              {projectData.images.map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${projectData.title} ${index + 1}`}
                  className={`h-20 w-20 object-cover rounded cursor-pointer ${
                    activeImageIndex === index ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{projectData.title}</h1>
            <div className="flex items-center text-muted-foreground mb-4">
              <Building className="h-4 w-4 mr-1" />
              <span className="mr-4">{projectData.organization}</span>
              <MapPin className="h-4 w-4 mr-1" />
              <span>{projectData.location}</span>
            </div>
            <p className="text-lg mb-4">{projectData.description}</p>
          </div>

          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Project Type</h3>
                  <p>{projectData.type}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Verification Standard</h3>
                  <p>{projectData.verificationStandard}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Start Date</h3>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <p>{new Date(projectData.startDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">End Date</h3>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <p>{new Date(projectData.endDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Detailed Description</h3>
                <p className="whitespace-pre-line">{projectData.longDescription}</p>
              </div>
            </TabsContent>
            <TabsContent value="impact" className="mt-4">
              <div className="space-y-4">
                <p className="whitespace-pre-line">{projectData.impact}</p>
              </div>
            </TabsContent>
            <TabsContent value="documents" className="mt-4">
              <div className="space-y-4">
                <h3 className="font-medium">Verification Documents</h3>
                <div className="space-y-2">
                  {projectData.documents.map((doc, index) => (
                    <div key={index} className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      <Link href={doc.url} className="text-primary hover:underline">
                        {doc.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Carbon Credits</CardTitle>
              <CardDescription>Each credit represents 1 metric ton of CO2 equivalent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Price per Credit:</span>
                <span className="font-bold text-lg">${projectData.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Available Credits:</span>
                <span>{projectData.available}</span>
              </div>
              <div className="space-y-2">
                <label htmlFor="quantity" className="block text-sm font-medium">
                  Quantity:
                </label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  max={projectData.available}
                  value={quantity}
                  onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                />
              </div>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="font-medium">Total:</span>
                <span className="font-bold text-lg">${totalPrice.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handlePurchase}>
                {user?.type === "company" ? "Purchase Credits" : "Sign In to Purchase"}
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Seller Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                  <Building className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">{projectData.organization}</h3>
                  <p className="text-sm text-muted-foreground">Verified Seller</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Verified Organization</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Secure Transactions</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Transparent Reporting</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Contact Seller
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign in Required</DialogTitle>
            <DialogDescription>You need to sign in as a company to purchase carbon credits.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Link href="/auth/company/signin" className="w-full">
              <Button className="w-full">Sign in as Company</Button>
            </Link>
            <Link href="/auth/company/signup" className="w-full">
              <Button variant="outline" className="w-full">
                Create Company Account
              </Button>
            </Link>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}


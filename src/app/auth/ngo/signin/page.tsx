"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wallet, Mail } from "lucide-react"
import { ethers } from "ethers"
import { MarketplaceABI } from "@/abi/MarketplaceABI" // Import your Marketplace ABI here

export default function NGOSignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [contract, setContract] = useState<ethers.Contract | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null) // New state for error message

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard
      window.location.href = "/dashboard/ngo"
    }, 1000)
  }

  const handleWalletConnect = async () => {
    setIsLoading(true)
    setErrorMessage(null) // Reset error message when starting connection attempt

    // Check if window.ethereum (MetaMask) is available
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request wallet connection (MetaMask) and trigger MetaMask to open
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

        if (accounts.length === 0) {
          // If no accounts are selected, display error message
          setErrorMessage("Please connect your MetaMask wallet to continue.")
          setIsLoading(false)
          return
        }

        // Create an ethers provider and signer instance
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()

        // Get the wallet address
        const address = await signer.getAddress()
        setWalletAddress(address)

        // Initialize the contract after wallet is connected
        const contractAddress = "YOUR_CONTRACT_ADDRESS" // Replace with your contract address
        const marketplaceContract = new ethers.Contract(contractAddress, MarketplaceABI, signer)

        // Set the contract state
        setContract(marketplaceContract)

        // Log the wallet address and contract initialization
        console.log("Wallet connected:", address)

        // Redirect to dashboard if wallet is successfully connected
        window.location.href = "/dashboard/ngo"

        setIsLoading(false)
      } catch (error) {
        console.error("Error connecting wallet:", error)
        // If the user denies the connection, set error message
        setErrorMessage("Failed to connect wallet. Please grant permission to connect.")
        setIsLoading(false)
      }
    } else {
      console.error("MetaMask is not installed.")
      setErrorMessage("MetaMask is not installed. Please install MetaMask to proceed.") // Set error message
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard/ngo"
    }, 1000)
  }

  return (
    <div className="container flex h-screen items-center justify-center">
      <Card className="mx-auto max-w-md w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign in as an NGO</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="wallet">Wallet</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <form onSubmit={handleEmailSignIn}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="/auth/forgot-password"
                        className="text-sm underline underline-offset-4 hover:text-primary"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  <Button variant="outline" type="button" onClick={handleGoogleSignIn} disabled={isLoading}>
                    <Mail className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="wallet">
              <div className="grid gap-4">
                <div className="text-center py-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect your crypto wallet to sign in. We support multiple blockchain networks.
                  </p>
                  {errorMessage && (
                    <div className="text-red-500 text-sm">{errorMessage}</div> // Show error message if any
                  )}
                </div>
                <Button variant="outline" className="w-full" onClick={handleWalletConnect} disabled={isLoading}>
                  <Wallet className="mr-2 h-4 w-4" />
                  {isLoading ? "Connecting..." : "Connect Wallet"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/auth/ngo/signup" className="underline underline-offset-4 hover:text-primary">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

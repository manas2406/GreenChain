import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Carbon Credit Marketplace
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Connect, trade, and make a positive impact on our planet.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/marketplace">
                <Button size="lg">Explore Marketplace</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Understanding Carbon Credits
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Carbon credits are a key tool in the fight against climate change.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>What are Carbon Credits?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Carbon credits are permits that represent 1 ton of carbon dioxide removed from the atmosphere or
                  prevented from being emitted. They are traded between organizations to offset carbon footprints.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How They Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Companies can purchase carbon credits to offset their emissions, while NGOs and environmental projects
                  generate credits by reducing, removing, or avoiding greenhouse gas emissions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Carbon credits create financial incentives for emissions reduction, support sustainable development,
                  and help organizations meet regulatory requirements and voluntary climate goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Our Marketplace Works</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                A transparent and efficient platform for carbon credit trading.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>For Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Purchase verified carbon credits to offset your emissions and meet sustainability goals. Track your
                  carbon footprint and demonstrate your commitment to climate action.
                </p>
                <div className="mt-4">
                  <Link href="/auth/company/signup">
                    <Button variant="outline" className="w-full">
                      Register as Company
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>For NGOs</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  List your verified carbon credits and connect with potential buyers. Showcase your environmental
                  projects and receive fair compensation for your climate impact.
                </p>
                <div className="mt-4">
                  <Link href="/auth/ngo/signup">
                    <Button variant="outline" className="w-full">
                      Register as NGO
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Blockchain-Powered</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our platform leverages blockchain technology to ensure transparency, traceability, and security in all
                  carbon credit transactions. Connect your crypto wallet for seamless trading.
                </p>
                <div className="mt-4">
                  <Link href="/about">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}


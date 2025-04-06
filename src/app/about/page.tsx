import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About Us</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our mission is to accelerate climate action through transparent carbon markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Carbon Credit Marketplace was founded with a simple yet powerful vision: to create a more accessible,
                transparent, and efficient way for organizations to participate in carbon markets.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                We recognized that while carbon credits are a crucial tool in the fight against climate change, the
                traditional markets were often opaque, fragmented, and inaccessible to many organizations that wanted to
                make a difference.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                By leveraging blockchain technology and creating a user-friendly platform, we've built a marketplace
                that connects companies looking to offset their carbon footprint directly with NGOs and projects that
                are making a real impact on the ground.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We believe that economic incentives aligned with environmental goals can drive meaningful change. Our
                mission is to accelerate climate action by making carbon markets more accessible, transparent, and
                effective.
              </p>
              <p className="text-gray-500 dark:text-gray-400">We're committed to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
                <li>Increasing participation in carbon markets by lowering barriers to entry</li>
                <li>Ensuring transparency and traceability in all transactions</li>
                <li>Supporting high-quality carbon projects that deliver real climate benefits</li>
                <li>Empowering organizations of all sizes to take climate action</li>
                <li>Accelerating the transition to a low-carbon economy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
                  <CardTitle className="text-center">Team Member {i}</CardTitle>
                  <CardDescription className="text-center">Position</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Technology</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Our platform leverages blockchain technology to ensure transparency, traceability, and security in all
                  carbon credit transactions. Each credit is tokenized, creating an immutable record of its origin,
                  ownership, and retirement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Verification Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  We work with leading carbon credit verification standards to ensure that all credits traded on our
                  platform represent real, additional, and permanent emissions reductions or removals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}


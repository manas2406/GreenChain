import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-900 text-gray-300">
      
      {/* ABOUT US SECTION */}
      <section className="py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-100">
                About Us
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Our mission is to accelerate climate action through transparent carbon markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY & MISSION */}
      <section className="py-12 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-100">Our Story</h2>
              <p className="text-gray-400">
                Carbon Credit Marketplace was founded with a simple yet powerful vision: to create a more accessible, transparent, and efficient way for organizations to participate in carbon markets.
              </p>
              <p className="text-gray-400">
                We recognized that while carbon credits are a crucial tool in the fight against climate change, the traditional markets were often opaque, fragmented, and inaccessible to many organizations that wanted to make a difference.
              </p>
              <p className="text-gray-400">
                By leveraging blockchain technology and creating a user-friendly platform, we've built a marketplace that connects companies looking to offset their carbon footprint directly with NGOs and projects that are making a real impact on the ground.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-100">Our Mission</h2>
              <p className="text-gray-400">
                We believe that economic incentives aligned with environmental goals can drive meaningful change. Our mission is to accelerate climate action by making carbon markets more accessible, transparent, and effective.
              </p>
              <p className="text-gray-400">We're committed to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
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

      {/* OUR TEAM */}
      <section className="py-12 bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Manas Sharma", image: "/images/manas.jpg" },
              { name: "Surendra Vishnoi", image: "/images/surendra.jpg" },
              { name: "Nihal Sharma", image: "/images/nihal.jpg" },
              { name: "Parth Vijay", image: "/images/parth.jpg" },
            ].map((member, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 shadow-lg hover:shadow-green-500/50 transition-transform hover:scale-105">
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover mb-4"
                  />
                  <CardTitle className="text-center text-gray-200">{member.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TECHNOLOGY */}
      <section className="py-12 bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">Our Technology</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Blockchain Integration", content: "Our platform leverages blockchain technology to ensure transparency, traceability, and security in all carbon credit transactions. Each credit is tokenized, creating an immutable record of its origin, ownership, and retirement." },
              { title: "Verification Standards", content: "We work with leading carbon credit verification standards to ensure that all credits traded on our platform represent real, additional, and permanent emissions reductions or removals." }
            ].map((tech, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-green-500/50 transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-gray-200">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{tech.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

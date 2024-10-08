import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, UtensilsCrossed, Smartphone, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center">
            <UtensilsCrossed className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Z-menu</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Elevate Your Restaurant's Online Presence
              </h1>
              <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
                Create stunning digital menus and manage your restaurant effortlessly with Z-menu.
              </p>
              <div className="mt-10 flex justify-center">
                <Button asChild size="lg" className="mr-4">
                  <Link href="/signup">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
              Features that Set You Apart
            </h2>
            <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-3">
              <FeatureCard
                icon={<UtensilsCrossed className="h-10 w-10" />}
                title="Beautiful Digital Menus"
                description="Create visually appealing menus that showcase your dishes in the best light."
              />
              <FeatureCard
                icon={<Smartphone className="h-10 w-10" />}
                title="Mobile-Friendly"
                description="Your menus look great on any device, ensuring a seamless experience for all customers."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10" />}
                title="Easy Management"
                description="Update your menu items, prices, and descriptions with just a few clicks."
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  See Z-menu in Action
                </h2>
                <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl">
                  Watch how easy it is to create and manage your digital menu with Z-menu.
                </p>
                <div className="mt-10">
                  <Button asChild size="lg">
                    <Link href="#demo">Watch Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:w-1/2">
                <Image
                  src="https://source.unsplash.com/random/800x600?restaurant"
                  alt="Restaurant ambiance"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Z-menu</h3>
              <p className="text-gray-400">Empowering restaurants with beautiful digital menus and easy management tools.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link href="#demo" className="text-gray-400 hover:text-white">Demo</Link></li>
                <li><Link href="/login" className="text-gray-400 hover:text-white">Login</Link></li>
                <li><Link href="/signup" className="text-gray-400 hover:text-white">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: support@zmenu.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2023 Z-menu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary">
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
}
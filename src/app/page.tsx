import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background">
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">Psyqly</h1>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Match in Mental Health Care</h2>
          <p className="text-xl text-muted-foreground mb-8">Psyqly connects you with the right psychologist based on your unique needs and preferences.</p>
          <Link href="/register">
            <Button size="lg">Get Started</Button>
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Matching</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Our algorithm finds the best psychologist for you based on your specific needs and preferences.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Diverse Specialists</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Access a wide range of mental health professionals specializing in various areas.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Flexible Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Choose between online and in-person sessions to fit your comfort and schedule.</CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside text-left max-w-2xl mx-auto">
            <li className="mb-2">Sign up and complete our comprehensive questionnaire.</li>
            <li className="mb-2">Our algorithm matches you with compatible psychologists.</li>
            <li className="mb-2">Review your matches and choose your preferred psychologist.</li>
            <li className="mb-2">Schedule your first session and start your journey to better mental health.</li>
          </ol>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground mt-12 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Psyqly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
"use client";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  return (
      <div className="flex flex-col pt-16">
        <section className="mt-20 pb-20 space-y-10 md:space-y-20 px-5">
          <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
            <Badge variant="outline" className="text-[#c94b47] bg-[#FAE3D6]">
              Split expenses, effortlessly
            </Badge>
            <h1 className=" gradient-title mx-auto max-w-4xl text-4xl md:text-7xl">
              The hassle-free way to settle up with friends.
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-200 md:text-xl/relaxed">
              Split costs with ease, settle debts in seconds, and keep friendships stress-free.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#ffb88e] hover:bg-[#c94b47] hover:text-[#ffffff] text-[#c94b47]"
              >
                <Link href="/dashboard">
                  Get Started now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#ffb88e] text-[#c94b47] hover:bg-green-50"
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
          <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
            <div className="gradient p-1 aspect-[16/9]">
              <Image
                src="/hero.png"
                width={1280}
                height={720}
                alt="Banner"
                className="rounded-lg mx-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* ───── Features ───── */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Badge variant="outline" className="text-[#c94b47] bg-[#FAE3D6]">
              Features
            </Badge>
            <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
              Everything you need to split expenses
            </h2>
            <p className="mx-auto mt-3 max-w-[700px] text-gray-500 dark:text-gray-200 md:text-xl/relaxed">
              Everything you need to effortlessly manage and share expenses, all in one place.
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ title, Icon, bg, color, description }) => (
                <Card
                  key={title}
                  className="flex flex-col items-center space-y-4 p-6 text-center"
                >
                  <div className={`rounded-full p-3 ${bg}`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>

                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-200">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* ───── How it works ───── */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Badge variant="outline" className="text-[#c94b47] bg-[#FAE3D6]">
              How It Works
            </Badge>
            <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
              Splitting expenses has never been easier
            </h2>
            <p className="mx-auto mt-3 max-w-[700px] text-gray-500 dark:text-gray-200 md:text-xl/relaxed">
              Follow these simple steps to start tracking and splitting expenses
              with friends.
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
              {STEPS.map(({ label, title, description }) => (
                <div key={label} className="flex flex-col items-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FAE3D6] text-xl font-bold text-[#c94b47]">
                    {label}
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-200 text-center">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Testimonials ───── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="text-[#c94b47] bg-[#FAE3D6]">
            Testimonials
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            What our users are saying
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, role, image }) => (
              <Card key={name} className="flex flex-col justify-between">
                <CardContent className="space-y-4 p-6">
                  <p className="text-gray-500 dark:text-gray-200">{quote}</p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      {/* Placeholder avatar */}
                      <AvatarImage src={image} alt={name} className="h-10 w-10 rounded-full" />
                      <AvatarFallback className="uppercase">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Call‑to‑Action ───── */}
        <section className="py-20 gradient">
          <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
              Ready to simplify expense sharing?
            </h2>
            <p className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed">
              Join thousands of users who have made splitting expenses
              stress‑free.
            </p>
            <Button asChild size="lg" className="bg-[#c94b47] text-[#ffffff] hover:opacity-90">
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* ───── Footer ───── */}
        <footer className="border-t py-12 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Splitr. All rights reserved.
        </footer>
      </div>
  );
}

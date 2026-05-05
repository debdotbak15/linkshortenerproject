import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link2, BarChart2, Pencil } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Shorten Any URL",
    description:
      "Paste a long, unwieldy link and get a short, shareable URL in seconds. No sign-up required to try it.",
  },
  {
    icon: BarChart2,
    title: "Track Every Click",
    description:
      "See exactly how many times your links are clicked. Real-time analytics help you understand your audience.",
  },
  {
    icon: Pencil,
    title: "Custom Aliases",
    description:
      "Replace random characters with a memorable word or phrase so your links are easy to recognize and share.",
  },
];

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center gap-8">
        <h1 className="text-5xl font-bold tracking-tight leading-tight max-w-2xl">
          Short links, big impact
        </h1>
        <p className="text-muted-foreground text-xl max-w-lg leading-relaxed">
          Create clean, memorable short links in seconds. Track clicks, manage
          your links, and grow your reach — all from one dashboard.
        </p>
        <div className="flex gap-3">
          <SignUpButton mode="modal">
            <Button
              size="lg"
              className="rounded-full bg-[#6c47ff] text-white hover:bg-[#5a3ad9] h-11 px-7"
            >
              Get started free
            </Button>
          </SignUpButton>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Everything you need
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6c47ff]/10 text-[#6c47ff] mb-2">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center gap-6">
        <h2 className="text-3xl font-semibold max-w-md">
          Ready to shorten your first link?
        </h2>
        <p className="text-muted-foreground max-w-sm">
          Join thousands of users who trust our platform to manage and share
          their links effortlessly.
        </p>
        <SignUpButton mode="modal">
          <Button
            size="lg"
            className="rounded-full bg-[#6c47ff] text-white hover:bg-[#5a3ad9] h-11 px-7"
          >
            Create your free account
          </Button>
        </SignUpButton>
      </section>
    </div>
  );
}

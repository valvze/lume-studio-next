import Link from "next/link";
import { Button } from "@/components/ui/button";
import FooterSection from "@/components/footer";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex flex-1 flex-col items-center pt-40 text-center px-4">
                <h1 className="text-9xl font-bold tracking-tighter text-primary/20 select-none">
                    404
                </h1>
                <div className="space-y-4 relative -top-12">
                    <h2 className="text-4xl font-bold tracking-tight">
                        Page not found
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-[500px] mx-auto">
                        It seems this page has gone on an unplanned sabbatical. While we send a search party, why not head back home?
                    </p>
                    <div className="pt-4">
                        <Button asChild size="lg">
                            <Link href="/">
                                Return Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
}

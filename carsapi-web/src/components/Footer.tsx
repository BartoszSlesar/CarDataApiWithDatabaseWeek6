import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Cars Data</h3>
            <p className="text-sm text-muted-foreground">
              Find Your favorite Car
            </p>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cars Data.
        </div>
      </div>
    </footer>
  );
}

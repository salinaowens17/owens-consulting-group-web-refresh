import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Owens Consulting Group, LLC — Environmental Compliance Training in Texas" },
      {
        name: "description",
        content:
          "TCEQ-approved environmental compliance training and consulting in Texas. MSW supervisor licensing, waste screening, and chemical inventory audits.",
      },
      { name: "author", content: "Owens Consulting Group, LLC" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Owens Consulting Group, LLC — Environmental Compliance Training in Texas" },
      { name: "twitter:title", content: "Owens Consulting Group, LLC — Environmental Compliance Training in Texas" },
      { name: "description", content: "A modern web application prototype for Owens Consulting Group, showcasing environmental compliance services." },
      { property: "og:description", content: "A modern web application prototype for Owens Consulting Group, showcasing environmental compliance services." },
      { name: "twitter:description", content: "A modern web application prototype for Owens Consulting Group, showcasing environmental compliance services." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eb22c11e-7b1e-4648-a05d-0481598dab10/id-preview-2e1e5214--f9ed4aef-55a5-49d9-8806-8d68828f770e.lovable.app-1777914645185.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eb22c11e-7b1e-4648-a05d-0481598dab10/id-preview-2e1e5214--f9ed4aef-55a5-49d9-8806-8d68828f770e.lovable.app-1777914645185.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

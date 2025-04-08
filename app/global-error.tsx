"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";

import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
       <p>Error!</p>
      </body>
    </html>
  );
}
"use client";

import { useLang } from "@/contexts/lang-context";
import { Code2 } from "lucide-react";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Code2 className="w-4 h-4 text-violet-400" />
          <span className="text-sm">
            sudyod<span className="text-violet-400">.</span>dev
          </span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          {t("footer.built")} · © {year}
        </p>
      </div>
    </footer>
  );
}

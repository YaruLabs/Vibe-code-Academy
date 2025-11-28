"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Prompt } from "../types/course";

const sanitizeForFilename = (value: string) => {
  const sanitized = value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9.-]/g, "");

  return sanitized || "prompt";
};

const downloadMarkdownFile = (content: string, filename: string) => {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

type ExportStatus = "idle" | "loading" | "success" | "error";

export const usePromptExporter = () => {
  const [status, setStatus] = useState<ExportStatus>("idle");
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleReset = useCallback(() => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    resetTimeoutRef.current = setTimeout(() => {
      setStatus("idle");
      resetTimeoutRef.current = null;
    }, 2000);
  }, []);

  const exportPrompt = useCallback(
    async (prompt?: Prompt | null) => {
      if (!prompt || status === "loading") return;

      setStatus("loading");
      try {
        for (const mdxPath of prompt.mdxPages) {
          const response = await fetch(mdxPath);
          if (!response.ok) {
            throw new Error(`Failed to download ${mdxPath}`);
          }
          const mdxContent = await response.text();
          const pageName = mdxPath.split("/").pop() || "page.mdx";
          const promptPrefix = sanitizeForFilename(prompt.title);
          downloadMarkdownFile(mdxContent, `${promptPrefix}-${pageName}`);
        }
        setStatus("success");
        scheduleReset();
      } catch (error) {
        console.error("Failed to export prompt files:", error);
        setStatus("error");
        scheduleReset();
      }
    },
    [scheduleReset, status]
  );

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  return {
    exportPrompt,
    isExporting: status === "loading",
    exportStatus: status,
  };
};

"use client"

import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { motion, AnimatePresence } from "framer-motion";

interface MDXRendererProps {
  mdxPath: string;
}

export default function MDXRenderer({ mdxPath }: MDXRendererProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMDX = async () => {
      try {
        setLoading(true);
        setMdxSource(null); // Clear previous content for smooth transition
        const response = await fetch(mdxPath);

        if (!response.ok) {
          throw new Error(`Failed to load MDX file: ${response.statusText}`);
        }

        const mdxText = await response.text();
        const mdxData = await serialize(mdxText);
        setMdxSource(mdxData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadMDX();
  }, [mdxPath]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center p-12"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-zinc-300 dark:border-zinc-600 border-t-zinc-900 dark:border-t-zinc-100 rounded-full animate-spin" />
            <div className="text-zinc-500 text-sm">Loading content...</div>
          </div>
        </motion.div>
      ) : error ? (
        <motion.div
          key="error"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg"
        >
          <p className="text-red-600 dark:text-red-400">Error loading content: {error}</p>
        </motion.div>
      ) : mdxSource ? (
        <motion.div
          key={mdxPath}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1] // Custom easing for smooth motion
          }}
          className="prose prose-zinc dark:prose-invert max-w-none
            prose-headings:font-bold
            prose-h1:text-3xl prose-h1:mb-4
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-zinc-700 dark:prose-p:text-zinc-300
            prose-a:text-blue-600 dark:prose-a:text-blue-400
            prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100
            prose-code:text-pink-600 dark:prose-code:text-pink-400
            prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800
            prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-950
            prose-pre:text-zinc-100
            prose-blockquote:border-l-blue-500
            prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20
            prose-blockquote:py-1 prose-blockquote:px-4
            prose-table:border-collapse
            prose-th:bg-zinc-100 dark:prose-th:bg-zinc-800
            prose-td:border prose-td:border-zinc-300 dark:prose-td:border-zinc-700
            prose-th:border prose-th:border-zinc-300 dark:prose-th:border-zinc-700
            prose-ul:list-disc prose-ul:ml-6
            prose-ol:list-decimal prose-ol:ml-6
            prose-li:text-zinc-700 dark:prose-li:text-zinc-300
          "
        >
          <MDXRemote {...mdxSource} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

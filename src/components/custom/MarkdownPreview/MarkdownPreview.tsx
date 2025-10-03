import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Heading, Text } from "@components/ui";

export const MarkdownPreview = ({ content }: { content: string }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    components={{
      h1: ({ children }) => <Heading className="pt-4">{children}</Heading>,
      h2: ({ children }) => (
        <Heading as="h2" className="pt-4">
          {children}
        </Heading>
      ),
      h3: ({ children }) => (
        <Heading as="h3" className="pt-4">
          {children}
        </Heading>
      ),
      p: ({ children }) => <Text>{children}</Text>,
      ul: ({ children }) => (
        <ul className="list-inside list-disc space-y-1 text-gray-700 marker:text-primary">
          {children}
        </ul>
      ),
      li: ({ children }) => <li className="text-gray-700">{children}</li>,
      strong: ({ children }) => (
        <strong className="font-semibold text-gray-900">{children}</strong>
      ),
      em: ({ children }) => (
        <em className="italic text-gray-600">{children}</em>
      ),
      blockquote: ({ children }) => (
        <blockquote className="my-6 rounded-r-lg border-l-4 border-primary bg-gray-50 py-2 pl-6 italic text-gray-600">
          {children}
        </blockquote>
      ),
    }}
  >
    {content}
  </ReactMarkdown>
);

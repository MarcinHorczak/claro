import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export const MarkdownPreview = ({ content }: { content: string }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    components={{
      h1: ({ children }) => (
        <h1 className="mb-6 text-3xl font-bold text-primary">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="mb-4 mt-8 text-2xl font-bold text-primary">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="mb-3 mt-6 text-xl font-semibold text-primary">
          {children}
        </h3>
      ),
      p: ({ children }) => (
        <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
      ),
      ul: ({ children }) => (
        <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
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

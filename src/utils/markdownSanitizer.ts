import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import turndown from "turndown";


async function sanitizeMarkdown(markdownContent:string){
  //1 Convert markdown to HTML
  const turndownService = new turndown();
  const convertHtml= await marked(markdownContent);

  // 2 Sanitize html
  const sanitizedHtml= sanitizeHtml(convertHtml,{
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
  });
  // 3 Convert sanitized html to markdown
  return turndownService.turndown(sanitizedHtml);
}

export {sanitizeMarkdown};
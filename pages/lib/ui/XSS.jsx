import DOMPurify from "isomorphic-dompurify";

export async function sanitizeInput(input) {
  return DOMPurify.sanitize(input);
}
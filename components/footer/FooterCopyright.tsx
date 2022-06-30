import useLanguage from "../../hooks/useLanguage";

const FooterCopyright = () => {
  const [languageItems] = useLanguage();
  return (
    <div className="footer-copyright">
      © Copyright {new Date().getFullYear()} <a href={languageItems.authorLink}>{languageItems.author}</a>
      <style jsx>
        {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
      </style>
    </div>
  );
}
export { FooterCopyright };

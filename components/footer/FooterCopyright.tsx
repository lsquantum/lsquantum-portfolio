import { AppConfig } from '../../config/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} <a href={AppConfig.authorLink}>{AppConfig.author}</a>
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

export { FooterCopyright };

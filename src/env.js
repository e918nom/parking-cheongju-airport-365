import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_TEL: z.string(),
    NEXT_PUBLIC_KAKAO_OPENCAHT_URL: z.string(),
    NEXT_PUBLIC_KAKAO_NAVER_BLOG_URL: z.string(),
    NEXT_PUBLIC_BRAND_NAME: z.string(),
    NEXT_PUBLIC_COMPANY_NAME: z.string(),
    NEXT_PUBLIC_COMPANY_NUMBER: z.string(),
    NEXT_PUBLIC_COMPANY_CEO: z.string(),
    NEXT_PUBLIC_COMPANY_MANAGER: z.string(),
    NEXT_PUBLIC_COMPANY_TEL: z.string(),
    NEXT_PUBLIC_COMPANY_ADDRESS: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_TEL: process.env.NEXT_PUBLIC_TEL,
    NEXT_PUBLIC_KAKAO_OPENCAHT_URL: process.env.NEXT_PUBLIC_KAKAO_OPENCAHT_URL,
    NEXT_PUBLIC_KAKAO_NAVER_BLOG_URL:
      process.env.NEXT_PUBLIC_KAKAO_NAVER_BLOG_URL,
    NEXT_PUBLIC_BRAND_NAME: process.env.NEXT_PUBLIC_BRAND_NAME,
    NEXT_PUBLIC_COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME,
    NEXT_PUBLIC_COMPANY_NUMBER: process.env.NEXT_PUBLIC_COMPANY_NUMBER,
    NEXT_PUBLIC_COMPANY_CEO: process.env.NEXT_PUBLIC_COMPANY_CEO,
    NEXT_PUBLIC_COMPANY_MANAGER: process.env.NEXT_PUBLIC_COMPANY_MANAGER,
    NEXT_PUBLIC_COMPANY_TEL: process.env.NEXT_PUBLIC_COMPANY_TEL,
    NEXT_PUBLIC_COMPANY_ADDRESS: process.env.NEXT_PUBLIC_COMPANY_ADDRESS,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});

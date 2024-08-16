import {z} from 'zod'

const EnvSchema = z.object({
    API_BASE_URL: z.string().url()
})

const parsedEnv = EnvSchema.safeParse({API_BASE_URL: import.meta.env.VITE_API_BASE_URL});

if (parsedEnv.error) {
  console.error('Environment variables validation error:', parsedEnv.error.format());
  process.exit(1);
}

export const env = parsedEnv.data;

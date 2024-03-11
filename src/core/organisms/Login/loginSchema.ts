import z from 'zod';

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password too short - should be 6 chars minimum'),
});

export type User = z.infer<typeof loginSchema>;

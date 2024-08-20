import { z } from 'zod';
import { isCpf } from 'iscpf';

export const schemaValidationSignIn = z.object({
      username: z.string().trim()
            .email('username inválido')
            .refine((value) => value.length !== 0, { message: 'Por favor, forneça um email!' }),
      password: z.string().trim()
            .min(5, 'password menor que 5 caracteres')
            .max(10, 'password maior que 10 caracteres')
});

export const schemaValidationRegisterClient = z.object({
      name: z.string().trim()
            .min(3, 'o nome deve ser no minimo 3 caracteres'),
      latitude: z.string().trim()
            .min(3, 'o nome deve ser no minimo 3 caracteres'),
      longitude: z.string().trim()
            .min(3, 'o nome deve ser no minimo 3 caracteres'),
      username: z.string().trim()
            .email('email inválido')
            .refine((value) => value.length !== 0, { message: 'Por favor, forneça um email!' }),
      password: z.string().trim()
            .min(6, 'password menor que 6 caracteres')
            .max(10, 'password maior que 10 caracteres'),
      cpf: z.string().trim(),
});

export const schemaValidationRegisterTransaction = z.object({
      amount: z.number().nonnegative('o numero tem que ser maior ou igual a zero'),
      type: z.string().trim()
            .refine((value) => value.length !== 0, { message: 'Por favor, forneça o tipo de transação!' }),
});
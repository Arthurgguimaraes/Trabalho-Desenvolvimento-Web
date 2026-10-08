const { z } = require('zod');

const taskSchema = z.object({
  title: z.string().min(3, 'O título precisa ter pelo menos 3 caracteres'),
  description: z.string().optional(),
  isCompleted: z.boolean().optional(),
});

module.exports = { taskSchema };
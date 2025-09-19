import { createDirectus, rest } from '@directus/sdk';

export const directus = createDirectus('http://localhost:8055').with(rest());

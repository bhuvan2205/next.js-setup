import { POCKETBASE_URL } from '@/constants/endpoint';
import PocketBase from 'pocketbase';

export const pb = new PocketBase(POCKETBASE_URL);

import { db } from '~/server/db';
import { type IRootKTP } from '../models/ktpinterfaces';
import { type IGeneralAPIResponse } from '../models/generalInterfaces';

export async function getAllKTPRequest(): Promise<
  IGeneralAPIResponse<IRootKTP[]>
> {
  const result: IGeneralAPIResponse<IRootKTP[]> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const ktpRequest = (await db.query.ktpRequest.findMany()) as IRootKTP[];
    result.data = ktpRequest;
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

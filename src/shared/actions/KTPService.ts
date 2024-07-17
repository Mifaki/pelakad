'use server';

import { db } from '~/server/db';
import { eq } from 'drizzle-orm';
import { ktpRequest } from '~/server/db/schema';
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

export async function getKTPRequestById(
  id: string,
): Promise<IGeneralAPIResponse<IRootKTP>> {
  const result: IGeneralAPIResponse<IRootKTP> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const request = (await db.query.ktpRequest.findFirst({
      where: eq(ktpRequest.id, id),
    })) as IRootKTP | undefined;

    if (request) {
      result.data = request;
    } else {
      throw new Error('KTP request not found');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

export async function updateKTPRequest(
  id: string,
  status: 'selesai' | 'diproses',
): Promise<IGeneralAPIResponse<IRootKTP>> {
  const result: IGeneralAPIResponse<IRootKTP> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const updateData: Partial<IRootKTP> = {
      request_status: status,
    };

    const [updatedRequest] = await db
      .update(ktpRequest)
      .set(updateData)
      .where(eq(ktpRequest.id, id))
      .returning();

    if (updatedRequest) {
      result.data = updatedRequest as IRootKTP;
    } else {
      throw new Error('KTP request not found');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

export async function declineKTPRequest(
  id: string,
  feedback: string,
): Promise<IGeneralAPIResponse<IRootKTP>> {
  const result: IGeneralAPIResponse<IRootKTP> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const [updatedRequest] = await db
      .update(ktpRequest)
      .set({
        request_status: 'dikembalikan',
        feedback: feedback,
      })
      .where(eq(ktpRequest.id, id))
      .returning();

    if (updatedRequest) {
      result.data = updatedRequest as IRootKTP;
    } else {
      throw new Error('KTP request not found');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

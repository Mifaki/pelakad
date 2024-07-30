'use server';

import { db } from '~/server/db';
import { eq } from 'drizzle-orm';
import {
  type IPayloadKTP,
  type IRootKTP,
  type IKTPRelatedImages,
} from '../models/ktpinterfaces';
import {
  ktpRequest,
  requestStatusEnum,
  marriageBookImages,
} from '~/server/db/schema';
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
    const ktprequests = await db.select().from(ktpRequest);

    const requestsWithImages = await Promise.all(
      ktprequests.map(async (request) => {
        const marriageBookImgs = await db
          .select()
          .from(marriageBookImages)
          .where(eq(marriageBookImages.request_id, request.id));

        return {
          ...request,
          marriage_book_url: marriageBookImgs.map((img) => img.image_url),
        } as IRootKTP;
      }),
    );

    result.data = requestsWithImages;
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
    const [request] = await db
      .select()
      .from(ktpRequest)
      .where(eq(ktpRequest.id, id));

    if (!request) {
      throw new Error('KTP request not found');
    }

    const marriageBookImgs = await db
      .select()
      .from(marriageBookImages)
      .where(eq(marriageBookImages.request_id, request.id));

    result.data = {
      ...request,
      marriage_book_url: marriageBookImgs.map((img) => img.image_url),
    } as IRootKTP;
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

export async function addKTPRequest(
  payload: IPayloadKTP,
): Promise<IGeneralAPIResponse<IRootKTP>> {
  const result: IGeneralAPIResponse<IRootKTP> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const newRequest = {
      ...payload,
      request_status: requestStatusEnum.enumValues[0] as 'menunggu',
    };

    const [createdRequest] = await db
      .insert(ktpRequest)
      .values(newRequest)
      .returning();

    if (createdRequest) {
      result.data = createdRequest as IRootKTP;
    } else {
      throw new Error('Failed to create KTP request');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

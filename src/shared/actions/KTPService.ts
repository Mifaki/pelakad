'use server';

import { db } from '~/server/db';
import { eq } from 'drizzle-orm';
import { type IPayloadKTP, type IRootKTP } from '../models/ktpinterfaces';
import {
  ktpRequest,
  requestStatusEnum,
  marriageBookImages,
} from '~/server/db/schema';
import { type IGeneralAPIResponse } from '../models/generalInterfaces';
import { createSignatureWhatsappUrl } from '../usecase/createSignatureWhatsappUrl';
import { createFinishWhatsappUrl } from '../usecase/createFInishWhatsappUrl';
import { createDeclineWhatsappUrl } from '../usecase/createDeclineWhatsappUrl';

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
  status: 'selesai' | 'diproses' | 'tanda-tangan',
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
      result.data = updatedRequest as unknown as IRootKTP;

      if (updatedRequest.request_status === 'tanda-tangan') {
        const whatsappUrl = createSignatureWhatsappUrl(
          updatedRequest.contact,
          'Kartu Tanda Penduduk',
          updatedRequest.full_name,
        );

        result.whatsappRedirectUrl = whatsappUrl;
      }

      if (updatedRequest.request_status === 'selesai') {
        const whatsappUrl = createFinishWhatsappUrl(
          updatedRequest.contact,
          'Kartu Tanda Penduduk',
          updatedRequest.full_name,
        );

        result.whatsappRedirectUrl = whatsappUrl;
      }
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
      result.data = updatedRequest as unknown as IRootKTP;

      const whatsappUrl = createDeclineWhatsappUrl(
        updatedRequest.contact,
        'Kartu Tanda Penduduk',
        feedback,
        updatedRequest.full_name,
      );

      result.whatsappRedirectUrl = whatsappUrl;
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
      full_name: payload.full_name,
      contact: payload.contact,
      nik_id: payload.nik_id,
      kk_id: payload.kk_id,
      reason: payload.reason,
      family_card_url: payload.family_card_url[0] ?? '',
      birth_certificate_url: payload.birth_certificate_url[0] ?? '',
      foreign_move_cert_url: payload.foreign_move_cert_url[0] ?? '',
      damaged_ktp_url: payload.damaged_ktp_url[0] ?? '',
      police_report_url: payload.police_report_url[0] ?? '',
      request_status: requestStatusEnum.enumValues[0] as 'menunggu',
    };

    const [createdRequest] = await db
      .insert(ktpRequest)
      .values(newRequest)
      .returning();

    if (createdRequest) {
      if (payload.marriage_book_url && payload.marriage_book_url.length > 0) {
        await db.insert(marriageBookImages).values(
          payload.marriage_book_url.map((url: string) => ({
            name: `${payload.full_name}-family-card-request`,
            image_url: url,
            request_id: createdRequest.id,
          })),
        );
      }
      result.data = createdRequest as unknown as IRootKTP;
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

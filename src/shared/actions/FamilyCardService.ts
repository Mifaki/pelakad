'use server';

import { db } from '~/server/db';
import {
  familyCardRequest,
  supportingDocuments,
  marriageBookImages,
  requestStatusEnum,
} from '~/server/db/schema';
import { createSignatureWhatsappUrl } from '../usecase/createSignatureWhatsappUrl';
import { createFinishWhatsappUrl } from '../usecase/createFInishWhatsappUrl';
import { createDeclineWhatsappUrl } from '../usecase/createDeclineWhatsappUrl';
import { type IGeneralAPIResponse } from '../models/generalInterfaces';
import {
  type IFamilyCardPayload,
  type IRootFamilyCardRequest,
} from '../models/familycardinterfaces';
import { eq } from 'drizzle-orm';

const translateReason = (reason: string): string => {
  const reasonMap: Record<string, string> = {
    new: 'Baru',
    data_change: 'Perubahan Data',
    lost: 'Hilang',
    damaged: 'Rusak',
  };
  return reasonMap[reason] ?? reason;
};

const translateNewCardReason = (newCardReason: string): string => {
  const newCardReasonMap: Record<string, string> = {
    new_family_card: 'Membentuk Kartu Keluarga Baru',
    change_head_of_family: 'Penggantian Kepala Keluarga',
    split_family_card: 'Pisah Kartu Keluarga',
    moving_in: 'Pindah Datang',
  };
  return newCardReasonMap[newCardReason] ?? newCardReason;
};

export async function addFamilyCardRequest(
  payload: IFamilyCardPayload,
): Promise<IGeneralAPIResponse<IRootFamilyCardRequest>> {
  const result: IGeneralAPIResponse<IRootFamilyCardRequest> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const newRequest = {
      full_name: payload.full_name,
      phone_number: payload.phone_number,
      nik_id: payload.nik_id,
      kk_id: payload.kk_id,
      reason: payload.reason,
      new_card_reason: payload.new_card_reason,
      father_identity_card_url: payload.father_identity_card_url[0] ?? '',
      mother_identity_card_url: payload.mother_identity_card_url[0] ?? '',
      husband_family_card_url: payload.husband_family_card_url[0] ?? '',
      wife_family_card_url: payload.wife_family_card_url[0] ?? '',
      husband_birth_certificate_url:
        payload.husband_birth_certificate_url[0] ?? '',
      wife_birth_certificate_url: payload.wife_birth_certificate_url[0] ?? '',
      old_family_card_url: payload.old_family_card_url[0],
      element_change_statement_letter_url:
        payload.element_change_statement_letter_url[0] ?? '',
      broken_family_card_url: payload.broken_family_card_url[0] ?? '',
      original_family_card_url: payload.original_family_card_url[0] ?? '',
      police_loss_report_url: payload.police_loss_report_url[0] ?? '',
      request_status: requestStatusEnum.enumValues[0] as 'menunggu',
    };

    const [createdRequest] = await db
      .insert(familyCardRequest)
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

      if (
        payload.supporting_document_url &&
        payload.supporting_document_url.length > 0
      ) {
        await db.insert(supportingDocuments).values(
          payload.supporting_document_url.map((url: string) => ({
            name: `${payload.full_name}-family-card-request`,
            image_url: url,
            request_id: createdRequest.id,
          })),
        );
      }

      result.data = {
        ...createdRequest,
        marriage_book_url: payload.marriage_book_url || [],
        supporting_document_url: payload.supporting_document_url || [],
      } as IRootFamilyCardRequest;
    } else {
      throw new Error('Failed to create family card request');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

export async function getAllFamilyCardRequests(): Promise<
  IGeneralAPIResponse<IRootFamilyCardRequest[]>
> {
  const result: IGeneralAPIResponse<IRootFamilyCardRequest[]> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const requests =
      (await db.query.familyCardRequest.findMany()) as unknown as IRootFamilyCardRequest[];
    result.data = requests.map((request) => ({
      ...request,
      reason: translateReason(request.reason),
      new_card_reason: translateNewCardReason(request.new_card_reason),
    }));
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

export async function getFamilyCardRequestById(
  id: string,
): Promise<IGeneralAPIResponse<IRootFamilyCardRequest>> {
  const result: IGeneralAPIResponse<IRootFamilyCardRequest> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const request = await db.query.familyCardRequest.findFirst({
      where: eq(familyCardRequest.id, id),
    });

    if (request) {
      const marriageBooks = await db.query.marriageBookImages.findMany({
        where: eq(marriageBookImages.request_id, id),
      });

      const supportingDocs = await db.query.supportingDocuments.findMany({
        where: eq(supportingDocuments.request_id, id),
      });

      result.data = {
        ...request,
        reason: translateReason(request.reason),
        new_card_reason: translateNewCardReason(request.new_card_reason ?? ''),
        marriage_book_url: marriageBooks.map((img) => img.image_url),
        supporting_document_url: supportingDocs.map((doc) => doc.image_url),
      } as IRootFamilyCardRequest;
    } else {
      throw new Error('Family card request not found');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

export async function updateFamilyCardRequest(
  id: string,
  status: 'selesai' | 'diproses' | 'tanda-tangan',
): Promise<IGeneralAPIResponse<IRootFamilyCardRequest>> {
  const result: IGeneralAPIResponse<IRootFamilyCardRequest> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const updateData: Partial<IRootFamilyCardRequest> = {
      request_status: status,
    };

    const [updatedRequest] = await db
      .update(familyCardRequest)
      .set(updateData)
      .where(eq(familyCardRequest.id, id))
      .returning();

    if (updatedRequest) {
      result.data = updatedRequest as unknown as IRootFamilyCardRequest;

      if (updatedRequest.request_status === 'tanda-tangan') {
        const whatsappUrl = createSignatureWhatsappUrl(
          updatedRequest.phone_number,
          'Kartu Keluarga',
          updatedRequest.full_name,
        );

        result.whatsappRedirectUrl = whatsappUrl;
      }

      if (updatedRequest.request_status === 'selesai') {
        const whatsappUrl = createFinishWhatsappUrl(
          updatedRequest.phone_number,
          'Kartu Keluarga',
          updatedRequest.full_name,
        );

        result.whatsappRedirectUrl = whatsappUrl;
      }
    } else {
      throw new Error('Family card request not found');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

export async function declineFamilyCardRequest(
  id: string,
  feedback: string,
): Promise<IGeneralAPIResponse<IRootFamilyCardRequest>> {
  const result: IGeneralAPIResponse<IRootFamilyCardRequest> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const [updatedRequest] = await db
      .update(familyCardRequest)
      .set({
        request_status: 'dikembalikan',
        feedback: feedback,
      })
      .where(eq(familyCardRequest.id, id))
      .returning();

    if (updatedRequest) {
      result.data = updatedRequest as unknown as IRootFamilyCardRequest;

      const whatsappUrl = createDeclineWhatsappUrl(
        updatedRequest.phone_number,
        'Akta Kelahiran',
        feedback,
        updatedRequest.full_name,
      );

      result.whatsappRedirectUrl = whatsappUrl;
    } else {
      throw new Error('Family card request not found');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

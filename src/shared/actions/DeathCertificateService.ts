'use server';

import { db } from '~/server/db';
import {
  deathCertificateRequest,
  witnessIdentityCardImages,
  requestStatusEnum,
} from '~/server/db/schema';
import { eq } from 'drizzle-orm';
import { type IGeneralAPIResponse } from '../models/generalInterfaces';
import {
  type IAktaMatiPayload,
  type IRootDeathCertificate,
} from '../models/aktamatiinterfaces';
import { createSignatureWhatsappUrl } from '../usecase/createSignatureWhatsappUrl';
import { createFinishWhatsappUrl } from '../usecase/createFInishWhatsappUrl';
import { createDeclineWhatsappUrl } from '../usecase/createDeclineWhatsappUrl';

export async function addDeathCertificateRequest(
  payload: IAktaMatiPayload,
): Promise<IGeneralAPIResponse<IRootDeathCertificate>> {
  const result: IGeneralAPIResponse<IRootDeathCertificate> = {
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
      family_card_image: payload.family_card_image?.[0] ?? '',
      reporter_identity_card_url: payload.reporter_identity_card_url[0] ?? '',
      deceased_identity_card_url: payload.deceased_identity_card_url[0] ?? '',
      death_certificate_url: payload.death_certificate_url?.[0] ?? '',
      sptjm_url: payload.sptjm_url[0] ?? '',
      statement_letter_of_true_death_data_url:
        payload.statement_letter_of_true_death_data_url?.[0] ?? '',
      request_status: requestStatusEnum.enumValues[0] as 'menunggu',
    };

    const [createdRequest] = await db
      .insert(deathCertificateRequest)
      .values(newRequest)
      .returning();

    if (createdRequest) {
      await db.insert(witnessIdentityCardImages).values([
        {
          name: `${payload.full_name}-witness-1-death-certificate-request`,
          image_url: payload.witness_1_identity_card_url[0] ?? '',
          request_id: createdRequest.id,
        },
        {
          name: `${payload.full_name}-witness-2-death-certificate-request`,
          image_url: payload.witness_2_identity_card_url[0] ?? '',
          request_id: createdRequest.id,
        },
      ]);

      result.data = {
        ...createdRequest,
        witness_1_identity_card_url: payload.witness_1_identity_card_url[0],
        witness_2_identity_card_url: payload.witness_2_identity_card_url[0],
      } as IRootDeathCertificate;
    } else {
      throw new Error('Failed to create death certificate request');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

export async function getAllDeathCertificateRequests(): Promise<
  IGeneralAPIResponse<IRootDeathCertificate[]>
> {
  const result: IGeneralAPIResponse<IRootDeathCertificate[]> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const deathCertificateRequests = await db
      .select()
      .from(deathCertificateRequest);

    const requestsWithImages = await Promise.all(
      deathCertificateRequests.map(async (request) => {
        const witnessIdCardImgs = await db
          .select()
          .from(witnessIdentityCardImages)
          .where(eq(witnessIdentityCardImages.request_id, request.id));

        return {
          ...request,
          witness_1_identity_card_url: witnessIdCardImgs[0]?.image_url ?? '',
          witness_2_identity_card_url: witnessIdCardImgs[1]?.image_url ?? '',
        };
      }),
    );

    result.data = requestsWithImages;
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  console.log(result);

  return result;
}

export async function getDeathCertificateRequestById(
  id: string,
): Promise<IGeneralAPIResponse<IRootDeathCertificate>> {
  const result: IGeneralAPIResponse<IRootDeathCertificate> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const [request] = await db
      .select()
      .from(deathCertificateRequest)
      .where(eq(deathCertificateRequest.id, id));

    if (!request) {
      throw new Error('Death certificate request not found');
    }

    const witnessIdCardImgs = await db
      .select()
      .from(witnessIdentityCardImages)
      .where(eq(witnessIdentityCardImages.request_id, request.id));

    result.data = {
      ...request,
      witness_1_identity_card_url: witnessIdCardImgs[0]?.image_url ?? '',
      witness_2_identity_card_url: witnessIdCardImgs[1]?.image_url ?? '',
    };
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

export async function updateDeathCertificateRequest(
  id: string,
  status: 'selesai' | 'diproses' | 'tanda-tangan',
): Promise<IGeneralAPIResponse<IRootDeathCertificate>> {
  const result: IGeneralAPIResponse<IRootDeathCertificate> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const updateData: Partial<IRootDeathCertificate> = {
      request_status: status,
    };

    const [updatedRequest] = await db
      .update(deathCertificateRequest)
      .set(updateData)
      .where(eq(deathCertificateRequest.id, id))
      .returning();

    if (updatedRequest) {
      result.data = updatedRequest as IRootDeathCertificate;

      if (updatedRequest.request_status === 'tanda-tangan') {
        const whatsappUrl = createSignatureWhatsappUrl(
          updatedRequest.phone_number,
          'Akta Kematian',
          updatedRequest.full_name,
        );

        result.whatsappRedirectUrl = whatsappUrl;
      }

      if (updatedRequest.request_status === 'selesai') {
        const whatsappUrl = createFinishWhatsappUrl(
          updatedRequest.phone_number,
          'Akta Kematian',
          updatedRequest.full_name,
        );

        result.whatsappRedirectUrl = whatsappUrl;
      }
    } else {
      throw new Error('Death certificate request not found');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

export async function declineDeathCertificateRequest(
  id: string,
  feedback: string,
): Promise<IGeneralAPIResponse<IRootDeathCertificate>> {
  const result: IGeneralAPIResponse<IRootDeathCertificate> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const [updatedRequest] = await db
      .update(deathCertificateRequest)
      .set({
        request_status: 'dikembalikan',
        feedback: feedback,
      })
      .where(eq(deathCertificateRequest.id, id))
      .returning();

    if (updatedRequest) {
      result.data = updatedRequest as IRootDeathCertificate;

      const whatsappUrl = createDeclineWhatsappUrl(
        updatedRequest.phone_number,
        'Akta Kematian',
        feedback,
        updatedRequest.full_name,
      );

      result.whatsappRedirectUrl = whatsappUrl;
    } else {
      throw new Error('Death certificate request not found');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

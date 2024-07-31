'use server';

import { db } from '~/server/db';
import {
  birthCertificateRequest,
  familyCardImages,
  marriageBookImages,
  witnessIdentityCardImages,
  requestStatusEnum,
} from '~/server/db/schema';
import { createDeclineWhatsappUrl } from '../usecase/createDeclineWhatsappUrl';
import { createSignatureWhatsappUrl } from '../usecase/createSignatureWhatsappUrl';
import { createFinishWhatsappUrl } from '../usecase/createFInishWhatsappUrl';
import { eq } from 'drizzle-orm';
import { type IGeneralAPIResponse } from '../models/generalInterfaces';
import {
  type IAktaLahirPayload,
  type IRootBirthCertificate,
  type IBirthCertificateRelatedImages,
} from '../models/aktalahirinterfaces';

export async function addBirthCertificateRequest(
  payload: IAktaLahirPayload,
): Promise<IGeneralAPIResponse<IRootBirthCertificate>> {
  const result: IGeneralAPIResponse<IRootBirthCertificate> = {
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
      father_identity_card_url: payload.father_identity_card_url[0] ?? '',
      mother_identity_card_url: payload.mother_identity_card_url[0] ?? '',
      out_of_wedlock_letter_url: payload.out_of_wedlock_letter_url?.[0] ?? '',
      marriage_certificate_url: payload.marriage_certificate_url[0] ?? '',
      request_status: requestStatusEnum.enumValues[0] as 'menunggu',
    };

    const [createdRequest] = await db
      .insert(birthCertificateRequest)
      .values(newRequest)
      .returning();

    if (createdRequest) {
      await db.insert(familyCardImages).values(
        payload.family_card_image.map((url: string) => ({
          name: `${payload.full_name}-birth-certificate-request`,
          image_url: url,
          request_id: createdRequest.id,
        })),
      );

      await db.insert(marriageBookImages).values(
        payload.marriage_book_url.map((url: string) => ({
          name: `${payload.full_name}-birth-certificate-request`,
          image_url: url,
          request_id: createdRequest.id,
        })),
      );

      await db.insert(witnessIdentityCardImages).values([
        {
          name: `${payload.full_name}-witness-1-birth-certificate-request`,
          image_url: payload.witness_1_identity_card_url[0] ?? '',
          request_id: createdRequest.id,
        },
        {
          name: `${payload.full_name}-witness-2-birth-certificate-request`,
          image_url: payload.witness_2_identity_card_url[0] ?? '',
          request_id: createdRequest.id,
        },
      ]);

      result.data = {
        ...createdRequest,
        family_card_image: payload.family_card_image,
        marriage_book_url: payload.marriage_book_url,
        witness_1_identity_card_url: payload.witness_1_identity_card_url[0],
        witness_2_identity_card_url: payload.witness_2_identity_card_url[0],
      } as IRootBirthCertificate & IBirthCertificateRelatedImages;
    } else {
      throw new Error('Failed to create birth certificate request');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

export async function getAllBirthCertificateRequests(): Promise<
  IGeneralAPIResponse<IRootBirthCertificate[]>
> {
  const result: IGeneralAPIResponse<IRootBirthCertificate[]> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const birthCertificateRequests = await db
      .select()
      .from(birthCertificateRequest);

    const requestsWithImages = await Promise.all(
      birthCertificateRequests.map(async (request) => {
        const familyCardImgs = await db
          .select()
          .from(familyCardImages)
          .where(eq(familyCardImages.request_id, request.id));

        const marriageBookImgs = await db
          .select()
          .from(marriageBookImages)
          .where(eq(marriageBookImages.request_id, request.id));

        const witnessIdCardImgs = await db
          .select()
          .from(witnessIdentityCardImages)
          .where(eq(witnessIdentityCardImages.request_id, request.id));

        return {
          ...request,
          family_card_image: familyCardImgs.map((img) => img.image_url),
          marriage_book_url: marriageBookImgs.map((img) => img.image_url),
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

  return result;
}

export async function getBirthCertificateRequestById(
  id: string,
): Promise<IGeneralAPIResponse<IRootBirthCertificate>> {
  const result: IGeneralAPIResponse<IRootBirthCertificate> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const [request] = await db
      .select()
      .from(birthCertificateRequest)
      .where(eq(birthCertificateRequest.id, id));

    if (!request) {
      throw new Error('Birth certificate request not found');
    }

    const familyCardImgs = await db
      .select()
      .from(familyCardImages)
      .where(eq(familyCardImages.request_id, request.id));

    const marriageBookImgs = await db
      .select()
      .from(marriageBookImages)
      .where(eq(marriageBookImages.request_id, request.id));

    const witnessIdCardImgs = await db
      .select()
      .from(witnessIdentityCardImages)
      .where(eq(witnessIdentityCardImages.request_id, request.id));

    result.data = {
      ...request,
      family_card_image: familyCardImgs.map((img) => img.image_url),
      marriage_book_url: marriageBookImgs.map((img) => img.image_url),
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

export async function updateBirthCertificateRequest(
  id: string,
  status: 'selesai' | 'diproses' | 'tanda-tangan',
): Promise<IGeneralAPIResponse<IRootBirthCertificate>> {
  const result: IGeneralAPIResponse<IRootBirthCertificate> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const updateData: Partial<IRootBirthCertificate> = {
      request_status: status,
    };

    const [updatedRequest] = await db
      .update(birthCertificateRequest)
      .set(updateData)
      .where(eq(birthCertificateRequest.id, id))
      .returning();

    if (updatedRequest) {
      result.data = updatedRequest as IRootBirthCertificate;

      if (updatedRequest.request_status === 'tanda-tangan') {
        const whatsappUrl = createSignatureWhatsappUrl(
          updatedRequest.phone_number,
          'Akta Kelahiran',
          updatedRequest.full_name,
        );

        result.whatsappRedirectUrl = whatsappUrl;
      }

      if (updatedRequest.request_status === 'selesai') {
        const whatsappUrl = createFinishWhatsappUrl(
          updatedRequest.phone_number,
          'Akta Kelahiran',
          updatedRequest.full_name,
        );

        result.whatsappRedirectUrl = whatsappUrl;
      }
    } else {
      throw new Error('Birth certificate request not found');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

export async function declineBirthCertificateRequest(
  id: string,
  feedback: string,
): Promise<IGeneralAPIResponse<IRootBirthCertificate>> {
  const result: IGeneralAPIResponse<IRootBirthCertificate> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const [updatedRequest] = await db
      .update(birthCertificateRequest)
      .set({
        request_status: 'dikembalikan',
        feedback: feedback,
      })
      .where(eq(birthCertificateRequest.id, id))
      .returning();

    if (updatedRequest) {
      result.data = updatedRequest as IRootBirthCertificate;

      const whatsappUrl = createDeclineWhatsappUrl(
        updatedRequest.phone_number,
        'Akta Kelahiran',
        feedback,
        updatedRequest.full_name,
      );

      result.whatsappRedirectUrl = whatsappUrl;
    } else {
      throw new Error('Birth certificate request not found');
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

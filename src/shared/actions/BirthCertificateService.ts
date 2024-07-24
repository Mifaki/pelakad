'use server';

import { db } from '~/server/db';
import {
  birthCertificateRequest,
  familyCardImages,
  marriageBookImages,
  kuaMarriageBookImages,
  witnessIdentityCardImages,
  requestStatusEnum,
} from '~/server/db/schema';
import { type IGeneralAPIResponse } from '../models/generalInterfaces';
import {
  type IAktaLahirPayload,
  type IRootBirthCertificate,
  type IBirthCertificateRelatedImages,
} from '../models/aktalahirinterfaces';

export async function addBirthCertificateRequest(
  payload: IAktaLahirPayload,
): Promise<
  IGeneralAPIResponse<IRootBirthCertificate & IBirthCertificateRelatedImages>
> {
  const result: IGeneralAPIResponse<
    IRootBirthCertificate & IBirthCertificateRelatedImages
  > = {
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
      father_identity_card_url: payload.father_identity_card_url,
      mother_identity_card_url: payload.mother_identity_card_url,
      out_of_wedlock_letter_url: payload.out_of_wedlock_letter_url ?? '',
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

      await db.insert(kuaMarriageBookImages).values(
        payload.marriage_book_url.map((url: string) => ({
          name: `${payload.full_name}-birth-certificate-request`,
          image_url: url,
          request_id: createdRequest.id,
        })),
      );

      await db.insert(witnessIdentityCardImages).values([
        {
          name: `${payload.full_name}-witness-1-birth-certificate-request`,
          image_url: payload.witness_1_identity_card_url,
          request_id: createdRequest.id,
        },
        {
          name: `${payload.full_name}-witness-2-birth-certificate-request`,
          image_url: payload.witness_2_identity_card_url,
          request_id: createdRequest.id,
        },
      ]);

      result.data = {
        ...createdRequest,
        family_card_image: payload.family_card_image,
        marriage_book_url: payload.marriage_book_url,
        witness_1_identity_card_url: payload.witness_1_identity_card_url,
        witness_2_identity_card_url: payload.witness_2_identity_card_url,
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

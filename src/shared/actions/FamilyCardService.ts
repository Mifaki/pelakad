// FamilyCardService.ts

'use server';

import { db } from '~/server/db';
import {
  familyCardRequest,
  supportingDocuments,
  marriageBookImages,
  requestStatusEnum,
} from '~/server/db/schema';
import { type IGeneralAPIResponse } from '../models/generalInterfaces';
import {
  type IFamilyCardPayload,
  type IRootFamilyCardRequest,
} from '../models/familycardinterfaces';

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

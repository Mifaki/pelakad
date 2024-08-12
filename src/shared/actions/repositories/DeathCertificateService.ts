'use server';

import { env } from '~/env';
import {
  type IAktaMatiPayload,
  type IRootDeathCertificate,
} from '~/shared/models/aktamatiinterfaces';

export async function submitDeathCertificateRequest(
  payload: IAktaMatiPayload,
): Promise<IRootDeathCertificate> {
  const response = await fetch(`${env.BASE_API_URL}/akta-mati`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData: { error?: string } = await response.json();
    throw new Error(errorData.error ?? 'Failed to submit Akta Mati request');
  }

  const data: unknown = await response.json();

  if (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'full_name' in data &&
    'phone_number' in data &&
    'nik_id' in data &&
    'kk_id' in data &&
    'reporter_identity_card_url' in data &&
    'deceased_identity_card_url' in data &&
    'death_certificate_url' in data &&
    'sptjm_url' in data &&
    'statement_letter_of_true_death_data_url' in data &&
    'request_status' in data
  ) {
    return data as IRootDeathCertificate;
  } else {
    throw new Error('Invalid response format');
  }
}

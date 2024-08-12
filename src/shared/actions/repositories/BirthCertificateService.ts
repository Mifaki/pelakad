'use server';

import { env } from '~/env';
import {
  type IAktaLahirPayload,
  type IRootBirthCertificate,
} from '~/shared/models/aktalahirinterfaces';

export async function submitBirthCertificateRequest(
  payload: IAktaLahirPayload,
): Promise<IRootBirthCertificate> {
  const response = await fetch(`${env.BASE_API_URL}/akta-lahir`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData: { error?: string } = await response.json();
    throw new Error(errorData.error ?? 'Failed to submit KTP request');
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
    'father_identity_card_url' in data &&
    'mother_identity_card_url' in data &&
    'out_of_wedlock_letter_url' in data &&
    'marriage_certificate_url' in data &&
    'request_status' in data
  ) {
    return data as IRootBirthCertificate;
  } else {
    throw new Error('Invalid response format');
  }
}

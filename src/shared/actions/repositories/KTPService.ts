'use server';

import { env } from '~/env';
import { type IPayloadKTP, type IRootKTP } from '~/shared/models/ktpinterfaces';

export async function submitKTPRequest(
  payload: IPayloadKTP,
): Promise<IRootKTP> {
  const response = await fetch(`${env.BASE_API_URL}/ktp`, {
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
    'contact' in data &&
    'nik_id' in data &&
    'kk_id' in data &&
    'reason' in data &&
    'request_status' in data &&
    'family_card_url' in data &&
    'birth_certificate_url' in data &&
    'foreign_move_cert_url' in data &&
    'damaged_ktp_url' in data &&
    'police_report_url' in data
  ) {
    return data as IRootKTP;
  } else {
    throw new Error('Invalid response format');
  }
}

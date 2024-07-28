'use server';

import { env } from '~/env';
import { type IFamilyCardPayload } from '~/shared/models/familycardinterfaces';

export async function submitFamilyCardRequest(
  payload: IFamilyCardPayload,
): Promise<IFamilyCardPayload> {
  const response = await fetch(`${env.BASE_API_URL}/kk`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData: { error?: string } = await response.json();
    console.log(response);
    throw new Error(errorData.error ?? 'Failed to submit Family Card request');
  }

  const data: unknown = await response.json();
  if (
    typeof data === 'object' &&
    data !== null &&
    'full_name' in data &&
    'phone_number' in data &&
    'nik_id' in data &&
    'kk_id' in data &&
    'reason' in data
  ) {
    return data as IFamilyCardPayload;
  } else {
    throw new Error('Invalid response format');
  }
}

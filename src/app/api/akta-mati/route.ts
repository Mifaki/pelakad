import { NextResponse } from 'next/server';
import { addDeathCertificateRequest } from '~/shared/actions/DeathCertificateService';
import { type IAktaMatiPayload } from '~/shared/models/aktamatiinterfaces';

export async function POST(request: Request) {
  try {
    const payload: IAktaMatiPayload = await request.json();
    const result = await addDeathCertificateRequest(payload);
    if (result.error) {
      console.error('Error in addDeathCertificateRequest:', result.error);
      return NextResponse.json(
        { error: result.error.message },
        { status: 400 },
      );
    }
    return NextResponse.json(result.data, { status: 201 });
  } catch (error) {
    console.error('Unhandled error in POST /api/birth-certificate:', error);
    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 },
    );
  }
}

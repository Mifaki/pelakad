import { NextResponse } from 'next/server';
import { addBirthCertificateRequest } from '~/shared/actions/BirthCertificateService';
import { type IAktaLahirPayload } from '~/shared/models/aktalahirinterfaces';

export async function POST(request: Request) {
  try {
    const payload: IAktaLahirPayload = await request.json();
    const result = await addBirthCertificateRequest(payload);
    if (result.error) {
      console.error('Error in addBirthCertificateRequest:', result.error);
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

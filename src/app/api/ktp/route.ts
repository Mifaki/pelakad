import { NextResponse } from 'next/server';
import { addKTPRequest } from '~/shared/actions/KTPService';
import { type IPayloadKTP } from '~/shared/models/ktpinterfaces';

export async function POST(request: Request) {
  try {
    const payload: IPayloadKTP = await request.json();
    const result = await addKTPRequest(payload);

    if (result.error) {
      console.error('Error in addKTPRequest:', result.error);
      return NextResponse.json(
        { error: result.error.message },
        { status: 400 },
      );
    }

    return NextResponse.json(result.data, { status: 201 });
  } catch (error) {
    console.error('Unhandled error in POST /api/ktp:', error);
    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 },
    );
  }
}

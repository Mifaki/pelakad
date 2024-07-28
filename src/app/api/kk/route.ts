import { NextResponse } from 'next/server';
import { addFamilyCardRequest } from '~/shared/actions/FamilyCardService';
import { type IFamilyCardPayload } from '~/shared/models/familycardinterfaces';

export async function POST(request: Request) {
  try {
    const payload: IFamilyCardPayload = await request.json();
    const result = await addFamilyCardRequest(payload);

    if (result.error) {
      console.error('Error in addFamilyCardRequest:', result.error);
      return NextResponse.json(
        { error: result.error.message },
        { status: 400 },
      );
    }

    return NextResponse.json(result.data, { status: 201 });
  } catch (error) {
    console.error('Unhandled error in POST /api/kk:', error);
    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 },
    );
  }
}

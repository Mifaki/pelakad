// ~/shared/services/DashboardService.ts
import { db } from '~/server/db';
import {
  ktpRequest,
  familyCardRequest,
  birthCertificateRequest,
  deathCertificateRequest,
} from '~/server/db/schema';
import { type IGeneralAPIResponse } from '../models/generalInterfaces';
import { type IDashboardStatistics } from '../models/dashboardinterfaces';

export async function getDashboardStatistics(): Promise<
  IGeneralAPIResponse<IDashboardStatistics>
> {
  const result: IGeneralAPIResponse<IDashboardStatistics> = {
    data: null,
    error: null,
    isLoading: true,
  };

  try {
    const [
      totalKtpRequests,
      totalKkRequests,
      totalBirthCertRequests,
      totalDeathCertRequests,
    ] = await Promise.all([
      db.select().from(ktpRequest).execute(),
      db.select().from(familyCardRequest).execute(),
      db.select().from(birthCertificateRequest).execute(),
      db.select().from(deathCertificateRequest).execute(),
    ]);

    result.data = {
      total_ktp_request: totalKtpRequests.length,
      total_kk_request: totalKkRequests.length,
      total_birth_cert_request: totalBirthCertRequests.length,
      total_death_cert_request: totalDeathCertRequests.length,
    };
  } catch (error) {
    result.error =
      error instanceof Error ? error : new Error('An unknown error occurred');
  } finally {
    result.isLoading = false;
  }

  return result;
}

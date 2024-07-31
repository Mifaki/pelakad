export function createDeclineWhatsappUrl(
  phoneNumber: string,
  requestType: string,
  feedback: string,
  fullName: string,
): string {
  function formatToIndonesianE164(phone: string): string {
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.startsWith('62')) {
      return '+' + digitsOnly;
    }
    if (digitsOnly.startsWith('0')) {
      return '+62' + digitsOnly.slice(1);
    }
    return '+62' + digitsOnly;
  }

  const formattedPhoneNumber = formatToIndonesianE164(phoneNumber);

  const message = `Kepada Yth.
*Bapak/Ibu ${fullName}*

Dengan hormat,

Terima kasih atas pengajuan Bapak/Ibu mengenai *${requestType}*.

Dengan berat hati kami informasikan bahwa *saat ini pengajuan tersebut belum dapat kami proses* dengan alasan sebagai berikut:

*${feedback}*

Kami mohon Bapak/Ibu dapat melengkapi/memperbaiki dokumen yang diperlukan dan mengajukan kembali permohonan tersebut.

Atas perhatian dan kerjasama Bapak/Ibu, kami ucapkan terima kasih.

Hormat kami,
*Balai Desa Dawuhan*

_Catatan: Pesan ini bersifat pemberitahuan dan tidak perlu dibalas._`;

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${formattedPhoneNumber.slice(1)}?text=${encodedMessage}`;
}

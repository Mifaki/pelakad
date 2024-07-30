export function createFinishWhatsappUrl(
  phoneNumber: string,
  requestType: string,
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
  
Kami informasikan bahwa *dokumen yang Anda ajukan telah selesai diproses*.
  
Bapak/Ibu dapat mengambil dokumen tersebut di Balai Desa Dawuhan pada jam kerja.
  
Mohon membawa identitas diri yang sesuai saat pengambilan dokumen.
  
Atas perhatian dan kerjasama Bapak/Ibu, kami ucapkan terima kasih.
  
Hormat kami,
*Balai Desa Dawuhan*
  
_Catatan: Pesan ini bersifat pemberitahuan dan tidak perlu dibalas._`;

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${formattedPhoneNumber.slice(1)}?text=${encodedMessage}`;
}

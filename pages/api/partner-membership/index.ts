import apiClient from '@/utils/api';

async function submitPartnerMembershipForm(
  sendFormData: FormData,
) {
  try {
    const response = await apiClient.post(
      'partner-membership',
      sendFormData,
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }
    );




    return response;
  } catch (error) {

    console.error('Error sending form data:', error);


  }
}

export {
  submitPartnerMembershipForm
}
import apiClient from '../../../utils/api';

async function submitInvestorRegistrationForm(
  sendFormData: FormData,
) {
  try {
    const response = await apiClient.post(
      'investor-registration',
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
  submitInvestorRegistrationForm
}
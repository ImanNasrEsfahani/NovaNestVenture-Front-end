import apiClient from '@/utils/api';

async function submitMentorRegistrationForm(
  sendFormData: FormData,
) {
  try {
    // Make sure this endpoint matches your backend
    const response = await apiClient.post(
      '/join-as-mentor', // Note the leading slash
      sendFormData,
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }
    );

    console.log('Response:', response);
    return response;
  } catch (error) {
    console.error('Error sending form data:', error);
    throw error; // Re-throw to handle in the component
  }
}

export {
  submitMentorRegistrationForm
}
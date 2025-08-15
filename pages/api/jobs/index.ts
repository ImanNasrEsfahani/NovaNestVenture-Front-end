import apiClient from '../../../utils/api';

async function submitApplyJobForm(
  sendFormData: FormData,
  csrfToken: string,
) {
  try {
    const response = await apiClient.post(
      'apply-job-form',
      sendFormData,
      {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRFToken': csrfToken,
        },
      }
    );


    return response;
  } catch (error) {
    console.error('Error sending form data:', error);

  }
}


export {
  submitApplyJobForm
}
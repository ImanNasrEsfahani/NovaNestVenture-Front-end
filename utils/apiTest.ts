// Test API connectivity
import apiClient from '@/utils/api';

export async function testApiConnection() {
  try {
    console.log('Testing API connection...');
    
    // Test with a simple GET request first
    const response = await apiClient.get('/health-check');
    console.log('API test successful:', response);
    return true;
  } catch (error: any) {
    console.error('API test failed:', error);
    
    // Additional debugging
    if (error.code === 'ERR_NETWORK') {
      console.error('Network error - possibly CORS or server unreachable');
    }
    
    return false;
  }
}

// Test with fetch API to compare
export async function testWithFetch() {
  try {
    const response = await fetch('https://back.novanestventure.com/investor-registration', {
      method: 'OPTIONS', // CORS preflight request
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Fetch test response:', {
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Fetch test failed:', error);
    return false;
  }
}

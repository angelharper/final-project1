// metadataService.js
export async function fetchMetadata() {
    const response = await fetch('http://localhost:3000/api/metadata'); 
    if (!response.ok) {
      throw new Error('Failed to fetch metadata');
    }
    return response.json();
  }
  
export async function getLogistica() {
    const response = await fetch('http://127.0.0.1:8000/logistica');
    if (!response.ok) {
      throw new Error('Error al logistica');
    }
    return await response.json();
  }
  
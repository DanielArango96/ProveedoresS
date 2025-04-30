export async function getProveedores() {
    const response = await fetch('http://127.0.0.1:8000/proveedor');
    if (!response.ok) {
      throw new Error('Error al traer proveedores');
    }
    return await response.json();
  }
  
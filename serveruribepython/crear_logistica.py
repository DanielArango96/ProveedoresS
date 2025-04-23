from app.database.connection import engine, Base
from app.api.models.Logistica import Logistica  # Importa solo el modelo necesario

# Crear solo la tabla `logistica`
Logistica.__table__.create(bind=engine, checkfirst=True)

print("✅ Tabla `logistica` creada exitosamente en la base de datos.")

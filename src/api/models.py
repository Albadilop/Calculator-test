from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship

db = SQLAlchemy()

# Modelo de usuario
class Users(db.Model):
    __tablename__ = 'users'

    # Atributos de la tabla
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(String(250), nullable=False)
    name: Mapped[str] = mapped_column(String(50), nullable=True)

    # Relación con CalculationHistory (un usuario puede tener muchos cálculos)
    calculations = relationship("CalculationHistory", back_populates="user")

    # Método para serializar el modelo a JSON
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            # No serializamos la contraseña por razones de seguridad
        }

# Modelo de historial de cálculos
class CalculationHistory(db.Model):
    __tablename__ = 'calculations'

    # Atributos de la tabla
    id: Mapped[int] = mapped_column(primary_key=True)
    calculation: Mapped[str] = mapped_column(String, nullable=False)
    result: Mapped[str] = mapped_column(String, nullable=False)
    created_at: Mapped[str] = mapped_column(default=db.func.current_timestamp())

    # Clave foránea para asociar el cálculo a un usuario
    user_id: Mapped[int] = mapped_column(db.ForeignKey("users.id"), nullable=False)

    # Relación inversa: un cálculo pertenece a un usuario
    user = relationship("Users", back_populates="calculations")

    # Método para serializar el modelo a JSON
    def serialize(self):
        return {
            "id": self.id,
            "calculation": self.calculation,
            "result": self.result,
            "created_at": self.created_at,
            "user_id": self.user_id,
        }
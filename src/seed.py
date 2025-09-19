from app import app, db
from datetime import datetime, timezone
from api.models import Users, CalculationHistory

with app.app_context():
    # Eliminar todas las tablas existentes (si es necesario)
    # db.drop_all()
    # Crear todas las tablas de nuevo
    # db.create_all()

    # Crear usuarios de ejemplo con name
    user1 = Users(email="juan.perez@example.com", password="password123", name="Juan Pérez")
    user2 = Users(email="ana.gomez@example.com", password="mypassword", name="Ana Gómez")
    user3 = Users(email="carlos.ruiz@example.com", password="securepass", name="Carlos Ruiz")
    user4 = Users(email="maria.lopez@example.com", password="pass456", name="Maria López")
    user5 = Users(email="luis.fernandez@example.com", password="pass789", name="Luis Fernández")
    user6 = Users(email="laura.diaz@example.com", password="mypassword2", name="Laura Díaz")
    user7 = Users(email="jorge.martinez@example.com", password="secretpass", name="Jorge Martínez")

    db.session.add_all([user1, user2, user3, user4, user5, user6, user7])
    db.session.commit()

    # Crear cálculos de ejemplo para los usuarios
    calculation1 = CalculationHistory(calculation="5 + 3", result="8", user_id=user1.id)
    calculation2 = CalculationHistory(calculation="10 * 2", result="20", user_id=user2.id)
    calculation3 = CalculationHistory(calculation="15 / 3", result="5", user_id=user3.id)
    calculation4 = CalculationHistory(calculation="100 - 25", result="75", user_id=user4.id)
    calculation5 = CalculationHistory(calculation="25 * 4", result="100", user_id=user5.id)
    calculation6 = CalculationHistory(calculation="36 / 6", result="6", user_id=user6.id)
    calculation7 = CalculationHistory(calculation="45 + 55", result="100", user_id=user7.id)

    db.session.add_all([calculation1, calculation2, calculation3, calculation4, calculation5, calculation6, calculation7])
    db.session.commit()

    print("✅ Data seeded successfully")

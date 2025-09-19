"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, CalculationHistory
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from sqlalchemy import select

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, CalculationHistory
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from sqlalchemy import select

# Crear el Blueprint para la API
api = Blueprint('api', __name__)

# Habilitar CORS en la API
CORS(api)

# Rutas para usuarios

# Obtener todos los usuarios
@api.route('/users', methods=['GET'])
def get_users():
    stmt = select(Users)
    users = db.session.execute(stmt).scalars().all()
    return jsonify([user.serialize() for user in users]), 200

# Obtener un solo usuario
@api.route('/users/<int:user_id>', methods=['GET'])
def get_single_user(user_id):
    stmt = select(Users).where(Users.id == user_id)
    user = db.session.execute(stmt).scalar_one_or_none()
    if user is None:
        return jsonify({'error': f'user with id {user_id} not found'}), 404 
    return jsonify(user.serialize()), 200

# Crear un nuevo usuario
@api.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    if not data or 'email' not in data or 'password' not in data:
        return jsonify({'error': 'missing data to create a user'}), 400
    
    new_user = Users(
        email=data['email'],
        password=data['password'],  # No se hace hash de la contraseña por ahora
        name=data.get('name')  # 'name' es opcional
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201

# Modificar un usuario existente
@api.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    data = request.get_json()
    stmt = select(Users).where(Users.id == id)
    user = db.session.execute(stmt).scalar_one_or_none()
    if user is None:
        return jsonify({'error': f'user {id} not found'}), 404

    user.email = data.get('email', user.email)
    user.password = data.get('password', user.password)  # Se puede modificar la contraseña sin hash
    user.name = data.get('name', user.name)
    
    db.session.commit()
    return jsonify({'data': user.serialize(), 'message': f'user with id {id} modified'}), 200

# Eliminar un usuario
@api.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    stmt = select(Users).where(Users.id == id)
    user = db.session.execute(stmt).scalar_one_or_none()
    if user is None:
        return jsonify({'error': f'user with id {id} not found'}), 404
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': f'user with id {id} deleted'}), 200


# Rutas para cálculos

# Obtener todos los cálculos
@api.route('/calculations', methods=['GET'])
def get_calculations():
    stmt = select(CalculationHistory)
    calculations = db.session.execute(stmt).scalars().all()
    return jsonify([calculation.serialize() for calculation in calculations]), 200

# Obtener un solo cálculo
@api.route('/calculations/<int:calculation_id>', methods=['GET'])
def get_single_calculation(calculation_id):
    stmt = select(CalculationHistory).where(CalculationHistory.id == calculation_id)
    calculation = db.session.execute(stmt).scalar_one_or_none()
    if calculation is None:
        return jsonify({'error': f'calculation with id {calculation_id} not found'}), 404 
    return jsonify(calculation.serialize()), 200

# Crear un nuevo cálculo
@api.route('/calculations', methods=['POST'])
def create_calculation():
    data = request.get_json()
    if not data or 'calculation' not in data or 'result' not in data or 'user_id' not in data:
        return jsonify({'error': 'missing data to create a calculation'}), 400
    
    new_calculation = CalculationHistory(
        calculation=data['calculation'],
        result=data['result'],
        user_id=data['user_id']  # Asociamos el cálculo con un usuario
    )
    db.session.add(new_calculation)
    db.session.commit()
    return jsonify(new_calculation.serialize()), 201

# Modificar un cálculo existente
@api.route('/calculations/<int:id>', methods=['PUT'])
def update_calculation(id):
    data = request.get_json()
    stmt = select(CalculationHistory).where(CalculationHistory.id == id)
    calculation = db.session.execute(stmt).scalar_one_or_none()
    if calculation is None:
        return jsonify({'error': f'calculation {id} not found'}), 404

    calculation.calculation = data.get('calculation', calculation.calculation)
    calculation.result = data.get('result', calculation.result)
    db.session.commit()
    return jsonify({'data': calculation.serialize(), 'message': f'calculation with id {id} modified'}), 200

# Eliminar un cálculo
@api.route('/calculations/<int:id>', methods=['DELETE'])
def delete_calculation(id):
    stmt = select(CalculationHistory).where(CalculationHistory.id == id)
    calculation = db.session.execute(stmt).scalar_one_or_none()
    if calculation is None:
        return jsonify({'error': f'calculation with id {id} not found'}), 404
    db.session.delete(calculation)
    db.session.commit()
    return jsonify({'message': f'calculation with id {id} deleted'}), 200
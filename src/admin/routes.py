from flask import Blueprint, render_template, request, redirect, url_for
from .models import Employee
from app import db

admin_bp = Blueprint('admin', __name__, url_prefix='/admin')

@admin_bp.route('/')
def index():
    employees = Employee.query.all()
    return render_template('index.html', employees=employees)

@admin_bp.route('/add', methods=['GET', 'POST'])
def add_employee():
    if request.method == 'POST':
        name = request.form['name']
        position = request.form['position']
        salary = int(request.form['salary'])
        new_employee = Employee(name=name, position=position, salary=salary)
        db.session.add(new_employee)
        db.session.commit()
        return redirect(url_for('admin.index'))
    return render_template('add_employee.html')

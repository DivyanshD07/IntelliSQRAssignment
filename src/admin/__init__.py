from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///employees.db'
db = SQLAlchemy(app)

from src.admin.routes import admin_bp
app.register_blueprint(admin_bp)

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)

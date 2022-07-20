#Se importa las librerias Flask y render template
from flask import Flask, render_template

'''
El primer argumento es el nombre del módulo o paquete de la aplicación. __name__ es un atajo 
conveniente para esto que es apropiado para la mayoría de los casos. Esto es necesario para 
que Flask sepa dónde buscar recursos como plantillas y archivos estáticos.
'''
app = Flask(__name__) 

'''
Decorador para decirle a Flask qué URL debe activar nuestra función.
'''
@app.route('/')
#Se crea la función para determinada acción -> Game página principal
def index():
    return render_template('index.html')

'''
Finalmente usamos la función run() para ejecutar el servidor local con nuestra
aplicación. El if __name__ == '__main__': se asegura de que el servidor solo se ejecute 
si el script se ejecuta directamente desde el intérprete de Python y no se usa como un 
módulo importado.
'''
if __name__ == '__main__':
    app.run(debug=True)
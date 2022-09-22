import { conexion } from '../modelo/db_conectar.js';

const CRUD_ESTUDIANTE = {};
CRUD_ESTUDIANTE.LEER = (req, res) => {
  conexion.query(
    'SELECT *, DATE_FORMAT(fecha_nacimiento, "%d/%m/%Y") AS nacimiento, DATE_FORMAT(fecha_nacimiento, "%Y-%m-%d") AS fecha_nacimiento FROM Estudiantes;',
    (error, resultado) => {
      if (error) throw error;
      else res.render('estudiante/index', { resultado });
    }
  );
};
CRUD_ESTUDIANTE.CUD = (req, res) => {
  const ACCION = req.body.accion;

  // Datos
  const id = req.body.id_estudiante;
  const carnet = req.body.carnet;
  const nombres = req.body.nombres ? req.body.nombres : null;
  const apellidos = req.body.apellidos ? req.body.apellidos : null;
  const direccion = req.body.direccion ? req.body.direccion : null;
  const telefono = req.body.telefono ? req.body.telefono : null;
  const genero = req.body.genero ? req.body.genero : null;
  const email = req.body.email ? req.body.email : null;
  const fecha_nacimiento = req.body.fecha_nacimiento ? req.body.fecha_nacimiento : null;

  // Acciones
  if ((ACCION === 'C')) {
    conexion.query('INSERT INTO Estudiantes SET ?', { carnet, nombres, apellidos, direccion, telefono, genero, email, fecha_nacimiento }, (error, resultado) => {
      if (error) throw error;
      else res.redirect('/');
    });
  }
  if ((ACCION === 'U')) {
    conexion.query('UPDATE Estudiantes SET ? WHERE id_estudiante=?', [{ carnet, nombres, apellidos, direccion, telefono, genero, email, fecha_nacimiento }, id], (error, resultado) => {
      if (error) throw error;
      else res.redirect('/');
    });
  }
  if ((ACCION === 'D')) {
    conexion.query('DELETE FROM Estudiantes WHERE id_estudiante=?', [id], (error, resultado) => {
      if (error) throw error;
      else res.redirect('/');
    });
  }
};

export { CRUD_ESTUDIANTE };

<?php 

    class BaseDeDatos
    {
        public $conexion;
        public $estado;
        public $mensaje;

        public function conectar($ruta){
            $this->conexion=new SQLite3("$ruta");

            if ($this->conexion->lastErrorCode() == 0) {
                $this->estado = "OK";
                $this->mensaje = "Conexión Exitosa";
            } else {
                # code...
            }
            
        }
    }
    
 ?>
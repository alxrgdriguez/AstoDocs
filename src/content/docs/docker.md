# 🚀 Guía para instalar Docker y Docker Compose en Ubuntu

<!-- Carga el script para generar el índice dinámicamente -->

<script src="/src/scripts/toc.js" defer></script>

---

## ✨ Paso 1: Actualizar el sistema

Ejecuta el siguiente comando para actualizar los paquetes del sistema:

```bash
sudo apt update && sudo apt upgrade -y
```

---

## 🐳 Paso 2: Instalar dependencias necesarias

Instala las dependencias necesarias con el siguiente comando:

```bash
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
```

---

## 🔑 Paso 3: Agregar el repositorio oficial de Docker

Añade la clave GPG y el repositorio de Docker ejecutando:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

---

## 📥 Paso 4: Instalar Docker

Instala Docker con los siguientes comandos:

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io
```

Verifica la instalación:

```bash
docker --version
```

Habilita el servicio de Docker para que se inicie automáticamente:

```bash
sudo systemctl enable --now docker
```

Ejecuta un contenedor de prueba para comprobar que Docker funciona:

```bash
docker run hello-world
```

---

## ⚙️ Paso 5: Agregar tu usuario al grupo Docker

Para evitar usar `sudo` con cada comando Docker, agrega tu usuario al grupo `docker`:

```bash
sudo usermod -aG docker $USER
```

Aplica los cambios cerrando sesión y volviendo a entrar o ejecutando:

```bash
newgrp docker
```

---

## 📦 Paso 6: Instalar Docker Compose

Descarga la última versión de Docker Compose:

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Asigna permisos de ejecución:

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

Verifica la instalación:

```bash
docker-compose --version
```

---

## ✅ Paso 7: Verificación final

Para asegurarte de que todo funciona correctamente, ejecuta:

```bash
docker version
docker-compose version
```

Si ambos comandos devuelven información sin errores, ¡Docker y Docker Compose están correctamente instalados en tu sistema Ubuntu! 🎉

---

## 🔗 Recursos adicionales

- [Documentación oficial de Docker](https://docs.docker.com/get-docker/)
- [Guía de Docker Compose](https://docs.docker.com/compose/)

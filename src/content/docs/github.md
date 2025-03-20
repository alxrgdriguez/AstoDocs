# 🐈‍⬛ Guía de Git y GitHub para Proyectos

<!-- Carga el script para generar el índice dinámicamente -->

## <div id="toc"></div>

---

## 📦 Paso 1: Inicializar un Repositorio

Para comenzar con un nuevo repositorio en Git, ejecuta:

```bash
git init
```

Esto creará un nuevo repositorio en la carpeta actual.

---

## 🔄 Paso 2: Clonar un Repositorio

Si deseas trabajar con un repositorio existente en GitHub, usa:

```bash
git clone https://github.com/usuario/repositorio.git
```

Esto descargará todo el contenido del repositorio a tu máquina local.

---

## 💾 Paso 3: Agregar y Confirmar Cambios

Para agregar archivos al área de preparación y confirmarlos:

```bash
git add .
git commit -m "Mensaje descriptivo del cambio"
```

`git add .` agrega todos los archivos modificados y `git commit` guarda los cambios con un mensaje.

---

## 🚀 Paso 4: Subir Cambios a GitHub

Después de realizar cambios, súbelos a GitHub con:

```bash
git push origin main
```

Si la rama principal tiene otro nombre, usa:

```bash
git push origin nombre-de-rama
```

---

## 🌳 Paso 5: Trabajar con Ramas

#### Crear una nueva rama y cambiar a ella:

```bash
git checkout -b nueva-rama
```

#### Ver todas las ramas disponibles:

```bash
git branch
```

#### Cambiar a una rama existente:

```bash
git checkout nombre-de-rama
```

#### Fusionar cambios de una rama a otra:

```bash
git merge nombre-de-rama
```

---

## 🔄 Paso 6: Sincronizar con el Repositorio Remoto

#### Obtener los últimos cambios del servidor:

```bash
git pull origin main
```

#### Forzar una actualización de la rama local con la remota:

```bash
git reset --hard origin/main
```

---

## ⚠️ Paso 7: Deshacer Cambios

#### Revertir un commit local:

```bash
git reset --soft HEAD~1
```

#### Eliminar cambios no guardados en archivos:

```bash
git checkout -- nombre-de-archivo
```

---

## 🛠 Paso 8: Otros Comandos Útiles

#### Ver historial de commits:

```bash
git log --oneline --graph --all
```

#### Eliminar un archivo del repositorio sin borrarlo del sistema:

```bash
git rm --cached archivo
```

#### Configurar Git con nombre y correo:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```

---

## ✅ Paso 9: Verificación final

Para asegurarte de que todo funciona correctamente, ejecuta:

```bash
git status
git remote -v
git branch
```

Si los comandos devuelven información sin errores, ¡tu entorno Git está configurado correctamente! 🎉

---

## 🔗 Recursos adicionales

- [Documentación oficial de Git](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)

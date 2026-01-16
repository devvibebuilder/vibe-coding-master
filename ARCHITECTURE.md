# Manifiesto de Arquitectura - Vibe Coding Master

Este repositorio utiliza una Arquitectura Hexagonal Simplificada (Clean Architecture) diseñada para el desarrollo asistido por agentes de IA. La estructura es independiente del lenguaje de programación.

## 1. Estándar de Capas

### /logic (Dominio)
- Regla: Solo lógica pura. No puede importar nada de /adapters.
- Contenido: Casos de uso, cálculos, reglas de negocio.
- Validación: Debe probarse con tests unitarios.

### /interfaces (Contratos)
- Regla: Define el "Qué". Todo dato que entra al sistema debe tener un esquema de validación.
- Implementación Sugerida:
  - TypeScript: Zod / TypeBox.
  - Python: Pydantic.
  - Rust: Serde.
  - Go: Struct Tags + Validator.

### /adapters (Infraestructura)
- Regla: Implementa el "Cómo". Aquí viven las DBs, APIs, y Frameworks de UI.
- Acción: Debe validar los datos de entrada usando los esquemas de /interfaces antes de llamar a /logic.

## 2. Protocolo de Auditoría Políglota

Antes de cada entrega, el agente debe asegurar la integridad según el stack:

| Stack | Comando de Validación Sugerido |
| :--- | :--- |
| Node/TS | npm run check:types |
| Python | mypy . o pydantic-check |
| Rust | cargo check |
| Go | go vet ./... |

## 3. Filosofía de "Inferencia Dirigida"
No se permite escribir código sin que exista una especificación en /specs. La IA debe actuar primero como Arquitecto, luego como Auditor y finalmente como Programador.

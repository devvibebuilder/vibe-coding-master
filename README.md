# Vibe Coding Master: Protocolo de Gobernanza para el Desarrollo Agéntico

### Abstract
**Vibe Coding Master** is a high-level operational framework designed to streamline the transition from manual coding to agentic orchestration. This repository serves as a **technical governance blueprint**, optimizing context injection for Large Language Models (LLMs) and AI agents. By enforcing **Clean Architecture** and **Dependency Inversion** principles, it ensures that AI-generated code remains scalable, secure, and aligned with enterprise-grade standards.

---

### Resumen Ejecutivo
Este repositorio constituye un **Framework de Gobernanza Técnica** diseñado para la transición del desarrollo manual a la orquestación asistida por agentes. Su propósito es estandarizar la inyección de contexto en modelos de lenguaje (LLMs), asegurando que la generación de código sea el resultado de un diseño arquitectónico predefinido y no de una inferencia probabilística aislada.

### Quick Start para Dueños de Producto
Este repositorio debe ser utilizado como el **molde operativo** (blueprint) para el inicio de cualquier nuevo Micro-SaaS o producto digital. 

1. **Duplicación del Activo**: Clone este repositorio como base para su nuevo proyecto.
2. **Definición de Especificaciones**: Utilice la carpeta `/specs` para detallar los requerimientos de negocio.
3. **Despliegue de Lógica**: Instruya a la IA para que desarrolle el núcleo del sistema exclusivamente en `/logic`, asegurando la independencia del código.
4. **Gobernanza**: El archivo `.cursorrules` actuará como el fiscal técnico de cada línea de código sugerida.

### Arquitectura de Directorios
La estructura física del repositorio garantiza la integridad sistémica bajo principios de **Clean Architecture**:

* **`.cursorrules`**: Capa de gobernanza normativa. Reglamento Constitucional que rige el comportamiento y límites de la IA.
* **`/logic`**: El núcleo (Core). Contiene la lógica de negocio pura y reglas de dominio, aislada de dependencias externas.
* **`/interfaces`**: Contratos y esquemas. Define los DTOs y tipos globales que aseguran la comunicación entre módulos.
* **`/adapters`**: Capa de implementación. Gestiona la conexión con servicios externos (DB, APIs) bajo Inversión de Dependencias.
* **`/audit`**: Trazabilidad y control. Registros de calidad, logs de seguridad y persistencia de contexto.
* **`/specs`**: Fuente de verdad. Requerimientos técnicos y funcionales que sirven de base para la inferencia.
* **`/tests`**: Infraestructura de validación. Garantiza que la lógica sea testeable al 100% y libre de efectos secundarios.

### Protocolo de Inferencia Dirigida (PID)
A diferencia del desarrollo tradicional, este framework utiliza un **Protocolo de Inferencia Dirigida**. El agente de IA tiene prohibido "crear" sin antes "consultar":
1. **Anclaje de Verdad**: El agente lee obligatoriamente `/specs` antes de proponer cualquier línea de código.
2. **Contrato de Interfaz**: Ninguna función en `/adapters` se implementa sin una definición previa y validada en `/interfaces`.
3. **Aislamiento de Dominio**: El código en `/logic` es matemáticamente puro; es agnóstico a la infraestructura (DB, Frameworks, UI).

### Ciclo de Vida del Desarrollo Agéntico (ADLC)
Para maximizar la eficiencia de la IA, siga este flujo de trabajo:
1. **DRAFT** (`/specs`): Defina el requerimiento funcional.
2. **CONTRACT** (`/interfaces`): Establezca los tipos y contratos de entrada/salida.
3. **CORE** (`/logic`): Desarrolle la lógica de negocio pura.
4. **IMPLEMENT** (`/adapters`): Conecte la lógica con el mundo exterior (infraestructura).
5. **VERIFY** (`/tests` & `/audit`): Valide la integridad y registre el resultado.

### Valor Estratégico y ROI
* **Reducción del Time-to-Market**: Colapso de los ciclos de prototipado mediante orquestación guiada.
* **Soberanía Técnica**: Arquitectura modular que facilita la migración de proveedores o stacks.
* **Mitigación de Deuda**: Restricciones de diseño estrictas que impiden la degradación del código con el tiempo.

---

## Instalación Automatizada vía IA

Si utiliza un IDE agéntico (Cursor, Windsurf), ejecute este prompt en el chat:

> "Actúa como un Ingeniero de DevOps. Genera los comandos de terminal necesarios para clonar el repositorio 'https://github.com/devvibebuilder/vibe-coding-master.git' en una nueva carpeta, accede a ella y lista la estructura de directorios. Una vez hecho, analiza el archivo .cursorrules para alinearte con mi Reglamento Constitucional y el README.md para entender el flujo de trabajo PID."

## Validación de Gobernanza y Defensa Proactiva
Este repositorio incluye un mecanismo de **Defensa Proactiva**. El sistema activará el protocolo de **Pausar y Preguntar** si se intenta violar la arquitectura.

**Ejercicio de prueba:** Solicite crear un script de acceso a base de datos mezclado con lógica de UI en la raíz del proyecto. El agente **debe** denegar la operación citando el incumplimiento del Reglamento Constitucional y la falta de separación entre `/adapters` y la vista.

---
**Director Técnico: Gustavo Reyes**
*Estrategia de Soluciones | Arquitectura de Software | Eficiencia Operativa*

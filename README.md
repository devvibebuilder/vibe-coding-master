# Vibe Coding Master: Protocolo de Gobernanza para el Desarrollo Agentico

### Abstract
Vibe Coding Master is a high-level operational framework designed to streamline the transition from manual coding to agentic orchestration. This repository serves as a technical governance blueprint, optimizing context injection for Large Language Models (LLMs) and AI agents. By enforcing Clean Architecture and Dependency Inversion principles, it ensures that AI-generated code remains scalable, secure, and aligned with enterprise-grade standards.

---

### Resumen Ejecutivo
Este repositorio constituye un Framework de Gobernanza Tecnica diseñado para la transicion del desarrollo manual a la orquestacion asistida por agentes. Su proposito es estandarizar la inyeccion de contexto en modelos de lenguaje (LLMs), asegurando que la generacion de codigo sea el resultado de un diseño arquitectonico predefinido y no de una inferencia probabilistica aislada.

### Quick Start para Dueños de Producto
Este repositorio debe ser utilizado como el molde operativo (blueprint) para el inicio de cualquier nuevo Micro-SaaS o producto digital bajo un enfoque poliglotas.

1. Duplicacion del Activo: Clone este repositorio como base para su nuevo proyecto.
2. Definicion de Especificaciones: Utilice la carpeta /specs para detallar los requerimientos de negocio.
3. Seleccion de Stack: Defina el lenguaje en ARCHITECTURE.md para que la IA aplique las reglas correspondientes.
4. Gobernanza: El archivo .cursorrules actuara como el fiscal tecnico de cada linea de codigo sugerida.

### Arquitectura de Directorios
La estructura fisica del repositorio garantiza la integridad sistemica bajo principios de Clean Architecture:

* .cursorrules: Capa de gobernanza normativa. Reglamento Constitucional que rige el comportamiento y limites de la IA.
* ARCHITECTURE.md: Manifiesto Poliglota. Define como aplicar la arquitectura segun el stack tecnologico elegido (TS, Python, Go, Rust, etc).
* /logic: El nucleo (Core). Contiene la logica de negocio pura y reglas de dominio, aislada de dependencias externas.
* /interfaces: Contratos y esquemas de validacion. Define los DTOs y esquemas (Zod, Pydantic, etc) que actuan como aduana de datos.
* /adapters: Capa de implementacion. Gestiona la conexion con servicios externos (DB, APIs) bajo Inversion de Dependencias.
* /audit: Trazabilidad y control. Registros de decisiones arquitectonicas (ADRs), logs de seguridad y persistencia de contexto.
* /specs: Fuente de verdad. Requerimientos tecnicos y funcionales que sirven de base para la inferencia dirigida.
* /tests: Infraestructura de validacion. Garantiza que la logica sea testeable y libre de efectos secundarios.

### Protocolo de Inferencia Dirigida (PID)
A diferencia del desarrollo tradicional, este framework utiliza un Protocolo de Inferencia Dirigida. El agente de IA tiene prohibido crear sin antes consultar:

1. Anclaje de Verdad: El agente lee obligatoriamente /specs antes de proponer cualquier linea de codigo.
2. Contrato de Interfaz: Ninguna funcion se implementa sin una definicion previa y validada mediante esquemas en /interfaces.
3. Aislamiento de Dominio: El codigo en /logic es puro; es agnostico a la infraestructura (DB, Frameworks, UI).



### Ciclo de Vida del Desarrollo Agentico (ADLC)
Para maximizar la eficiencia de la IA, siga este flujo de trabajo:

1. DRAFT (/specs): Defina el requerimiento funcional y de negocio.
2. CONTRACT (/interfaces): Establezca los esquemas de validacion y contratos de datos.
3. CORE (/logic): Desarrolle la logica de negocio pura alineada al contrato.
4. IMPLEMENT (/adapters): Conecte la logica con la infraestructura externa.
5. VERIFY (/tests & /audit): Valide la integridad tecnica y documente la decision en un ADR.

### Valor Estrategico y ROI
* Reduccion del Time-to-Market: Colapso de los ciclos de prototipado mediante orquestacion guiada.
* Soberania Tecnica: Arquitectura modular que facilita la migracion de proveedores o stacks.
* Mitigacion de Deuda: Restricciones de diseño estrictas que impiden la degradacion del codigo con el tiempo.

---

## Instalacion Automatizada via IA

Si utiliza un IDE agentico (Cursor, Windsurf), ejecute este prompt en el chat:

> Actua como un Ingeniero de DevOps. Genera los comandos de terminal necesarios para clonar el repositorio 'https://github.com/devvibebuilder/vibe-coding-master.git' en una nueva carpeta, accede a ella y lista la estructura de directorios. Una vez hecho, analiza ARCHITECTURE.md y .cursorrules para alinearte con mi Reglamento Constitucional y el README.md para entender el flujo de trabajo PID.

## Protocolo de Arranque (Initial Handshake)

Para iniciar un proyecto, copie y pegue el siguiente prompt en el chat de su IDE para activar el Modo Consultor:

> Actua como mi Staff Software Engineer & Product Strategist. He inicializado un proyecto bajo el framework 'Vibe Coding Master'. 
> 
> Tu mision:
> 1. Analiza .cursorrules, ARCHITECTURE.md y este README.md para entender tu marco de actuacion.
> 2. Definicion de Stack: Preguntame que lenguaje y motor de validacion de esquemas utilizaremos para cumplir con la Seccion 3 de la Constitucion.
> 3. Fase de Diagnostico: Lee specs/plantilla_vision.md. Si esta incompleto, inicia una entrevista socratica para definir la Ineficiencia Operativa, Entidades de Negocio y Adapters.
> 4. Restriccion: No escribas codigo hasta que la fase de especificacion en /specs sea validada por mi.
> 
> ¿Estas listo para comenzar el diagnostico?

---
**Director Tecnico: Gustavo Reyes**
Estrategia de Soluciones | Arquitectura de Software | Eficiencia Operativa

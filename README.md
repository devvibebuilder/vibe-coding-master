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
La estructura física del repositorio ha sido diseñada para garantizar la integridad sistémica y la autonomía de los agentes bajo principios de **Clean Architecture**:

* **`.cursorrules`**: Capa de gobernanza normativa. Contiene el Reglamento Constitucional que rige el comportamiento y los límites de la IA.
* **`/logic`**: El núcleo del sistema. Contiene la lógica de negocio pura y las reglas de dominio, aislada de dependencias externas.
* **`/interfaces`**: Define los contratos, esquemas y tipos globales que aseguran la comunicación coherente entre módulos.
* **`/adapters`**: Capa de implementación técnica. Gestiona la conexión con servicios externos, bases de datos y APIs bajo el principio de Inversión de Dependencias.
* **`/audit`**: Espacio dedicado a la persistencia de contexto, trazabilidad arquitectónica y registros de control de calidad.
* **`/specs`**: Fuente de verdad técnica. Contiene los requerimientos y definiciones que sirven de base para la inferencia del agente.
* **`/tests`**: Infraestructura de validación para garantizar que la lógica de negocio sea testeable al 100% y libre de efectos secundarios.

### Valor Estratégico y ROI
Este framework permite transformar la capacidad de ejecución individual en una potencia operativa de grado empresarial. Al estandarizar el flujo de trabajo agéntico, se logra:
* **Reducción del Time-to-Market**: Colapso de los ciclos de prototipado y despliegue.
* **Soberanía de Datos**: Arquitectura optimizada para la ejecución en nubes privadas y entornos locales.
* **Integridad Técnica**: Mitigación proactiva de la deuda técnica mediante restricciones de diseño estrictas.

---
**Director Técnico: Gustavo Reyes**
*Estrategia de Soluciones | Arquitectura de Software | Eficiencia Operativa*

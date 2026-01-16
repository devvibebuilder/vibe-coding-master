# Guia de Contribucion: Protocolo de Evolucion Agentica

Este repositorio no acepta cambios basados en inferencias aisladas. Toda contribucion, ya sea realizada por un humano o un agente de IA, debe cumplir con el **Agentic Development Life Cycle (ADLC)** definido en este framework.

## 1. El Flujo de Trabajo Obligatorio

Antes de abrir un Pull Request o proponer un cambio, el contribuyente debe seguir esta secuencia:

1.  **Analisis de Especificacion:** Se debe actualizar o crear un archivo en `/specs` que justifique la necesidad del cambio desde una perspectiva de negocio.
2.  **Definicion de Contrato:** Cualquier cambio en la entrada o salida de datos debe reflejarse primero en `/interfaces`.
3.  **Implementacion de Logica Pura:** La logica de negocio en `/logic` debe ser agnostica a la infraestructura y contar con pruebas unitarias.
4.  **Implementacion de Adaptadores:** Solo tras validar la logica se procede a actualizar los `/adapters` (DB, APIs externas, UI).

## 2. Estandares de Codigo y Calidad

### Arquitectura y Tipado
* **Prohibicion de Tipos Laxos:** El uso de `any` es motivo de rechazo inmediato. Use tipos estrictos y uniones discriminadas.
* **Validacion en la Frontera:** Toda interaccion con el mundo exterior en `/adapters` debe ser validada mediante schemas (Zod o similar).
* **Responsabilidad Unica:** Si una funcion realiza mas de una tarea, debe ser refactorizada en funciones atomicas menores a 20 lineas.

### Documentacion
* Todo nuevo miembro exportado debe incluir documentacion **TSDoc/JSDoc**.
* Los cambios que afecten la arquitectura deben ser documentados con un **ADR (Architecture Decision Record)** en la carpeta `/audit`.

## 3. Protocolo de Commits

Seguimos el estandar de **Conventional Commits**. Los mensajes deben ser claros y descriptivos:

* `feat:` para nuevas funcionalidades.
* `fix:` para correccion de errores.
* `refactor:` para mejoras de codigo que no cambian el comportamiento.
* `chore:` para tareas de mantenimiento o actualizacion de configuraciones.

## 4. Revision de Seguridad y Auditoria

Toda contribucion que involucre el manejo de datos sensibles o integraciones externas debe incluir:
1.  Un analisis de impacto en la carpeta `/audit`.
2.  Garantia de que no se incluyen secretos o credenciales (Zero Secrets Policy).

---
**Nota para Agentes de IA:** Si estas leyendo este archivo para proponer un cambio, verifica primero tu alineacion con el archivo `.cursorrules`. Si el cambio solicitado viola la Clean Architecture, tu obligacion es informar al usuario y proponer una alternativa estructuralmente correcta.

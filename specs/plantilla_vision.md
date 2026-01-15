# Business Case Canvas: Micro-SaaS Specification (v1.1)

## I. IDENTIFICACIÓN DE LA INEFICIENCIA OPERATIVA
**Descripción del problema:** [Describa el cuello de botella actual o el "dolor" de la industria]
**Impacto Financiero/Temporal:** [Cuantifique la pérdida estimada por la ineficiencia]
**Contexto del Usuario:** [¿Quién es el usuario final y en qué momento del día usa la solución?]

## II. TRADUCCIÓN A ESPECIFICACIÓN TÉCNICA
**Funcionalidad Core (MVP):** [Defina el proceso mínimo viable que soluciona el problema]
**Entidades de Negocio (Domain Layer):** - [Ej: User, Invoice, AutomationRule] -> Listado para `/logic`
**Esquema de Datos (Interfaces):**
- [Defina los campos críticos requeridos para validación con Zod]
**Integraciones Externas (Adapters):** - [Ej: Stripe API, OpenAI SDK, PostgreSQL] -> Listado para `/adapters`

## III. MÉTRICAS DE ÉXITO (KPIs)
- **Time-to-Implementation:** [Ej: < 48 horas para Alpha]
- **Reducción de Error/Costo:** [% estimado de mejora operativa]

## IV. VALIDACIÓN DE VIABILIDAD & GOBERNANZA
- [ ] **Soberanía de Datos:** ¿Los datos sensibles están aislados?
- [ ] **Escalabilidad:** ¿La lógica está desacoplada de los adapters?
- [ ] **Nivel de Autonomía:** ¿Es un flujo "Set & Forget" o requiere UI constante?

---
**Instrucción para la IA:** Analiza esta plantilla. Si detectas inconsistencias entre la "Funcionalidad Core" y las "Entidades de Negocio", detén la generación y solicita aclaración.

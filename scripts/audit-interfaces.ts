import fs from 'fs';
import path from 'path';

/**
 * SCRIPT DE AUDITORÍA DE INTERFACES
 * Objetivo: Verificar la existencia de esquemas Zod y tipado derivado.
 */

const INTERFACES_PATH = path.join(__dirname, '../interfaces');

function auditInterfaces() {
  console.log("🔍 Iniciando auditoría de cumplimiento en /interfaces...\n");

  if (!fs.existsSync(INTERFACES_PATH)) {
    console.error("❌ Error: No se encontró la carpeta /interfaces.");
    process.exit(1);
  }

  const files = fs.readdirSync(INTERFACES_PATH).filter(f => f.endsWith('.ts'));
  let errors = 0;

  files.forEach(file => {
    const content = fs.readFileSync(path.join(INTERFACES_PATH, file), 'utf-8');
    const fileName = path.basename(file);

    console.log(`Checking: ${fileName}...`);

    // 1. Verificar presencia de Zod
    if (!content.includes("z.object") && !content.includes("z.enum")) {
      console.error(`  - ❌ ERROR: No se detectó un esquema Zod (z.object/z.enum).`);
      errors++;
    }

    // 2. Verificar tipado derivado (z.infer)
    if (!content.includes("z.infer<typeof")) {
      console.error(`  - ❌ ERROR: No se detectó tipado derivado mediante z.infer.`);
      errors++;
    }

    // 3. Verificar nomenclatura
    if (!fileName.includes('.schema.ts') && !fileName.includes('.types.ts')) {
      console.warn(`  - ⚠️ AVISO: Nomenclatura sugerida es .schema.ts o .types.ts.`);
    }
  });

  if (errors > 0) {
    console.log(`\n---------------------------------------------------------`);
    console.error(`AUDITORÍA FALLIDA: Se encontraron ${errors} violaciones de gobernanza.`);
    console.log(`---------------------------------------------------------`);
    process.exit(1);
  } else {
    console.log(`\n✅ AUDITORÍA EXITOSA: Todos los contratos están blindados.`);
    process.exit(0);
  }
}

auditInterfaces();

import { expectTypeOf } from "vitest";
import type DocumentSheetV2 from "../../../../../src/foundry/client-esm/applications/api/document-sheet.d.mts";
import type ApplicationV2 from "../../../../../src/foundry/client-esm/applications/api/application.d.mts";
import type { DeepPartial } from "../../../../../src/types/utils.d.mts";

expectTypeOf(foundry.applications.api.DocumentSheetV2.DEFAULT_OPTIONS).toMatchTypeOf<
  DeepPartial<ApplicationV2.Configuration>
>;
expectTypeOf(foundry.applications.api.DocumentSheetV2.DEFAULT_OPTIONS).toEqualTypeOf<
  DeepPartial<DocumentSheetV2.Configuration>
>;

import { expectTypeOf } from "vitest";
import type ApplicationV2 from "../../../../../src/foundry/client-esm/applications/api/application.d.mts";
import type DocumentSheetV2 from "../../../../../src/foundry/client-esm/applications/api/document-sheet.d.mts";
import type { DeepPartial } from "../../../../../src/types/utils.d.mts";

// Checking I didn't forget a non-inherited member

expectTypeOf(foundry.applications.sheets.ActorSheetV2.DEFAULT_OPTIONS).toMatchTypeOf<
  DeepPartial<DocumentSheetV2.Configuration>
>;
expectTypeOf(foundry.applications.sheets.ActorSheetV2.DEFAULT_OPTIONS).toMatchTypeOf<
  DeepPartial<DocumentSheetV2.Configuration>
>;

const actorSheet = new foundry.applications.sheets.ActorSheetV2({ document: {} });
expectTypeOf(actorSheet.actor).toEqualTypeOf<>;
expectTypeOf(actorSheet.token).toEqualTypeOf<>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class A extends foundry.applications.sheets.ActorSheetV2 {
  tests(): void {
    expectTypeOf(this._getHeaderControls()).toEqualTypeOf<ApplicationV2.HeaderControlsEntry[]>;
    expectTypeOf(this._renderHTML({}, {})).toEqualTypeOf<Promise<any>>;
  }
}

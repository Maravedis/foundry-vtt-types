import type { InexactPartial } from "../../../../types/utils.d.mts";
import type ApplicationV2 from "../api/application.d.mts";
import type DocumentSheetV2 from "../api/document-sheet.d.mts";
import type HandlebarsApplicationMixin from "../api/handlebars-application.mts";

/**
 * The AmbientLight configuration application.
 */
export default class AmbientLightConfig<
  Document extends foundry.documents.BaseAmbientLight,
  Configuration extends DocumentSheetV2.Configuration<Document> = DocumentSheetV2.Configuration<Document>,
  RenderOptions extends DocumentSheetV2.RenderOptions = DocumentSheetV2.RenderOptions,
> extends HandlebarsApplicationMixin(DocumentSheetV2)<Document, Configuration, RenderOptions> {
  /**
   * Maintain a copy of the original to show a real-time preview of changes.
   */
  preview: Document;

  /**
   * Prepare an array of form header tabs.
   */
  #getTabs: Record<string, InexactPartial<ApplicationV2.Tab>>;

  /**
   * Toggle visibility of the reset button which is only visible on the advanced tab.
   */
  #toggleReset(): void;

  /**
   * Preview changes to the AmbientLight document as if they were true document updates.
   * @param change  A change to preview.
   */
  protected _previewChanges(change?: this["preview"]): void;

  /**
   * Restore the true data for the AmbientLight document when the form is submitted or closed.
   */
  protected _resetPreview(): void;

  /**
   * Process form submission for the sheet.
   * @param event    - The originating form submission event
   * @param form     - The form element that was submitted
   * @param formData - Processed data for the submitted form
   */
  static #onSubmit(event: SubmitEvent, form: HTMLFormElement, formData: FormDataExtended): Promise<void>;

  /**
   * Process reset button click
   * @param event - The originating button click
   */
  static #onReset(event: PointerEvent): Promise<void>;
}

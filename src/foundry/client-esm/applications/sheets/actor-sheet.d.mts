import type DocumentSheetV2 from "../api/document-sheet.d.mts";

/**
 * A base class for providing Actor Sheet behavior using ApplicationV2.
 */
export default class ActorSheetV2 extends DocumentSheetV2<Actor.ConfiguredInstance> {
  /**
   * The Actor document managed by this sheet.
   */
  get actor(): Actor.ConfiguredInstance;

  /**
   * If this sheet manages the ActorDelta of an unlinked Token, reference that Token document.
   */
  get token(): Actor.ConfiguredInstance["token"];

  /**
   * Handle header control button clicks to render the Prototype Token configuration sheet.
   * @param event
   */
  static #onConfigurePrototypeToken(event: PointerEvent): Promise<void>;

  /**
   * Handle header control button clicks to display actor portrait artwork.
   * @param event
   */
  static #onShowPortraitArtwork(event: PointerEvent): Promise<void>;

  /**
   * Handle header control button clicks to display actor portrait artwork.
   * @param event
   */
  static #onShowTokenArtwork(event): Promise<void>;
}

import type BasePackage from "./base-package.d.mts";
import * as fields from "../data/fields.mjs";

declare namespace BaseSystem {
  type Schema = ReturnType<typeof BasePackage.defineSchema> & {
    /**
     * A web URL or local file path which provides a default background banner for worlds which are created using this system
     */
    background: fields.StringField<{ required: false; blank: false }>;

    /**
     * A default initiative formula used for this system
     */
    initiative: fields.StringField;

    /**
     * A default distance measurement to use for Scenes in this system
     */
    gridDistance: fields.NumberField;

    /**
     * A default unit of measure to use for distance measurement in this system
     */
    gridUnits: fields.StringField;

    /**
     * An Actor data attribute path to use for Token primary resource bars
     */
    primaryTokenAttribute: fields.StringField;

    /**
     * An Actor data attribute path to use for Token secondary resource bars
     */
    secondaryTokenAttribute: fields.StringField;
  };
}

interface BaseSystem extends fields.SchemaField.InnerInitializedType<BaseSystem.Schema> {}

/**
 * The data schema used to define System manifest files.
 * Extends the basic PackageData schema with some additional system-specific fields.
 */
declare class BaseSystem extends BasePackage<BaseSystem.Schema> {
  static defineSchema(): BaseSystem.Schema;

  static type: "system";

  /**
   * The default icon used for this type of Package.
   * @defaultValue `"fa-dice"`
   */
  static icon: string;

  /**
   * An alias for the document types available in the currently active World.
   */
  get documentTypes(): Game["documentTypes"];

  /**
   * An alias for the raw template JSON loaded from the game System.
   */
  get template(): Game["template"];

  /**
   * An alias for the structured data model organized by document class and type.
   */
  get model(): Game["model"];
}

export default BaseSystem;
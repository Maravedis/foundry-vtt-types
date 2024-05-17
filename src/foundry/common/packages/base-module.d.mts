import type BasePackage from "./base-package.d.mts";
import * as fields from "../data/fields.mjs";
import type AdditionalTypesField from "./sub-types.mjs";

declare namespace BaseModule {
  type Schema = ReturnType<typeof BasePackage.defineSchema> & {
    /**
     * Does this module provide a translation for the core software?
     */
    coreTranslation: fields.BooleanField;

    /**
     * A library module provides no user-facing functionality and is solely for use by other modules. Loaded before any system or module scripts.
     */
    library: fields.BooleanField;

    /**
     * Additional document sub-types provided by this module.
     */
    documentTypes: AdditionalTypesField;
  };
}

interface BaseModule extends fields.SchemaField.InnerInitializedType<BaseModule.Schema> {}

/**
 * The data schema used to define Module manifest files.
 * Extends the basic PackageData schema with some additional module-specific fields.
 */
declare class BaseModule extends BasePackage<BaseModule.Schema> {
  static defineSchema(): BaseModule.Schema;

  static type: "module";

  /**
   * The default icon used for this type of Package.
   * @defaultValue `"fa-plug"`
   */
  static icon: string;
}

export default BaseModule;
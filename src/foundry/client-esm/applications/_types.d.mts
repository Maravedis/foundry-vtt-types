// Open question - this is just types?

export interface ApplicationConfiguration {
  /**
   * An HTML element identifier used for this Application instance
   */
  id: string;
  /**
   * An string discriminator substituted for \{id\} in the default
   * HTML element identifier for the class
   */
  uniqueId: string;
  /**
   * An array of CSS classes to apply to the Application
   */
  classes: string[];
  /**
   * The HTMLElement tag type used for the outer Application frame
   */
  tag: string;
  /**
   * Configuration of the window behaviors for this Application
   */
  window: ApplicationWindowConfiguration;
  /**
   * Click actions supported by the Application and their event handler
   * functions. A handler function can be defined directly which only
   * responds to left-click events. Otherwise, an object can be declared
   * containing both a handler function and an array of buttons which are
   * matched against the PointerEvent#button property.
   */
  actions: Record<string, ApplicationClickAction | { handler: ApplicationClickAction; buttons: number[] }>;
  /**
   * Configuration used if the application top-level element is a form
   */
  form?: ApplicationFormConfiguration;
  /**
   * Default positioning data for the application
   */
  position: Partial<ApplicationPosition>;
}

export type ApplicationPosition = {
  /** Window offset pixels from top */
  top: number;

  /** Window offset pixels from left */
  left: number;

  /** Un-scaled pixels in width or "auto" */
  width: number | "auto";

  /** Un-scaled pixels in height or "auto" */
  height: number | "auto";

  /** A numeric scaling factor applied to application dimensions */
  scale: number;

  /** A z-index of the application relative to siblings */
  zIndex: number;
};

export type ApplicationWindowConfiguration = {};

export type ApplicationFormConfiguration = {};

export type ApplicationHeaderControlsEntry = {
  /** A font-awesome icon class which denotes the control button */
  icon: string;

  /**
   * The text label for the control button. This label will be automatically
   * localized when the button is rendered
   */
  label: string;

  /** The action name triggered by clicking the control button */
  action: string;

  /** Is the control button visible for the current client? */
  visible?: boolean | undefined;

  /**
   * A key or value in CONST.DOCUMENT_OWNERSHIP_LEVELS that restricts
   * visibility of this option for the current user. This option only
   * applies to DocumentSheetV2 instances.dz
   */
  ownership?: string | number | undefined;
};

export type ApplicationConstructionParams = {
  position: ApplicationPosition;
};

export type ApplicationRenderOptions = {
  /**
   * Force application rendering. If true, an application which does not
   * yet exist in the DOM is added. If false, only applications which
   * already exist are rendered.
   */
  force?: boolean | undefined;

  /** A specific position at which to render the Application */
  position?: ApplicationPosition | undefined;

  /** Updates to the Application window frame */
  window?: ApplicationWindowRenderOptions | undefined;

  /**
   * Some Application classes, for example the HandlebarsApplication,
   * support re-rendering a subset of application parts instead of the full
   * Application HTML.
   */
  parts?: string[] | undefined;

  /**
   * Is this render the first one for the application? This property is
   * populated automatically.
   */
  isFirstRender?: boolean | undefined;
};

export type ApplicationWindowRenderOptions = {};

/**
 * For types starting with Application see `src/foundry/client-esm/applications/api/application.d.mts`
 */

export type FormNode = {};

export type FormFooterButton = {};

import {ComboboxContainer} from "./element.ts"
import {
  ComboboxContainerChangedEvent,
  type ComboboxContainerChangedEventListener,
  ComboboxContainerChangeEvent,
  type ComboboxContainerChangeEventListener,
  type GlobalComboboxContainerChangedHandler,
  type GlobalComboboxContainerChangeHandler,
} from "./events.ts"

declare global {
  interface Window {
    ComboboxContainer: typeof ComboboxContainer
    ComboboxContainerChangeEvent: typeof ComboboxContainerChangeEvent
    ComboboxContainerChangedEvent: typeof ComboboxContainerChangedEvent
  }

  interface HTMLElementTagNameMap {
    "combobox-container": ComboboxContainer
  }

  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "combobox-container": HTMLAttributes<ComboboxContainer>
      }
    }
  }

  interface GlobalEventHandlersEventMap {
    comboboxcontainerchange: ComboboxContainerChangeEventListener
    comboboxcontainerchanged: ComboboxContainerChangedEventListener
  }

  interface GlobalEventHandlers {
    oncomboboxcontainerchange: GlobalComboboxContainerChangeHandler | null
    oncomboboxcontainerchanged: GlobalComboboxContainerChangedHandler | null
  }
}

export function define(): void {
  if (window.customElements.get(ComboboxContainer.tagName)) {
    return
  }
  window.ComboboxContainer = ComboboxContainer
  window.customElements.define(ComboboxContainer.tagName, ComboboxContainer)
  window.ComboboxContainerChangeEvent = ComboboxContainerChangeEvent
  window.ComboboxContainerChangedEvent = ComboboxContainerChangedEvent
}
